---
layout: default
---

* TOC
{:toc}

# Menu Experiment Assignment

**Objective**: Build an end-to-end application. Interact with users.

**HCI Goals**:
- Build an application based on specs
- Record user study data
- Produce plausible experiment results (within expected ranges)
- Understand marking menus

**Android Goals**:
- Implement menus
- Store data in file system

**Assigned Date**: ???, 2019

**Due Date**: ???, 2019

# Stub Code
* ExperimentSetup.java
  * Class that sets up all the conditions for the experiment and creates an iterator with all the trials.
* ExperimentTrial.java
  * Class that stores all the data for a single trial.
* MainActivity.java
  * `TODO: Describe what's happening here`

# Part 0
Please read [An Empirical Comparison of Pie vs. Linear Menus](https://medium.com/@donhopkins/an-empirical-comparison-of-pie-vs-linear-menus-466c6fdbba4b) to better understand the purpose and procedures in this user study.

In ExmerimentSetup.java, please understand `createExperimentSetupList()` method which sets up conditions for whole experiment.

An experiment has 6 sessions (2 menu types * 3 task types), and each session has 5 tasks.

For each session:
- Create one type of menu (linear/pie) based on current experiment condition.
- Create 5 tasks in the same type based on current experiment condition.
  - We already provide 5 sets of options for each task type (linear/pie/unclass).

For each task:
- Show 8 options in the menu based on the task type (linear/pie/unclass)
- Record the selected option

![Screenshot of a pie menu](menus-img/pie.png){:width="250px"}

For example, in the first session, the condition may be `linear task` in `pie menu`. For each of the 5 tasks in that session:
- When participant presses on the screen, a pie menu should show up as the screenshot above, with 8 task options in linear order (e.g., 1st/2nd/3rd/4th/5th/6th/7th/8th).
- The instruction text will prompt participant to select one option (e.g., 300).
- When participant moves finger on an option and release the finger, an option is selected
  - The participant may select the prompted option, or they may select another option by mistake.

Once the participant selects an option, they complete a `task`, and you should record these info in a `TaskObj` object:
- `selectedOptionIndex`: The index of selected option
- `startTime`: The timestamp when finger presses on the screen to show the menu
- `taskDurationMillSec`: The duration (in millsec) between finger presses down and leaves screen
- `startPoint`: The point on screen where finger presses down
- `endPoint`: The point on screen where finger leaves screen

In addition, for each task, you already have these info in an `ExperimentSetupObj` object:
- `sessionId`: 0-5
- `taskId`: 0-4
- `menuType`: Linear/pie
- `taskType`: Linear/pie/unclass
- `promptedOptionIndex`: The index of prompted option
- `optionList`: A list of 8 options' text

In part `TODO`, you will analyze these recorded data.
`TODO: Change part number`


# Part 1
**Tasks**

- Implement `onDraw` in MenuExperimentView.java
- Implement `onTouchEvent` MenuExperimentView.java

For this part, you will be working in `MenuExperimentView.java`. This class includes several fields that you will need to implement
`NormalMenu.java` and `PieMenu.java`. You will implement the state machine logic in `onTouchEvent` (similar to what you've done in ColorPicker) and the logic to draw the menu in `onDraw`.

Note that `MenuExperimentView.java` has a `drawMenu` function that you are required to override in `NormalMenu.java` and `PieMenu.java`. Therefore, your `onDraw` implementation in `MenuExperimentView.java` will be pretty short. 

**Handling Touch Events**

You will handle touch input by implementing the `onTouchEvent` method. This is the event handler that is invoked when a touch occurs in this view. When the UI displays visual feedback to input events, you have to ensure that the view is *redrawn*.

You need to keep track of two main states `START` and `SELECTING`. When in the `SELECTING` state you need to distinguish between the event type to determine if the user has selected an option or if they are still in the middle of making a choice.

Relevant mouse events include `ACTION_DOWN`, `ACTION_MOVE`, and `ACTION_UP`; think about how these mouse events relate to the change in State and how the UI should respond to these events.

`TODO: Include a state machine diagram?`

**Related APIS**

* [View](https://developer.android.com/reference/android/view/View#drawing): See documentation on Drawing
* [MouseEvent Constants](https://developer.android.com/reference/android/view/MotionEvent#constants_2)

# Part 2

**Tasks**

- PieMenuView.java: Implement `essentialGeometry` and `drawMenu`
- NormalMenuView.java: Implement `essentialGeometry` and `drawMenu`

Both PieMenuView and NormalMenuView extend MenuExperimentView. You will implement `essentialGeometry` and determine what menu item the touch event maps to. You'll have to come up with the math logic to map from touch event to an item index.

You will also implement `drawMenu` which draws the menus as shown in the screenshots. But note that there is some flexibility in how you draw them. You may override the paint properties defined in MenuExperimentView; for the pie menu, you may choose to position text differently.

**Related APIs**

* [Canvas](https://developer.android.com/reference/android/graphics/Canvas): See documentation on drawCircle and drawText.
* [Path](https://developer.android.com/reference/android/graphics/Path): For adding text along a curve

# Part 3

**Tasks**
- Conduct user study (Enable app to record data on emulator)
- Analyze recorded data (Download adb)

**Setup**

Before you run user studies, navigate to settings/apps/PieMenu/permissions/storage and enable storage. You also need to install the Android Debug Bridge (adb) a command-line tool that lets you communicate with a device. Follow the instructions [here](https://developer.android.com/studio/releases/platform-tools.html) and install the adb for your computer.

**Running the study**

You will recruit 3 students and conduct this user study (6 session * 5 task) with each of them.

Make sure to consent them (and turn in your consent form)

After each user study, please export the recorded data. You will be asked to turn in these recorded data. If you are using emulator, you can use this command to pull data to your computer. <span style="color:red">TODO: Update path to pull data from Android phones.</span>

```bash
adb pull /storage/emulated/0/CSE340_PieMenu/Test.csv YOUR_COMPUTER_LOCAL_PATH
```

Then, please follow Results And Discussion in [An Empirical Comparison of Pie vs. Linear Menus](https://medium.com/@donhopkins/an-empirical-comparison-of-pie-vs-linear-menus-466c6fdbba4b) to analyze your recorded data.
- Target location (x) vs. seek time (y) in seconds
- Target location (x) vs. number of errors (y)

You will be asked to upload your plots with a paragraph of explanation to canvas.
- Please export your plots as images (taking screenshot is fine)
- Please explain your result and your procedure in the study.

# Submission Instructions

Please [turn in]() your files in the following zip structure:

```bash
YOUR_STUDENT_ID.zip
├── NormalMenuView.java
├── PieMenuView.java
└── MainActivity.java
└── MenuExperimentView.java
├── Result_0.csv
└── Result_1.csv
└── Result_2.csv
└── Signed consent forms (images/scans)
└── Summary of results.pdf
```

## Grading (10pts)

- Part 1
  - State machine implementation works: __
  - Correctly records user data: __
- Part 2
  - Correctly implements essentialGeometry in NormalMenu and PieMenu
  - Correctly implements drawMenu in NormalMenu and PieMenu
  - `TODO: Have them implement register the listener in MainActivity?`
- Part 3
  - Have reasonable CSV output and charts: 1pt
  - Explanation:
    - Description of study process: 1pt
    - Demonstrate understanding of chart results: 1pt
    - Draw appropriate conclusions about linear vs. pie menu: 1pt
- Turn-in and compiles: 1pt