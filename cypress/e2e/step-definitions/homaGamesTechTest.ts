import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { concat } from "cypress/types/lodash";

/* I define my page elements selectors in "../../pages/homaHomePage", this makes
the work more organized and understandable */
const homaHomePage = require("../../pages/homaHomePage");

/* GIVENS */
Given("I am on homepage", () => {
  cy.visit("/");
});

Given("I go on blog pages", () => {
  cy.visit("/");
  homaHomePage.elements.blogPageButton().click();
});

/* WHENS */

/* The {string} makes this step generic => 
I can use it with any stps that requires clicking on a button */
When("I click {string}", (buttonName: string) => {
  cy.contains(buttonName).click();
});

/* THENS */

Then("I can see the review of games", () => {
  homaHomePage.elements.gameReview().should("be.visible");
});

Then("I can see blog pages about Homa employees", () => {
  homaHomePage.pages.lifeAtHomaPage().should("be.visible");
});

Then("A new page opens up with 'submit your games'", () => {
  cy.url().should(
    "equal",
    "https://lab-v2.homagames.com/registration?origin=website"
  );
});

Then("I am on the {string}", (pagePath: string) => {
  cy.url().should("include", pagePath);
});
