import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";
import sailImage from "./a_beginners_guide_to_sailing_hero.jpg"; // Import your image here

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};
    if (!values.email) {
      formErrors.email = "Email is required";
    }
    if (!values.password) {
      formErrors.password = "Password is required";
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/home");
          } else {
            console.log("Login failed");
          }
        })
        .catch((err) => {
          console.error("Login error:", err);
        });
    }
  };

  return (
    <ChakraProvider>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "#0e222c" }}
      >
        {/* Left Side: Image */}
        <div
          className="flex-shrink-0"
          style={{ width: "60%", height: "100%", overflow: "hidden" }}
        >
          <img
            src={sailImage} // Use your image source here
            alt="Sailing Guide"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Side: Login Form */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "40%", padding: "0 2rem" }}
        >
          <VStack
            bg="white"
            p={6}
            rounded="md"
            w="100%"
            spacing={6}
            boxShadow="md"
            style={{ maxWidth: "400px" }} // Adjust form width
          >
            <Heading size="lg">Login to Your Account</Heading>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleInput}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleInput}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="orange"
                width="100%"
                mt={4}
                size="lg"
              >
                Log In
              </Button>
              <Box mt={3}>
                <Link to="/signup">Create an Account</Link>
              </Box>
            </form>
          </VStack>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Login;
