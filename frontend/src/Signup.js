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

function Signup() {
  const [values, setValues] = useState({
    name: "",
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
    setErrors({}); // Clear previous errors

    // Validation logic here (if needed)
    // For simplicity, I'll assume Validation function similar to Login page

    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => {
        navigate("/"); // Redirect to login page on successful signup
      })
      .catch((err) => {
        console.error("Signup error:", err);
      });
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

        {/* Right Side: Signup Form */}
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
            style={{ maxWidth: "400px" }} // Adjust form width if needed
          >
            <Heading size="lg">Register Your Account</Heading>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={values.name}
                  onChange={handleInput}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleInput}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleInput}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="orange"
                width="100%"
                mt={4}
                size="lg"
              >
                Signup
              </Button>
              <Box mt={3}>
                <p className="mt-3">You agree with our Terms and Conditions.</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Already have an account? Login
                </Link>
              </Box>
            </form>
          </VStack>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Signup;
