---
layout: assignment
title: Context Awareness
code: A3

assigned: Tuesday, May 28, 2019
due: 11:59 PM Friday, June 7, 2019
revised: 12:30pm Monday, May 27, 2019

objective: Build a context aware application.

hci_goals:
  - Create an app that uses implicit data
  - Make a usable app as defined by the <a href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html">SUS
    </a> when evaluated by a TA 
  - Make an accessible app
---

- TOC
{:toc}

# Task for Assignment

You have learned many things this quarter. Now is your chance to use
  them to create something larger than any one assignment we did. In
  this assignment, that could include an existing interface but must
  *also* use context somehow.

## Kinds of Context

There are 3 kinds of context aware applications, which function in the
following ways:
- Attach context information for retrieval later (e.g., Leave a note
  while at CSE; when come back to CSE the day after, user can see the
  note again) 
- Automatically execute things (e.g., Automatically suggest a new
  navigation route when a driver exits from a wrong ramp.) 
- Present info based on context (e.g., Send a notification of bus
  schedule when user is at bus station) 

You may build an utility app or game, and you should use at least two
fences (**one of them must be location**). 

If you want to start with an existing app, you could think about how
  to extend the drawing app to be context aware. For example, you
  could support loading of drawings based on location (you could store
  them in the bundle and only provide access to drawings that were
  created in the current location).  Or, you could
  automatically undo the last action whenever the user runs, and redo
  it when they walk and do nothing when they hold still. Finally, the
  colors available could change depending upon what location you are
  in (maybe purple is only available on the UW campus!). 

# Important Assessment goals 
We will be looking for whether you app is accessible and
    usable. Although there isn't a simple scale available for
    assessing context-aware applications, we have modified the
     system usability scale (
    [SUS](https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html))
    as follows and will use it to assess your app (each rated from
    Strongly Agree to Strongly Disagree on a 5 point scale)
	
1) I think that I would like to keep using this app.

2) I found the system unnecessarily complex.

3) I thought the system was easy to use.

4) I found the use of implicit and explicit data in this app to be well integrated.

5) I thought there was too much inconsistency in this system.

6) I would imagine that most people would learn to use this system very quickly.

7) I found the system very cumbersome to use.

8) I felt very confident using the system.

# Group Project
This is a **group project**. We will assign you to groups to make sure
every group has an android phone. 

We will also assess the group experience as part of the grade.  This
will be based on a survey at the end asking you to describe your
contributions, your group members' contributions and mention any
issues. We expect everyone to get full credit for this point, but will
be using this to check for any problems.

# Turn-in
Turn in your code, an apk file and a video.

This video will serve as the demonstration
for the modified SUS assessment. You can use captions or voice-over to
explain your application. 

## Submission Instructions

You will turn in the following files <a href="javascript:alert('Turn-in link pending assignment release');">here</a>:

```
─ src.zip
- video.zip
```

## Grading (5pts)

- Part 1: App (3 pts)
  - Use location and another sensor: 1pt
  - App is context-aware: 1pt
  - App is accessible: 1 pt
  - You score well on the modified
    [SUS](https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html)
    when evaluated by a TA 
- Group participation: 1pt 

In peer grading survey,
- We will ask what type of context is used
- Ask if the app is enjoyable, in a Likert scale
- Prompt to write a paragraph feedback
