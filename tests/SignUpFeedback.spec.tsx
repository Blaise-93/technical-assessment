import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupWithFeedBack from "app/register/signup-with-feedback/page";

describe("Sign Up with Feedback Section", () => {
  beforeEach(() => {
    // Render the Sign Up with Feedback component
    render(<SignupWithFeedBack />);
  });

  it("should display the header", () => {
    const header = screen.getByText("E-Academy");
    expect(header).toBeTruthy();
  });

  it("should display alerts", () => {
    const alerts = screen.getAllByText("A placeholder for alert");
    expect(alerts.length).toBe(3); // Expect three alerts to be present
  });

  it("should remove an alert when the close button is clicked", () => {
    const closeButton = screen.getAllByRole("button", {
      name: /alert icon/i,
    })[0];
    fireEvent.click(closeButton);
    const alerts = screen.queryAllByText("A placeholder for alert");
    expect(alerts.length).toBe(2); // Expect two alerts after one is closed
  });

  it("should have an email input", () => {
    const emailInput = screen.getByLabelText("Email address");
    expect(emailInput).toBeTruthy();
  });

  it("should have a password input", () => {
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeTruthy();
  });

  it("should have a confirm password input", () => {
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    expect(confirmPasswordInput).toBeTruthy();
  });

  it("should have a submit button", () => {
    const submitButton = screen.getByText("Create an account");
    expect(submitButton).toBeTruthy();
  });
});
