---
layout: assignment
title: Sensing
code: EX5

assigned: Monday, May 28, 2019
due: 11:59 PM Friday, June 3, 2019
revised: 2:01 PM Wednesday, April 10, 2019

objective: Access Android sensors as the preparation to build context aware application.

android_goals:
  - Learn Android Awareness APIs
  - Load sensor data
  - Understand how and when to use Snapshot or Fence
hci_goals:
  - Create an app that uses implicit data
---

- TOC
{:toc}

Tasks:
- Add snapshot support for the following sensors:
  - Headphone
  - Location
  - User Activity
- Use fence suppor to listen for changes to the following sensors:
  - Location
  - Activity
- Create an app that responds to implicit data (i.e. reacts to a change in context)

Context awareness capabilities enable mobile phones to sense their physical environment and adapt their behavior accordingly. You can practice how to load and react to data from different sensors in this exercise, as the preparation to build context aware app in the final assignment. 

According to Google, "[The Awareness API](https://developers.google.com/awareness/) unifies 7 location and context signals in a single API, enabling you to create powerful context-based features with minimal impact on system resources."

It supports combining and working with 7 signals including time, location, places, beacons, headphones, activity and weather. 

There are two ways to get context from sensors: `Snapshot` and `Fence`
- Snapshot will return the most recent (may not be realtime) information from sensor.
- Fence will be triggered when the sensor data changes (based on the signal conditions you set). You may also combine multiple conditions to create a smarter fence.

We already provide example code to get weather, using snapshot, and headphone state, using fence. Your job will be to add additional sensors

# Preparing to run the app
You will need to set some things up

## Get your API Key

Follow the ["Quick Guide"](https://developers.google.com/places/web-service/get-api-key)
To use this guide, you will be asked at some point about whether you want to create a new app (the answer is yes, name it something like cse340-LaughingChipmunks, or whatever your repository name is, the names have to be unique).

You'll be asked to set up a billing account. However, for the minor use in this class, it shouldn't cost you anything. If this is a problem at all (e.g. you don't have a credit card), please reach out privately on Piazza.

When the interface gives you your API key **copy it and don't lose it**. That is the only time you'll ever see it for security reasons, you'll have to create a new app if you lose it.

When you have your API key, go to your android manifest and paste it in between the quotation marks labeled API_KEY.

```xml
<meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="YOUR KEY HERE"/>
```	    

## For advanced awareness things (optional)

You'll need to enable one more API than the automated quick guide does for you. This is the *awareness api*. To enable it, search for it in the search bar as shown here:

![Screenshot of awareness search](sensing/apisearch.png)

Click on the search result, and select **Enable.** You'll then need to click on the **Create Credentials** button and create credentials. Again, you'll get an API string which you'll need to add to your manifest, in the other API KEY meta data (just below the geo one). 

##



Here are sample screenshots for sensor results:

![Screenshot of sensor list](sensing/1.png){:width="200px"}
![Screenshot of headphone snapshot](sensing/2.png){:width="200px"}
![Screenshot of location snapshot](sensing/3.png){:width="200px"}
![Screenshot of weather snapshot](sensing/5.png){:width="200px"}
![Screenshot of detected activity snapshot](sensing/6.png){:width="200px"}
![Screenshot of headphone fence](sensing/7.png){:width="200px"}
![Screenshot of location fence](sensing/8.png){:width="200px"}
![Screenshot of detected activity fence](sensing/9.png){:width="200px"}


## Create your own implicit application
You should create an application that makes use of one sensor. If you are using an emulator, you can focus on something that is likely to change even without a mobile device. An example is weather. 

# Turn-in

## Submission Instructions

You will turn in the following files <a href="javascript:alert('Turn-in link pending assignment release');">here</a>:

```
- DetectedActivityActivity.java
- LocationActivity.java
- PlacesActivity.java
- WeatherActivity.java
- DetectedActivityFenceActivity.java
- LocationFenceActivity.java
```

## Grading (10pts)

- Get API Keys: 1pt
- Location: 1pt
- Place: 1pt
- Weather: 1pt
- Activity: 1pt
- Location Fence: 2pt
- Activity Fence: 2pt
- Code Organization and Style: 1 pt
