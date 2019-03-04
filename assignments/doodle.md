---
layout: assignment
title: Doodle
code: EX1

assigned: Thursday, April 4, 2019
due: 11:59 PM Monday, April 8, 2019

objective: Create an Android app that draws a doodle consisting of a text, a line, and a set of images on the main canvas.

hci_goals:
  - Use abstractions to draw on screen
  - Create animations
  - Use coordinate transformation
  - Try to create something appealing
android_goals:
  - Get familiar with Android Studio
  - Understand XML and View
  - Load image and drawable resources
  - Learn Activity Lifecycle

---

* TOC
{:toc}

# Part 1
***

Tasks:
- Download and install Android development environment
- Open our skeleton code in Android Studio
- Implement three functions: `addImage`, `addText`, `addLine`
- Call the functions you implemented and compare your app screen with our screenshot
- Animate `UW` so it slides from left to right when the app opens.

This task involves implementing three functions in `Part1Activity.java`. Each function is named here but detailed doc comments can be found in the interface which `Part1Activity` extends: `Doodler`.

### Specs for addImage
```java
ImageView addImage(FrameLayout canvas, String imageName, float x, float y, int size);
```

Most of this method is mostly implemented for you. Please read through it to understand how it works, then set the size and location of ImageView added in this method.

*Related APIs*:
[TextView](https://developer.android.com/reference/android/interactor/ImageView.html)

### Specs for addText
```java
TextView addText(FrameLayout canvas, String text, float x, float y, int fontSize, int color);
```

*Related APIs*:
[TextView](https://developer.android.com/reference/android/interactor/TextView.html) /
[TextView#setTextColor](https://developer.android.com/reference/android/interactor/TextView#setTextColor(int))

You may find the comments and the implementation of addImage useful.

If you implement it correctly, you'll see the image below if you run:
```java
addText(mainCanvas, "CSE340", 550f, 200f, 60, Color.rgb(51,0,111))
```

![A purple text "CSE340" shows at the top right of the screenshot.](doodle-img/add_text_sample.png){:width="25%"}

### Specs for addLine
```java
ImageView addLine(FrameLayout canvas, Point start, Point end, int width, int color);
```

There are several ways to draw a line. [android--code](https://android--code.blogspot.com) has [a good example](https://android--code.blogspot.com/2015/11/android-how-to-draw-line-on-canvas.html)

If you implement it correctly, you'll see the image below if you run:
```java
addLine(mainCanvas, 100f, 250f, 700f, 1200f, 15, Color.rgb(200,0,0))
```

![A red line starts from top left to the center of the screenshot.](doodle-img/add_line_sample.png){:width="25%"}

### Animating Text

Read through this [basic animation](https://developer.android.com/training/animation/reposition-view) tutorial. You will need to first figure out how to animate the TextView created by `addText` then decide where in the Activity lifecycle the animation should be placed so it is triggered when the app opens.

The `UW` text should translate horizontally from `(50f, 1650f)` to `(1000f, 1650f)`. Animation duration should be less than 2 seconds.

*Related APIs*:
[ObjectAnimator](https://developer.android.com/reference/android/animation/ObjectAnimator)

![A screenshot with a heart on it made up of smaller pictures.](doodle-img/screenshot.png){:width="25%"}

# Part 2
***

Tasks:
- Create a beautiful doodle of your own

Create a new activity called `Part2Activity`. In here you should use all 3 functions implemented in [Part 1](#part-1) to draw your own doodle. You are welcome to implement new functions to make a creative and/or beautiful doodle.

**Tip**: Add your new activity to `AndroidManifest.xml`. You can control which activity launches with the app by moving the existing `<intent-filter>` tag between different activities.

Aim for complexity similar to [Part 1](#part-1) (images, text, and shapes) though you don't need to use as many images. Try to be creative, you work will be graded by your peers. Your may use the attractive home-cooked food images ([photo credit](https://www.XiaoyiZhang.me)) we include in `res/drawable` or use your own images. If you chose to use your own images, please be sure to turn them in exactly as specified in [Turn-in](#turn-in).

If your animation is laggy, please reduce the number of images you put on canvas or reduce the file size of images (e.g., convert png to jpg, reduce resolution of image file).

*For Peer Grading*
<!-- XXX TODO(rfrowe): Will we use canvas -->
This portion of the assignment will be peer graded. You will receive 1pt for peer grading others' doodles through Canvas. You will have a chance to nominate the most creative doodles. The winners will be shown off in class.

*Related APIs*:
[Android Animation](https://developer.android.com/training/animation/reposition-view) /
[View Animation](https://developer.android.com/guide/topics/graphics/view-animation.html) /
[Property Animation](https://developer.android.com/guide/topics/graphics/prop-animation.html) /
[Vogella Tutorials - Android Animation](http://www.vogella.com/tutorials/AndroidAnimation/article.html)

# Turn-in
## Submission Instructions

You will turn in the following files <a href="javascript:alert('Turn-in link pending assignment release');">here</a>:

```
─ Part1Activity.java
─ Part2Activity.java
- images.zip (optional)
  ├── abc.jpg
  ├── ...
  └── xyz.jpg
- part2.csv (optional)
```

If you use your own images in [Part 2](#part-2), please include them in images folder. The images should be compressed together into a ZIP file. Do not compress a folder called `images` containing the actual images. Ex: `zip images.zip abc.jpg ... xyz.jpg`

If you're positioning a large number of images for [Part 2](#part-2), it may be best to use a CSV similar to `data.csv` which is used for the heart in [Part 1](#part-1). Include this as `part2.csv` if necessary.

## Grading (10pts)

- Part 1
  - `addImage`: 1 pt
  - `addText`: 1 pt
  - `addLine`: 3 pts
  - `UW` Animation: 1 pt
- Part 2
  - Peer Grading of Custom Doodle
    - Using each of the three functions: 1 pt
    - Using an animation: 1 pt
  - Complete assigned peer grading: 1 pt
- Turn-in and compiles: 1 pt
