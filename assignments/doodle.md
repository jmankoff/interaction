---
layout: default
---

* TOC
{:toc}

# Doodle Assignment

*Objective*: Create an Android app that can load in a set of images and place them nicely on canvas as a collage. The app should also be able to add text and line onto the canvas. 

*Learning Goals*: X, Y, and Z

*Assigned Date*: X

*Due Date*: X

## Assignment Details, Part 1
In the first part of this assignment, you will do the following tasks:
- Import our code skeleton to Android Studio
- Implement 3 functions (addImage, addText, addLine)
- Run app and compare your app screen with our screenshot

### Specs for addImage
```java
Function addImage(FrameLayout mainCanvas, String imageName, Float x, Float y, int size)
```

This method is already implemented for you. Please read through it to understand how it works
**(Maybe we can leave “Set size and location” part for students to implement?)**

### Specs for addText
```java
Function addText(FrameLayout mainCanvas, String text, Float x, Float y, int fontSize, int color)
```

Please follow the comments and the implementation of addImage.

*Related APIs*:
[TextView](https://developer.android.com/reference/android/widget/TextView.html#public-methods_4)
[TextView#setTextColor](https://developer.android.com/reference/android/widget/TextView#setTextColor(int))

### Specs for addLine
```java
Function addLine(FrameLayout mainCanvas, Float startX, Float startY, Float endX, Float endY, int width, int color)
```

There are several ways to draw a line. [android--code](https://android--code.blogspot.com) has [a good example](https://android--code.blogspot.com/2015/11/android-how-to-draw-line-on-canvas.html)

## Assignment Details, Part 2:

You will create a beautiful doodle of your own. Here is one we created:

[![A picture of a phone screen with a heart on it made up of smaller pictures](doodle-img/screenshot-small.png "Screenshot of sample Doodle implementation"){: width=150px}](doodle-img/screenshot.png)

XX JEN: Needs more detail

## Assignment handin instructions


Submission Instruction:
Please include MainActivity.java in your submission

XX JEN: Needs more detail

