$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Page application",
  "description": "",
  "id": "facebook-login-page-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2243668300,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Check Login functionality with valid credentials",
  "description": "",
  "id": "facebook-login-page-application;check-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Navigate to Facebook Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User redirected to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLogin.navigate_to_facebook_login_page()"
});
formatter.result({
  "duration": 2367387800,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.user_enters_username_and_password()"
});
formatter.result({
  "duration": 242712200,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.user_redirected_to_home_page()"
});
formatter.result({
  "duration": 50020479400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c([1]) Facebook\u003e but was:\u003c([20+]) Facebook\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.FacebookLogin.user_redirected_to_home_page(FacebookLogin.java:48)\r\n\tat ✽.Then User redirected to Home Page(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 678279000,
  "status": "passed"
});
});