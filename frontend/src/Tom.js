import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";
import Chart from "react-apexcharts";
// import Compass from "../../components/Compass";
// import VideoPlayer from "../../components/VideoPlayer";
import { FaSave, FaExternalLinkAlt } from "react-icons/fa";
import "./Telemetry.css";

// Import the JSON data
import telemetryData from "./telemetry-data.json";

const Telemetry = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [altitudeData, setAltitudeData] = useState({
    series: [
      {
        name: "Altitude",
        data: [800, 900, 1000, 1100, 1200],
      },
    ],
  });

  // Dummy data for map markers
  const [markers, setMarkers] = useState([[51.505, -0.09]]);

  // Use the imported JSON data
  const [telemetry, setTelemetry] = useState(telemetryData);

  useEffect(() => {
    // Update the telemetry data when the component mounts
    setTelemetry(telemetryData);
  }, []);

  const chartOptions = {
    chart: {
      background: "#1a1a1a",
      foreColor: "#fff",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["00:00", "03:00", "06:00", "09:00", "12:00"],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      title: {
        text: "Altitude (m)",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    grid: {
      borderColor: "#333",
    },
    stroke: {
      curve: "smooth",
      colors: ["#ffa500"], // Orange color
    },
    tooltip: {
      theme: "dark",
    },
  };

  // Function to handle video file upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    console.log("Video file uploaded:", file);
    setVideoFile(file);
  };
  const logoUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7961c71fb6cc348308629ffc5fd376f20680985905215827fa6db02f140dfef0?apiKey=0a0ef7e35eb34ed39de28f02dfae33df&";
  const avatarUrl = localStorage.getItem("userAvatar");

  return (
    <div className="telemetry-container" style={{ backgroundColor: "#1a1a1a" }}>
      {/* <Link to="/home">
        <Heading as="h1" size="lg" color="white" ml={2}>
          CraigStudio
        </Heading>
      </Link> */}
      <Flex align="center" justify="space-between" mb={4} px={4}>
        {/* Logo and App Name */}
        <Flex align="center">
          <Link to="/home">
            <img
              src={logoUrl}
              alt="Logo"
              style={{ height: "40px", width: "40px" }}
            />
          </Link>
          <Link to="/home">
            <Heading as="h1" size="lg" color="white" ml={2}>
              CraigStudio
            </Heading>
          </Link>
        </Flex>

        {/* Navigation Buttons */}
        <Flex align="center">
          <Link to="/tom">
            <Button colorScheme="orange" mr={2}>
              Tom
            </Button>
          </Link>
          <Link to="/">
            <Button colorScheme="orange" mr={2}>
              Logout
            </Button>
          </Link>
          {avatarUrl && (
            <Link to="/profilepage">
              <Image
                src={avatarUrl}
                alt="Avatar"
                boxSize="40px"
                borderRadius="full"
                objectFit="cover"
              />
            </Link>
          )}
        </Flex>
      </Flex>
      <div className="video-chart-container">
        <div className="video-feed">
          <div className="video-header">
            <div className="header-buttons">
              <button className="icon-button">
                <FaSave />
              </button>
              <button className="icon-button">
                <FaExternalLinkAlt />
              </button>
              <input
                className="uplodvedio"
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
              />
            </div>
          </div>
          {/* <div className="video-player">
            {videoFile && <VideoPlayer src={URL.createObjectURL(videoFile)} />}
          </div> */}
          <div className="gauges">
            <div className="gauge-map">
              <h3 className="mapTitle">Map for Direction</h3>
              <div className="round-map">
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{
                    height: "220px",
                    width: "220px",
                    borderRadius: "50%",
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Polyline
                    pathOptions={{ color: "red" }}
                    positions={[
                      [51.505, -0.09],
                      [51.51, -0.1],
                      [51.52, -0.11],
                    ]}
                  />
                </MapContainer>
              </div>
            </div>
            {/* <div className="gauge">
              <h3>Wind Direction</h3>
              <div className="compass">
                <Compass direction={telemetry.windDirection} />
              </div>
            </div> */}
          </div>
        </div>

        <div className="telemetry-chart">
          <h3>Telemetry Data</h3>
          <h3>Graph for Rhys</h3>
          <div className="telemetry-data">
            <div className="graph">
              <Chart
                options={chartOptions}
                series={altitudeData.series}
                type="line"
                width="100%"
                height="300"
              />
            </div>
            <div className="slider-container">
              <h3>Speed</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={telemetry.speed}
                onChange={(e) =>
                  setTelemetry({ ...telemetry, speed: e.target.value })
                }
                className="slider"
              />
              <span>{telemetry.speed} MPH</span>
            </div>
            <div className="slider-container">
              <h3>Wind Direction</h3>
              <input
                type="range"
                min="0"
                max="360"
                value={telemetry.windDirection}
                onChange={(e) =>
                  setTelemetry({
                    ...telemetry,
                    windDirection: e.target.value,
                  })
                }
                className="slider"
              />
              <span>{telemetry.windDirection}&deg; NE</span>
            </div>

            <div className="slider-container">
              <h3>Whatever</h3>
              <input
                type="range"
                min="0"
                max="360"
                value={telemetry.whatever}
                onChange={(e) =>
                  setTelemetry({
                    ...telemetry,
                    whatever: e.target.value,
                  })
                }
                className="slider"
              />
              <span>{telemetry.whatever}&deg; NE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemetry;
