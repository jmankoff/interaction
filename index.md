---
layout: default
---

 <h1> Welcome to Interaction Programming! </h1>
Interactive technology is changing society. Some of today’s interfaces are used by a billion people at a time. Almost everything we create is created for people to use, through user interfaces. We will learn about interactive systems, including programming paradigms and design of event handling, layout, undo, accessibility and context awareness.

For quick links to key things,
check out the navbar above and the table of contents here:
* TOC
{:toc}

# Class Instructors, time and date

CSE 340 will be held on M/W/F at 10:30am
Labs will be Thursday morning

CSE 340 is taught by <a href="make4all.org">Jennifer Mankoff</a>.  Ryan Rowe  is Head TA.

| Instructor | Role | Office Hour Time/Location |
| ---------- | ---- | ------------------------- |
| Jennifer Mankoff | Instructor | 2:30pm to 4pm, Gates 211 |
| Ryan Rowe | Head TA | Fridays 1:30-3pm, Gates 150 |
| Saidutt Nimmagadda | TA | Mondays 12-1pm, Allen Center 021 |
| Adam Towers | TA | Tuesdays 12pm-1pm, Gates 153 |
| Harshitha Akkaraju | TA | Wednesdays 1pm-2pm, Gates 150 |

# Should I take this class?
Yes! Some of today’s interfaces are being used by a billion people at
a time. Almost everything we create is created for people to use, and
user interfaces are how people interact with anything else you do
(whether it is a new machine learning algorithm or a database
system). User interfaces are incredibly important, but they also
represent a different programming paradigm than you may have learned
before. This class will teach you
- How to write an event-driven program which reacts to user input and
displays output. If you’ve never done this before, the abstractions
you will learn are standard in almost any user interface toolkit. Even
if you have, too often, without attention to structure, interfaces
become impenetrable spaghetti code.  
- How to think about the design of novel interaction techniques. As
devices diversify, so too do the ways in which people interact, from
voice based interfaces to augmented reality. By understanding the
principles of interaction technique design you can do a better job of
making interactions that users will want, which improves both the user
experience and the business value of what you create.
- How to avoid common gotchas in the implementation of user
interfaces. We will teach you the proper way to implement Undo, create
Accessible Interfaces. We will also touch on other necessities (no
modal dialogues; good use of color; inclusion of support for help and
so on).  

Taking a class is a big commitment, and you will work hard in this
class. So we want to help you make sure this is the right class for
you. Below is some information about prerequisites and expectations.

# Prereqs and expectations
The only requirement for this class is that you have taken CS 142 and
143 or an equivalent class, meaning you are comfortable programming in
Java, and have some experience with data structures. However, if you
are not comfortable working in an IDE environment, using version
control, and picking up and working with someone else’s library code,
you will likely need to plan for extra time with TAs, and possibly
attend extra tutoring sessions, to keep up with the class.
A good plan is to take 391 just before or concurrently with 340 to learn some of these things.

