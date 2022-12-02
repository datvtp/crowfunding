import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useToggleValue from "hooks/useToggleValue";
import { useDispatch } from "react-redux";

import { Button, ButtonGoogle } from "components/button";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { FormGroup } from "components/common";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { authLogin } from "store/auth/auth-slice";

const schema = yup.object({
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

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);

  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Dont have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle />
      <form autoComplete="off" onSubmit={handleSubmit(handleSignIn)}>
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
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              isOpen={showPassword}
              onClick={handleTogglePassword}
            />
          </Input>
        </FormGroup>
        <div className="text-right">
          <span className="inline-block mb-5 text-sm font-medium text-primary">
            Forgot password
          </span>
        </div>
        <Button className="w-full" kind="primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
