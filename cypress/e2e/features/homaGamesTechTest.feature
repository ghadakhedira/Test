Feature: Homa Games Tech Tests

    This feature contains all the scenarios specified in the Tests

    Scenario: I can see reviews
        Given I am on homepage
        Then I can see the review of games

    Scenario: I can see blog posts
        Given I go on blog pages
        When I click 'Life at Homa'
        Then I can see blog pages about Homa employees
 
    Scenario: I can see submit your game page
        Given I am on homepage
        When I click 'Submit your game'
        Then A new page opens up with 'submit your games'

    Scenario Outline: I can navigate on <navigation>
        Given I am on homepage
        When I click '<navigation>'
        Then I am on the '<page>'
    
    Examples:
        | navigation | page         | 
        | Games      | /games       |
        | Recipes    | /our-recipes |
        | Team       | /team        |
    