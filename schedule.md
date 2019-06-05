---
layout: default
---

* TOC
{:toc}

# Week 1: What's in an Interface 

| Date | Type | Details | Learning Goal|
|------|-------|-------------------------------|----|
|**4/1**|**Monday** | **Why take this course? What is HCI?** | |
|| Lecture | [Introduction to course](/interaction/slides/wk01/intro.html) | Relevance of class to all of CS | 
|**4/3**|**Wednesday** | **Basic Structure of Interaction** ||
||Reading <br> (10 min) | Chapter 1: Introduction from {{site.hcibook}}  | Structure of course; History of interface innovation | 
||Reading <br> (10 min) | [Understanding Android Application and Activity Lifecycles](https://developer.android.com/guide/components/activities/activity-lifecycle) | Getting up to speed on Android | 
||Preparation (10-20 min) | Get up to speed on Android | Download Android Studio and follow [this tutorial]( https://developer.android.com/training/basics/firstapp) to create an Android Application. Continue with the tutorial to also [run your app](https://developer.android.com/training/basics/firstapp/running-app) either on an emulator or on your phone. Here is [additional information on android studio setup](slides/wk01/setup-android.html)|
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Exercise Assigned | [Doodle](/interaction/assignments/doodle)| Getting up to speed on Android; Basics of drawing on the screen | 
||Lecture | [Core Toolkit Abstractions](/interaction/slides/wk01/MVC.html)| Toolkit User Types; Basic structure of a user interfaces; Common interactors|
|**4/4**|**Thursday** | **Introduction to Android (active)**| Android project structure; Hello World|
||Lecture| [Hello World](/interaction/slides/l01/hello.html)| Android 
||For your reference |[Doodle](/interaction/slides/l01/doodle.html) |
||For your reference |[Java Refresher](/interaction/slides/l01/java.html) |
||For your reference |[Git](/interaction/slides/l01/git.html) |
|**4/5**|**Friday**| Drawing on the Screen (active)|
||Reading (10 min)| Chapter 2 from Drawing from {{site.hcibook}}| Basic drawing abstractions | 
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Lecture|[Drawing](/interaction/slides/wk01/Drawing.html)| drawing abstractions; clipping and other transformations|
{: .small #small .schedule #schedule}

# Week 2: Output it to me

| Date | Type | Details | Learning Goal|
|------|-------|-------------------------------|----|
|**4/8**|**Monday**| **Drawing Interfaces: MVC and Component Hierarchies** ||
||Lecture|[Drawing & Animation](/interaction/slides/wk02/Android-drawing-views.html)|  Deeper understanding of Views, Bitmaps Canvas, Paths and Animation | 
|**4/10**|**Wednesday**| **Layout** ||
||Optional Reading (10 min)| [Layouts (Overview)](https://developer.android.com/guide/topics/ui/declaring-layout) and [Building a Responsive UI](https://developer.android.com/training/constraint-layout) | Android's approach to layout 
||Lecture|[Layout](/interaction/slides/wk02/layout.html)| Relating layout to the interactor hierarchy 
||Exercise Due|[Doodle](/interaction/assignments/doodle) |
|**4/11**|**Thursday**|Layout Exercise Assigned|
||Exercise Assigned|[Layout](/interaction/assignments/layout)| Implementing layout using GUI and programmatic abstractions
||Lecture|[Layout in Android](/interaction/slides/l02/layout.html)| Android specific layout information
|**4/12**|**Friday**| **Properties of People I: Visual Perception**|
||Required Reading (10 mins)|[Chapter 5 through p. 128: Layout and Constraints](https://www.amazon.com/dp/1423902483/ref=rdr_ext_sb_ti_hist_1) | Abstractions for positioning interactors on the screen and making responsive interfaces 
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Lecture|[Properties of People I: Vision](/interaction/slides/wk02/people-vision.html)| Design implications of people's visual capabilities | 
||Peer-Grading Due| Peer grading assignments for Doodle are due at 11:59 PM |
{: .small #small .schedule #schedule}

# Week 3: Interact With Me

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
|**4/15**|**Monday**|Event Handling I: Input Devices, Events and Event Delivery|
||Lecture|[Event Handling](/interaction/slides/wk03/events.html)| How events are dispatched to interactors|
|**4/17**|**Wednesday**|**MVC at the Interactor Level Essential Geometry and Essential Behavior**|
||Required Reading (10 min)|Chapter 3: Event Handling {{site.hcibook}} pp. 43-52 (on Input Events); 59-63 (Listeners)| Basics of event handling including event types and listeners
||Reading Quiz|[On Canvas]({{site.canvas}}), due tuesday night|
||Lecture| [Essential Behavior: Finite State Machines](/interaction/slides/wk03/state.html)| Essential Behavior and the use of final state machines to implement it |
|**4/18**|**Thursday**|**Build your own Interactor exercise**|
||Exercise Due|[Layout](/interaction/assignments/layout)|
||Exercise Assigned|[Color Picker](/interaction/assignments/colorpicker)| Handle input; Create a non-rectangular interactor; Implement a finite state machine
|**4/19**|**Friday**|**Finite State Machines**|
||Required Reading|Chapter 11: Input Syntax Specification {{site.hcibook}}| Essential Behavior and the use of final state machines to implement it |
||Optional Reading|[Custom View Components](https://developer.android.com/guide/topics/ui/custom-components)|
||Reading Quiz|[On Canvas]({{site.canvas}}), due night before|
||Lecture|[Essential Geometry and View Update](/interaction/slides/wk03/viewupdate.html)| Toolkit abstractions for responding to events
{: .small #small .schedule #schedule}

# Week 4: Tell me all about it

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
|**4/22**|**Monday**|**Motor Control**| 
||Lecture|[Properties of People II: Motor Control](/interaction/slides/wk04/people-motor.html)| Motor behavior basics and implications for design including Fitts' law and Guiard's theory of bimanual input 
|       | Coe In-class assessment 11-11:20am | | Give us feedback about the class!
|**4/24**|**Wednesday**|**Predicting and Evaluating Interactor Efficiency**|
||Required Reading|[Chapter 20: Selection Theory (Fitts law & Steering law sections; STANDARD MENUS section; IMPROVING MENUS section; MARKING MENUS section)](https://www.amazon.com/dp/1423902483/ref=rdr_ext_sb_ti_hist_1)| Introduction of Fitts law; Introduction to Pie and Marking Menus
|       |Exercise Due|[Color Picker](/interaction/assignments/colorpicker)|
|       |Lecture|[Predicting and Evaluating Interactor Efficiency](slides/wk04/menus.html)| Apply design tips we've discussed to comparing the efficiency of different variations on interactors; Learn about wide variety of solutions for selection; Learn about Qualitative and Quantitative ways of testing theories|
|**4/25**|**Thursday**|**Implementing App for user study**|
||Assignment| [Menus](/interaction/assignments/menus)| Test which menu is better: Marking menu or Standard Menu
|**4/26**|**Friday**|**Introduction to 3D printing**|
||Lecture|[3D Printing Intro](slides/wk04/3dprinting.html)|Learn basics of 3D printing, print the model you created in preparation for class |
{: .small #small.schedule #schedule}

# Week 5: Making more of your phone

| Date | Type | Details | Learning Goal|
|-----|--------|-------|--------|
| **4/29** | **Monday** | **3D Modeling**   | |  
||Preparation|[Install OpenScad]()|Prepare to 3D model using code!
||Preparation|[Try customizing a nametag](https://www.thingiverse.com/thing:2089058/)|Download a 3D model|
||Lecture|[Introduction to OpenSCAD/3D modeling](slides/wk05/3dmodeling.html) | Learn about how to create a custom 3D model in OpenSCAD|
| **5/1**  | **Wednesday** | **Running Human Subjects Experiments** | Requirements for running experiments with participants |
||Lecture|[Quantitative Study Design/Running](/interaction/slides/wk05/studies.html)|  Understand concepts in data pipeline in an applied fashion including what is our hypothesis, how this translates into study design and method, considerations when interacting with users, data collection cleaning and analysis, some statistical methods, and how we draw conclusions
||Assignment Part 1 Due|[Menus Programming](/interaction/assignments/menus)|
| **5/2**  | **Thursday** | Finalize and print your projects | | 
||Required safety training before class | [Mill safety training](https://reg.hfs.uw.edu/) | All UW students are required to complete the user agreement and safety training online annually.  You will need to swipe to verify you’ve completed this on every entry. |
| **5/3**  | **Friday**    | |  | 
||Lecture| [Midterm Review](slides/wk05/midterm-review) | Overview of first 5 weeks of the quarter | 
{: .small #small .schedule #schedule}

# Week 6: Accessibility 

| Date | Type | Details | Learning Goal|
|------|-------------|---------------------------------------------------------|
| **5/6**|**Monday**    | **Accessibility**                                       |
|| Lecture | [Slides](/interaction/slides/wk06/Introduction to Accessibility and Inclusive Design.pdf) [Video](https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=de948795-52c9-49d3-be5c-aa1d0134761b)| Guest lecture by Tracy Tran. Learn about accessibility |
| **5/8**|**Wednesday** |
|| Assignment Part 2 Due    | [Menus Data](/interaction/assignments/menus)                 | Collect data from users |                                                         |
|**5/9**|**Thursday** | **Accessibility Exercise**||
|| |In-class demo of accessibility | Learning about how to check accessibility and use a screen reader on your phone|
||Lecture| [Lab slides](slides/l06/accessibility) | Overview of first 5 weeks of the quarter | 
|| Exercise Assigned | [Accessibility](/interaction/assignments/accessibility) |
| **5/10**|**Friday**   |                                                         |
||Midterm|In-class|
{: .small #small .schedule #schedule}

# Week 7: Undo it please

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
| **5/13**|**Monday**   | **Application Design**     ||
||Lecture|[Application Design Principals](/interaction/slides/wk07/interaction.html)| Mental models, gulf of execution, gulf of evaluation |
| **5/15**|**Wednesday**  | **Undo**     ||
|| Exercise Due  | [Accessibility](/interaction/assignments/accessibility) | |
|| Assignment Assigned: | [Undo](/interaction/assignments/undo)| |
||Lecture|[Undo](/interaction/slides/wk07/undoSlides.html)| Theory and implementation of Undo |
| **5/16**|**Thursday** | Getting started with Undo ||
||Lecture|[Undo lab](/interaction/slides/l07/undo_lab.html)|         |
| **5/17** |**Friday**   |  **Heuristic Evaluation**                    |
||Lecture|[Heuristic Evaluation](/interaction/slides/wk07/heuristic.html)| Learn about a quick way to get feedback on the quality of your application, particularly good for focused tasks on screens. 
{: .small #small .schedule #schedule}

# Week 8: There's a world out there!

| Date | Type | Details | Learning Goal|
|-----|--------|-------------------------------|
| **5/20** |**Monday**   |  **Context Awareness**                   |
||Lecture|[The Physical Phone](/interaction/slides/wk08/context.html)| Assumptions about phone use and examples of context aware applications |
| **5/20** | **Tuesday** | 
||Assignment: Undo Due|[Undo](/interaction/assignments/undo)|
| **5/21** |**Wednesday**   | **Midterm Recap**  |
||Lecture|[Midterm Recap](/interaction/slides/wk08/midterm.html)||
||Lecture|[Phone Sensing](/interaction/slides/wk08/sensing.html)||
| **5/22** |   | Passive Data Collection on the Phone |
||Undo Heuristic Eval Due|[Section](/interaction/slides/l08/lab8.html)|
| **5/24** |   | Augmented Reality on the Phone       |
||Reading Quiz [Undo](https://canvas.uw.edu/courses/1317447/quizzes/1133592)| | Reading quiz on undo material. We did not assign a reading and you can do this quiz without reading, but Chapter 16 is optional reading for this module |
||Lecture|[AR](/interaction/slides/wk08/ar.html)||
{: .small #small .schedule #schedule}

# Week 9: Putting it in context

| Date | Type | Details | Learning Goal|
|-------|------|--------|-------------|
|**5/27**|Memorial Day**|**No Class**||
||Assignment: Context Awareness I|[Sensing](/interaction/assignments/sensing)||
||Assignment: Context Awareness II (Group)|[Context Awareness](/interaction/assignments/contextaware)||
|**5/29**|**Wednesday** |Sensing Assignment||
||Lecture|[Sensing Assignment](/interaction/slides/wk09/sensing-assignment.html)|Description of some key things you need to do to implement Sensing, discussion of the context awareness assignment|
|**5/30**||||
|**5/31**||||
||Lecture|[Behavior Change](/interaction/slides/wk09/behavior-change.html)|Discussion of behavior-change interfaces, which frequently use mobile device. |
||Assignment Due: Context Awareness I|[Sensing](/interaction/assignments/sensing)||
{: .small #small .schedule #schedule}

# Week 10: I think therefore I am

| Date    | Type                                         | Details                                                                | Learning Goal                                                                                                       |
|---------|----------------------------------------------|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **6/3** | Lecture                                      | In-class group work                                                    | Please make every effort to attend. Group work to help you make progress on your final project & class evaluations. |
| **6/5** | Lecture                                       | [Machine Learning on Mobile Devices](/interaction/slides/wk10/ml.html) | Basic logic behind machine learning and some of the relevant risks                                                                                                                    |
| **6/6** | Lab                                          | Group work and help                                                    | Please make every effort to attend. Group work requires in person time and coordination.                            |
| **6/7** | Lecture TBD                                   | Final exam review                                                      |                                                                                                                     |
|         | Assignment Due: Context Awareness II (Group) | [Context Awareness](/interaction/assignments/contextaware)             |                                                                                                                     |
{: .small #small .schedule #schedule}

## Final exam
**6/10**, 8:30-10am in CSE2 G10


