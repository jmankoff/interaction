---
layout: assignment
title: Menus
code: A1

published: true
assigned: Thursday, April 25, 2019
due: Code on 11:59 PM Wednesday, May 1, 2019; Writeup and data on 11:59 PM Wednesday, May 6, 2019
revised: 10:28 AM Tuesday, April 23, 2019

objective: Build an end-to-end application. Interact with users.

android_goals:
  - Further practice using callbacks; onDraw
hci_goals:
  - Further practice with state machines and event handling
  - Record user study data
  - Produce plausible experiment results (within expected ranges)
  - Understand pie menus

---

* TOC
{:toc}

# Key Files to look at 

* ExperimentSetup.java
  * Class that sets up all the conditions for the experiment and creates an iterator with all the trials.
* ExperimentTrial.java
  * Class that stores all the data for a single trial.
* MainActivity.java
  * Activity that displays the option to navigate between sessions. Also adds the corresponding menu view to the view hierarchy.
* MenuExperimentView 
  * View that can displays and handle input for a menu. This is the parent class of
    NormalMenuView and PieMenuView 
* PieMenuView 
  * View that implements pie menus
* NormalMenuView
  * View that implements normal linear menus

![:img Screenshot of a pie menu](menus-img/pie.png){:width="250px",:float="right"}


# Part 0: Overview
Read this spec and take a look at the classes listed above.

You will be implementing a class that can display a pie menu, and a
class that can display a linear menu for use in an experiment
comparing which is faster for the user to select menu items from. By
*menu items* we mean the individual items in a menu, such as the
number 1 in the sample video. 

This experiment will have 6 conditions, each of which will include
`NUM_REPEATS*ITEM_MAX` trials, as follows.

|  | Menus | | 
|--|--|--|
|**Tasks** | `PIE` | `NORMAL`|
| `LINEAR`    | NUM_REPEATS*ITEM_MAX | NUM_REPEATS*ITEM_MAX| 
| `RELATIVE`  | NUM_REPEATS*ITEM_MAX | NUM_REPEATS*ITEM_MAX| 
| `UNCLASS`  | NUM_REPEATS*ITEM_MAX | NUM_REPEATS*ITEM_MAX| 

<br>
The two *menu types* (specified in an `Enum` in the code) are `PIE`
(round) and `NORMAL` (linear).

The three *task types* (also an `Enum`) are `LINEAR` (menu items such as
1,2,3,4,5,6,7,8) ; `RELATIVE` (menu items such as
Up/UpRight/Right/Down/etc...); and `UNCLASS` (menu items such as
Print/Cast/Bookmark/etc);

The *trials* are specific combinations of menu item, task type,
and menu type. So for example, one trial might involve showing the
user a pie menu, with the numbers 1..8 in it, and asking them to
select number 3. The participant can select any option, no matter what
as soon as they complete a selection, the result is recorded and the
next trial begins. 

