## Step 1: Exploratory Testing

| Action                | Expected Result            | Actual Result | Pass or Fail |
| --------------------- | -------------------------- | ------------- | ------------ |
| Select Increment once | The count increases by one |   +1          |      Y       |
| Select decrement once | count decreases by one     |   -1          |      Y       |
| Select reset when count = 0 | Should stay 0        |    0          |      Y       |
| Select increment x3   | count should be 3          |   3           |      Y       |
| Increment twice then Decrement once | count is 1   |      1        |      Y       |
| Increment several times then Reset| count is 0     |      0        |      Y       |

No unexpected behavior was observed during exploratory testing. All buttons behaved as expected and the displayed count updated correctly after each interaction.

## Step 2: Examine the Source Code


- The starting value of `count` - 0
- The statements that change `count`
    setCount(count + 1)
    setCount(count - 1)
    setCount(0)

- The user action that causes each statement to execute
    onClick={()}

- Any branches or loops in the code
    no branches or loops

Branch coverage does not meaningfully apply to this component because no conditional statements exist. Similarly, loop coverage does not apply because the component contains no loops. The most important coverage metric for this component is statement coverage, which requires executing the three statements that modify the count value.

## Step 8: Review Code Coverage

The tests executed all three statements that modify the count value: increment, decrement, and reset. No statements that change the application's behavior remained untested. The component contains no conditional statements, so few or no branches are reported. High coverage indicates that the code was executed during testing, but coverage alone does not guarantee the application is completely correct because it does not verify all possible user scenarios.


## Step 9: Compare the Two Approaches

Through exploratory testing, I discovered that repeatedly using the Increment, Decrement, and Reset buttons produced consistent results and no unexpected behavior occurred. By examining the source code, I identified the three state-changing statements and created tests specifically designed to execute each one. Viewing the source code helped me ensure complete statement coverage and identify that the component contains no branches or loops. A limitation of exploratory testing is that some internal code paths may be overlooked. A limitation of white-box testing is that it can focus heavily on implementation details and may miss issues that users experience from their perspective.