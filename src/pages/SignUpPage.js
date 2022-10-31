import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "components/input";
import { Label } from "components/label";
import { Link } from "react-router-dom";
import { FormGroup } from "components/common";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";

const schema = yup.object({
  name: yup.string().required("Full name can't be blank."),
  email: yup
    .string()
    .email("Email is invalid.")
    .required("Email can't be blank."),
  password: yup
    .string()
    .required("Password can't be blank.")
    .min(8, "Password must be more than 8 characters.")
    .max(20, "Password must be less than 20 characters."),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const handleSignUp = (values) => {
    if (!isValid) return;

    console.log(values);
  };

  const [isTermAccepted, setIsTermAccepted] = useState(false);

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2">
        <img srcSet="/Icon/Google.png 2x" alt="google-icon" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form autoComplete="off" onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            type="text"
            placeholder="Full name"
            error={errors.name?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
            error={errors.password?.message}
          />
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox
            name="term"
            isChecked={isTermAccepted}
            onClick={() => setIsTermAccepted(!isTermAccepted)}
          >
            <span className="text-sm text-text2">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </span>
          </Checkbox>
        </div>
        <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
