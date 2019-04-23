---
layout: assignment
title: Color Picker
code: EX3

published: true
assigned: Thursday, April 18, 2019
due: 11:59 PM Wednesday, April 24, 2019
revised: 2:15 PM Tuesday, April 23, 2019

objective: Create an RGB color picker which lets you choose a color on a rainbow circle (color wheel).

android_goals:
  - Save app state in Bundle
  - Understand Android event handling APIs
  - Handle touch input properly
  - Understand app lifecycle
hci_goals:
  - Create non-rectangle interactor
  - Propositional Production System
  - Event handlers and event bubbling
  - Callbacks
---

{:toc}

# Goal

Create an RGB color picker which lets you choose a color on a rainbow circle (color wheel).

Your primary goal in this assignment is to create
`ColorPickerView.java`. This is your _custom interactor_ and it should
be implemented so it can be used by any application. It inherits from
`ColorPicker.java` and is where you implement the custom interactor.

Tasks for `ColorPickerView`

- Handle different input events in `onTouchEvent`
- Initialize properties during `onLayout` (register the first measure
  before initializing all views)
- Draw the colorpicker in `onDraw`
- Save view state locally

You will also edit `MainActivity.java`. This is your
_application_ and it will _use_ your color picker. `MainActivity`
inherits from `PickerActivity.java` and is where you implement the application
code that uses the custom interactor.

Tasks for `MainActivity`

- Register callbacks
- Save application state in bundle
- Restore activity state from bundle

# Getting Started

Over the course of this assignment you will be editing `ColorPickerView.java` and `MainActivity.java`, it is important to understand the inheritance chains of these two files, as you will be using **lots** of variables and functions defined in parent classes. Read the classes these classes extend!

It is important to understand the inheritance chains of these two files, as you will be using **lots** of variables and functions defined in parent classes. Read the parent classes!

Potential Order for Tackling this Assignment

- implement the state machine and touch events, log the color
- implement the callback to application, and application UI updates
- implement the feedback for custom interactor: thumb and center circle
- implement the state bundle saving and restoring functionality