For any given *session* (one user's worth of trials), each combination
of menu type, task type, and menu item, will be repeated `NUM_REPEATS`
times (`NUM_REPEATS` is specified in `ExperimentSession.java`). In
addition, for any specific combination of menu type and task type, at
most `ITEM_MAX` items (a total of `ITEM_MAX*NUM_REPEATS` trials) will
be shown to the user. If you set both of these to 1 for testing, you
can test all your conditions very quickly. Make sure to set them to
the required values for user testing: `NUM_REPEATS` must be at least
3, and `ITEM_MAX` must be at least 4.

In the second half (week 2) of this project, you will recruit 4
friends or students and have them complete one session each. Thus, you
will have a total of 4 (participant sessions) * 6 (conditions) *
`ITEM_MAX*NUM_REPEATS`, or 288, data points when you have completed
this assignment. You will analyze the data from this experiment in
part 2 of this project. 


We have implemented in `ExperimentSetup` the code for you to generate
all of the trials from a setup file called `menuContents.csv` found in
the assets directory. Look at ExperimentSetup.java, please understand
`createExperimentSetupList` method which sets up conditions for
whole experiment.  `ExperimentSetup` is an iterator, so to run the
trials for a give session you just use `session.next` as long as
`session.getNext` is true.

# Part 1: Implement MenuExperimentView and MainActivity
**Tasks**
- Implement `onDraw` in `MenuExperimentView`
- Implement `onTouchEvent` `MenuExperimentView`
- Implement `showMenuForTrial` in `MainActivity`
- Implement `onTrialCompleted` in `MainActivity`

For this part, you will be working in `MenuExperimentView.java`. This
class includes several fields that you will need to implement. You
will implement the state machine logic in `onTouchEvent` (similar to
what you've done in ColorPicker) and the logic to draw the menu in
`onDraw`. You will also implement the code necessary to add and remove
menu views from the application when a trial ends and
`onOptionSelected()` is called.

One tricky thing about context menus -- they can appear anywhere in
your user interface. To support this, we set things up so that the
menu view is going to `MATCH_PARENT` width and height. However, the
menu itself should show up right where the user presses down. 

**Setup**

(TBD: WE MAY UPDATE THIS) Before you can record data, you will need to
navigate to settings/apps/PieMenu/permissions/storage and enable
storage. You also need to install the Android Debug Bridge (adb) a
command-line tool that lets you communicate with a device. Follow the
instructions [here](https://developer.android.com/studio/releases/platform-tools.html)
and install the adb for your computer.


**Handling Touch Events**

You will handle touch input by implementing the `onTouchEvent`
method. This is the event handler that is invoked when a touch occurs
in this view. Note that `onTouchEvent` is implemented in the parent
class, `MenuExperimentView` and *is not changed* in the child
classes. The only thing they have to modify for `onTouchEvent` to
work properly is `essentialGeometry`, since they have the exact same
state machine. 

You need to keep track of two main states `START` and
`SELECTING`. When in the `SELECTING` state you need to distinguish
between the event type to determine if the user has selected an option
or if they are still in the middle of making a choice. 

Relevant mouse events include `ACTION_DOWN`, `ACTION_MOVE`, and
`ACTION_UP`; think about how these mouse events relate to the change
and how the UI should respond to these events. 

<div class="mermaid">
graph LR
S((.)) --> A((Start))
A -- "Press?drawMenu;startTrial;startPoint=p" --> I((Inside))
I -- "Release:endTrial;reset();onTrialCompleted(trial)" --> E[End]
I -- "Drag:currentIndex=menuItem" --> I

classDef finish outline-style:double,fill:#d1e0e0,stroke:#333,stroke-width:2px;
classDef normal fill:#e6f3ff,stroke:#333,stroke-width:2px;
classDef start fill:#d1e0e0,stroke:#333,stroke-width:4px;
classDef invisible fill:#FFFFFF,stroke:#FFFFFF,color:#FFFFFF

class S invisible
class A start
class E finish
class I normal
</div>

**Implement onDraw**

For `onDraw()`, your will do some setup that will allow your
subclasses to draw properly. First, you will need to check if you are
in the proper state to draw (only draw when in the `SELECTING`
state).

Next, you really want to draw from the (0,0) location of the menu,
rather than the (0,0) of the parent. But remember that your width and
height are set using `MATCH_PARENT`. To fix this, we need to change
the coordinate system of the canvas so that (0,0) is at the
`startPoint` for this interaction.

Finally, since this is an abstract class, we need to call the *real*
drawing method, which our children will implement. This is called
`drawMenu()` and should be overridden by `PieMenuView` and
`NormalMenuView`.  Therefore, your `onDraw` implementation in
`MenuExperimentView.java` will be pretty short.  

**MainActivity**

In MainActivity you will implement the method
`showMenuForTrial(ExperimentTrial trial)`. This method will create a
new `MenuExperimentView` of the type specified in the trial, set its
layout parameters so that it fills its parent and is visible on the
screen, and register a callback with it that knows what to do when a
trial is completed.

MainActivity also needs to implement the code to respond to
`onTrialCompleted`. In particular, this code should always remove the
current menu item being shown. Then it should check if the session is
over (remember the session is an iterator), and if not call
`showMenuForTrial` with the next trial. If the session is over, it
should update text of `InstructionTextView` to say that the session is
completed. 

**Related APIS**

* [View](https://developer.android.com/reference/android/view/View#drawing): See documentation on Drawing
* [MouseEvent Constants](https://developer.android.com/reference/android/view/MotionEvent#constants_2)

# Part 2: Implement Pie and Normal Menus

**Tasks**

- `PieMenuView`: Implement `essentialGeometry` and `drawMenu`
- `NormalMenuView`: Implement `essentialGeometry` and `drawMenu`

Both `PieMenuView` and `NormalMenuView` extend `MenuExperimentView`. You
will implement `essentialGeometry` and determine what menu item the
touch event maps to. You'll have to come up with the math logic to map
from touch event to an item index. 

You will also implement `drawMenu` which at a minimum draws the menus as shown in
the screenshots. If you want to do something different, you may, as
long as the size and position of each menu item does not change. For
example, you can  override the paint properties defined in
`MenuExperimentView`, position the text differently, or draw more
decorations on the menus. 
 
**Related APIs**
* [Canvas](https://developer.android.com/reference/android/graphics/Canvas): See documentation on drawCircle and drawText.
* [Path](https://developer.android.com/reference/android/graphics/Path): For adding text along a curve

# Part 3: Conduct and Write Up User Study

**Tasks**
- Conduct user study 
 - Run a trial on yourself
 - Create a final consent form from this sample (TBD)
 - Recruit 4 participants
 - Have them sign your consent form
 - Have them complete a session with `MAX_ITEMS` set to at least 4 and
   `NUM_REPEATS` set to 3. 
 - Download the recorded data 
- Analyze recorded data 
- Write a report

**Conduct User Study**

To finalize the consent form, you will need to copy over the text from
our sample consent and modify it in all of the places marked as
such. You should print out two copies of the consent form for each
participant -- one for them and one for you.

You will need to try out your own program as a participant to fill in
the consent form (since you'll need to know how long it takes. This is
also a good time to double check that your data is not lost by
downloading it. 

*Downloading your data* (TBD) On mac OS X, 
`adb pull /storage/emulated/0/CSE340_PieMenu/TestResult.csv` will
download your data to the current directory you are in (or you can
specify a location). We are also looking into other approaches. You
will need to look at this data fill to fill in the consent form, you
should also check that it works properly. 

*Create a clean CSV* You should use the
hamburger menu in the app you just implemented to `Clear Result CSV`
before starting your study so that your data does not contaminate your results.

*Recruit participants and have them sign your consent form* You can ask friends or classmates for help. Do
not *coerce* anyone into participating in your study. Make sure they
know they have a choice, and have read and signed the consent
form. You will be required to *turn in signed consent forms* with your
report.

*Collect data* Have each participant complete a session. Once *all*
participants are done, you and download your final data file. It
should have 288*4 data points in it. You can use the emulator or your
phone for this, and any mouse you want. You will need to turn in your
final data file with your report. 

**Analyze Data**

To analyze your data, you should paste it into a spreadsheet we have
created for you. This spreadsheet will let you see if there is a
significant difference between various conditions. It will also
include summary information that you can use to visualize your data if
you want for your report.

*** Write a Report**

You will need to write up a brief report about your study. We will
provide a template (TBD). 


# Submission Instructions

You will turn in the following files <a href="javascript:alert('Turn-in link pending assignment release');">here</a>:

Part 1: 
- MainActivity.java
- MenuExperimentView.java
- NormalMenuView.java
- PieMenuView.java

Part 2: 
- TestResult.csv
- Signed consent forms (images/scans)
- Report.pdf

## Grading (10 pts)

- First Half (4 points)
  - State machine implementation works: 1
  - Correctly implements essentialGeometry in NormalMenu and PieMenu: 1
  - Correctly implements drawMenu in NormalMenu and PieMenu: 1
  - Correctly handles trials and callbacks in MainActivity: 1
- Second Half (5 points)
  - Have reasonable CSV output and charts: 1pt
  - Have signed consent forms: 1pt
  - Report:
    - Description of study process: 1pt
    - Demonstrate understanding of results: 1pt
    - Draw appropriate conclusions about linear vs. pie menu: 1pt
- Turn-in and compiles: 1pt
