import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// ----Example of unit test starts --------------------------------

test("Unit test 1. On intitial render, the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "1" }} sender={{ id: "2" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

// Arrange-Action-Assertion pattern
test("Unit Test 2. Pay button is enabled when amount and note is entered", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "1" }} sender={{ id: "2" }} />);
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// ----Example of unit test ends --------------------------------

// ----Example of integration test starts -----------------------

test(`Integration test. Checks for,
      1.Pay now button disabled initally
      2.Pay now button is enabled after filling all the input fields`, async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "1" }} sender={{ id: "2" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// ----Example of unit test ends --------------------------------
