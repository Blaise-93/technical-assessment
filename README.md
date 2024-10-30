# Technical Assessment For Users' Registration

This is a [Next.js](https://nextjs.org) project called **Tech-Assessment** bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Features

By following the figma UX/UI design which is stipulated to be used in building the features with tailwind,
I was able to craft the registration process for the web development of E-Academy.

## Sign Up

The sign-up section allows users to create a new account. It includes input fields for the email address, password, and password confirmation, along with a submit button.

```js
<section className="bg-gray-100 flex items-center justify-center min-h-screen pt-8 pb-8">
  <div className="">
    <h1 className="p-2 text-2xl font-inter font-semibold leading-9 text-gray-900 text-center">
      E-Academy
    </h1>
    <div className="rounded-lg w-full max-w-md px-6 py-4 space-y-4 bg-white shadow-md">
      <h2 className="font-inter leading-[33.6px] tracking-tight text-xl font-semibold text-gray-900 text-center">
        Create an account
      </h2>
      <p className="text-gray-500 font-inter font-normal text-base leading-[23.2px]">
        Enter your credentials to create your account
      </p>
      <form className="space-y-4 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            minLength={6}
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            minLength={6}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-0"
        >
          Create an account
        </button>
      </form>
    </div>
  </div>
</section>
```

## Signup with Feedback

This section includes alerts that can be dismissed by the user. The alerts provide feedback for various situations such as errors, warnings, information. The images of the Twitter, Alert Icon and Google logo were exported (downloaded) from the Figma file
to have a great appeal for a user.

```jsx
import React, { useState } from "react";
import Image from "next/image";

const SignUpWithFeedback = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "red", message: "A placeholder for alert" },
    { id: 2, type: "yellow", message: "A placeholder for alert" },
    { id: 3, type: "green", message: "A placeholder for alert" },
  ]);

  const removeAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <section className="bg-gray-100 flex items-center justify-center min-h-screen pt-8 pb-8">
      <div className="">
        <h1 className="p-2 text-2xl font-inter font-semibold leading-9 text-gray-900 text-center">
          E-Academy
        </h1>
        <div className="rounded-lg w-full max-w-md px-6 py-4 space-y-4 bg-white shadow-md">
          <h2 className="font-inter leading-[33.6px] tracking-tight text-xl font-semibold text-gray-900 text-center">
            Create an account
          </h2>
          <p className="text-gray-500 font-inter font-normal text-base leading-[23.2px]">
            Enter your credentials to create your account
          </p>

          {/* Alerts Section */}
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-center justify-between px-2 py-1 rounded-md relative ${
                  alert.type === "red"
                    ? "bg-red-200 text-red-600"
                    : alert.type === "yellow"
                    ? "bg-customOrange text-yellow-600"
                    : "bg-customGreen text-green-600"
                }`}
              >
                <button
                  className="absolute left-3"
                  onClick={() => removeAlert(alert.id)}
                >
                  <Image
                    src={alertIcon}
                    alt="alert icon"
                    className="mr-4 w-5 h-5"
                    width={20}
                    height={20}
                  />
                </button>
                <span className="font-medium ml-[1em]">{alert.message}</span>
              </div>
            ))}
          </div>
          {/* End of Alerts Section */}

          <form className="space-y-4 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                minLength={6}
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                minLength={6}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-0"
            >
              Create an account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpWithFeedback;
```

## Login

The login section allows users to access their existing accounts. It includes input fields for the email address and password, as well as a "Remember me" checkbox and a "Forgot password?" link. The forgot password link obviously has no API correlation since this is not a backend enhanced application. Thus, it is not functional when clicked. All the figma guideline was followed to create the user appeal of this login registration page.

```jsx

<section className="bg-gray-100 flex items-center justify-center min-h-screen pt-8 pb-8">
  <div className="">
    <div className="rounded-lg w-full max-w-md px-6 py-4 space-y-4 bg-white shadow-md">
      <h2 className="font-inter leading-[33.6px] tracking-tight text-xl font-semibold text-gray-900 text-center">
        Login
      </h2>
      <p className="text-gray-500 font-inter font-normal text-base leading-[23.2px]">
        Enter your credentials to access your account
      </p>
      <form className="space-y-4 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password
```

# Jasmine Tests for E-Academy
**Why Write Tests?**:

Writing tests is crucial for ensuring the reliability and stability of your application. Tests help catch bugs early, provide documentation for your code, and give you confidence when making changes or adding new features. By writing tests, you can:

- Ensure Code Quality: Automated tests help maintain high code quality by catching errors before they reach production.
- Facilitate Refactoring: With a robust test suite, you can refactor code with confidence, knowing that any breaking changes will be caught.
- Improve Collaboration: Tests serve as documentation for your code, making it easier for new developers to understand and contribute.
- Enhance User Experience: By testing user interactions, you ensure that your application behaves as expected, providing a smooth experience for users.

## Jasmine Test Cases in our Assessment
**Sign Up Section**: 
The Sign Up section tests ensure that all essential elements are present and functioning correctly.

```jsx
describe("Sign Up Section", () => {
  beforeEach(() => {
    // Render the Sign Up component
    render(<SignUp />);
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

```

**Sign Up with Feedback Section**: 

These tests ensure that the Sign Up with Feedback component displays alerts and handles user interactions correctly.

```jsx
describe("Sign Up with Feedback Section", () => {
  beforeEach(() => {
    // Render the Sign Up with Feedback component
    render(<SignUpWithFeedback />);
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
    const closeButton = screen.getAllByRole("button", { name: /alert icon/i })[0];
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

```

**Sign Up with Loading State Section**
These tests ensure that the Sign Up with Loading State component handles loading states correctly.

```jsx
describe("Sign Up with Loading State Section", () => {
  beforeEach(() => {
    // Render the Sign Up with Loading State component
    render(<SignUpWithLoading />);
  });

  it("should display the header", () => {
    const header = screen.getByText("E-Academy");
    expect(header).toBeTruthy();
  });

  it("should show loading spinner during submission", () => {
    const submitButton = screen.getByText("Create an account");
    fireEvent.click(submitButton);
    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toBeTruthy();
  });
});

```

**Sign Up with Loading State Section**:

These tests ensure that the Sign Up with Loading State component handles loading states correctly.
```jsx
describe("Sign Up with Loading State Section", () => {
  beforeEach(() => {
    // Render the Sign Up with Loading State component
    render(<SignUpWithLoading />);
  });

  it("should display the header", () => {
    const header = screen.getByText("E-Academy");
    expect(header).toBeTruthy();
  });

  it("should show loading spinner during submission", () => {
    const submitButton = screen.getByText("Create an account");
    fireEvent.click(submitButton);
    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toBeTruthy();
  });
});

```


__By writing these tests, we ensure that our Sign Up, Login, and related components work as expected, providing a seamless experience for our users.__


Open [web live page](https://fastidious-naiad-dfd028.netlify.app/) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Inter](https://google.com/font), a widely used font for web development.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
