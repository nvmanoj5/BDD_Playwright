// Generated from: features\add-to-cart.feature
import { test } from "../../src/fixtures/bdd-fixtures.ts";

test.describe('Cart Actions', () => {

  test('Add a product to cart from inventory page', { tag: ['@smoke'] }, async ({ Given, When, Then, And, inventoryPage, loginPage }) => { 
    await Given('I navigate to the login view', null, { loginPage }); 
    await When('I execute login with "standard_user" and "secret_sauce"', null, { loginPage }); 
    await And('I add "Sauce Labs Backpack" to the cart', null, { inventoryPage }); 
    await Then('I see cart badge count as "1"', null, { inventoryPage }); 
    await And('I see "Sauce Labs Backpack" in the cart', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\add-to-cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the login view","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I execute login with \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"secret_sauce\"","children":[{"start":42,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I see cart badge count as \"1\"","stepMatchArguments":[{"group":{"start":26,"value":"\"1\"","children":[{"start":27,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I see \"Sauce Labs Backpack\" in the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end