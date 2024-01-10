import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../../hooks/useAuthCalls";

const RegisterForm = () => {
  const { register } = useAuthCalls();
  const loginSchema = object({
    email: string().email().required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters.")
      .max(16, "Password must be at least 16 characters")
      .matches(/\d+/, "Password must contain number.")
      .matches(/[a-z]/, "Password must contain lowercase letter.")
      .matches(/[A-Z]/, "Password must contain uppercase letter.")
      .matches(/[*!,?{}><%&$#£+-.]+/, "Password must contain custom character."),
    username: string().required("Username is required."),
  });

  return (
    <div className="container auth-form">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, action) => {
          register({ ...values, password2: values.password });
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
            <label htmlFor="username" className="form-label fw-bolder mt-5">
              Username*
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <h3>{errors.username && touched.username && errors.username}</h3>
            <label htmlFor="email" className="form-label fw-bolder">
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
            <h3>{errors.email && touched.email && errors.email}</h3>

            <label htmlFor="password" className="form-label fw-bolder">
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
            <h3>{errors.password && touched.password && errors.password}</h3>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
