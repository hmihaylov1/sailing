import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import initialImage from "./initial_image.png";
import sailingImage1 from "./sailing1.png";
import sailingImage2 from "./sailing2.png";
import sailingImage3 from "./sailing3.png";
import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#0E222C",
  minHeight: "100vh",
  color: "white",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  transition: "color 0.3s ease",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "18px",
};

function ProfilePage() {
  const [avatarUrl, setAvatarUrl] = useState(
    localStorage.getItem("userAvatar") || initialImage
  );

  const [currentImage, setCurrentImage] = useState(1);

  const sailingImages = [sailingImage1, sailingImage2, sailingImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage < 3 ? prevImage + 1 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    localStorage.setItem("userAvatar", imageUrl);

    setAvatarUrl(imageUrl);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ChakraProvider>
      {/* Header */}
      <Flex align="center" justify="space-between" bg="#0e222c" p="4" w="100%">
        <Flex align="center">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7961c71fb6cc348308629ffc5fd376f20680985905215827fa6db02f140dfef0?apiKey=0a0ef7e35eb34ed39de28f02dfae33df&"
            alt="Logo"
            h="40px"
            w="40px"
            mr="2"
          />
          <Link to="/home">
            <Heading as="h1" size="lg" color="white" ml={2}>
              Victory Vision Pro
            </Heading>
          </Link>
        </Flex>
        <Flex>
          <Link to="/">
            <Button colorScheme="orange">Logout</Button>
          </Link>
          <Link to="/tom">
            <Button colorScheme="orange" variant="outline" ml="2">
              Upload a Video
            </Button>
          </Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Box p="4" style={containerStyle}>
        {/* Left Section */}
        <Flex direction="column" align="center" justify="center" p="4" flex="1">
          {/* Avatar Display and Upload */}
          <Box mb="4">
            <Image
              src={avatarUrl}
              alt="Avatar"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              w="120px"
              h="120px"
              borderRadius="full"
              filter={isHovered ? "brightness(70%)" : "brightness(100%)"}
              transition="filter 0.3s ease"
              onClick={() => document.getElementById("fileInput").click()}
              cursor="pointer"
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: "none" }}
            />
          </Box>

          {/* Centered Links */}
          <VStack spacing={4} align="center">
            <Link
              to="/changepassword"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = "#FFA500")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Change Password
            </Link>
            <Link
              to="/privacy"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = "#FFA500")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = "#FFA500")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Terms and Conditions
            </Link>
            <Link
              to="/help"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = "#FFA500")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Help and Support
            </Link>
            <Link
              to="/home"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = "#FFA500")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Home
            </Link>
          </VStack>
        </Flex>

        {/* Right Section (Image Slideshow) */}
        <Flex
          justify="center"
          align="center"
          flex="2"
          overflow="hidden"
          borderRadius="8px"
          boxShadow="lg"
          mt="4"
          position="relative"
        >
          {sailingImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Sailing ${index + 1}`}
              w="100%"
              h="100%"
              objectFit="cover"
              position="absolute"
              opacity={currentImage === index + 1 ? 1 : 0}
              transition="opacity 0.5s ease"
            />
          ))}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default ProfilePage;
