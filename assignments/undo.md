---
layout: assignment
title: Undo
code: A2

published: true
assigned: Thursday, May 16, 2019
due: 11:59 PM Tuesday, May 21, 2019; Heuristic evaluation in lab on May 23, 2019
revised: 2:00 PM, Monday, May 20, 2019

objective: Understand Undo Abstractions, practice Heuristic Evaluation

android_goals:
  - Be able to understand and modify an existing user interface
  - Learn about floating action buttons
  - Implement core data structure for Undo
hci_goals:
  - Modify and existing app in a consistent fashion
  - Make your modifications accessible
  - Make your modifications usable
  - Use heuristic evaluation to assess an app
---

- TOC
{:toc}

Tasks:

- Handle undo/redo operations (required)
- Add a new thickness (0) to your app (required)
- Make sure the button you add is accessible (required)
- Improve your app by adding a feature (not thickness, required)
- Make sure your change is accessible (required)
- Try to identify at least one usability problem and address it
  (optional)

# Explanation of Codebase

This is one of the more complex programs we are giving you in terms of
code, it is a fairly functional application.

The initial interactor hierarchy at instantiation looks like this
(shown at the side is a legend for the visibility status of different
interactors). Hidden means on screen and drawn but hidden behind
something else.

The FAB subtrees are the
menus at the top of the screen (for undo and redo) and bottom (for
color and thickness), made up of one or more floating
action buttons. The `DrawingView` is the place where drawing takes
place. Each new stroke is saved as a separate, new `StrokeView` added
to the `DrawingView`.

<div class="mermaid">
graph TD
M[MainActivity] --> D[DrawingView]
M --> FUndo[FAB:Undo]
M --> FRedo[FAB:Redo]
M --> FColor[FAB:Color]
M --> FThick[FAB:Thickness]
FColor --> Red[Red]
FColor --> Green[Green]
FColor --> Blue[Blue]
FThick --> Thin[Thin]
FThick --> Med[Med]
FThick --> Thick[Thick]

Vis[Visible] --> In[Invisible]
In --> Hid[Hidden]

classDef normal fill:#e6f3ff,stroke:#333,stroke-width:2px;
classDef start fill:#d1e0e0,stroke:#333,stroke-width:4px;

class M,D,FColor,FThick,Vis start
class Red,Green,Blue,Thin,Med,Thick,Hid normal

</div>

