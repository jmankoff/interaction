---
layout: default
---

* TOC
{:toc}

# Sensing Exercise

**Objective**: Access Android sensors as the preparation to build context aware application.

**Android Goals**:
- Learn Android Awareness APIs
- Load sensor data
- Understand how and when to use Snapshot or Fence

**Assigned Date**: ???, 2019

**Due Date**: ???, 2019

Tasks:
- Load data from sensor snapshot
- Use Fence to listen to sensor change

Context awareness capabilities enable mobile phones to sense their physical environment and adapt their behavior accordingly. You can practice how to load data from different sensors in this exercise, as the preparation to build context aware app in the final assignment.

According to Google, "[The Awareness API](https://developers.google.com/awareness/) unifies 7 location and context signals in a single API, enabling you to create powerful context-based features with minimal impact on system resources."

It supports combining and working with 7 signals including time, location, places, beacons, headphones, activity and weather.

There are two ways to get context from sensors: `Snapshot` and `Fence`
- Snapshot will return the most recent (may not be realtime) information from sensor.
- Fence will be triggered when the sensor data changes (based on the signal conditions you set). You may also combine multiple conditions to create a smarter fence.

We already provide example code to get headphone state, using snapshot and fence. Please follow the instruction in code comments to implement the rest of sensing capabilities.

Here are sample screenshots for sensor results:

![Screenshot of sensor list](sensing/1.png){:width="200px"}
![Screenshot of headphone snapshot](sensing/2.png){:width="200px"}
![Screenshot of location snapshot](sensing/3.png){:width="200px"}
![Screenshot of places snapshot](sensing/4.png){:width="200px"}
![Screenshot of weather snapshot](sensing/5.png){:width="200px"}
![Screenshot of detected activity snapshot](sensing/6.png){:width="200px"}
![Screenshot of headphone fence](sensing/7.png){:width="200px"}
![Screenshot of location fence](sensing/8.png){:width="200px"}
![Screenshot of detected activity fence](sensing/9.png){:width="200px"}

Get your own API keys!


```bash0
Notes for TA:

This key is necessary for Awareness API. You may apply a new one, or use this one.

<meta-data
  android:name="com.google.android.awareness.API_KEY"
  android:value="AIzaSyBnMlGBLJ6fcK9Jx6eDmGISfl8Vsp87edo" />

Include this key to make Places API work.

<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="AIzaSyBnMlGBLJ6fcK9Jx6eDmGISfl8Vsp87edo" />

How to simulate detected activity
https://stackoverflow.com/questions/45292256/is-it-possible-to-simulate-detected-activities-for-the-activityrecognitionapi-fo?rq=1
Only works on emulator or rooted device!

adb root
adb shell am broadcast -a com.google.gservices.intent.action.GSERVICES_OVERRIDE -e 'location:mock_activity_type' 'WALKING'

Must restart Google Play Services to refresh sensing:
adb shell ps -A | grep com.google.android.gms.persistent | awk '{print $2}' | xargs adb shell kill

May have delay, but acceptable (30s)
```


# Turnin
## Submission Instructions

Please turn in your files in the following zip structure:

```bash0
YOUR_STUDENT_ID.zip
├── DetectedActivityActivity.java
├── LocationActivity.java
├── PlacesActivity.java
├── WeatherActivity.java
├── DetectedActivityFenceActivity.java
└── LocationFenceActivity.java
```

- Learn Android Awareness APIs
- Load sensor data
- Understand how and when to use Snapshot or Fence


## Grading (10pts)

- Get API Keys: 1pt
- Location: 1pt
- Place: 1pt
- Weather: 1pt
- Activity: 1pt
- Location Fence: 2pt
- Activity Fence: 2pt
- Turn-in and compiles: 1pt
