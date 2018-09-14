name: inverse
layout: true
class: center, middle, inverse
---
class: background-no-repeat, center, middle,
template: inverse

# SSUI Mobile Lab (Fall 2016)
## Week 8: Android Threading & Networking

.center.four-tenths-width-img[

  ![Android Logo](img/android-logo.png)

  *How do we know what is happening in this interaction?*

]

Instructor: Michael Rivera  
_{mlrivera@cs.cmu.edu}_  

Slides online: [https://mikeriv.com/ssui-2016](https://mikeriv.com/ssui-2016)

---
layout: false

# Goals for Today

- A4 Questions? (Proposals due tonight!)

- Understand the basics threading on Android

- Explore some ways you can use this when changing between `Activity` in your app
  (e.g. to make network request)

- Assignment 4 Overview

---

## Why do we need Threading? (1/2)

- A simple example:
```java
    // An onClick listener attached to button in our activity
    public void onClick(View v) {
      // loads the image from the network on the main thread
      Bitmap b = loadImageFromNetwork();
      mImageView.setImageBitmap(b);
    }
```
--
- What could go wrong?

---
## Why do we need Threading? (2/2)

- Too much work done on the Main (UI) thread can block input/output in your app

  - Long network requests

  - Processing images or audio
--

- Your user will see your app as as being unresponsive

--

- After ~5 seconds of "hang" time, Android will prompt the user to close the applications:

  .center.half-width-img[
    ![Application not responding!](img/not_responding.png)
  ]

---

##  Using `Runnable` for Threads (1/2)

- Interface for defining a procedure that can be called later

- Can have a class implement the interface
```java
  public class RandomRunnable implements Runnable {

    public void run() {
      Log.d("RANDOM_RUNNABLE", "I was run!");
    }

  }
```
---

## Using `Runnable` for Threads (2/2)

- Or can create anonymous class
  ```java
    Runnable r = new Runnable() {
      public void run() {
        Log.d("Runnable!", "I was run!");
      }
    };

  ```

---

##  Non-main Threading - `Runnable`
- Use a new `Thread`:
  ```java
    Runnable r = new Runnable() {
      public void run() {
        Log.d("Runnable!", "I was run!");
      }
    };
    Thread thread = new Thread(r);
    r.start();
  ```

---

## Non-main Threading - `AsyncTask` (1/2)

- Use an `AsyncTask`:
```java
  private class DownloadImageTask extends AsyncTask<J,K,L> {
      protected void onPreExecute() {
        // TODO nothing
      }

      protected L doInBackground(J... params) {
        // TODO
      }

      protected void onProgressUpdate(K... values) {
        // TODO
      }

      protected void onPostExecute(L result) {
        // TODO
      }    
  }
```
- **`J`**: Input parameter type (e.g. urls to us)
- **`K`**: Units used to report progress
- **`L`**: Return type

---
## Non-main Threading - `AsyncTask` (2/2)

- Methods for overriding:
  - `onPreExecute()` - runs just before the worker thread starts to run

  - `doInBackground()` - runs the worker thread

  - `onProgressUpdate()` - called from doInBackground whenever you want to update UI

  - `onPostExecute()` - runs just after the worker thread completes

--

- Invoke using:
```java
DownloadImageTask task = new DownloadImageTask();
String testUrl = "http://placekitten.com/40/40";
task.execute(testUrl);
```



---

##`Runnable` + Thread vs. `AsyncTask`

- In general, __use `AsyncTask`__ is you have a lot of threaded code that can also update the UI

- Helps avoid a huge mess in your code

- AsyncTask also does thread management for you

- If you're daring, you can use `Runnable` + `Thread` while managing your own threads.

---

## The UI Kit is NOT Thread-safe!
- Some views are manipulated on worker threads (e.g. `ImageViews` for image processing)

--

- Android provides ways for you deal with running operations on the *Main Thread*:

--

  - If you have access to an activity and want immediate execution us:
    `Activity.runOnUiThread(Runnable r);`

  - Otherwise for views use:
      - Add to the queue
      `View.post(Runnable r);`

      - Add to the queue with a delay
      `View.postDelayed(Runnable r, long timeInMs);`
---
template: inverse

# Simple Networking

---
layout: false

## Using the Network (1/4)

- Need to add two special clauses to your Manifest file to have **Permissions** to use the network API :
```xml
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```  

--

- Before using, **always** check the network connection:
  ```java
  public void onClickHandler(View view) {
      ...
      ConnectivityManager connMgr = (ConnectivityManager)
          getSystemService(Context.CONNECTIVITY_SERVICE);
      NetworkInfo networkInfo = connMgr.getActiveNetworkInfo();
      if (networkInfo != null && networkInfo.isConnected()) {
          // fetch data
      } else {
          // display error
      }
      ...
  }
  ```

---
## Using the Network (1/4)
- `URL`: exactly as the name describes, its a URL
  `URL testUrl = new URL("http://google.com");`

--

- `HttpURLConnection`: used to open a connection with the URL
  `HttpURLConnection conn = (HttpURLConnection) url.openConnection();`
  - Note that `conn.connect()` actually starts the query

--

- `InputStream`: this is what receives the data from the connection
  `InputStream is = conn.getInputStream();`

--

-  After you have an `InputStream`, you need to convert its bytes to some usable output (e.g. Bitmap, String, etc.)

---

## Networking: An Example (1/3)

```java
// Given a URL, establishes an HttpUrlConnection and retrieves
// the web page content as a InputStream, which it returns as
// a string.
private String downloadUrl(String myurl) throws IOException {
    InputStream is = null;
    // Only display the first 500 characters of the retrieved
    // web page content.
    int len = 500;

    try {
        URL url = new URL(myurl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setDoInput(true);
        // Starts the query
        conn.connect();
        int response = conn.getResponseCode();
```
---

## Networking: An Example (2/3)

```java        
        Log.d(DEBUG_TAG, "The response is: " + response);
        is = conn.getInputStream();

        // Convert the InputStream into a string
        String contentAsString = readIt(is, len);
        return contentAsString;

    // Makes sure that the InputStream is closed after the app is
    // finished using it.
    } finally {
        if (is != null) {
            is.close();
        }
    }
}
```

---

## Networking: An Example (3/3)

  ```java
  // Reads an InputStream and converts it to a String.
  public String readIt(InputStream stream, int len) throws IOException, UnsupportedEncodingException {
      Reader reader = null;
      reader = new InputStreamReader(stream, "UTF-8");
      char[] buffer = new char[len];
      reader.read(buffer);
      return new String(buffer);
  }
  ```
---

## Exercise - Intents, threads and Networking
- Download base code http://shoutkey.com/rear

- In the `MainActivity`, implement `openNetworkActivity` which uses an intent to load the `NetworkTestActivity` when the button is clicked

- In `NetworkTestActivity`, complete the sections marked `// TODO` which includes:
  - Triggering a network request when the activity loads

  - Checking for network connectivity, and updating status text

  - using the results of the *asynchronous* network request to update the status text and the cat image. However, you must do the actual updating of the views on the the UI Thread

---

# Resources

- Vogella Tutorials -
  - Android Networking - http://www.vogella.com/tutorials/AndroidSQLite/article.html
  - Android Intents - http://www.vogella.com/tutorials/AndroidIntent/article.html

- Android Developer
  - Intents and Intent filters - https://developer.android.com/guide/components/intents-filters.html
  - Performing Network Operations - https://developer.android.com/training/basics/network-ops/index.html
