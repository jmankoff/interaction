name: inverse
layout: true
class: center, middle, inverse
---
class: background-no-repeat, center, middle,
template: inverse

# SSUI Mobile Lab (Fall 2016)
## Week 7: Android Data & State Persistence (Pt. 2)


.center.third-width-img[

  ![Android Logo](img/android-logo.png)

]

Instructor: Michael Rivera  
_{mlrivera@cs.cmu.edu}_  

Slides online: [https://mikeriv.com/ssui-2016](https://mikeriv.com/ssui-2016)

---
layout: false

# Goals for Today

- Quick Exercise for State Persistence from last week

--

- [A3 Part 1 - Due TONIGHT @ 11:59 PM](https://docs.google.com/document/d/1kU48Zl4y1M9u7t0Z0Jl0-wMKjphWKmz04z5J-Exwm7M/edit)

--

- State & Data Persistence (Part 2)

---

# Last time..

- Creating a custom `Parcelable` object

--

- Putting values of primitives and `Parcelable` objects in a `Bundle` before Android kills our `Activity`

--

- Getting those values out by the key later when restoring the `Activity` state

--

- Recall: **This should only be used for session variables and the UI state**
  - If you close the app, this values disappear!

--

- *So what do we do when we have data that needs to exist beyond a single app session?*

---

## Persistence Storage on Android
- `SharedPreferences` - storing private, primitive data in key-value pairs

--

- Internal Storage - storing private data in the device's storage

--

- External Storage - storing public data on the shared external storage

--

- SQLite Databases - storing structured data in a private database for your app

--

- Network Connection-based Storage - storing data on your own server, then fetching it later

.footnote[ https://developer.android.com/guide/topics/data/data-storage.html ]

---

## Back to the Activity Lifecycle
.half-width-img.center[
  ![Android Activity Lifecycle](img/activity_lifecycle.png)
]

---
## `SharedPreferences`

- Save and retrieve persistent key-value pairs of primitive data types

- Implemented as a Singleton
  - All clients (apps) share the same instance of a class
  - Concurrent editing is **not** supported

- Requires use of an editor class to modify `SharedPreferences.Editor`

- Can specify filename to use if you need multiple

- Or can use default file for a particular `Activity`

---

### Getting an Instance of `SharedPreferences`

```java
// Get context of the current activity
Context context = getActivity();

// Grab the string that corresponds to a pref file name
String prefFileKey = getString(R.string.preference_file_custom_key);

// Grab the shared pref object
SharedPreferences prefs = context.getSharedPreferences(
  prefFileKey,
  Context.MODE_PRIVATE);

```

- For custom preference files - name the key something specific to your app: e.g. `com.mikeriv.ssui-2016.PREFERENCE_FILE_KEY`

---

## Context Privacy
- Privacy settings on your preference file control how others can interact with it

- `Context.MODE_PRIVATE` - only your app can read/write to the file

- `Context.MODE_WORLD_READABLE` - any app can read (!)

- `Context.MODE_WORLD_WRITABLE` - any app can write (!)


---

## Writing to `SharedPreferences`

```java
// Grab the shared preferences object
SharedPreferences sharedPref = getActivity().getPreferences(Context.MODE_PRIVATE);

// Get an editor for the particular object
SharedPreferences.Editor editor = sharedPref.edit();

// Get the key that we want to save a value for in our preferences
String savedClickCountKey = getString(R.string.saved_button_click_count);

// Put the value into our preferences using the editor
editor.putInt(savedClickCountKey, mButtonClickCount);

// Commit all the changes we've made -
editor.commit();

```

---

## Reading from `SharedPreferences`

```java
// Normal set up for getting sharedPref
SharedPreferences sharedPref = getActivity().getPreferences(Context.MODE_PRIVATE);

// Retrieving the key again
String savedClickCountKey = getString(R.string.saved_button_click_count);

// Default value if our stored value is non-existent
Resources res = getResources();
int defaultValueId = R.string.saved_button_click_count_default;
int defaultClickCount = res.getInteger(defaultValueId);

// If there is no stored value, preferences returns the default value here
int clickCount = sharedPref.getInt(savedClickCountKey, defaultClickCount);

```

---

# Internal Storage

- Files that are usually private and exist on the device

- Simple read/write interface

- Supports arbitrary storage formats (make your own file type or data files)

---

## Writing to Internal Storage
- Uses `FileOutputStream` and `write()`

```java
// The filename to write in
String filename = "TheBestFileName.data";

// Text we want to save to the file
String textToBeWritten = "Hello";

// Now try writing to our file
FileOutputStream outputStream;
try {
  // Create a file output stream object
  // Use MODE_PRIVATE if you don't want other apps to be able to read your files
  outputStream = openFileOutput(filename, Context.MODE_PRIVATE);
  // Write the data
  outputStream.write(string.getBytes());
  // Close the stream
  outputStream.close();
} catch (Exception e) {
  e.printStackTrace();
}

```

---

## Reading from Internal Storage
- Uses `FileInputStream` and `read()`

```java
// The filename to write in
String filename = "TheBestFileName.data";
FileInputStream outputStream;
try {
  // Open a file input stream object
  // Use MODE_PRIVATE if you don't want other apps to be able to read your files
  inputStream = openFileInput(filename, Context.MODE_PRIVATE);

  // Read the data using a byte buffer usually
  // you want to know the size from the file object
  byte[] stringBytes = new byte[100];

  // Grab the bytes and store how many were read
  int totalBytesRead = inputStream.read(stringBytes);

  // Convert the actual number of read bytes to a smaller byte array
  byte[] actualStringBytes = Arrays.copyOfRange(stringBytes, 0, totalBytesRead);

  // Convert the stringBytes into a String  
  String textThatWasRead = new String(actualStringBytes);
  inputStream.close();

} catch (Exception e) {
  e.printStackTrace();
}

```

---

## Reading from Internal Storage

- You can include *read-only* files with your app

- Places files in your `res/raw/` directory

- Open the files using `openRawResource(int androidRfileId)`:
```java
openRawResource(R.raw.fsm_game_engine_example);
```
- When would you want to do this?

---

## External Storage

- Refers to removable storage (e.g. an SD card)

- Needs permissions declared in your app manifest to use

- **Globally accessible** but not guaranteed to exist

- Check `getExternalStorageState()` before using

--

- Useful for storing:
  - Application specific files

  - Files shared across apps

  - Files that need to be accessible to users

- **This gets erased if the user uninstalls your app!**

---
## Writing to External Storage (1/3)
- Quick way to check if external storage is available for writing

```java
// Checks if external storage is available for read and write
public boolean isExternalStorageWritable() {
  String state = Environment.getExternalStorageState();
    if (Environment.MEDIA_MOUNTED.equals(state)) {
      return true;
    }
  return false;
}
```

---
## Writing to External Storage (2/3)
- You can write to storage in a public directory like `DIRECTORY_PICTURES` or `DIRECTORY_MUSIC`

```java
public File getAlbumStorageDir(String albumName) {
  // Create the directory for the user's public pictures directory.
  // Notice the user of getExternalStoragePublicDirectory here
  File file = new File(Environment.getExternalStoragePublicDirectory(
    Environment.DIRECTORY_PICTURES), albumName);

  if (!file.mkdirs()) {
    Log.e(LOG_TAG, "Directory not created");
  }
  // Return the file for writing
  return file;
}
```
---

## Writing to External Storage (3/3)
- You can also write storage to a directory that is specific to your app

```java
public File getAlbumStorageDir(Context context, String albumName) {  
  // Create the directory for the app's private pictures directory.
  // Here we get a private directory using getExternalFilesDir:s
  File file = new File(context.getExternalFilesDir(  
    Environment.DIRECTORY_PICTURES), albumName);

  if (!file.mkdirs()) {
    Log.e(LOG_TAG, "Directory not created");
  }
  return file;
}
```

---

## Reading from External

- Once you get a `File` object you can read or write in the same way as Internal Storage


---

## Sqlite Databases

- Full support for `SQLiteDatabase` on Android

- Private and specific to an application

- Use `ContentProviders` to make data accessible across multiple applications

- Otherwise for your own app just use `SQLiteDatabase` directly:
  - [Android Developer Guide - SQLiteDatabase on Android](https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html)
  - [Vogella Tutorial - Android SQLiteDatabases](http://www.vogella.com/tutorials/AndroidSQLite/article.html)

---

## Network-based Storage

- Store state on a remote server

- Need permissions in manifest

--

- Downsides?

--

  - Dependent on connectivity

  - Costly for time (takes time to get data and use it)

--

- Upsides?

--

  - Datasource isn't on the phone or static at compile tile

  - The power of the _cloud_

- Examples:
  https://developer.android.com/training/basics/network-ops/connecting.html

---

## Persistence Storage on Android
- `SharedPreferences`

- Internal Storage - need to declare permissions in manifest

- External Storage - need to declare permissions in manifest

- SQLite Databases - storing structured data in a private database for your app

- Network Connection-based Storage - need to declare permissions in manifest

- _Most apps use a combination of these options_

---

# Resources

- Vogella Tutorials - Android SQLLite & Content Providers
  http://www.vogella.com/tutorials/AndroidSQLite/article.html

- Android Developer - Saving Data
  https://developer.android.com/training/basics/data-storage/index.html
