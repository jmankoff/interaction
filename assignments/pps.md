# How to turn the PPS into code

The code implementation should spiritually follow the PPS; that is, your code should only take action when moving from state to state (along tha arrows in the PPS). This behavior is best represented by a `switch` statement, where each `case` represents a state in our PPS. Within each `case`, there can be nested `if` statement to handle transitioning to another state. 
