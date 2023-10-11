Feature: API Testing

    As a tester, I want to 
    Call this endpoint: https://api.publicapis.org/entries  
    Read the response, find all objects with property “Category: Authentication & Authorization” 
	Compare, count, and verify the number of objects where the property above appears 
	Finally print found objects to console 

    Scenario: API Testing
    Given I have a valid API endpoint
    When I send a GET request to the endpoint
    Then I should receive objects with category "Authentication & Authorization"
    And I should receive a response with a list of objects with property “Category: Authentication & Authorization”

