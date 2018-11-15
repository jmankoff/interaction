---
layout: default
---

* TOC
{:toc}

# Color Picker Exercise

**Objective**: Create an RGB color picker which lets you choose a color on a rainbow circle.

**Learning Goals**:
- Activity Lifecycle
- Bundle and Saving State
- Event handlers and bubbling
- Callbacks

**Assigned Date**: ???, 2019

**Due Date**: ???, 2019

Tasks:
- Implement `onTouchReceived` event handler
- Trigger handle on first layout
- Register events and callbacks
- Add Bundler support
  - <span style="color:red">XXX TODO: Do we want this?</span>

### Touch Input

We'll handle touch input by implementing `onTouchReceived`. This is the event handler that will be called when a touch is registered in this view. First, we need to reject any touches that are outside of the circle. Colors may only be selected by tapping on or inside the color wheel.

Then we should update handle transparency based on touch events:
- When a finger touch down, it will show the handle (in 100% alpha).
- When a finger drags on screen, it will always show the handle (in 50% alpha).
- When a finger leaves screen, it will show the handle (in 100% alpha) at the last touch point on the screen.

![Screenshot of color picker, original](colorpicker-img/1.png){:width="150px"}
![Screenshot of color picker, when press down and drag](colorpicker-img/2.png){:width="150px"}
![Screenshot of color picker, when release the finger](colorpicker-img/3.png){:width="150px"}

If accepted, use the x and y coordinates of the touch event to calculate the angle (in radians) of the touch on the color circle by implementing `getTouchAngle`.

With the angle, we can compute the color that was picked by using `HSVToColor`. You can read more about the HSV color space [here](https://en.wikipedia.org/wiki/HSL_and_HSV). Since we're just adjusting color, we only want to modify hue while leaving saturation and value constant. You may see detailed instruction in code comments.

Finally, you'll need to update the UI to reflect the new selected color. This includes moving the handle to the position on the circle for the selected color and calling `onColorSelected` on any `ColorListeners` with our newly selected color.


*Related APIs*:
[MotionEvent](https://developer.android.com/reference/android/view/MotionEvent) / [HSVToColor](https://developer.android.com/reference/android/graphics/Color#HSVToColor(float[]))

### First Layout

On the first layout, we want our color picker to be nicely initialized. To do this, set the handle to the top middle of the circle and adjust the color accordingly. This should also trigger `onColorSelected` for any listeners.

### Register Callbacks and Listeners

There are two callbacks that need to be registered. First, we want to trigger our `onFirstLayout` on global layout. We also need to register `onTouchReceived` as a touch listener.

Finally, we need to connect the color picker to a view to display our newly chosen color. In `MainActivity`, add a `ColorListener` to `colorPickerView` so that `colorView`'s color and `colorTextView`'s text are changed whenever `onColorSelected` is called.

*Related APIs*:
[OnGlobalLayoutListener](https://developer.android.com/reference/android/view/ViewTreeObserver.OnGlobalLayoutListener) / [OnTouchListener](https://developer.android.com/reference/android/view/View.OnTouchListener)

### Add Bundler support

XXX TODO: do we want this?

# Turnin
## Submission Instructions

Please turn in your files in the following zip structure:

```bash
YOUR_STUDENT_ID.zip
├── ColorPickerView.java
└── MainActivity.java
```

## Grading (10pts)

- Part 1
  -
- Turn-in and compiles: 1pt
