import React from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../../hooks/useAuthCalls";

const LoginForm = () => {
  const { login } = useAuthCalls();

  const loginSchema = object({
    email: string().email().required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters.")
      .max(16, "Password must be at least 16 characters")
      .matches(/\d+/, "Password must contain number.")
      .matches(/[a-z]/, "Password must contain lowercase letter.")
      .matches(/[A-Z]/, "Password must contain uppercase letter.")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain custom character."),
  });

  return (
    <div className="container auth-form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, action) => {
          login(values);
          action.resetForm();
          action.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label fw-bolder mt-5 text-warning">
              Email address*
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <h3 className="text-warning">{errors.email && touched.email && errors.email}</h3>

            <label htmlFor="password" className="form-label fw-bolder text-warning">
              Password*
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <h3 className="text-warning">{errors.password && touched.password && errors.password}</h3>

            <button
              type="submit"
              className="btn btn-warning "
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
