import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  FormLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
} from "@mui/material";

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        country: "",
        gender: "",
        hobbies: [],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "! Name is required";
        }

        if (!values.address) {
          errors.address = "! Address is required";
        }

        if (!values.country) {
          errors.country = "! Country is required";
        }

        if (!values.gender) {
          errors.gender = "! Gender is required";
        }

        if (values.hobbies.length === 0) {
          errors.hobbies = "! Hobbies/Interests are required";
        }

        return errors;
      }}
    >
      <main className="flex w-fit">
        <div className="w-72 bg-orange-500 flex justify-center items-center rounded-s-3xl">
          <div className="text-white text-4xl font-semibold">Form</div>
        </div>
        <div className="w-96 flex justify-center text-orange-500  bg-white">
          <Form className=" bg-white rounded-xl">
            <div className="text-xl font-semibold text-center text-orange-500 p-2">
              Sign Up
            </div>
            <div className="m-2 w-fit">
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                className="w-60 text-orange-500" // Set text color to orange-500
                InputLabelProps={{
                  className: "text-orange-500", // Set label color to orange-500
                }}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 font-semibold"
              />
            </div>

            <div className="m-2">
              <InputLabel id="address" className="text-orange-500">
                Address
              </InputLabel>
              <Field
                as={TextareaAutosize}
                type="text"
                name="address"
                label="Address"
                variant="outlined"
                className="w-60 border border-gray-400 rounded text-orange-500" // Set text color to orange-500
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 font-semibold"
              />
            </div>

            <div className="m-2">
              <FormControl variant="outlined">
                <InputLabel id="country-label" className="text-orange-500">
                  Country of Residence
                </InputLabel>
                <Field
                  as={Select}
                  name="country"
                  labelId="country-label"
                  label="Country of Residence"
                  className="w-60 text-orange-500" // Set text color to orange-500
                >
                  <MenuItem value="">Select Country</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="China">China</MenuItem>
                  <MenuItem value="Pakistan">Pakistan</MenuItem>
                </Field>
              </FormControl>
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500 font-semibold"
              />
            </div>

            <div className="m-2">
              <FormControl component="fieldset">
                <FormLabel id="gender-label" className="p-2 text-orange-500">
                  Gender
                </FormLabel>
                <Field name="gender" className="m-2">
                  {({ field }) => (
                    <>
                      <FormControlLabel
                        control={<Checkbox {...field} value="male" />}
                        label="Male"
                      />
                      <FormControlLabel
                        control={<Checkbox {...field} value="female" />}
                        label="Female"
                      />
                    </>
                  )}
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 font-semibold"
                />
              </FormControl>
            </div>

            <div className="m-2">
              <FormControl variant="outlined">
                <InputLabel
                  id="hobbies-label"
                  className="w-screen text-orange-500"
                >
                  Hobbies/Interests
                </InputLabel>
                <Field
                  as={Select}
                  multiple
                  name="hobbies"
                  labelId="hobbies-label"
                  label="Hobbies/Interests"
                  className="w-60 text-orange-500" // Set text color to orange-500
                >
                  <MenuItem value="reading">Reading</MenuItem>
                  <MenuItem value="sports">Sports</MenuItem>
                  <MenuItem value="music">Music</MenuItem>
                  <MenuItem value="gaming">Gaming</MenuItem>
                  <MenuItem value="programming">Programming</MenuItem>
                  <MenuItem value="exercising">Exercise</MenuItem>
                </Field>
              </FormControl>
              <ErrorMessage
                name="hobbies"
                component="div"
                className="text-red-500 font-semibold"
              />
            </div>

            <div className="m-2">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </main>
    </Formik>
  );
};

export default MyForm;
