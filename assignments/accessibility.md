---
layout: assignment
title: Accessibility
code: EX4

published: true
assigned: Thursday, May 9, 2019
due: 11:59 PM Wednesday, May 15, 2019
revised: 5:23 PM Thursday, May 9th, 2019

objective: Identify and repair app accessibility issues.

android_goals:
  - Basics of Android assistive tools
hci_goals:
  - App accessibility
  - Understanding of different accessibility issues
  - Simple repairs to accessibility issues
---

* TOC
{:toc}

# Part 1

Tasks:

- Learn different categories of app accessibility issues
- Identify accessibility issues in our example app

Accessibility is an important part of any app. Whether you are developing a new app or adding features to an existing one, it is important to consider the accessibility of your app's components. Please read Table 2 on page 8 of [Epidemiology as a Framework for Large-Scale Mobile Application Accessibility Assessment](https://xiaoyizhang.me/assets/Paper/ASSETS_2017_Epidemiology.pdf).

Please watch this [quick video](https://youtu.be/1by5J7c5Vz4) to learn how visually-impaired users interact with Android applications. The video also offers some tips on ensuring your app is compatible with assistive tools.

Consider the layout app (you will not be using your layout assignment during this assignment) that you worked on earlier this quarter. The image does not have `contentDescription` property. **Google's Accessibility Scanner** will classify this as "Item Label" error (defined in the paper above). Therefore, screen reader cannot read the alternative text of the image to people with visual impairments.

![Screenshot of an image without contentDescription property in layout editor](accessibility-img/1.png){:width="500px"}

The goal of part 1 of the assigment is to identify **at least 10** accessibility issues within the given app. Our example app may not have ALL issues in the table. Please use the Accessibility Scanner to detect defects in the app. For your reference, we identified at least 11 errors in the app. It is helpful to have basic understanding about [Talkback](https://support.google.com/accessibility/android/answer/6283677?hl=en) and [Switch Access](https://support.google.com/accessibility/android/answer/6122836?hl=en), two built-in assistive tools on Android.

The Accessibility Scanner is decent with its suggested fixes, but if
it is not obvious, for each element type, do some research to find all
the attributes that help with accessibility. 

# Report

Your report should be structured as follows:

## Title: Accessibility Report

Overview (1 paragraph) 

Describe your experience using assistive tools while testing the
accessibility of the app before and after fixing issues. 

Issues (table)

For each issue that you identify within the app, document the following details:

| Inaccessible UI element  | Issue type | Fix |
| ------------------------ | ---------- | --- |
| ...                      | ...        | ... |
| ...                      | ...        | ... |


You can use the XML id for the element, or describe it very briefly
(~3 words). Issue type should be drawn from the list in the
reading. The fix should provide a brief description (1 sentence or so)
of what you did. Here's an example: `"Remove the android:contentDescription"`

**Resources**

- [Getting started with Google Accessibility Scanner](https://support.google.com/accessibility/android/answer/6376570?hl=en&ref_topic=6376582)
- [Android Accessibility Overview](https://developer.android.com/guide/topics/ui/accessibility/)
- [Android Accessibility Guides](https://developer.android.com/guide/topics/ui/accessibility/apps)
- [Material Design: Assistive Technology](https://material.io/design/usability/accessibility.html#assistive-technology)

<!-- <span style="color:red">
XXX TODO: Should we ask them to write a report with the description of each issue? (Increases the workload of TA). Or we only grade based on how many issues are repaired? (What if they can identify but cannot repair some issues?)
</span> -->

<!-- <span style="color:red">
XXX TODO: Should we provide them Google Accessibility Scanner? (Although it may not cover all issues...)
</span> -->

# Part 2

Tasks:

- Repair accessibility issues you identified in part 1

For each issue that you identified in the app, please repair it by modifying code or xml layout file. For reference, in the sample solution we ran the app through the Accessibility Scanner and identified and fixed 11 issues. For example: To repair "Item Label" error above, we can either

- In layout editor, add "broccoli in a black bowl" as contentDescription property
- In code, call method imageView.setContentDescription("broccoli in a black bowl")

All of these changes only require modifying existing xml attributes or adding new ones; so it is not a programming heavy assignment and should only take you a couple of hours at most.

# Turn-in

## Submission Instructions

### Part 1

- Submit your report as a PDF document on Gradescope

### Part 2

You will turn in the following files via GitGrade:
```
- MainActivity.java
- app_bar_main.xml
- content_main.xml
- nav_header_main.xml
- strings.xml
```
**Follow these instructions to submit part 2 of your assignment**

- Make sure the code you want to submit is pushed to GitLab (origin/master)
  - If you just commit locally and don't push, GitGrade won't see those changes 
- (Optional) Go to your repo on GitLab to double check that the latest commit hash matches your latest local commit hash
- Go to the turn in link: [https://gitgrade.cs.washington.edu/student/assignment/55/turnin](https://gitgrade.cs.washington.edu/student/assignment/55/turnin)
- Check the box and click "Turn in"

## Grading (10pts)

- Part 1
  - Correctly identifies and classifies all 10 or more accessibility issues: 4 pts
  - Describes their experience using assistive tools to test the app (Accessibility Scanner, TalkBack etc.): 1 pt
- Part 2
  - Fixes the issues identified in part 1 by modifiying / adding new attributes to the xml tags: 5 pts
