import { test, expect } from '@playwright/test';
import loadBraze from '../load-braze.cjs';

test('has title', async ({ page }) => {
  await loadBraze();
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