When the user draws on screen (by clicking and dragging inside the
`DrawingView`, this adds a new `StrokeView` to the interface. Notice
that the `Undo` button is now visible instead of invisible because there
is an action to undo.

<div class="mermaid">
graph TD
M[MainActivity] --> D[DrawingView]
D --> Stroke1[StrokeView]
M --> FUndo[FAB:Undo]
M --> FRedo[FAB:Redo]
M --> FColor[FAB:Color]
M --> FThick[FAB:Thickness]
FColor --> Red[Red]
FColor --> Green[Green]
FColor --> Blue[Blue]
FThick --> Thin[Thin]
FThick --> Med[Med]
FThick --> Thick[Thick]
Vis[Visible] --> In[Invisible]
In --> Hid[Hidden]

classDef normal fill:#e6f3ff,stroke:#333,stroke-width:2px;
classDef start fill:#d1e0e0,stroke:#333,stroke-width:4px;

class M,D,Stroke1,FUndo,FColor,FThick,Vis start
class Red,Green,Blue,Thin,Med,Thick,Hid normal

</div>

The sequence in the interface:

![:img Empty drawing program window, 100%](undo-img/blank.png)
![:img Drawing program window with one red stroke and undo button visible, 100%](undo-img/1stroke.png)

You can play around with the interface to change color and
thickness. Each new stroke you add adds another `StrokeView` to the interface.

# Codebase Structure

This is a complete codebase for a drawing program. It is designed to
be as modular as possible and includes support for _Command Objects_ which
encapsulate changes to the application model.

## Actions

Actions are Command Objects, which encapsulate changes to the
application model. An `Action` has a single (abstract) method, `doAction(view)` which,
when called, applies the action to the view.

`ReversibleAction` extends `Action` to add `undoAction(view)` which,
when called, reverses the action.

As with events, Actions are part of an inheritance
hierarchy. `ReversibleAction` has three subclasses --
`ChangeThicknessAction`, `ChangeColorAction` and `StrokeAction.`
All of them modify properties of the `DrawingView`
class (specifically the stroke width and current color of its `Paint`
object, and the its child views (painted strokes are encapsulated in a
`StrokeView` that is added to the `DrawingView`.

### Requirement 0: Implement `ChangeThicknessAction`

In order to familiarize yourself with Actions and reversible logic, implement
`ChangeThicknessAction`. This will be very similar to `ChangeColorAction` and
should be very straight forward once you've read the action code. Because it's
so simple, this requirement is part of the code organization and style point. See
[turn-in](#turn-in) for more details.

## History (Requirement 1: Handle undo/redo)

`Actions` are the raw material that is used in the history. An
`AbstractHistory` simply allows an action to be added and supports `undo()`
and `redo()`. We subclass this with a stack-based history class called
`StackHistory` that you will implement some methods for, to support
undo and redo.

A `StackHistory` has a `capacity` (a max number of actions that it can
store), a `undoStack` (the history) and a `redoStack` (actions that
have been undone and can be re-applied). It also supports specific capabilities you must implement (see comments in the code
for specifically what to do):

- `addAction()` adds an action to the history stack
- `undo()` undo the top action in the history stack
- `redo()` redo the top action in the redo stack.
- `clear()` reset everything

## Undo/Redo behavior

Here is a scenario where the user draws a stroke in the default
color/thickness (1), changes the color (2), changes the thickness (3), and draws
another stroke (4) in the original thickness and color, with various
undos and redos mixed in.

| Action               | Undo Stack | Redo Stack | Interface state |
| -------------------- | ---------- | ---------- | --------------- |
| drawstroke (1)       | 1          |            | 1               |
| change color (2)     | 1,2        |            | 1,2             |
| undo                 | 1          | 2          | 1               |
| redo                 | 1, 2       |            | 1, 2            |
| change thickness (3) | 1, 2, 3    |            | 1, 2, 3         |
| undo                 | 1, 2       | 3          | 1, 2            |
| undo                 | 1          | 3, 2       | 1               |
| drawstroke (4)       | 1, 4       | CLEARED    | 1, 4            |
| undo                 | 1          | 4          | 1               |

## Application Code (`/app`)

We've mentioned a `DrawingView` (which is the main canvas for the
drawing application) and `StrokeView` (which encapsulates a specific
stroke for the drawing application).

- `DrawingActivity` is an abstract class for an app that supports
  drawing without support for Undo. If you changed the manifest to use
  it (you would need to make it not abstract first), you would see
  blank canvas that you can draw on with no thickness or color options.
- `ReversibleDrawingActivity` extends `DrawingActivity` and adds
  support for undo to it, including both the undo/redo buttons and the
  history. You can try changing the manifest to use this as well (not
  abstract).
- `MainActivity` inherits from
  `ReversableDrawingActivity`. It adds support for thickness and color
  to the undo/redo support in `ReversibleDrawingActivity`. It also
  adds menus to show them. You can make a drawing application without
  support for history by changing `MainActivity` to inherit from
  `DrawingActivity` instead.
- `DrawingView` is the canvas on which drawing takes place. Drawings
  are made up of `StrokeView` classes which are added to the
  `DrawingView`. This class also implements a PPS (shown below) which
  responds to `onTouchEvent()` by creating `StrokeViews`.
- `StrokeView` is a single stroke. A stroke has a `path` and `paint`
  object which define it.

<div class="mermaid">
graph LR
S((.)) --> A((Start))
A -- "Press:onDrawStart()" --> I((Drawing))
I -- "Release:onDrawEnd()" --> E[End]
I -- "Cancel:onDrawCancel()" --> E[End]
I -- "Move:onDrawMove()" --> I

classDef finish outline-style:double,fill:#d1e0e0,stroke:#333,stroke-width:2px;
classDef normal fill:#e6f3ff,stroke:#333,stroke-width:2px;
classDef start fill:#d1e0e0,stroke:#333,stroke-width:4px;
classDef invisible fill:#FFFFFF,stroke:#FFFFFF,color:#FFFFFF

class S invisible
class A start
class E finish
class I normal

</div>

# Requirement 2: Adding a thickness 0 FAB to the thickness menu

The FABs in this assignment refer to [Floating Action
Buttons](https://developer.android.com/reference/com/google/android/material/floatingactionbutton/FloatingActionButton.html).

There are two main things you will need to do to add one.

First, you right place in `thickness_menu.xml` to
modify. For example, this is the XML in that file for the thickest FAB
Action Button:

```XML
<android.support.design.widget.FloatingActionButton
        android:id="@+id/fab_thickness_30"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom|center"
        android:layout_marginBottom="@dimen/fab_label_margin"
        android:alpha="0"
        android:clickable="false"
        android:contentDescription="@string/thick_desc"
        app:fabSize="mini"
        app:srcCompat="@drawable/ic_thickness_30" />
```

Next, you will need to update `onThicknessSelected` to respond when
your FAB is pressed. It should change the stroke width to 0. Once you
do that, everything should work!

# Requirement 3: Improving the application

You can add any feature you want to the app (except another option in
the thickness menu since you've already done that). When you do, make sure
your change is accessible. We have some suggestions that will help guide you.
Whatever you add, please describe your addition in the provided README.

- The simplest possible thing you could do is add a FAB to one of the existing menus. This would let you for example add a new color option.
- A more complex choice would be to replace the color option with something that calls your color picker. If you do this, try to make sure it is really round, meaning that if you click in a corner of its bounding box outside the color wheel, the right thing happens (a stroke starts in the underlying drawing view)
- You could do something even more complex like allow the user to change the location of a stroke by dragging it. This is quite hard because you have to modify the command object and undo infrastructure, as well as adding new event handling capabilities to StrokeView.

# Optional addition: Improving usability

- Try to identify at least one usability problem and address it
  (optional). As with adding a feature, there are several options
  here. Some examples of things _I_ think are usability issues. You
  may not agree, if you choose to do this, you should focus on
  something _you_ think is a usability issue.
- Whatever problems you address, please briefly describe the problems and solutions in the provided README.

- As a color is selected and after the color is selected, the color FAB
  should update its background to that color.
- When a thickness is picked, the thickness FAB should update its icon
  to indicate the thickness selected.
- If the user begins drawing with the color or thickness FAB open (sub-icons present) the FAB immediately collapses
- Some might find the menu items small and hard to select
- No saving of state between invocations of the application. Could use
  bundle to do this.

# Peer grading: Heuristic evaluation

This will take place in lab on Thursday May 23rd, 2019, and be due over the next 24
hours as with the previous peer grading exercise

The Task:

- Step 1: draw something
- Step 2: undo
- Step 3: use menu to change color
- Step 4: try to redo
- Step 4: draw something
- Step 5: use new feature
- Step 6: undo and redo
- Step 7: look for the new feature

You will take notes on paper about issues you run into. When you have
completed all the tasks, you will fill out a survey with the 3 most
severe issues. This will include questions about:

- Who are you/ who are you evaluating
- Which task step (above)
- Which heuristics are violated (primary and secondary)
- What severity rating would you give it
- Take a picture if you can
- Describe what happened

You will also tell us if they customized a command and what it
was. You will submit 3 things for each of 3 handins.

# Turn-in

## Submission Instructions

You will turn in the following files via GitGrade. It will accept:

- StackHistory
- MainActivity
- StrokeView and StrokeAction
- Any additional classes you create in `cse340.undo` except for `cse340.undo.history`
- `layout/*_menu.xml`
- `drawable/*`
- `values/{colors,dimens,strings}.xml`
- `README.md`

Remember, edit the README to add a description of the new features/usability changes you made.

**Follow these instructions to submit part 2 of your assignment**

- Make sure the code you want to submit is pushed to GitLab (origin/master)
  - If you just commit locally and don't push, GitGrade won't see those changes
- (Optional) Go to your repo on GitLab to double check that the latest commit hash matches your latest local commit hash
- Go to the turn in link: [https://gitgrade.cs.washington.edu/student/assignment/59/turnin](https://gitgrade.cs.washington.edu/student/assignment/59/turnin)
- Check the box and click "Turn in"

## Grading (10pts)

- Part 1: Implementation
  - Add a fourth thickness option: 1pt
  - New feature & thickness is accessible: 1pt
  - Description of new feature explains accessibility solution/challenges: 1pt
  - Undo and redo works in general: 2pt
  - Edge cases in undo/redo works: 1pt
- Part 2: Peer grading
  - New feature Works: 1 pt
  - Complete heuristic evaluation for other students: 2pt
- Requirement 0, Code Organization, and Style: 1 pt
- Extra credit: 1 pt if your new feature is complex/ you make a usability improvement
  (e.g. adding colorpicker, drawing rectangles, adding images to
  canvas). Ask us if you have questions
