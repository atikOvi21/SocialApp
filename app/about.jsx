import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native-web";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, styles.container]}>
      <Text style={styles.title}>About page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
