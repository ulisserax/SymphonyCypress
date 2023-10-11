/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import sauceDemoPage from "../pageObjects/uiTesting";

let data; //closure variable
before(() => {
    cy.fixture("sauceData.json").then((userData) => {
        data = userData;
    });
});

const SaucePage = new sauceDemoPage();
//const privateUser = Cypress.env("privateUser");

Given(/^I login on the page$/, () => {
	
    cy.visit("/");
    SaucePage.insertUsername(data.username);
    SaucePage.insertPassword(data.password);
    SaucePage.clickLoginButton();

});

When(/^I check if there is a filter on the page$/, () => {
	cy.get(".product_sort_container").should("be.visible");
});

Then(/^I check if the filter is sorting elements by name from A to Z$/, () => {

    SaucePage.selectFilterOption("az");
    SaucePage.sortElementsByName();
	
});

Then(/^I change the filte to sort by name in reverse order$/, () => {
	    
        SaucePage.selectFilterOption("za");
        SaucePage.sortElementsByNameReverse();
});
