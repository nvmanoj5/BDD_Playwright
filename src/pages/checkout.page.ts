
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {

  public readonly checkoutButton: Locator;
  public readonly firstName: Locator;
  public readonly lastName: Locator;
  public readonly postalCode: Locator;
  public readonly continueButton: Locator;
  public readonly finishButton: Locator;
  public readonly confirmationMessage: Locator;

  constructor(page: Page) {
    super(page);

    // Checkout page locators
    this.checkoutButton = page.locator('#checkout');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.confirmationMessage = page.locator('.complete-header');
  }

  /**
   * Opens the cart if the Checkout button is not available,
   * then proceeds to checkout.
   */
  async proceedToCheckout() {

    console.log('Current URL:', this.page.url());

    // Check whether checkout button exists
    if (await this.checkoutButton.count() === 0) {

      console.log('Checkout button not found. Opening shopping cart.');

      await this.page.locator('.shopping_cart_link').click();
    }

    // Wait for checkout button
    await expect(this.checkoutButton).toBeVisible();

    // Click checkout
    await this.checkoutButton.click();

    console.log('Successfully navigated to checkout information page.');
  }

  /**
   * Enters customer information and continues.
   */
  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {

    await expect(this.firstName).toBeVisible();

    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);

    await this.continueButton.click();

    console.log('Checkout information submitted successfully.');
  }

  /**
   * Completes the order.
   */
  async finishCheckout() {

    await expect(this.finishButton).toBeVisible();

    await this.finishButton.click();

    console.log('Order completed successfully.');
  }

  /**
   * Verifies the order confirmation message.
   */
  async verifyOrderConfirmation() {

    await expect(this.confirmationMessage)
      .toHaveText('Thank you for your order!');

    console.log('Order confirmation verified successfully.');
  }
}