It may be wortwhile to read
[Android/Custom-Drawing](https://developer.android.com/training/custom-views/custom-drawing)
and
[Android/UI-Events](https://developer.android.com/guide/topics/ui/ui-events)
to understand parts of the assignment that seem tricky.

# Your custom view: ColorPickerView.java

Your colorpicker view will require you to support drawing (of feedback on the screen) and input handling.

## Drawing

Drawing is implemented in `onDraw()`. You will need to draw the thumb and the feedback in the center of the circle. This can be done using things you learned in Doodle, since `ColorPickerView` inherits from `ImageView`. We provide a color dial in drawable, it should be drawn be the stub itself from `ColorPicker`.

The term `wheel` used throughout the spec refers to the dial and inner circle, it is the larger circle that contains all interface you will be drawing.

The height of the dial is the height of `ColorPickerView`, this is not true for the width.

![Screenshot of color picker, original](colorpicker-img/1.png){:width="150px"}
![Screenshot of color picker, after moving to a new color](colorpicker-img/2.png){:width="150px"}

### Key Variables

To do some parts of your drawing you will need to know the size of the
view you are drawing in. Calculate `mRadius`, `mCenterX`, and
`mCenterY` of the color picker inside `onLayout`

_Related APIs_:
[View#onLayout](<https://developer.android.com/reference/android/view/View.html#onLayout(boolean,%20int,%20int,%20int,%20int)>)

### Thumb

In the screenshots there is a visible thumb that marks the selected color on the dial. The thumb is drawn in `onDraw()` and should move around as a user interacts with the color picker, not just jumping to its final location when they release the finger/mouse.

The thumb should be constrained to moving along a circular track that places it within the dial. It should move along that track even when responding to valid events within the wheel but not within the dial.

Visually, the thumb's radius is `0.085` times the outer-radius of the dial (center of circle to outside edge of color). This value is provided to you as a constant. Intuitively, positioning the thumb is similar to `ColorPicker#getTouchAngle(..)` but in reverse, additionally constraining the thumb to stay within the color band.

To calculate the alpha (which is an `int` [0, 255]) multiply the floats provided in the PPS by 255, then cast to `int`.

### Center Circle

Inside the multi-color dial should be a circle that's color is the same as the live selected color. It should be centered on the center of the wheel, and use up all available space up to the dial. The color of the inner circle, which represents the color picker’s model, should update while you drag the thumb. In contrast, the colored box and text, which represent the application’s model, should update only when the mouse is released.

## Touch Input Events

<div class="mermaid">
graph LR
S((.)) --> A((Start))
A -- "Press?insideWheel:updateColor();updateThumb();setAlpha(.5f)" --> I((Inside))
I -- "Release:setAlpha(1.00f),onColorSelected()" --> E[End]
I -- "Drag?insideWheel:updateColor();updateThumb()" --> I
I -- "Drag?outsideWheel:doNothing()" --> I

classDef finish outline-style:double,fill:#d1e0e0,stroke:#333,stroke-width:2px;
classDef normal fill:#e6f3ff,stroke:#333,stroke-width:2px;
classDef start fill:#d1e0e0,stroke:#333,stroke-width:4px;
classDef invisible fill:#FFFFFF,stroke:#FFFFFF,color:#FFFFFF

class S invisible
class A start
class E finish
class I normal

</div>

We'll handle touch input by implementing `onTouchEvent`. This is the event handler that will be called when a touch occurs in this view. In addition, when feedback is needed, you will have to ensure that the view is _redrawn_.

_Related APIs_
[View](https://developer.android.com/reference/android/view/View) (see documentation on Drawing)

### Transitioning out of the Start State

As shown in the state diagram, when in the start state (before interaction begins), we ignore any touches that are outside of the wheel. These events should be _rejected_ by your ColorPickerView so that other interactors can use them if they want. Interaction only begins when the user presses on or inside the color wheel. At this point, color is updated, the thumb transparency is changed (to `0.5f`) and its position is updated.

<!-- <span style="color:red"> XXX TODO: Check edge case: e.g., drag and move outside wheel, the handle stays in 50% alpha (should be 100% alpha). I added examples in test to check alpha of handle to check state.</span> -->

### Transitions within the Inside State

Once interaction begins, we should update the ColorPickerView's local model only when the user is dragging their finger inside the wheel. Similarly, we should show feedback only if the finger is in the wheel. In all of these cases, we remain in the _Inside_ state.

- When a finger drags on screen inside the wheel, the thumb will follow the angle the finger is at, and the color of the center circle will update to reflect the change in the local model for the ColorPicker
- When a finger drags on screen outside the wheel, the thumb will stay at the most recent angle within the wheel.

Use the `x` and `y` coordinates of the touch event to calculate the angle (in radians) of the touch on the wheel with `ColorPicker#getTouchAngle(float, float)`. It is difficult to do this mapping in tranditional RGB color space. The HSV color space discussed during class fits this task well. You can read more about the HSV color space [here](https://en.wikipedia.org/wiki/HSL_and_HSV). Since we're just adjusting color, we only want to modify hue while leaving saturation and value constant. You may see detailed instruction in code comments under `ColorPicker#getColorFromAngle`, which we provide you. Use this implementation to guide your work on `ColorPickerView#getAngleFromColor`, which does the opposite operation.

### Transition to the end state.

When the user finishes interacting, you'll need to update the UI to reflect the new selected color, by calling `onColorSelected` on the possible `ColorListener` with our newly selected color. In addition, the thumb transparency should be reset to `1f`.

_Related APIs_:
[MotionEvent](https://developer.android.com/reference/android/view/MotionEvent) / [Color](https://developer.android.com/reference/android/graphics/Color) / [ColorUtils](https://developer.android.com/reference/android/support/v4/graphics/ColorUtils) / [View#onTouchEvent](<https://developer.android.com/reference/android/view/View.html#onTouchEvent(android.view.MotionEvent)>)

# Your Application: MainActivity.java

Your application is making use of your color picker. The application needs a way to find out from its fancy new view (`ColorPickerView`) when the color changes. In our case, it will use this information to display the newly chosen color and update the application model, though another application might do something different.

## Setting up the Application

The application layer should set the default color of `colorPicker` using `MainActivity#setStartingColor`, we provide this default as `ColorPicker.DEFAULT_VALUE` (it's red). It is also neccessary that `MainActivity#setStartingColor` triggers `onColorSelected`.

## Managing Application State with Listeners

To find out about color changes, the application needs to register a
callback by calling `colorPicker.setColorListener()`. This callback
should update the application's `colorView` and `colorTextView`
whenever `onColorSelected` is called to demonstrate that the
application correctly got a color from `colorPickerView`. This means
you are **prohibited** from leveraging publicly accessibly
field/function on the color picker to observethe ColorPickerView
state. For more on custom listeners, see [CodePath's guide to creating
custom listeners](https://guides.codepath.com/android/Creating-Custom-Listeners).

## Save Application Model using Bundle

Please save application model (i.e. the current color as known by the application) in the `onSaveInstanceState` bundle. When user goes off to some other app, Android kills our Activity. We need the bundle to get the saved state back.

We want to manage the state at the application level (`MainActivity.java`) versus at the interactor level, this means you will need to find a way to set the state of the color picker from the application when the bundle is loaded.

Notice from the documentation that `onRestoreInstanceState` is called after `onCreate` if a bundle exists. However, to make grading easier, we want you to handle the bundle in `ColorPickerActivity#setStartingColor` so you **should not implement `onRestoreInstanceState`.**

<span style="color:red">We will kill the activity to test if the state
is saved. Use adb to test killing it or in developer options set Apps
-> Don't keep activity.</span>

The best way to test this functionality is to enable the setting referenced above, and then press home, and return to the app. The selected color should still be the same. Quitting the app from multitasking will destroy the bundle.

_Related APIs_:
[Saving and Restoring State](https://developer.android.com/guide/components/activities/activity-lifecycle.html#saras)
| [Android Developer Options](https://developer.android.com/studio/debug/dev-options)

# Misc.

This assignment does require doing some math, you are welcome to use the Java Math functions.
_Related APIs_:
[Java Math.\*](https://docs.oracle.com/javase/7/docs/api/java/lang/Math.html)

# Turn-in

## Submission Instructions

You will turn in the following files <a href="javascript:alert('Turn-in link pending assignment release');">here</a>:

```
 ─ ColorPickerView.java
 - MainActivity.java
```

## Grading (10pts)

- Event Handling (onTouchEvent, etc)
  - Interaction functionality is correct: 1pts
  - Implement PPS properly: 1pt
  - Reject press events that occur outside the wheel: 1pt
- Feedback (onDraw)
  - Place thumb in correct location: 1pt
  - Correctly trigger redraw: 1pt
- Model Management
  - Correctly update ColorView model 1pt
  - Correctly update application model 1pt
- Application Resiliency
  - Save Application State using bundler: 1pt
- Communicate to application properly
  - Implement custom handler for onColorSelected callback 1 pt
- Code Organization and Style: 1 pt

## IDE Errors/Warnings you can ignore

<span style="color:red;">**NOTE:**</span> An error/warning that can be ignored for this assignment **cannot** be ignored for every assignment. Check IDE notices against specs on per assignment basis.

- `onTouchEvent`
  - Custom view ColorPickerViewSolution overrides onTouchEvent but not performClick
- Anonymous Class Replaced with Lambda
  - "anonymous new `ColorPicker.ColorListener()` can be replaced with lambda"
