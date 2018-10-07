---
layout: default
---

* TOC
{:toc}

# Doodle Assignment

**Objective**: Create an Android app that can load in a set of images and place them nicely on canvas as a collage. The app should also be able to add text and line onto the canvas. 

**Learning Goals**: X, Y, and Z

**Assigned Date**: ???, 2019

**Due Date**: ???, 2019

<br/>
<br/>
<br/>

## Details of Part 1
In the first part of this assignment, you will do the following tasks:
- Import our code skeleton to Android Studio
- **Implement 3 functions** (addImage, addText, addLine)
- Run app and compare your app screen with our screenshot

### Specs for addImage
```java
Function addImage(FrameLayout mainCanvas, String imageName, Float x, Float y, int size)
```

This method is already implemented for you. Please read through it to understand how it works.

**<span style="color:red">(Maybe we can leave “Set size and location” part for students to implement?)</span>**

### Specs for addText
```java
Function addText(FrameLayout mainCanvas, String text, Float x, Float y, int fontSize, int color)
```
Please implement addText function so that you can add text on canvas.

*Related APIs*:
[TextView](https://developer.android.com/reference/android/widget/TextView.html) / 
[TextView#setTextColor](https://developer.android.com/reference/android/widget/TextView#setTextColor(int))

You may find the comments and the implementation of addImage useful.

If you implement it correctly and call addText(mainCanvas, "CSE340", 550f, 200f, 60, Color.rgb(51,0,111)), the screenshot will be:

![A purple text "CSE340" shows at the top right of the screenshot.](doodle-img/add_text_sample.png){:width="150px"}


### Specs for addLine
```java
Function addLine(FrameLayout mainCanvas, Float startX, Float startY, Float endX, Float endY, int width, int color)
```

There are several ways to draw a line. [android--code](https://android--code.blogspot.com) has [a good example](https://android--code.blogspot.com/2015/11/android-how-to-draw-line-on-canvas.html)

If you implement it correctly and call addLine(mainCanvas, 100f, 250f, 700f, 1200f, 15, Color.rgb(200,0,0)), the screenshot will be:

![A red line starts from top left to the center of the screenshot.](doodle-img/add_line_sample.png){:width="150px"}

<br/>
<br/>
<br/>

## Details of Part 2

In the second part of this assignment, you will do the following tasks:
- Read and understand our code to create an animated doodle (click to the screenshot below to see in full resolution)
- **Create a beautiful doodle of your own**

![A screenhot with a heart on it made up of smaller pictures.](doodle-img/screenshot.png){:width="150px"}

<!---[![A picture of a phone screen with a heart on it made up of smaller pictures](doodle-img/screenshot-small.png "Screenshot of sample Doodle implementation"){: width=150px}](doodle-img/screenshot.png) --->

You should use all 3 functions implemented in part 1. You are welcome to implement new functions to make a creative and/or beautiful doodle.

Your may use the attractive home-cooked food images ([photo credit](https://www.XiaoyiZhang.me)) we include in res/drawable folder, or use your own images.

*Related APIs*:
[Android Animation](https://developer.android.com/training/animation/reposition-view)

If your animation is laggy, try reduce the number of images you put on canvas or reduce the file size of images (e.g., convert png to jpg, reduce resolution of image file).

<br/>
<br/>
<br/>

## Submission Instructions

Please compress all files to YOUR_STUDENT_ID.zip

Please include Part1Activity.java and Part2Activity.java in your submission.

If you use your own images in part 2, please include them in images folder.

If you use csv file to store a large number of image coordinations, please include data.csv.

```bash
123456789.zip
├── Part1Activity.java
├── Part2Activity.java
├── images (optional)
│   ├── xxx0.jpg
│   ├── xxx1.jpg
│   └── xxx2.jpg
└── data.csv (optional)
```