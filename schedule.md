---
layout: default
---

* TOC
{:toc}

# Week 1: What's in an Interface 

| Date | Type | Details | Learning Goal|
|------|-------|-------------------------------|----|
|**4/1**|**Monday** | **Why take this course? What is HCI?** | |
|| Slides | [Introduction to course](/interaction/slides/wk01/intro.html) | Relevance of class to all of CS | 
|**4/3**|**Wednesday** | **Basic Structure of Interaction** ||
||Reading <br> (10 min) | Chapter 1: Introduction from {{site.hcibook}}  | Structure of course; History of interface innovation | 
||Reading <br> (10 min) | [Understanding Android Application and Activity Lifecycles](https://developer.android.com/guide/components/activities/activity-lifecycle) | Getting up to speed on Android | 
||Preparation (10-20 min) | Download Android Studio and follow [this tutorial]( https://developer.android.com/training/basics/firstapp) to create an Android Application. Continue with the tutorial to also [run your app](https://developer.android.com/training/basics/firstapp/running-app) either on an emulator or on your phone | Getting up to speed on Android |
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Exercise Assigned | [Doodle](/interaction/assignments/doodle)| Getting up to speed on Android; Basics of drawing on the screen | 
||Slides | [Core Toolkit Abstractions](/interaction/slides/wk01/MVC.html)| Toolkit User Types; Basic structure of a user interfaces; Common interactors; Model View Controller|
|**4/4**|**Thursday** | **Introduction to Android (active)**| Android project structure; Hello World|
||Slides| [Hello World](/interaction/slides/l01/hello.html)| Android 
||For your reference |[Java Refresher](/interaction/slides/l01/java.html) |
||For your reference |[Animation](/interaction/slides/l01/animation.html) |
|**4/5**|**Friday**| Drawing on the Screen (active)|
||Reading (10 min)| Chapter 2 from Drawing from {{site.hcibook}}| Basic drawing abstractions | 
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Slides|[Drawing](/interaction/slides/wk01/Drawing.html)| Component hierarchy and drawing; drawing abstractions; clipping and other transformations|
{: .small #small .schedule #schedule}

# Week 2: Output it to me

| Date | Type | Details | Learning Goal|
|------|-------|-------------------------------|----|
|**4/8**|**Monday**| **Properties of People I: Visual Perception** ||
||Slides|[Properties of People I: Vision](/interaction/slides/wk02/people-vision.html)| Design implications of people's visual capabilities | 
||Exercise Due|[Doodle](/interaction/assignments/doodle) |
|**4/10**|**Wednesday**| **Layout**|
||Required Reading (10 mins)|[Chapter 5: Layout and Constraints](https://www.amazon.com/dp/1423902483/ref=rdr_ext_sb_ti_hist_1) | Abstractions for positioning interactors on the screen and making responsive interfaces 
||Required Reading (10 min)| Chapter 17 & 18: A Guide to Android Constraint Layout {{site.androidbook}} | Android's approach to layout 
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Slides|[Layout](/interaction/slides/wk02/layout.html)| Relating layout to the interactor hierarchy 
|**4/11**|**Thursday**|Layout Exercise Assigned|
||Exercise Assigned|[Layout](/interaction/assignments/layout)| Implementing layout using GUI and programmatic abstractions
||Slides|[Layout in Android](/interaction/slides/l02/layout.html)| Android specific layout information
|**4/12**|**Friday**|Event Handling I: Input Devices, Events and Event Delivery|
||Required Reading (10 min)|Chapter 3: Event Handling {{site.hcibook}} pp. 43-52 (on Input Events); 59-63 (Listeners)| Basics of event handling including event types and listeners
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Slides|[Event Handling 1](/interaction/slides/wk02/events1.html)| How events are dispatched to interactors|
{: .small #small .schedule #schedule}

# Week 3: Interact With Me

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
|**4/15**|**Monday**|**MVC at the Interactor Level Essential Geometry and Essential Behavior**|
||Slides|[From Events to Behavior](/interaction/slides/wk03/events.html)| Toolkit abstractions for responding to events
||Exercise Due|[Layout](/interaction/assignments/layout)|
|**4/17**|**Wednesday**|**Finite State Machines**| 
||Required Reading|Chapter 11: Input Syntax Specification {{site.hcibook}}| Essential Behavior and the use of final state machines to implement it |
||Slides| [08: Essential Behavior: Finite State Machines](/interaction/slides/wk03/state.html)| Essential Behavior and the use of final state machines to implement it |
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
|**4/18**|**Thursday**|**Build your own Interactor exercise**|
||Exercise Assigned|[Color Picker](/interaction/assignments/colorpicker)| Handle input; Create a non-rectangular interactor; Implement a finite state machine
||Slides|[Event Handling](/interaction/slides/l03/events.html)| Event Handling in Android and data persistence
||For Your Reference|[Activity State Change Events](/interaction/slides/l03/activity-events.html)|
|**4/19**|**Friday**|**Motor Control**|
||Slides|[Properties of People II: Motor Control](/interaction/slides/wk03/people-motor.html)| Motor behavior basics and implications for design including Fitts' law and Guiard's theory of bimanual input 
||*Optional Reading*|[Motor Behavior Models for Human-Computer Interaction](Principals of Interactor Design), I. Scott MacKenzie <br>**Suggest section 3 and 4.2**| Introduction of Fitts law, Guiard
{: .small #small .schedule #schedule}

# Week 4: Tell me all about it

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
|**4/22**|**Monday**|**Predicting and Evaluating Interactor Efficiency**| 
|      |Watch|[Video of Marking Menus](https://www.youtube.com/watch?v=8c58bN6ajJ4)|Understand design space of menus; See how interaction technique design can vastly improve interaction efficiency|
|      |Video Watching Quiz|[On Canvas]({{site.canvas}}), due night before|
|       |Exercise Due|[Color Picker](/interaction/assignments/colorpicker)|
|       | Coe In-class assessment 11-11:20am | |
|       |Slides|[Predicting and Evaluating Interactor Efficiency](slides/wk04/menus.html)| Apply design tips we've discussed to comparing the efficiency of different variations on interactors; Learn about wide variety of solutions for selection; Learn about Qualitative and Quantitative ways of testing theories|
|**4/24**|**Wednesday**|**Running Your Quantitative User Studies**|
||Required Reading |[An Empirical Comparison of Pie vs. Linear Menus](https://medium.com/@donhopkins/an-empirical-comparison-of-pie-vs-linear-menus-466c6fdbba4b)| To better understand the purpose and procedures in this user study; to plan for [Menus assignment](assignments/menus.html)|
||Slides|[Quantitative Study Design/Running](/interaction/slides/wk04/studies.html)|  Understand concepts in data pipeline in an applied fashion including what is our hypothesis, how this translates into study design and method, considerations when interacting with users, data collection cleaning and analysis, some statistical methods, and how we draw conclusions
|**4/25**|**Thursday**|**Implementing App for user study**|
||Assignment|Test which menu is better: Marking menu or Standard Menu [Menus](/interaction/assignments/menus)|
|**4/26**|**Friday**|**Catchup**|
{: .small #small.schedule #schedule}

# Week 5: Making more of your phone

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
| **4/29** | **Monday, at the Mill Classroom**    | Introduction to 3D printing for Mobile devices|  
||Required safety training before class | [Mill safety training](https://reg.hfs.uw.edu/) | All UW students are required to complete the user agreement and safety training online annually.  You will need to swipe to verify you’ve completed this on every entry. |
|| Required Tutorial before class | [Make a luggage tag](https://www.tinkercad.com/learn/overview/O0XHVHMIXGFO1D6;collectionId=O2C1PXBIQ2KHCOD) | Learn basic 3D modeling skills needed for 3D printing
||[3D Printing Intro](slides/wk05/3dprinting.html)|Learn basics of 3D printing, print the model you created in preparation for class |
| **5/1**  | **Wednesday, at the Mill Classroom** | Design your project        | Work in pairs to design an add-on to your phone that uses a combination of 3D printed and conductive elements. | Learn about designing your own model; how phones are used for physical computing such as sensing and interaction| 
| **5/2**  | **Thursday** | Work on the software interface and event handling in lab | Learn about the software behind physical interactors |
| **5/3**  | **Friday, at the Mill Classroom**    |Finalize and print your projects | Make the end to end system work | 
{: .small #small .schedule #schedule}

# Week 6: Accessibility 

|------|-------------|---------------------------------------------------------|
| **5/6**|**Monday**    | **Accessibility**                                       |
|| Assignment Due    | [Menus](/interaction/assignments/menus)                 |
| **5/8**|**Wednesday** |                                                         |
|| Exercise Assigned | [Accessibility](/interaction/assignments/accessibility) |
| **5/10**|**Friday**   |                                                         |
||Required Reading|[Rettig: Prototyping for Tiny Fingers](https://www.cs.odu.edu/~jain/CS441-S18/papers/Prototyping_for_tiny_fingers.pdf)|
||Slides|[06: Paper Prototyping](/interaction/slides/wk02/paper.html)|
{: .small #small .schedule #schedule}

# Week 7: Undo it please

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
| **5/13**|**Monday**   | **Undo**     ||
|| Exercise Due  | [Accessibility](/interaction/assignments/accessibility) ||
| **5/15**|**Wednesday**  | **Heuristic Evaluation**     ||
||Slides|[Application Design Principals](/interaction/slides/wk07/interaction.html)|
|| Assignment: Undo Assigned | [Undo](/interaction/assignments/undo)                   |
| **5/17**|                  |                                                         |
||Slides|[Heuristic Evaluation](/interaction/slides/wk07/heuristic.html)|
{: .small #small .schedule #schedule}

# Week 8: There's a world out there!

|----------|---|--------------------------------------|
| **5/20** |   | Context Awareness                    |
| **5/22** |   | Passive Data Collection on the Phone |
| **5/23** |   | Sensing in Android                   |
| **5/24** |   | Augmented Reality on the Phone       |
{: .small #small .schedule #schedule}

# Week 9: Advanced Interface Concepts

|-------|------|-------------------------------|
|**5/27**|Memorial Day**|**No Class**|
||Assignment: Undo Due|[Undo](/interaction/assignments/undo)|
||Exercise Assigned|[Sensing](/interaction/assignments/sensing)|
||Assignment: Context Awareness|[Context Awareness](/interaction/assignments/contextaware)|
|**5/29**|||
|**5/31**|||
|**6/3**|||
||Exercise Due|[Sensing](/interaction/assignments/sensing)|
{: .small #small .schedule #schedule}

# Week 10: TBD

|-----|--------|-------------------------------|
|**6/5**|||
|**6/6**|||
|**6/7**|||
||Assignment: Context Due (6/10)+[Context/AR](/interaction/assignments/context)|
{: .small #small .schedule #schedule}

# Post Lecture

## Final exam
**6/10**, 8:30-10am in CSE2 G10
