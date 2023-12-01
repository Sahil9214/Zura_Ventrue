import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import YT from "../images/YT.png";
import Spotify from "../images/Spotify.png";
import RSS from "../images/RSS.png";
import cloud_upload from "../images/cloud_upload.png";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateProjectFiles,
  fetchProjectFiles,
} from "../Redux/projectsFiles/projectFiles.action";
import SampleProject from "./SampleProjectPage";
import { useParams } from "react-router-dom";
import CommonModal from "./Create/Component/CommonModal";

const Uploaded = () => {
  return <div></div>;
};

export default Uploaded;
