import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GmailSignInSignUp from "../../components/GmailSignInSignUp/GmailSignInSignUp";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (values, actions) => {
    // Implement your sign-in logic here
    console.log(values);

    // Assuming successful sign-in, navigate to the home page
    navigate("/home");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required!";
          }

          if (!values.password) {
            errors.password = "Required!";
          }

          return errors;
        }}
        onSubmit={handleSignIn}
      >
        <Form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
          <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
              Sign in
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Work Email
                </p>
                <Field
                  type="email"
                  name="email"
                  placeholder="joseph@workemail.com"
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-sm text-red-500 font-titleFont font-semibold px-4"
                />
              </div>

              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Password
                </p>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-red-500 font-titleFont font-semibold px-4"
                />
              </div>
              <button
                type="submit"
                className="bg-[#b44de0] hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300"
              >
                Sign In
              </button>
              <p className="text-sm text-center font-titleFont font-medium">
                Don't have an Account?{" "}
                <Link to="/signup">
                  <span className="hover:text-blue-600 duration-300">
                    Sign up
                  </span>
                </Link>
                <GmailSignInSignUp />
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
