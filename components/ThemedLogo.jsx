import { Image, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

import DarkLogo from "../assets/icons8-logo-100.png";
import LightLogo from "../assets/icons8-java-100.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
