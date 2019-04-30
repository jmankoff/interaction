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
||Preparation (10-20 min) | Download Android Studio and follow [this tutorial]( https://developer.android.com/training/basics/firstapp) to create an Android Application. Continue with the tutorial to also [run your app](https://developer.android.com/training/basics/firstapp/running-app) either on an emulator or on your phone. Here is [additional information on android studio setup](slides/wk01/setup-android.html) | Getting up to speed on Android |
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Exercise Assigned | [Doodle](/interaction/assignments/doodle)| Getting up to speed on Android; Basics of drawing on the screen | 
||Slides | [Core Toolkit Abstractions](/interaction/slides/wk01/MVC.html)| Toolkit User Types; Basic structure of a user interfaces; Common interactors|
|**4/4**|**Thursday** | **Introduction to Android (active)**| Android project structure; Hello World|
||Slides| [Hello World](/interaction/slides/l01/hello.html)| Android 
||For your reference |[Doodle](/interaction/slides/l01/doodle.html) |
||For your reference |[Java Refresher](/interaction/slides/l01/java.html) |
||For your reference |[Git](/interaction/slides/l01/git.html) |
|**4/5**|**Friday**| Drawing on the Screen (active)|
||Reading (10 min)| Chapter 2 from Drawing from {{site.hcibook}}| Basic drawing abstractions | 
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Slides|[Drawing](/interaction/slides/wk01/Drawing.html)| drawing abstractions; clipping and other transformations|
{: .small #small .schedule #schedule}

# Week 2: Output it to me

| Date | Type | Details | Learning Goal|
|------|-------|-------------------------------|----|
|**4/8**|**Monday**| **Drawing Interfaces: MVC and Component Hierarchies** ||
||Slides|[Drawing & Animation](/interaction/slides/wk02/Android-drawing-views.html)|  Deeper understanding of Views, Bitmaps Canvas, Paths and Animation | 
|**4/10**|**Wednesday**| **Layout** ||
||Optional Reading (10 min)| [Layouts (Overview)](https://developer.android.com/guide/topics/ui/declaring-layout) and [Building a Responsive UI](https://developer.android.com/training/constraint-layout) | Android's approach to layout 
||Slides|[Layout](/interaction/slides/wk02/layout.html)| Relating layout to the interactor hierarchy 
||Exercise Due|[Doodle](/interaction/assignments/doodle) |
|**4/11**|**Thursday**|Layout Exercise Assigned|
||Exercise Assigned|[Layout](/interaction/assignments/layout)| Implementing layout using GUI and programmatic abstractions
||Slides|[Layout in Android](/interaction/slides/l02/layout.html)| Android specific layout information
|**4/12**|**Friday**| **Properties of People I: Visual Perception**|
||Required Reading (10 mins)|[Chapter 5 through p. 128: Layout and Constraints](https://www.amazon.com/dp/1423902483/ref=rdr_ext_sb_ti_hist_1) | Abstractions for positioning interactors on the screen and making responsive interfaces 
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Slides|[Properties of People I: Vision](/interaction/slides/wk02/people-vision.html)| Design implications of people's visual capabilities | 
||Peer-Grading Due| Peer grading assignments for Doodle are due at 11:59 PM |
{: .small #small .schedule #schedule}

# Week 3: Interact With Me

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
|**4/15**|**Monday**|Event Handling I: Input Devices, Events and Event Delivery|
||Slides|[Event Handling](/interaction/slides/wk03/events.html)| How events are dispatched to interactors|
|**4/17**|**Wednesday**|**MVC at the Interactor Level Essential Geometry and Essential Behavior**|
||Required Reading (10 min)|Chapter 3: Event Handling {{site.hcibook}} pp. 43-52 (on Input Events); 59-63 (Listeners)| Basics of event handling including event types and listeners
||Reading Quiz|[On Canvas]({{site.canvas}}), due tuesday night|
||Slides| [Essential Behavior: Finite State Machines](/interaction/slides/wk03/state.html)| Essential Behavior and the use of final state machines to implement it |
|**4/18**|**Thursday**|**Build your own Interactor exercise**|
||Exercise Due|[Layout](/interaction/assignments/layout)|
||Exercise Assigned|[Color Picker](/interaction/assignments/colorpicker)| Handle input; Create a non-rectangular interactor; Implement a finite state machine
|**4/19**|**Friday**|**Finite State Machines**|
||Required Reading|Chapter 11: Input Syntax Specification {{site.hcibook}}| Essential Behavior and the use of final state machines to implement it |
||Optional Reading|[Custom View Components](https://developer.android.com/guide/topics/ui/custom-components)|
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Slides|[Essential Geometry and View Update](/interaction/slides/wk03/viewupdate.html)| Toolkit abstractions for responding to events
{: .small #small .schedule #schedule}

# Week 4: Tell me all about it

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
|**4/22**|**Monday**|**Motor Control**| 
||Slides|[Properties of People II: Motor Control](/interaction/slides/wk04/people-motor.html)| Motor behavior basics and implications for design including Fitts' law and Guiard's theory of bimanual input 
|       | Coe In-class assessment 11-11:20am | | Give us feedback about the class!
|**4/24**|**Wednesday**|**Predicting and Evaluating Interactor Efficiency**|
||Required Reading|[Chapter 20: Selection Theory (Fitts law & Steering law sections; STANDARD MENUS section; IMPROVING MENUS section; MARKING MENUS section)](https://www.amazon.com/dp/1423902483/ref=rdr_ext_sb_ti_hist_1)| Introduction of Fitts law; Introduction to Pie and Marking Menus
|       |Exercise Due|[Color Picker](/interaction/assignments/colorpicker)|
|       |Slides|[Predicting and Evaluating Interactor Efficiency](slides/wk04/menus.html)| Apply design tips we've discussed to comparing the efficiency of different variations on interactors; Learn about wide variety of solutions for selection; Learn about Qualitative and Quantitative ways of testing theories|
|**4/25**|**Thursday**|**Implementing App for user study**|
||Assignment| [Menus](/interaction/assignments/menus)| Test which menu is better: Marking menu or Standard Menu
|**4/26**|**Friday**|**Introduction to 3D printing**|
||Slides|[3D Printing Intro](slides/wk04/3dprinting.html)|Learn basics of 3D printing, print the model you created in preparation for class |
{: .small #small.schedule #schedule}

# Week 5: Making more of your phone

| Date | Type | Details | Learning Goal|
|-----|--------|-------|--------|
| **4/29** | **Monday** | **3D Modeling**   | |  
||Preparation|[Install OpenScad]()|Prepare to 3D model using code!
||Preparation|[Try customizing a nametag](https://www.thingiverse.com/thing:2089058/)|Download a 3D model|
||Slides|[Introduction to OpenSCAD/3D modeling](slides/wk05/3dmodeling.html) | Learn about how to create a custom 3D model in OpenSCAD|
| **5/1**  | **Wednesday** | **Running Human Subjects Experiments** | Requirements for running experiments with participants |
||Slides|[Quantitative Study Design/Running](/interaction/slides/wk05/studies.html)|  Understand concepts in data pipeline in an applied fashion including what is our hypothesis, how this translates into study design and method, considerations when interacting with users, data collection cleaning and analysis, some statistical methods, and how we draw conclusions
||Assignment Part 1 Due|[Menus](/interaction/assignments/menus)|
| **5/2**  | **Thursday** | Finalize and print your projects | | 
||Required safety training before class | [Mill safety training](https://reg.hfs.uw.edu/) | All UW students are required to complete the user agreement and safety training online annually.  You will need to swipe to verify you’ve completed this on every entry. |
| **5/3**  | **Friday**    | |  | 
|          | TBD |||
{: .small #small .schedule #schedule}

# Week 6: Accessibility 

|------|-------------|---------------------------------------------------------|
| **5/6**|**Monday**    | **Accessibility**                                       |
|| Slides | Guest lecture by Tracy Tran | Learn about accessibility |
|| Assignment Due    | [Menus Data](/interaction/assignments/menus)                 | Collect data from users |
| **5/8**|**Wednesday** |                                                         |
|| Exercise Assigned | [Accessibility](/interaction/assignments/accessibility) |
|**5/9**|**Thursday** | **Accessibility Exercise**||
|| |In-class demo of accessibility | Learning about how to check accessibility and use a screen reader on your phone|
||Slides| Midterm Review | | 
| **5/10**|**Friday**   |                                                         |
||Midterm|In-class|
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

# Post Lecture (Unused)
|---|--------|--------------------------------------------------------------|
||Required Reading|[Rettig: Prototyping for Tiny Fingers](https://www.cs.odu.edu/~jain/CS441-S18/papers/Prototyping_for_tiny_fingers.pdf)|
|   | Slides | [06: Paper Prototyping](/interaction/slides/wk02/paper.html) |

## Final exam
**6/10**, 8:30-10am in CSE2 G10
