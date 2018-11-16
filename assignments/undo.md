---
layout: default
---

* TOC
{:toc}

# Undo Assignment

**Objective**: Understand Undo Abstractions.

**Learning Goals**:
- Reproduce a sample app
- Create command objects
- Separate concerns

**Assigned Date**: ???, 2019

**Due Date**: ???, 2019

Tasks:
- Create a basic drawing app
- Support different color and thickness
- Handle undo/redo operations

You can create a basic drawing app from our code stub.
- Handle input events (ACTION_DOWN/ACTION_MOVE/ACTION_UP) to create drawing paths.
- Draw all paths in onDraw method.
 - See its behavior in screenshot 1 and 2.

You will then create Floating Action Buttons (FABs) to support changing color and thickness of drawing. After clicking FAB:
- Create a view to support selecting color, or use color picker you implemented in previous exercise.
  - See its behavior in screenshot 3 and 4.
- Create a view to support selecting thickness.
  - See its behavior in screenshot 5 and 6.

Most importantly, you should handle undo/redo operations.
- If there is any command to undo, then undo the previous command.
  - See its behavior in screenshot 6 and 7.
- If there is any command to redo, then redo the next command.
  - See its behavior in screenshot 7 and 8.
- Important: a command contains one of these information (not only path)
  - A path
  - A paint (color change or thickness change)

For FAB states:
- When there is no command to undo, hide undo FAB.
- When there is no command to redo, hide redo FAB.
- When a color is picked, the color FAB should update its background to that color.
- When a thickness is picked, the thickness FAB should update the thickness icon.
- You may need update color/thickness FAB state after undo/redo.

![Screenshot of step 1](undo-img/1.png){:width="200px"}
![Screenshot of step 2](undo-img/2.png){:width="200px"}
![Screenshot of step 3](undo-img/3.png){:width="200px"}
![Screenshot of step 4](undo-img/4.png){:width="200px"}
![Screenshot of step 5](undo-img/5.png){:width="200px"}
![Screenshot of step 6](undo-img/6.png){:width="200px"}
![Screenshot of step 7](undo-img/7.png){:width="200px"}
![Screenshot of step 8](undo-img/8.png){:width="200px"}



# Turnin
## Submission Instructions

Please turn in your files in the following zip structure:

```bash
YOUR_STUDENT_ID.zip
├── DrawingView.java
└── MainActivity.java
```

## Grading (10pts)

- Part 1
  - Portrait: 1pt
  - Landscape: 1pt
- Part 2
  - Portrait and Landscape: 1pt
- Part 3
  - Portrait: 1pt
  - Landscape: 1pt
- Part 4
  - Portrait: 1pt
  - Landscape: 1pt
  - Image widths and margins: 1pt
  - Correct "pinterest" column ordering: 1pt
- Turn-in and compiles: 1pt
