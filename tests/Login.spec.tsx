import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "app/register/login/page";

describe("Login Section", () => {
  beforeEach(() => {
    // Render the Login component
    render(<Login />);
  });

  it("should display the header", () => {
    const header = screen.getByText("Login");
    expect(header).toBeTruthy();
  });

  it("should have an email input", () => {
    const emailInput = screen.getByLabelText("Email address");
    expect(emailInput).toBeTruthy();
  });

  it("should have a password input", () => {
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeTruthy();
  });

  it("should have a 'Remember me' checkbox", () => {
    const rememberMeCheckbox = screen.getByLabelText("Remember me");
    expect(rememberMeCheckbox).toBeTruthy();
  });

  it("should have a 'Forgot password?' link", () => {
    const forgotPasswordLink = screen.getByText("Forgot password?");
    expect(forgotPasswordLink).toBeTruthy();
  });

  it("should have a submit button", () => {
    const submitButton = screen.getByText("Log into Account");
    expect(submitButton).toBeTruthy();
  });
});