The specific platform and language for this class are Java on Android
phones (or simulators); using the IntelliJ IDE (Android Studio). While
Google is switching over to Kotlin, there are good reasons to [start
learning Android with Java first](https://dzone.com/articles/java-vs-kotlin-which-language-android-developer-sh).

Note that this class is designed for CS majors, and other students who
work regularly with information technology and are strong
programmers. While we will consider applications from outside the
major, in its first year, financial and room restrictions may limit
space for such students.

# Other relevant classes to know about
There are a number of classes on campus that teach related concepts
which you may wish to consider in addition to this one. As of summer,
2018, here are the ones we are aware of:

- HCID 520: User Interface Software +
Technology ([Wi 17](http://uwdata.github.io/hcid520/17wi/), [Wi 16](http://faculty.washington.edu/ajko/hcid520/))
This course
teaches about user interfaces, including what they are, how they are
built, and some inventions in user interface software and
technology. There are many similarities between these classes. However HCID 520
is only open to [MHCI+D students](https://mhcid.washington.edu/) Masters students.
- [HCDE 310: Interactive Systems Design &
Technology](https://www.smunson.com/teaching/hcde310/a13/) This course is a
project based course that teaches how to prototype applications on the
web using Python that solve human problems or enable new
activities. Includes information about APIs and how people interact with them. It
differs from CSE 340 in its choice of platform. Additionally, it
doesn’t cover the theory of UI programming, nor issues such as
accessibility, undo, and so on.   
- [INFO 343: Client side web
development](https://canvas.uw.edu/courses/1118282) This is a
programming course, and there will be significant overlap between the
courses, as INFO 343 also touches on event based programming, output,
and accessibility. [CSE 154: Web
Programming](https://courses.cs.washington.edu/courses/cse154/18sp/)
also covers some related
material. However, both are about programming on the web using
JavaScript instead of on Android, using Java. In addition, CSE 340
covers more of the theory of UI programming and design, similar to
HCID 520.  
- [HCID 521: Prototyping](https://canvas.uw.edu/courses/1128377/assignments/syllabus)
This class is for the [MHCI+D students](https://mhcid.washington.edu/)
only and focuses on prototyping techniques, not implementation. It
covers everything from paper prototyping to physical interfaces to 3D
printing.  
- [CSE 440: Introduction to
HCI](http://courses.cs.washington.edu/courses/cse440/);  [441: Advanced HCI](http://courses.cs.washington.edu/courses/cse441/) This is an advanced series of courses for undergraduate
seniors. The focus of 440 is less on programming and more broadly on
methods for designing, prototyping, and evaluating user interfaces to
computing applications, while 441 is an open ended capstone
course. These are excellent follow on courses to 340, for a student
who wants to go deeper into how to make usable, enjoyable effective
interfaces, and how to solve interesting problems with HCI. Related is
[CSE 510](http://courses.cs.washington.edu/courses/csep510/), the HCI
course for the professional masters program.

# Resources
- Optional textbook: (but finding a good introduction of your own is
recommended): {{site.androidbook}}
- Required textbook: {{site.hcibook}}
- Programming Platforms: Android Platform/Github

# Course Structure

Many of the goals in this class center around learning by doing. This
means that hands on time trying out everything from implementation to
evaluation is critical to learning. An educational approach that can
support this is active learning. To support this, readings and videos
will be available *ahead* of class, while class time will be used as
much as possible for activities, discussion, review, and
homework. This means you'll be getting information at home and doing
problem sets in lecture, rather than the reverse. We will help to support
and guide your learning, but your preparation outside of class is
*essential*.


**Why break the mold of standard lecture classes?** I believe that
  this will *improve your learning*.I also value the chance to support
  you while you do work on assignments and practice material. However
  this requires you to be independent and accountable for
  your own learning, stay on top of course materials, bring your
  questions to class and seek help if there are problems.

# Workload
This is a challenging, four credit class, meaning you should expect 8
hours of homework a week. We hope make the workload as predictable as
possible. You can expect your weeks to look look something like this:
- **Monday:** 	Come to class ready for discussion and activity
- **Tuesday:**     	Do your Wednesday reading and quiz [10 minutes]
- **Wednesday:** 	Come to class ready for discussion and activity;
		Finish your homework by class today [6-7 hours]
- **Thursday:**    	Come to lab ready to work on your homework;
	          	do your Friday reading and quiz [10 minutes]
- **Friday:** 	Come to class ready for discussion and activity
- **Weekend:** 	Focus on your homework. Most Monday classes will have no assigned reading.

Homework takes two forms -- exercises and assignments. Exercises are assigned on Thursdays and due on Mondays. Assignments typically have two weekends to be completed.

# Class Coordination
We want you to succeed in this class, and an important way that you do
that is by asking questions and discussing course issues with your
peers and teaching staff. Some ways to do that include:
- We have a class discussion board on [Piazza]({{site.piazza}}), where you can
make public posts that benefit the whole class, and are answered more
quickly because your fellow students can help the course staff by
responding also. This is the best way to ask questions about things
like homework. Before posting, please search through the questions
that have already been posted in case someone has already asked the
same question.
- We hold office hours (see [Piazza Staff Page]({{site.piazza}}/staff)). If none of those times work for
you. You can also discuss matters with us privately on
[Piazza]({{site.piazza}}). Using Piazza gets
the whole course staff at once and is usually faster than
email. Lastly, if none of these work for you you can send an email
asking to set up an appointment.

# Class Expectations
The class is a shared learning environment, and it is important that
you treat everyone in the class with respect. Some specific things we
will do to try to make the class a welcoming environment:
- **Accessibility**: I have attempted to make all the course materials
accessible according to web standards. If you need any additional
support, I am always happy to work with you and the Disabled Students Office to make sure
that the class meets your needs
- **Inclusivity**: I will be working toward a broad base of examples,
and a welcoming environment for all. Please let me know if you see
opportunities to improve this.
- **Sharing and Group Projects**: Working together is encouraged, as
long as you in the end implement your own code, and make sure to
document any information you get from other students. You will work on
one of your projects in pairs.
- **Pronouns**: I use she/her, please let me know if you have any specific pronoun preferences

# Grading

Grades will be assigned approximately as follows:
- 25%: Exercises (Five of these)
- 45%: Assignments (Three of these)
- 10%: Effort, participation and altruism
- 20%: Exams

This maps to the 4.0 scale roughly as follows. You will get at least the grade below for the percentage shown:
- 90%: at least 3.5
- 85%: at least 3.0
- 80%: at least 2.5
- 75%: at least 2.0
- 70%: at least 1.5
- 60%: at least 0.7

# Late Days

Each homework will allow late days with a 10% penalty per day. Partial days may not be used (i.e., 12 hours late is a 10% deduction, not 5%). For exercises, only one late day is allowed and subsequent turn-ins will be given a zero. For assignments, up to three late days are allowed after which turn-ins will be given a zero.


<!-- Text can be **bold**, _italic_, or ~~strikethrough~~. -->

<!-- [Link to another page](./another-page.html). -->

<!-- There should be whitespace between paragraphs. -->

<!-- There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project. -->

<!-- # Header 1 -->

<!-- This is a normal paragraph following a header. Github is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. -->

<!-- ## Header 2 -->

<!-- > This is a blockquote following a header. -->
<!-- > -->
<!-- > When something is important enough, you do it even if the odds are not in your favor. -->

<!-- ### Header 3 -->

<!-- ```js -->
<!-- // JavaScript code with syntax highlighting. -->
<!-- var fun = function lang(l) { -->
<!--   dateformat.i18n = require('./lang/' + l) -->
<!--   return true; -->
<!-- } -->
<!-- ``` -->

<!-- ```ruby -->
<!-- # Ruby code with syntax highlighting -->
<!-- GitHubPages::Dependencies.gems.each do |gem, version| -->
<!--   s.add_dependency(gem, "= #{version}") -->
<!-- end -->
<!-- ``` -->

<!-- #### Header 4 -->

<!-- *   This is an unordered list following a header. -->
<!-- *   This is an unordered list following a header. -->
<!-- *   This is an unordered list following a header. -->

<!-- ##### Header 5 -->

<!-- 1.  This is an ordered list following a header. -->
<!-- 2.  This is an ordered list following a header. -->
<!-- 3.  This is an ordered list following a header. -->

<!-- ###### Header 6 -->

<!-- | head1        | head two          | three | -->
<!-- |:-------------|:------------------|:------| -->
<!-- | OK           | good swedish fish | nice  | -->
<!-- | out of stock | good and plenty   | nice  | -->
<!-- | ok           | good `oreos`      | hmm   | -->
<!-- | ok           | good `zoute` drop | yumm  | -->

<!-- ### There's a horizontal rule below this. -->

<!-- * * * -->

<!-- ### Here is an unordered list: -->

<!-- *   Item foo -->
<!-- *   Item bar -->
<!-- *   Item baz -->
<!-- *   Item zip -->

<!-- ### And an ordered list: -->

<!-- 1.  Item one -->
<!-- 1.  Item two -->
<!-- 1.  Item three -->
<!-- 1.  Item four -->

<!-- ### And a nested list: -->

<!-- - level 1 item -->
<!--   - level 2 item -->
<!--   - level 2 item -->
<!--     - level 3 item -->
<!--     - level 3 item -->
<!-- - level 1 item -->
<!--   - level 2 item -->
<!--   - level 2 item -->
<!--   - level 2 item -->
<!-- - level 1 item -->
<!--   - level 2 item -->
<!--   - level 2 item -->
<!-- - level 1 item -->

<!-- ### Small image -->

<!-- ![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png) -->

<!-- ### Large image -->

<!-- ![Branching](https://guides.github.com/activities/hello-world/branching.png) -->


<!-- ### Definition lists can be used with HTML syntax. -->

<!-- <dl> -->
<!-- <dt>Name</dt> -->
<!-- <dd>Godzilla</dd> -->
<!-- <dt>Born</dt> -->
<!-- <dd>1952</dd> -->
<!-- <dt>Birthplace</dt> -->
<!-- <dd>Japan</dd> -->
<!-- <dt>Color</dt> -->
<!-- <dd>Green</dd> -->
<!-- </dl> -->

<!-- ``` -->
<!-- Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this. -->
<!-- ``` -->

<!-- ``` -->
<!-- The final element. -->
<!-- ``` -->
