/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^I have a valid API endpoint$/, () => {
	cy.request("https://api.publicapis.org/entries").then((response) => {
        expect(response).to.not.be.null;    
    });
});

let responseBody;
When(/^I send a GET request to the endpoint$/, () => {
	
    cy.request({

        method: 'GET',
        url: 'https://api.publicapis.org/entries',
        headers: {
            'Connection': 'keep-alive',
        }
    }).then((response) => {
            
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.null;
            responseBody = response.body;
    });
});

let matchedEntries;
Then(/^I should receive objects with category "([^"]*)"$/, (category) => {
    expect(responseBody).to.have.property("entries");
    matchedEntries = responseBody.entries.filter(element => element.Category === category);
});

Then(/^I should receive a response with a list of objects with property “Category: Authentication & Authorization”$/, () => {
	let matchedCount = matchedEntries.length;
    console.log(`Number of entries with category "Authentication & Authorization": ${matchedCount}`);
    console.log('Matched entries:', JSON.stringify(matchedEntries, null, 2));
});
