---
layout: assignment
title: Layout
code: EX2

assigned: Thursday, April 11, 2019
due: 11:59 PM Monday, April 15, 2019

objective: Use XML and programmatic constraints to replicate three layouts.

android_goals:
  - Understand Android layout GUI and XML
  - Familiarize with Android programmatic layout API
  - Understand Android constraints implementation
  - Handle portrait and landscape orientation correctly
  - Handle fixed and variable size container views
hci_goals:
  - Make use of interactor hierarchy
  - Use constraints to create responsive layouts
  - Make use of complex built-in layouts
  - Implement reusable layouts
  - Understand how scrolling works
  - Understand how sizes influence layout

---

* TOC
{:toc}

# Part 1
***

Tasks:
- Create TextView, ImageView, and Button
- Constrain them for automatic portrait and landscape layouts

Create a TextView containing `0` with black background and white 200sp text. Along with it, create a button and ImageView with `food_0` which is 150dp by 150dp.

Position them as in the photo below. There should be a 20dp margin around the edges and between the textview and button/image. As the view rotates, the image and button should stay a constant size and distance from the edge while the text view expands to fill the extra space.

![Screenshot of part 1 in portrait](layout-img/1_portrait.jpeg){:width="25%"}
![Screenshot of part 1 in landscape](layout-img/1_landscape.jpeg){:width="50%"}

# Part 2
***

Tasks:
- Implement a basic scrolling view
- Add a fixed number of items with fixed constraints.

Add ImageViews for `food_0` through `food_3`. Using constraints, center them vertically and position them such that `food_0` is 15dp from the top, then each `food_i` is (15*i)dp from `food_i-1`.

That is, `food_1` is 15dp below `food_0`, `food_2` is 30dp below `food_1`, and `food_3` is 45dp below `food_2`. This increasing margin layout will also be used in [Part 3](#part-3).

When the layout is rotated, the images should stay the same size and remain horizontally centered.

![Screenshot of part 2](layout-img/2_0.png){:width="20%"}
![Screenshot of part 2, scrolled down](layout-img/2_1.png){:width="20%"}
![Screenshot of part 2, landscape](layout-img/2_landscape.png){:width="50%"}


# Part 3
***

Tasks:
- Implement a basic scrolling view
- Add a variable number of items with programmatic constraints.

This time, we'll be adding images and constraints programmatically with similar conditions as [Part 2](#part-2).

First, add a ConstraintLayout then create ImageViews for each image to add to the ScrollView.

Using the similar math as part 2, position the first image `vMargin` dp from the top (`vMargin` is a parameter in Part3View constructor), then the top of each image i afterward `vMargin * i` dp from the bottom of the previous image.

Again, when the layout is rotated, the images should stay the same size and remain horizontally centered.

![Screenshot of part 3](layout-img/3_0.png){:width="20%"}
![Screenshot of part 3, scrolled down](layout-img/3_1.png){:width="20%"}
![Screenshot of part 3, scrolled down more](layout-img/3_2.png){:width="20%"}
![Screenshot of part 3, scrolled down even more](layout-img/3_3.png){:width="20%"}

# Part 4
***

Tasks:
- Implement an advanced scrolling view.
- Add a variable number of items with programmatic constraints.
- Maintain two columns and maintain the "pinterest" property.

First, create two LinearLayouts inside `part4_grid.xml`. They should equally divide the horizontal space and fill the vertical with no margins around them. These will act as our columns. When the view is rotated, the columns should stretch to maintain 50% width.

Then, programmatically add the ConstraintLayout to the Part4View. Iterate over every image name and create a corresponding ImageView. Determine which column to place it in using the "pinterest" property. That is, add the image to the shortest column or the leftmost column if they're equal.

There should be a 30px margin between columns, photos, and the edges. *Important* Don't forget to adjust image width during orientation! A `set` method in [Android ImageView API](https://developer.android.com/reference/android/widget/ImageView) may help you to achieve this programmatically.

If you use the resolution of drawables for each ImageView to determine column height, remember to normalize as actual photo resolution does not matter when determining displayed height as much as displayed size or image aspect ratio.

When rotated, the view should scale such that the images increase in size and margins remain the same.

![Screenshot of part 4](layout-img/4_0.png){:width="20%"}
![Screenshot of part 4, scrolled down](layout-img/4_1.png){:width="20%"}
![Screenshot of part 4, landscape](layout-img/4_landscape.png){:width="50%"}

# Turn-in
## Submission Instructions

You will turn in the following files <a href="javascript:alert('Turn-in link pending assignment release');">here</a>:

```
─ part1.xml
─ part2.xml
- Part3View.java
- Part4View.java
- part4_grid.xml
```

<span style="color:red;">We will test layout on emulators with different screen sizes. Please use constraint correctly. Don't just try to match pixels in our sample screenshots.</span>

## Grading (10pts)

- Part 1
  - Portrait: 1 pt
  - Landscape: 1 pt
- Part 2
  - Portrait and Landscape: 1 pt
- Part 3
  - Portrait: 1 pt
  - Landscape: 1 pt
- Part 4
  - (Portrait) Correct “Pinterest” column ordering: 1 pt
  - (Landscape) Correct “Pinterest” column ordering: 1 pt
  - (Portrait and Landscape) Correct image widths: 1 pt
  - (Portrait and Landscape) Correct image margins: 1 pt
- Turn-in and compiles: 1 pt
