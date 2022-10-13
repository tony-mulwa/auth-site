import { Button, Stack, TextField, Typography, Link, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: formData,
    onSubmit: (value) => {
      setFormData((state) => ({
        ...state,
        ...value,
      }));

      alert(JSON.stringify(formData, null, 2));
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email.").required("Email required."),
      password: Yup.string()
        .min(6, "6 characters required.")
        .required("password required."),
    }),
  });
  return (
    <Stack
      spacing={2}
      sx={{ margin: "50px auto", alignItems: "center", width: "400px" }}
    >
      <Box align="center">
        <Typography variant="h3">Welcome back</Typography>
        <Typography variant="subtitle2">Please enter your detals.</Typography>
      </Box>

      <Stack
        component="form"
        onSubmit={formik.handleSubmit}
        spacing={2}
        sx={{ width: "inherit" }}
      >
        <TextField
          name="email"
          label="Email"
          type="email"
          // required
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          // required
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Typography align="right" component={Link} href="#">
          Forgot password
        </Typography>
        <Button type="submit" variant="contained">
          Sign in
        </Button>
      </Stack>

      <Typography align="center">
        Don't have an account? <Link href="#">Sign up</Link>
      </Typography>
    </Stack>
  );
}
