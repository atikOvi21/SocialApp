import {
  StyleSheet,
  useColorScheme,
  Text,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { Tabs, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // <---- Add this

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;

  return (
    <>
      <StatusBar barStyle="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#6b7280",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#e5e7eb",
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 5,
          },
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="newPost"
          options={{
            title: "New Post",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

// import { StyleSheet, useColorScheme, Text, View } from "react-native";
// import React from "react";
// import { Colors } from "../constants/Colors";
// import { Tabs, Stack } from "expo-router";
// import { StatusBar } from "react-native-web";
// const RootLayout = () => {
//   const colorScheme = useColorScheme();
//   const theme = Colors[colorScheme] || Colors.light;

//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: "#2563eb", // Blue active icon
//           tabBarInactiveTintColor: "#6b7280", // Gray inactive
//           tabBarStyle: {
//             backgroundColor: "#fff",
//             borderTopWidth: 1,
//             borderTopColor: "#e5e7eb",
//             height: 60,
//           },
//           tabBarLabelStyle: {
//             fontSize: 12,
//             paddingBottom: 5,
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="feed"
//           options={{
//             title: "Feed",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="home-outline" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="create-post"
//           options={{
//             title: "New Post",
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="add-outline" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tabs>
//       {/* <StatusBar value="auto" />
//       <Stack
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: theme.navBackground,
//           },
//           headerTintColor: theme.title,
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//         }}
//       >
//         <Stack.Screen
//           name="index"
//           options={{
//             title: "Home",
//           }}
//         />
//         <Stack.Screen
//           name="newPost"
//           options={{
//             title: "Create New Post",
//             headerTitleAlign: "center",
//           }}
//         />
//         <Stack.Screen
//           name="feed"
//           options={{
//             title: "feed",
//             headerTitleAlign: "center",
//           }}
//         />
//         <Stack.Screen
//           name="contact"
//           options={{
//             title: "Contact",
//             headerTitleAlign: "center",
//           }}
//         />
//       </Stack> */}
//     </>
//   );
// };

// export default RootLayout;

// const styles = StyleSheet.create({});
