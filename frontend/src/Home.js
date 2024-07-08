import React, { useState } from "react";
import AuthButton from "./AuthButton.js";
import { Link } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Heading,
  Text,
  VStack,
  HStack,
  extendTheme,
  Button,
  Center,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

// Customize the Chakra UI theme if needed
const theme = extendTheme({
  // Your custom theme configuration here
});

function getRandomLogoUrl() {
  // Replace this function with logic to get a random logo URL
  // For example, you can have an array of logo URLs and pick one randomly.
  const logos = ["logo1.png", "logo2.png", "logo3.png"];
  const randomIndex = Math.floor(Math.random() * logos.length);
  return logos[randomIndex];
}

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status

  // Function to handle user login (e.g., called after successful login)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  // Specified logo URL
  const logoUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7961c71fb6cc348308629ffc5fd376f20680985905215827fa6db02f140dfef0?apiKey=0a0ef7e35eb34ed39de28f02dfae33df&";

  // Specified background image URL
  const backgroundImageUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ae0709c470176083c4147455084cf1431edd8a558b79a51eb0bb3f9cdd451029?apiKey=0a0ef7e35eb34ed39de28f02dfae33df&";

  const [isHovered, setIsHovered] = useState(false);

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
    transition: "opacity 0.3s ease", // Transition effect for opacity
    opacity: isHovered ? 0.7 : 1, // Adjust opacity based on hover state
  };

  const handleMouseEnter = () => {
    setIsHovered(true); // Set hover state to true
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set hover state to false
  };

  const avatarUrl = localStorage.getItem("userAvatar");

  return (
    <ChakraProvider theme={theme}>
      <Box p={4} bg="#0e222c" minH="100vh">
        {/* Navigation Bar */}
        <Flex align="center" justify="space-between" mb={4}>
          {/* Logo and App Name */}
          <HStack spacing={4} align="center">
            <img
              src={logoUrl}
              alt="Logo"
              style={{ height: "40px", width: "40px" }}
            />
            <Heading as="h1" size="lg" color="white">
              Victory Vision Pro
            </Heading>
          </HStack>

          {/* Login/Register Buttons */}
          <HStack spacing={4}>
          <Link to="/tom">
              <Button colorScheme="orange">Upload Video</Button>
            </Link>
            <Link to="/">
              <Button colorScheme="orange">Logout</Button>
            </Link>
            {/* <Link to="/signup">
              <Button colorScheme="orange" variant="outline">
                Register
              </Button>
            </Link> */}
            <Link to="/profilepage">
              <Image
                src={avatarUrl}
                alt="Avatar"
                style={avatarStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Link>
          </HStack>
        </Flex>
        {/* Main Content */}
        <VStack spacing={8} align="center">
          {/* Hero Banner */}
          <VStack
            width="100%"
            style={{
              backgroundImage: `url("${backgroundImageUrl}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "900px", // Adjust the height as needed
            }}
          >
            <Center height="100%">
              <VStack height="100%" alignItems="flex-start">
                <Spacer />
                <Center w="60%" mt="-100px" ml="-20px">
                  <VStack alignItems="center">
                    {" "}
                    {/* Added this line */}
                    <Heading color="#dd6b20" size="4xl" lineHeight="90px">
                      Discover the Newest Sailing Tool
                    </Heading>
                    <Text
                      color="#dd6b20"
                      fontSize="2xl"
                      mt="20"
                      ml="-200px"
                      textAlign="center"
                    >
                      More Below
                    </Text>
                  </VStack>
                </Center>
                <Spacer />
              </VStack>
            </Center>
          </VStack>
          <VStack height="100%" alignItems="flex-start">
            <Spacer mt="80px" />
            <Flex align="flex-start" w="100%">
              {/* Image on the left */}
              <Box maxW="50%" maxH="800px">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b6d48f5d0a4a93553cac9e7a643560bea7ef42733c631e687f9f26522ddcb6a?apiKey=0a0ef7e35eb34ed39de28f02dfae33df&"
                  alt="Craig Studio"
                  className="grow w-full h-full aspect-[1.67] max-md:mt-10 max-md:max-w-full"
                />
              </Box>
              <VStack align="flex-start" pl="8" w="50%">
                {" "}
                {/* Added width to VStack */}
                <Spacer mt="80px" />
                <Box textAlign="center">
                  <Heading
                    color="#dd6b20"
                    size="3xl"
                    lineHeight="70px"
                    ml="300px"
                  >
                    Craig Studio
                  </Heading>
                </Box>
                <Spacer mt="30px" />
                <Text
                  color="#dd6b20"
                  fontSize="xl"
                  mt="5"
                  textAlign="left"
                  ml="40px"
                >
                  To be, or not to be: that is the question: whether 'tis nobler
                  in the mind to suffer the slings and arrows of outrageous
                  fortune, or to take arms against a sea of troubles, and by
                  opposing end them? To die: to sleep; no more; and, by a sleep
                  to say we end the heart-ache and the thousand natural shocks
                  that flesh is heir to, 'tis a consummation devoutly to be
                  wish'd.
                </Text>
              </VStack>
            </Flex>
          </VStack>
          <VStack height="100%" alignItems="flex-start">
            <Spacer mt="80px" />
            <Flex align="flex-start" w="100%">
              {/* Updated: Text on the left */}
              <VStack align="flex-start" pl="8" w="50%">
                <Spacer mt="80px" />
                <Box textAlign="center">
                  <Heading
                    color="#dd6b20"
                    size="3xl"
                    lineHeight="70px"
                    ml="200px"
                  >
                    Why Craig Studio?
                  </Heading>
                </Box>
                <Spacer mt="30px" />
                <Text
                  color="#dd6b20"
                  fontSize="xl"
                  mt="5"
                  textAlign="left"
                  ml="40px"
                >
                  To be, or not to be: that is the question: whether 'tis nobler
                  in the mind to suffer the slings and arrows of outrageous
                  fortune, or to take arms against a sea of troubles, and by
                  opposing end them? To die: to sleep; no more; and, by a sleep
                  to say we end the heart-ache and the thousand natural shocks
                  that flesh is heir to, 'tis a consummation devoutly to be
                  wish'd.
                </Text>
              </VStack>

              {/* Updated: Image on the right */}
              <Box maxW="50%" maxH="800px">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/680731db64c5a7f01edb4fdfd912688c77007d0dce95e1853f36f04062c3810b?apiKey=0a0ef7e35eb34ed39de28f02dfae33df&"
                  alt="Craig Studio"
                  className="grow w-full h-full aspect-[1.67] max-md:mt-10 max-md:max-w-full"
                />
              </Box>
            </Flex>
          </VStack>
          ;
          <Spacer mt="40px" />
          <VStack
            height="100%"
            alignItems="flex-start"
            width="100%"
            style={{
              backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets/TEMP/5ab50aa79d53a9d9ee4c225751ddc95e7d862a99c1aaa9df78fc63f5d89ca7da?apiKey=0a0ef7e35eb34ed39de28f02dfae33df&")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "800px", // Adjust the height as needed
            }}
          >
            {/* Adjusted: Horizontal Boxes using HStack */}
          </VStack>
          ;
        </VStack>
        ;{/* Footer */}
        <Spacer />
        <Box borderTop="1px" borderColor="gray.200" pt={10}>
          <Spacer mt={"40px"} />
          <Text textAlign="center" color="white">
            © 2024 CraigStudio. All rights reserved.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
