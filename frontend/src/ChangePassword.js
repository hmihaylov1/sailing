import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";
import sailImage from "./a_beginners_guide_to_sailing_hero.jpg";

function ChangePassword() {
  const [values, setValues] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/changepassword", values)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Error changing password");
      });
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="#0e222c"
      >
        {/* Left Side: Image */}
        <Box flex="1" pr={8}>
          {" "}
          {/* Add right padding for space */}
          <Image
            src={sailImage}
            alt="Sailing Guide"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        {/* Right Side: Change Password Form */}
        <Box
          flex="1"
          pl={8} // Add left padding for space
          maxWidth="400px"
          width="40%"
          backgroundColor="white"
          rounded="md"
          boxShadow="md"
        >
          <VStack p={6} spacing={6}>
            <Heading size="lg">Change Password</Heading>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
                <FormLabel>Current Password</FormLabel>
                <Input
                  type="password"
                  name="currentPassword"
                  placeholder="Enter Current Password"
                  value={values.currentPassword}
                  onChange={handleInput}
                />
              </FormControl>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  name="newPassword"
                  placeholder="Enter New Password"
                  value={values.newPassword}
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
                Change Password
              </Button>
              <Link
                to="/"
                style={{ marginTop: "1rem", alignSelf: "flex-start" }}
              >
                Back to Login
              </Link>
            </form>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default ChangePassword;
