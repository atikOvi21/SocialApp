import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import pic from "../assets/icon.png";
import { Link } from "expo-router";

//  themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <View style={styles.container}>
      <ThemedText>Home</ThemedText>

      <Link href="/newPost" style={{ color: "blue", fontSize: 20 }}>
        Go to new post page
      </Link>

      <Spacer />
      <Link href="/feed" style={{ color: "blue", fontSize: 20 }}>
        Go to new feed page
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
