name: inverse
layout: true
class: center, middle, inverse
---
class: background-no-repeat, center, middle,
template: inverse

# SSUI Mobile Lab (Fall 2016)
## Week 5: Android Drawing

.center.four-tenths-width-img[
  ![Android Drawing](img/view-group.png)
]
Instructor: Michael Rivera  
_{mlrivera@cs.cmu.edu}_  

Slides online: [https://mikeriv.com/ssui-2016](https://mikeriv.com/ssui-2016)

---
layout: false

# Goals for Today

- Understand how Views are drawn to the display

--

- Gain some practical experience drawing on Android

--

- Freak out about Assignment 1
--

- kidding :)

---
# How Android Draws Views (1/2)

- When an `Activity` receives focus, Android requests the activity draw its layout

--

- An activity __must__ provide a root node of the layout hierarchy

--

- The root node will measure and draw the layout tree

---
# How Android Draws Views (2/2)

- __In-order tree traversal__ is done on the layout hierarchy..

--

- Each view is responsible for drawing itself before (i.e. __behind__) their children

--

- Siblings are drawn in the order that they appear  

.center.half-width-img[
  ![Android Drawing](img/view-group.png)
  ]

---


# When to (re)Draw?

- Drawing is costly- (e.g. frame rates dropping for scrolling interactions)

--

- Often the screen is static

--

- We should *draw when we need to*

--

- Re-drawing "damaged" areas: call `invalidate()`

---

# The Drawing Process


1) Android calls measure on root node (view)
```java
// View specifies size of self
protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec);
```

--

2) Android calls layout on view
```java
// View specifies size and position of children
protected void onLayout(boolean changed, int left, int top, int right, int bottom);
```

--

3) Android calls draw on view
```java
// Add the drawing happens
protected void onDraw(Canvas canvas);
```

---

# Measuring

- `onMeasure()` is a callback invoked by `View.measure()`

--

- Guidance about the size is given from parent view in the form of `MeasureSpec` parameters

--

- Ensures every view has a width and height value set prior to a layout pass

--

- Note: You must manually take padding into account (subtract padding from the width/height dimensions)

---

# Layout

- `onLayout()` is a callback triggered when a view's position is changed

--

- Gives the new position __relative__ to the parent

--

- Causes a layout call on all children (!)

---

# 3) Drawing

- All drawing should be done in `protected void onDraw(Canvas canvas) {...}`

--

- This is responsible for drawing the entire subtree (all chilren and children's children, etc.)


--

- The `Canvas` is the key to drawing *everything*

---

# What is the Canvas?

- `Canvas` is an object level abstraction for performing drawing operations

--

- For example: `drawRect`, `drawOval`, `drawLine`, `drawPath` ...

  [Full List in the API Documentation](https://developer.android.com/reference/android/graphics/Canvas.html)


--

- Keeps track of other related operations

--

  - Links drawing operations to a `Bitmap` (Frame Buffer of pixels)

--

  - Handles __clipping__ of drawing boundaries

--

  - Performs __transformations__ on drawn visual elements

---

# What is the Paint Object?

- Abstraction that determines how drawing operations should look

--

- Drawing style: stroked, filled

--

- Line Characteristics: color, line width, join, cap styles

--

- Fill Characteristics (color)

--

- Text Characteristics: font family, style, size, alignment settings, etc.

--

- Transparency and composition Characteristics: Alpha value and `xfermode`

--

  [Full List in the Paint Documentation](https://developer.android.com/reference/android/graphics/Paint.html)

---

# The Path Object

- Canvas supports drawing primitive shapes _and_ arbitrary paths
```java
  void drawPath(Path p, Paint paint);
```

--

- Declaring a `Path` can be done by combining basic primitive shapes (e.g rectangles, circles, ovals, curves like arc, cubic, etc.)

---
# How to Draw (1/2)

- When drawing a hierarchy, set up any clipping and the coordinate system (transformations) *before* drawing the object itself.

--

  - Clipping should be reduced to include only the object's bounds

--

  - Transformations are set up such that (0, 0) is the top-left of the object.

---
# How to Draw (2/2)

- An element's `onDraw` should do its drawing but:

--

- Doesn't worry about where itself is in the parent or on screen; only the local geometry

--

- Doesn't care about it being clipped by the parent (for the most part)

--

- The *parent* sets up the coordinate frame and clip for each child before calling the child's `draw()`.

--

- Parent resets the frame of reference for each child (transformations and clipping)

---
# Reseting the Reference Frame

- `Canvas` has a mechanism to save and restore its state

--

```java
  Canvas c = new Canvas();
  // Save current state
  c.save();

  // Set the drawing boundary
  c.setClippingRect(100, 50, 200, 100);

  // Move origin to where shape's top-left corner is
  c.translate(100, 50);

  // Draw the shape
  c.drawRect(0, 0, 50, 50);

  // Set-up and draw children if necessary
  // .....

  // Return state back to before the translation & clipping
  c.restore();
```

---

template: inverse
# Walkthrough Your First Canvas
---
template: inverse
# Exercise on Drawing
(Work in Pairs)
