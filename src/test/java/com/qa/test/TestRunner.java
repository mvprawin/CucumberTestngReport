package com.qa.test;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;

import cucumber.api.testng.AbstractTestNGCucumberTests;   



@CucumberOptions(
	    features="src/test/resources/Features",
	    glue="stepDefinitions",
	   plugin= {"pretty","html:target/cucumber-html-reports","json:target/cucumber.json",
	   "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/extent-reports/report.html"},
	    dryRun=false,
	    strict=true,
	    monochrome=true
	    )

@Test
public class TestRunner extends AbstractTestNGCucumberTests {

}
