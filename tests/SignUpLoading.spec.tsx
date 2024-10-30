import {screen, render} from "@testing-library/react"

import SignupWithLoadingState from "@/app/register/signup-with-loading-state/page";


describe("Sign Up with Loading State Section", () => {
  beforeEach(() => {
    // Render the Sign Up with Loading State component
    render(<SignupWithLoadingState />);
  });

  it("should display the header", () => {
    const header = screen.getByText("E-Academy");
    expect(header).toBeTruthy();
  });

  it("should show loading state image in submit button", () => {
    const loadingImage = screen.getByAltText("Loading state");
    expect(loadingImage).toBeTruthy();
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
  