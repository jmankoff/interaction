# How to turn the PPS into code

The code implementation should spiritually follow the PPS; that is, your code should only take action when moving from state to state (along tha arrows in the PPS). This behavior is best represented by a `switch` statement, where each `case` represents a state in our PPS. Within each `case`, there can be nested `if` statement to handle transitioning to another state. 

Each `case` should be broken out of and should properly handle input, propogating input to later views or stopping the input propogration as necessary. We typically do this through the `onTouchEvent` method. In `onTouchEvent`, returning `true` will stop the input propogation to views below it, while returning false allows views below it to see the event.

## Checkbox example

```java
@Override
public boolean onTouchEvent(MotionEvent event) {
    EssentialGeometry geometry = essentialGeometry(event);
    switch(mState) {
        case START:
            if (event.getAction() == MotionEvent.ACTION_DOWN &&
                geometry == EssentialGeometry.BOX) {
                mState = State.INSIDE;
                invalidate();
                return true;
            }
        case INSIDE:
            if (event.getAction() == MotionEvent.ACTION_UP &&
                geometry == EssentialGeometry.BOX) {
                mState = State.START;
                invalidate();
                return true;
            }
        default:
            break;
    }
    return false;
}
```
