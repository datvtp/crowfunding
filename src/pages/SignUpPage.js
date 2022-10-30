import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "components/input";
import { Label } from "components/label";
import { Link } from "react-router-dom";
import { FormGroup } from "components/common";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Button } from "components/button";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({});

  const handleSignUp = (values) => {
    if (!isValid) return;

    console.log(values);
  };

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
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
          />
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <span className="inline-block w-5 h-5 border rounded border-text4"></span>
          <span className="flex-1 text-sm text-text2">
            I agree to the{" "}
            <span className="underline text-secondary">Terms of Use</span> and
            have read and understand the{" "}
            <span className="underline text-secondary">Privacy policy.</span>
          </span>
        </div>
        <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
