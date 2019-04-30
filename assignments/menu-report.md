# Report on Menus Assignment

*Comments about what should be in your report can be found in italics*

## Introduction
*Write two sentences describing the purpose of the experiment. This
can be the same text you use in your [consent form](consent) under
`Introduction and Purpose of study (Beneficience)`*

## Method
**Tasks:** *Describe the 6 conditions of the study. Explain how many
items were selected per menu, and how many times each item was
repeated. Describe how many trials each participant completed. This
should be at most one paragraph*

**Setting:** *What device was used? Was it an emulator? Where did the
experiment take place?*

**Participants:** *Describe your participants (without identifying
them). How were they recruited? How many were there? You can also add
some optional information such as: What was there average age? What
genders were present? How experienced were they with android?* 

**Data Collected:** *What information was collected (time, errors,
etc)*

## Results

*To analyze your data, you should copy the following spreadsheet:
[Google Sheet](https://docs.google.com/spreadsheets/d/1ANFrhla6JEZuKXNWjY6ccPAd5ZeZu7SF1rJd3Awu4_s/edit)
and paste your data into the `Raw Data` subsheet, replacing the
contents/data that we placed there. To use this spreadsheet look at
the `For Charting` sheet to see a chart of your data (you can click on
the hamburger menu in the chart to download it as an image). You can
click on 
`Processed Data` and look at F3-H8 to see what if anything is
significant.  You can also create your own charts if you are
comfortable working in a spreadsheet.*

The results will be broken into two parts. The first will describe the
overall data, including how many erroneous selections took place, and
how fast the user was in each condition.

### Overview

*Describe your thoughts about overall speed in different
conditions. Use at least one chart to illustrate what you say. Here is
an example chart generated using our data, when you paste your data
into the spreadsheet you'll see that it updates to reflect your data* 

![Picture of bar chart showing relative performance of each condition
with invalid data ](menus-img/time-chart.png)

### Statistical Significance

| ANOVA             | SS     | DF | MS    | F      | P value (.05) | P value (.01) | P value (.001) |   
|-------------------|--------|----|-------|--------|---------------|---------------|----------------|
| SS Menu           | 1.554  | 1  | 1.554 | 39.906 | TRUE          | FALSE         | FALSE          |
| SSTask            | 0.985  | 2  | 0.492 | 12.648 | FALSE         | FALSE         | FALSE          |
| Menu Task Between | 1.364  | 5  | 0.273 | 7.006  | TRUE          | FALSE         | FALSE          |
| SSMenu*Task       | 2.0865 | 1  | 2.087 | 53.594 | FALSE         | FALSE         | FALSE          |
| SSwithin          | 3.192  | 82 | 0.039 | 0.000  |               |               |                |
| Total             | 7.817  | 87 |       |        |               |               |                |
{: .small #small .schedule #schedule}

*Include your own table instead*

We studied the difference between conditions.  An ANOVA was used to
compare the main effects of menu type and the interaction effect
between menu type and task type on selection time. The null hypothesis
was that there is no difference between conditions. Menu type included
2 conditions (Normal and Pie) and task type included 3 conditions
(Linear, Relative and Unclassified). The following main effects were
statistically significant: 

*look at F G and H to find p value for rows 4 through 9. Averages for
different conditions can be found in column G (rows 13-18) for
interaction effects and column H and I rows 12-27 for main effects. In
my data, shown above, I'd say:*

*Pie menus were twice as fast as normal menus (M=.48s vs M=.83s),
F(1,82)=39.906, p<.05. We did not find a main effect for task. 
However, we found an interaction effect between menu and task (as
illustrated in the chart above), F(5, 82) = 7, p<.05.*



# Conclusions

*Describe your conclusions. Do you think we should use pie menus more?
What can we conclude from your data?*

