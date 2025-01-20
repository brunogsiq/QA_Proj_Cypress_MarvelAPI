/// <reference types="cypress" /> 

import { telaHome } from "../../pageObjects/01_telaHome/telaHome";

Cypress.Commands.add("ValidarCriteriosDeAceite", () => 
{
    cy.visit('https://petlov.vercel.app/');
    
});