---
layout: default
---

* TOC
{:toc}

# Sensing Exercise

**Objective**: Access Android sensors as the preparation to build context aware application.

**Learning Goals**:
- Learn Android Awareness APIs
- Load sensor data
- Understand how and when to use Snapshot or Fence

**Assigned Date**: ???, 2019

**Due Date**: ???, 2019

Tasks:
- Load data from sensor snapshot
- Use Fence to listen to sensor change

According to Google, "[The Awareness API](https://developers.google.com/awareness/) unifies 7 location and context signals in a single API, enabling you to create powerful context-based features with minimal impact on system resources."


https://github.com/googlesamples/android-play-awareness
https://github.com/hitherejoe/Aware

Include both to make Places API work.
<meta-data
  android:name="com.google.android.awareness.API_KEY"
  android:value="AIzaSyBnMlGBLJ6fcK9Jx6eDmGISfl8Vsp87edo" />

<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="AIzaSyBnMlGBLJ6fcK9Jx6eDmGISfl8Vsp87edo" />

https://stackoverflow.com/questions/45292256/is-it-possible-to-simulate-detected-activities-for-the-activityrecognitionapi-fo?rq=1
Only on emulator!
adb root
adb shell am broadcast -a com.google.gservices.intent.action.GSERVICES_OVERRIDE -e 'location:mock_activity_type' 'WALKING'

Must restart Google Play Services:
adb shell ps -A | grep com.google.android.gms.persistent | awk '{print $2}' | xargs adb shell kill

May have delay, but acceptable (30s)


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
