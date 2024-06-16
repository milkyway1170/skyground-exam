import { test, expect } from "@playwright/test";

test("LoginPage is open", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByText("Login")).toBeVisible();
});

test("Redirect to Registration form is work", async ({ page }) => {
  await page.goto("/login");

  await page.getByText("Don't you have an account?").click();

  await expect(page.getByText("Registration")).toBeVisible();
});
