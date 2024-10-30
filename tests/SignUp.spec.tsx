import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "../app/register/signup/page";

describe("Sign Up Section", () => {
  beforeEach(() => {
    // Render the Sign Up component
    render(<Signup />);
  });

  it("should display the header", () => {
    const header = screen.getByText("E-Academy");
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

  it("should have a confirm password input", () => {
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    expect(confirmPasswordInput).toBeTruthy();
  });

  it("should have a submit button", () => {
    const submitButton = screen.getByText("Create an account");
    expect(submitButton).toBeTruthy();
  });
});
