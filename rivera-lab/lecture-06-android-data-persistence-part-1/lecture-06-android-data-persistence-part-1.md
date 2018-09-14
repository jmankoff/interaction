name: inverse
layout: true
class: center, middle, inverse
---
class: background-no-repeat, center, middle,
template: inverse

# SSUI Mobile Lab (Fall 2016)
## Week 6: Android State & Data Persistence (Pt. 1)

.center.third-width-img[

  ![Android Logo](img/android-logo.png)

]

Instructor: Michael Rivera  
_{mlrivera@cs.cmu.edu}_  

Slides online: [https://mikeriv.com/ssui-2016](https://mikeriv.com/ssui-2016)

---
layout: false

# Goals for Today

- Assignment 2 Questions?

--

- State & Data Persistence (Part 1)

--

- Finite State Machine Exercise

--

- Assignment 3 Overview

---

## Activity Lifecycle
.half-width-img.center[
  ![Android Activity Lifecycle](img/activity_lifecycle.png)
]

---

# When to save state? (1/3)

.center.four-tenths-width-img[

  ![Android Activity State Diagram](img/android-activity-states-01.png)

]

---

# When to save state? (2/3)

.center.four-tenths-width-img[

  ![Android Activity State Diagram - Process Killed](img/android-activity-states-02.png)

]

---

# When to save state? (3/3)

- Activity `A` spawns Activity `B`

  - E.g. Typing a Facebook post, then you select 'Add a Location'

--

- Android kills `A` to reclaim resources while the user is interacting with `B`

--

- User finishes with `B`, returns to `A` but the post is gone!

---

# Maintaining Activity State

- We can fix it by saving the state in a `Bundle` before Android closes the `Activity`

- We then restore the state when we return to the `Activity` later

---

# Bundle it up

- `Bundle`: A hash map (dictionary) of String keys to Primitive, Parcelable, Serializable values

--

- Used to:  
  (1) Save/restore state  
  (2) Transfer data between different `Activity` in an app

--

- Primitive are `int`, `float`, `boolean`, `double` (the usual suspects)

--

- Custom objects that implement the `Serializable` or `Parcelable` interfaces
  - You will need to make any custom classes that you want to save into a `Bundle` implement the `Parcelable` interface

---

# Parcelable vs. Serializable

- Both are for the same purpose of saving but `Serializable` makes implementations much easier...

--

- **EXCEPT, .red[you should almost always use `Parcelable`]**


--

- Why?
  - `Serializable` uses introspection ==> more memory, and CPU cycles
  - `Parcelable` **is optimized for mobile devices**

---
## Implementing `Parcelable` (1/3)

-- You are required to implement the following methods for the `Parcelable` interface:

```java
public class MyPersonModel implements Parcelable {
    private int mAge;

    // Required for the interface
    public int describeContents() {
        return 0;
    }

    // Required for the interface
    public void writeToParcel(Parcel out, int flags) {
        out.writeInt(mAge);
    }
    // Continued on next slide...
```

---

## Implementing `Parcelable` (2/3)

```java

    // Required for the interface
    // CREATOR is an object that can remark
    public static final Parcelable.Creator<MyPersonModel> CREATOR
            = new Parcelable.Creator<MyPersonModel>() {
        public MyPersonModel createFromParcel(Parcel in) {
            return new MyPersonModel(in);
        }

        public MyPersonModel[] newArray(int size) {
            return new MyPersonModel[size];
        }
    };

    // Required for the interface
    // Private constructor for Android to use with your CREATOR
    private MyPersonModel(Parcel in) {
        mAge = in.readInt();
    }
}
```
---

## Implementing `Parcelable` (3/3)
- **Note**: .red[the order of the values when writing and reading them matters!]

  - When you write to the parcel using `write*()` methods in `writeToParcel`,

  - The write order __MUST BE__ the same as when you read them in the private constructor

- For more details on implementation:
  https://developer.android.com/reference/android/os/Parcelable.html

---

# Saving in the Bundle

- Methods for _saving_ items out of a Bundle

  - Ints: `putInt(String key, int value)`

  - Floats: `putFloat(String key, float value)`

  - Characters: `putChar(String key, char value)`

  - Strings: `putString(String key, String value)`

  - Serializable Objects: `putSerializable(String key, Serializable value)`

  - Parcelable Objects: `putParcelable(String key, Parcelable value)`

  - _Others in the documentation (e.g. Arrays, Bytes, etc).._
    https://developer.android.com/reference/android/os/Bundle.html

---
# Retrieving from the Bundle

- Methods for getting items out of a Bundle

  - Floats: `getFloat(String key)`

  - Characters: `getChar(String key)`

  - Strings: `getString(String key)`

  - Serializable Objects: `getSerializable(String key)`

  - Parcelable Objects: `getParcelable(String key)`

  - _Others in the documentation_ (e.g. Arrays, Bytes, etc)..
    https://developer.android.com/reference/android/os/Bundle.html
---
## Saving Activity State (1/3)
- Android provides the `onSaveInstanceState(Bundle savedInstanceState)` callback method for you to save the state of an `Activity`

```java
private static final USERNAME_KEY = "USER_NAME_KEY";
private static final FIB_SUM_KEY = "FIB_SUM_KEY";

private int mFibSumValue; // Set to 10295 by our user
private String mUsername; // Set to "Michael" by our user

@Override
public void onSaveInstanceState(Bundle outState) {
  // Always call super - your super classes could be saving state for you!
    super.onSaveInstanceState(outState);

    // Now
    outState.putInt(FIB_SUM_KEY, mFibSumValue);
    outState.putString(USERNAME_KEY,mUsername;
}
```
---

## Restoring Activity State (1/4)

- We saved, and now our user goes off to some other app

--

- Android kills our `Activity`

--

- Now how do we get the _saved_ state back?

---
## Restoring Activity State (2/4)

-  Two ways:
  - `onCreate(Bundle savedInstanceState)`
  - `onRestoreInstanceState(Bundle savedInstanceState)`

---
## Restoring Activity State (3/4)

- Using `onCreate(Bundle savedInstanceState)`...

```java
private static final USERNAME_KEY = "USER_NAME_KEY";
private static final FIB_SUM_KEY = "FIB_SUM_KEY";

private int mFibSumValue = 0;
private String mUsername = null;

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_main);

  mMainTextView = (TextView) findViewById(R.id.text_main_title);
  mSumTextView = (TextView) findViewById(R.id.text_sum);
  // Check if there was a previously saved state to restore to the user
  // A non-null bundle means there was a state that was saved previously
  // A bundle is just a Key-Value pairing - its a hash map :)
  if (savedInstanceState != null) {
    // There was a previous state - time to restore
    mFibSumValue = savedInstanceState.getInt(FIB_SUM_KEY);
    mUsername = savedInstanceState.getString(USERNAME_KEY);
  }
  updateMainText();
  updateFibSumText();
}
```

---

## Restoring Activity State (4/4)

- Using `onRestoreInstanceState(Bundle savedInstanceState)`

```java
private static final USERNAME_KEY = "USER_NAME_KEY";
private static final FIB_SUM_KEY = "FIB_SUM_KEY";
private int mFibSumValue = 0;

@Override
protected void onRestoreInstanceState(Bundle savedInstanceState) {
  super.onRestoreInstanceState(savedInstanceState);
  // Check if there was a previously saved state to restore to the user
  if (savedInstanceState != null) {
    // There was a previous state - time to restore
    mFibSumValue = savedInstanceState.getInt(FIB_SUM_KEY);
    mUsername = savedInstanceState.getString(USERNAME_KEY);
  }
  updateMainText();
  updateFibSumText();
}
```

---

### Restoring in `onCreate` vs. `onRestoreInstanceState`
- `onRestoreInstanceState`
  - Guarantees you will never have a non-null `Bundle` when called
  - Lets subclasses override the behavior of restoring the state

- `onCreate`
  - Lets you focus on doing all of your initialization in one place

- You decide what works best for you :)

- http://stackoverflow.com/questions/36408776/using-oncreate-vs-onrestoreinstancestate

---

## Exercise: Parcelable and Activity State

- Pair up!

- Download the base code here:

- This app lets a user enter a name, age, and favorite food

- It stores this info in a `PersonModel`

- When the app is killed, this information needs to remain edited

- Implement the `Parcelable` interface for the PersonModel

- Then use the Activity's relevant state change callbacks to `PersonModel` when the phone rotates

---
### Some Notes about `onSaveInstanceState()`
- .red[Only use to save and restore session variables and the state of the UI]

--

  - Android won't always trigger the method

--

  - It is called when the `Activity` is closed and _expected_ to be restored soon

--

- If your app crashes, or is closed, **the values in the bundle will disappear!**

--

- If you use custom views, you can implement their version of `onSaveInstanceState`:

  Android will call `onSaveInstanceState()` every view in the layout

--

- Next week, we'll talk about other ways to save persistent data

---

# Exercise: Finite State Machines

- Draw a finite state machine for the **Facebook Messenger** "Thumbs Up" animated button interaction:

.center.four-tenths-width-img[

  ![FB Messenger Animation](img/messenger-bubble.gif)

]
