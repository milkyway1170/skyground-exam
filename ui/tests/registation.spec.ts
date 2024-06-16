import { test, expect } from "@playwright/test";

test("RegistrationPage is open", async ({ page }) => {
  await page.goto("/register");

  await expect(page.getByText("Registration")).toBeVisible();
});

test("Redirect to Login form is work", async ({ page }) => {
  await page.goto("/register");

  await page.getByText("Do you already have an account?").click();

  await expect(page.getByText("Login")).toBeVisible();
});
