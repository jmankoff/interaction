name: inverse
layout: true
class: center, middle, inverse
---
class: background-no-repeat, center, middle,
template: inverse

# SSUI Mobile Lab (Fall 2016)
## Week 10: Android Fragments


.center.half-width-img[
  ___

  ![Android Activities & Fragments](img/fragments.png)

  ___
]

Instructor: Michael Rivera  
_{mlrivera@cs.cmu.edu}_  

Slides online: [https://mikeriv.com/ssui-2016](https://mikeriv.com/ssui-2016)

---
layout: false

# Goals for Today

- A4 Check-in

--

- Discuss how to structure multi-activity applications

- Explore basics of Fragments in an Activity

---

## Potential Pitfalls with Activities

--

- Can cause copypasta: using the same code for the same functionality in multiple activities

- Can be monolithic: an activity can contain so much code and functionality that it becomes unmanageable

---

## Why Fragments?

- *Modularity*: separation of concerns; break complex code up across fragments for better organization and maintenance

- *Reusability*: allows UI behavior to be shared across multiple activities
  - Ex. Facebook Place Picker

- *Adaptability*: represent different parts of the UI as individual fragments; use different layouts depending on screen orientation and device size

---

## What is a Fragment?
- `Fragment` - represents a behavior or portion of UI in an `Activity`

- Generally, it is self contained (follow the MVC/MVP set up)

- Requires a parent `FragmentActivity` that can hold one or many other `Fragment` objects

- Follows its own lifecycle (that mirrors its parent Activity) - [Image Link](https://developer.android.com/images/fragment_lifecycle.png)

---

## How to use Fragments

- Create a `FragmentActivity` class

- Create a `Fragment` class

- Then either

  - Add to XML

  - Create Dynamically

---
## Creating a `FragmentActivity` Class

```java
public class MainActivity extends FragmentActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.news_articles);
    }
}
```

---

## Creating a Custom `Fragment` Class

```java
import android.os.Bundle;
// Use V4 or V7 (if you need the app bar)
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.ViewGroup;

public class ArticleFragment extends Fragment {

  // Define ALL layout in this method
  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
      Bundle savedInstanceState) {
      // Inflate the layout for this fragment
      return inflater.inflate(R.layout.article_view, container, false);
  }
  // ... other methods (e.g. lifecycle callbacks)
}

```

---

### Adding a Fragment to an Activity via XML

- `Fragment` needs to be associated with a parent `FragmentActivity`
- If you want to associate a particular layout size with certain fragments:

  - place the layout xml in a subfolder with a size quantifier
  - E.g. `res/layout-large/news_articles.xml`

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:orientation="horizontal"
  android:layout_width="fill_parent"
  android:layout_height="fill_parent">

  <fragment android:name="com.example.android.fragments.HeadlinesFragment"
            android:id="@+id/headlines_fragment"
            android:layout_weight="1"
            android:layout_width="0dp"
            android:layout_height="match_parent" />

  <fragment android:name="com.example.android.fragments.ArticleFragment"
            android:id="@+id/article_fragment"
            android:layout_weight="2"
            android:layout_width="0dp"
            android:layout_height="match_parent" />
</LinearLayout>

```

---

## Creating a Fragment Dynamically (1/2)

- Use `FragmentManager`

- Create a `FragmentTransaction`

- Create the new Fragment and add it to a container

- Commit the changes to the transaction

---

## Creating a Fragment Dynamically (2/2)

```java
// Grab FragmentManager
FragmentManager fragmentManager = getFragmentManager();

// Create FragmentTransaction
FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();

// Create new Fragment (can also define custom ExampleFragment.newInstance()
// method to do some set-up, pass a bundle etc)
ExampleFragment fragment = new ExampleFragment();

// Add  the fragment to the fragment container
fragmentTransaction.add(R.id.fragment_container, fragment);

// If you don't call this, nothing will change!
fragmentTransaction.commit();
```
---

## Managing Fragments (1/3)

-  Use `FragmentManager` in your `Activity` - [Documentation](https://developer.android.com/reference/android/app/FragmentManager.html)
```java
FragmentManager fm = getFragmentManager();
```

- Find fragments by their id within a parent Activity:
```java
Fragment a = fm.findFragmentById(R.id.fragment_a);
```

- Find fragments by their tag within a parent Activity:
```java
Fragment a = fm.findFragmentByTag("SOME_COOL_TAG");
```

---

## Managing Fragments (2/3)

- Add, remove, replace  fragments using transactions

- Can save individual transactions to BackStack- lets the back button return to a user to a previous fragment state

- Pop fragments off the back stack, with popBackStack() (simulating a Back command by the user).

```java
// Create new fragment and transaction
FragmentTransaction transaction = getFragmentManager().beginTransaction();
// Could also be transaction.add(...) or transaction.remove(...)
transaction.replace(R.id.fragment_container, someNewFragment);
// This adds state to the back stack (null -> can be a string id for the state)
transaction.addToBackStack(null);
// Commit the transaction
transaction.commit();

```

---
## Managing Fragments (3/3)

- Note: if your Activity needs to know about changes to the back stack you can use:
```java
FragmentManager.OnBackStackChangedListener listener =  
      new FragmentManager.OnBackStackChangedListener() {
        public void onBackStackChanged() {
          // Do something
        }
}
fm.addOnBackStackChangedListner(listener);
```

---

## Activity and Fragment Communication

- From Activity to Fragment

- From Fragment to Activity

- From Fragment to Fragment

---

## From Fragment to Activity Communication (1/2)

- Create custom callbacks to share events with the parent activity
- Check to make sure a parent activity implements the interface
  ```java
  public static class FragmentA extends ListFragment {
      // Will become a reference to the Container activity
      private OnArticleSelectedListener mListener;

      // Container Activity must implement this interface
      public interface OnArticleSelectedListener {
          public void onArticleSelected(Uri articleUri);
      }

      // Check activity implements the interface
      @Override
      public void onAttach(Activity activity) {
          super.onAttach(activity);
          try {
              mListener = (OnArticleSelectedListener) activity;
          } catch (ClassCastException e) {
              throw new ClassCastException(
                activity.toString()
                + " must implement OnArticleSelectedListener");
          }
      }
  }
```

---

## From Fragment to Activity Communication (2/2)

```java
public static class FragmentA extends ListFragment {
    OnArticleSelectedListener mListener;
    ...
    @Override
    public void onListItemClick(ListView l, View v, int position, long id) {
        // Append the clicked item's row ID with the content provider Uri
        Uri noteUri = ContentUris.withAppendedId(ArticleColumns.CONTENT_URI, id);
        // Send the event and Uri to the host activity - this is the good stuff
        mListener.onArticleSelected(noteUri);
    }
    ...
}
```
---

## From Activity to Fragment Communication

- You can declare `public` methods on your `Fragment`

- When you need to deliver a message or update data, you can have your `Activity` capture the `Fragment` instance using `findFragmentById()`

- You can then directly call the public methods (will see this in a second)

---

## Fragment to Fragment Communication

- Handle using the `FragmentActivity` as an intermediate

- Use callback for Fragment to Activity Communication

- Then trigger Activity to other Fragment communication using a public methods etc.

```java
    // `FragmentA` triggers `Activity.onArticleUpdated(Article a)` then:
    public void onArticleUpdated(Article a) {
        // Do stuff in activity with new article
        // ...
        // Now update the second fragment
        Fragment secondFragment = findFragmentById(R.id.second_fragment_id);
        secondFragment.updateHeadline(a);
    }
```
---

## When to use Fragments?

- You don't have to use them ever, but they can make your life easier when building larger applications

- You're repeating UI code and/or logic across different `Activity`

- You need different UIs for different device types and sizes (e.g. tablets vs. phones)

---

# Resources

- Vogella: Android Fragments - http://www.vogella.com/tutorials/AndroidFragments/article.html

- RW: Intro to Android Fragments - https://www.raywenderlich.com/117838/introduction-to-android-fragments-tutorial

- Android Developer: Fragments - https://developer.android.com/guide/components/fragments.html
