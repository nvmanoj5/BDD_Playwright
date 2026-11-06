
import { createBdd } from 'playwright-bdd';

import { test } from '../fixtures/bdd-fixtures';

const { When, Then } = createBdd(test);

// Step 1: Proceed to checkout
When('I proceed to checkout', async ({ checkoutPage }) => {
  await checkoutPage.proceedToCheckout();
});

// Step 2: Fill checkout information
When(
  'I fill in checkout information with {string} {string} {string}',
  async (
    { checkoutPage },
    firstName: string,
    lastName: string,
    postalCode: string
  ) => {
    await checkoutPage.fillCheckoutInformation(
      firstName,
      lastName,
      postalCode
    );
  }
);

// Step 3: Finish checkout
When('I finish the checkout', async ({ checkoutPage }) => {
  await checkoutPage.finishCheckout();
});

// Step 4: Verify order confirmation
Then('I see the order confirmation page', async ({ checkoutPage }) => {
  await checkoutPage.verifyOrderConfirmation();
});
