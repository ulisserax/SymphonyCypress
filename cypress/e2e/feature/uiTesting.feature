Feature: Filtering elements on the page by name in two different ways

    User wants to visit a page and check if there is a filter on the page to sort elements by name. 
    If the filter is present, the user wants to select the filter and sort elements by name in two different ways.

    Scenario: Scenario name
        Given I login on the page
        When I check if there is a filter on the page
        Then I check if the filter is sorting elements by name from A to Z
        And I change the filte to sort by name in reverse order