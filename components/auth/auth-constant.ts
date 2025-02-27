export interface LoginInputFormProps {
  label: string;
  placeholder: string;
  showIcon?: boolean;
  name: string;
}

export const loginFormInputFields: LoginInputFormProps[] = [
  {
    label: "Email",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    name: "password",
  },
];

export const signupFormInputFields: LoginInputFormProps[] = [
  {
    label: "First Name",
    placeholder: "Enter your first name",
    name: "firstName",
  },
  {
    label: "Last Name",
    placeholder: "Enter your last name",
    name: "lastName",
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    label: "Phone Number",
    placeholder: "Enter your phone number",
    name: "phone",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    name: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Enter your password",
    name: "confirmPassword",
  },
];
