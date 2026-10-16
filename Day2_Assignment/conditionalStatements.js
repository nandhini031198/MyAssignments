// Assignment Details:
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
// `runTests` with `switch` for test type messages.
// Assignment Requirements:
// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

//if-else
function launchBrowser(browser) {
  if (browser == "chrome") {
    console.log("chrome");
  } else {
    console.log("otherwise");
  }
}
let browserName = "edge";
launchBrowser(browserName);

//switch case
function runTest(testType) {
  switch (testType) {
    case "smoke":
      console.log("Smoke");
      break;
    case "sanity":
      console.log("Sanity");
      break;
    case "regression":
      console.log("Regression");
      break;
    default:
      console.log("Smoke");
  }
}
let test = "sanity";
runTest(test);
