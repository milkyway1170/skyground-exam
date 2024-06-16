import { test, expect } from "@playwright/test";

test("Homepage has title", async ({ page }) => {
  await page.goto("/home");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Skyground");
});
