---
layout: slide
title: Introductory Slides--Week 1, Monday-- 
description: Introduction to the course and to HCI
theme: league
transition: slide
---

<section data-markdown>
[//]: # (Outline Slide)
## Today's goals
* **Course staff**
* How we will teach this course
* Learning goals
* Assignments & Grading
* Relevance of HCI to all of Computer Science
</section>


<section data-markdown>
## Jennifer Mankoff
![Headshot of Jennifer Mankoff](/interaction/assets/img/mankoff.jpg)
</section>

<section data-markdown>
## TA XX TODO
![Picture eof TA](/interaction/assets/img/mankoff.jpg)
</section>

<section data-markdown>
[//]: # (Outline Slide)
## Today's  goals
* Course staff
* **How we will teach this course**
* Learning goals
* Assignments & Grading
* Relevance of HCI to all of Computer Science
</section>

<section data-markdown>
## Lecture Structure
Reading, Discussion and Exercises in lectures
- Emphasis on active learning
- Class attendance (and quizzes) instead of midterm
- No other way to get this material
- XX final exam??
</section>

<section data-markdown>
<script type="text/template">
## A typical week includes
- **Monday/Wednesday/Friday:** <br/>Come to class ready
for discussion and activity
- **Tuesday/Thursday/Saturday:** <br/> Do your reading [~10 mins]
- **Wednesday:** <br/>Typically homework due date/assignment date
- **Thursday:** <br/>Come to lab ready to work on your homework

Stay on top of reading  to make time  for homework!
</script>
</section>

<section data-markdown>
  ## Language: Java
Java is our primary language 
- Need 143 or equivalent
- Comfortable in Java
- We will use trees, state machines, etc.
</section>

<section data-markdown>
<script type="text/template">
## Platform: Android
Most commonly used Interface development platform<br/>
for Java

- Buy an android phone (no tablets)
- Version 8+, "Oreo", or above
- Need sufficient memory/disk space to run <br/>
Android Studio & emulators
- Ask questions on Piazza if you need more guidance
</script>
</section>


<section data-markdown>
<script type="text/template">
## Where to find what
- We use [github](https://github.com/jmankoff/interaction) extensively
- We will use Piazza for course discussions
- We will use Canvas for the course schedule <br/>
and link to everything
else from there
- Office hours will be posted on Piazza<br/>
but are also by appointment 
</script>
</section>

<section data-markdown>
<script type="text/template">
## Required [Android](https://www.amazon.com/dp/1977540090/ref=rdr_ext_tmb) book

{% include figure.html title="test" file="androidbook.jpg" alt="Picture of book cover for Android textbook, Android Studio 3.0 Development Essentials" %}
</script>
</section>

<section data-markdown>
<script type="text/template">
## Required [UI](https://www.amazon.com/dp/1423902483/ref=rdr_ext_sb_ti_hist_1) book

{% include figure.html title="test" file="ui.jpg" alt="Picture of book cover for UI textbook, Building Interactive Systems by Dan R. Olsen, Jr." %}
</script>
</section>

<section data-markdown>
  ## Expectations
- **Background**: Lots of programming expected
- **Sharing**:
 - Many assignments done in pairs
 - Outside of that, documentation is key
</section>

<section data-markdown>
  ## Expectations
- **Accessibility**: This course is accessible
- **Inclusivity**: An important value in this class, and in HCI!
- **Language**: I am Jen, or Prof. Mankoff.
- **Pronouns**: She/her.

  If you run into problems, or have preferences about these issues, please tell me!
</section>

<section data-markdown>
[//]: # (Outline Slide)
## Today's  goals
* Course staff
* How we will teach this course
* **Learning goals**
* Assignments & Grading
* Relevance of HCI to all of Computer Science
</section>

<section data-markdown>
## This week's learning goals
* What is HCI? Past, present and future
* Get up to speed with Android basics
* Learn about basic abstractions for UI implementation
* Names for common interactors
</section>

<section data-markdown>
## Course learning goals: 
Building Interfaces
- Deep understanding of **how to build user interfaces**
 - Basic abstractions (layout, event handling, *etc.*)
 - Implementing best practices: Undo, Accessibility, Feedback, Errors,
*etc.*
 - Exploration of advanced UI concepts: Ubicomp, Sensing, AR, *etc.*

</section>

<section data-markdown>
  ## Course learning goals:
  Iterative Design
- Basic understanding of **Iterative Design**
 - Why designers are valuable
 - Iterative design process
 - How designers get data from users

</section>

<section data-markdown>
[//]: # (Outline Slide)
## Today's goals
* Course staff
* How we will teach this course
* Learning goals
* **Assignments & Grading**
* Relevance of HCI to all of Computer Science
</section>

<section data-markdown>
## Assignment Structure
Assignments: Implementation of Interfaces
- Practical help with assignments in lab
- Code tested with unit tests
- Applications tested through user studies you run
- Some basics handled in code review
</section>

<section  style="text-align: left;" data-markdown>
## First Assignment: Your own 'Doodle' (solo)
Learning goals
- Demonstrate that you got android working
- Demonstrate basic knowledge of graphics methods for drawing things
on screen

Grading
- Grading is based on test cases and peer review
</section>


<!-- <section data-markdown> -->
<!-- ## First Assignment: Your own 'Doodle' -->
<!-- - 50% Load images/draw/write text on screen -->
<!--  - implement 3 methods to do this -->
<!--  - we will grade using test cases -->
<!--  - source code required -->
<!-- - 40% Make it look nice -->
<!--  - Make something you're proud of -->
<!--  - Challenge option: Add animation  -->
<!--  - Peer graded (with APK only) -->
<!-- - 10% Turned in on time, passes code review -->
<!-- </section> -->

<section  style="text-align: left;"  data-markdown>
## Mini Assignment: Layout (solo)
Learning goals: Create a layout to a spec
 - Reproduce three layouts we give you
 - Should position things as shown in the image
 - Should resize appropriately if phone is turned

Grading
- Mini Assignments are Pass/Fail only
- Mini Assignments are auto graded and/or peer graded
</section>

<section  style="text-align: left;"  data-markdown>
## Mini Assignment: Event Handling XX main assignment? (solo)
Learning goals: React to events
 - Reproduce an interactor we give you
 - Should use a state machine to manage feedback
 - Should handle error cases appropriately

Grading
- Mini Assignments are Pass/Fail only
- Mini Assignments are auto graded
</section>

<section data-markdown>
  ## Second Assignment: Implement and run a user study (pair)
  Learning goals: End to end application; Interacting with users
  - Reproduce an application 
  - Record data to spec
  - Produce plausible results (within expected ranges)
<!-- - 50% Application meets specs -->
<!--  - Running tests generates data file properly -->
<!-- - 40% User study meets specs -->
<!--  - Correct results handed in -->
<!--  - Data analysis produces plausible numbers -->
<!-- - 10% Turned in on time, passes code review -->
</section>

<section  style="text-align: left;"  data-markdown>
## Mini Assignment: Make an application accessible (solo)
Learning goals: Android Accessibility
 - Use Android accessibility features
 - Identify accessibility problems
 - Understand Android accessibility limitations
</section>

<section data-markdown>
  ## Mini Assignment: Implement support for Undo (solo)
  Learning goals: Undo Abstractions
  - Command objects
  - Separation of concerns
  - Build
</section>


<section data-markdown>
  ## Mini Assignment: Implement support for sensing (solo)
  Learning goals: Using android sensors
  - Using the Aware api
  - Data storage and loading
</section>

<section data-markdown>
  ## Third Assignment: Implement an context aware app (pair)
  Learning goals: Design context-aware application, Heuristic Eval
  - Reproduce an application 
  - Collect data using Heuristic Evaluation
  - Iterate 
</section>

<section data-markdown>
[//]: # (Outline Slide)
## Today's  goals
* Course staff
* How we will teach this course
* Learning goals
* Assignments & Grading
* **Relevance of HCI to all of Computer Science**
</section>

<section data-markdown>
### Human-Computer Interaction (HCI)
A science of the artificial
- Human
 - Anyone impacted by the existence of the program
 - end users
- Computer
 - Artificial thing human is interacting with
- Interaction
 - How the artificial stuff is actually used
 - 48% of app code [Myers & Rosson, CHI'92]; probably more now!
</section>

<section data-markdown>
<script type="text/template">
{% include figure.html title="Mobile Telegraph"
file="mobile-telegraph.png" alt="Couple with cordless telegraph
apparatus" caption="Robida's vision of a cordless telegraph (1906)"  height="500px"%}
</script>
</section>

<section data-markdown>
<script type="text/template">
{% include figure.html title="Video phones"
file="videophones.png" alt="Two women using video phones"
caption="Commercial vision of a wireless private video phone  (1929)"  height="500px"%}
</script>
</section>

<section data-markdown>
<script type="text/template">
{% include figure.html title="MEMEX"
file="memex.png" alt="Vannevar Bush's imagined Memex, a desk with mechanical and digital innards" caption="The MEMEX 'is a desk that can instantly bring files and material on any subject to the operators fingertips....' (Bush, 1945, 'As We May Think', Atlantic Monthly)"  height="500px"%}
</script>
</section>

<section data-markdown>
  <script type="text/template">
    {% include figure.html title="Portable Watch"
file="watches.png" alt="A prototype of a wearable wristwatch/cellphone
and Dick Tracy using it in a stamp based on the comic strip"
caption="A wrist-watch cellphone prototype (1947), which captured
popular imagination as shown in this Dick Tracy stamp" height="300px"%}
  </script>
  
</section>

<section data-markdown>
  <script type="text/template">
    {% include figure.html title="Sketchpad" file="sutherland.png" alt="A young man sitting at a complex machine covered in buttons, drawing on the screen with a pen" caption="Ivan Sutherland. 1964. The sketchpad graphical communication system in action." height="400px" %}

<small> In Proceedings of the SHARE design automation workshop (DAC '64). ACM, New York, NY, USA, 6.329-6.346.</small>
</script>
</section>

<section data-markdown>
  <script type="text/template">
    {% include figure.html title="Sketchpad" file="sketchpad-screens.png" alt="Four screen shots of a vector-based diagram being created within Sketchpad" caption="Sketchpad introduced direct manipulation, constraints, and chorded input." height="400px" %}

</script>
</section>


<section data-markdown>
## Sketchpad Inspires Engelbart
</section>


<section data-markdown>
  <script type="text/template">
    {% include figure.html title="Engelbart" file="engelbart.png" alt="Two images -- a man giving a live demo of a text based interface; and a wooden computer mouse." caption="Engelbart's *Mother of all Demos*, in December 9, 1968 at the Fall Joint Computer Conference. His presentation included windows; hypertext; graphics; video conferencing; the computer mouse; word processing; dynamic file linking; revision control; collaborative real-time editing, all new inventions!" height="400px" %}
</script>
</section>

<section data-markdown>
  <script type="text/template">
    {% include figure.html title="Xerox Star" file="star.png" alt="A desktop personal computer showing a WYSIWYG word processor and graphical window system" caption="Engelbart inspires many things, including the Xerox Star, the first graphical personal computer" height="400px" %}
</script>
</section>


<section data-markdown >
  <script type="text/template">
  # HCI in the Present
  Discussion: How is it changing us as individuals and a society?
  <aside class ="notes">
  - Social networking has been implicated in revolutions and elections.
  - Interfaces designs have impacted health and safety. 
  </aside>
  </script>
</section>


<section data-markdown >
  # HCI in the Future
  How do we invent a preferable future? an inclusive future?
  - What will the future look like?
  - Who needs to help design the future for us to achieve this?
  - Who needs to use technology in the future for us to achieve this?
</section>

<section data-markdown >
  # HCI in the Future
  Watch videos and discuss
   Victoria Belotti; Tovi Grossman; Jon Froehlich (here); Leysia Palen; Many more if you want to keep exploring. 

</section>
