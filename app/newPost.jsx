import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CreatePost() {
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    console.log("Post:", postText);
    setPostText("");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { marginTop: 20 }]}>Create New Post</Text>

      {/* Post Card */}
      <View style={[styles.card, { marginTop: 30 }]}>
        <View style={styles.profileRow}>
          <Image
            source={require("../assets/avatar.jpeg")}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.username}>You</Text>
            <Text style={styles.subtitle}>What's on your mind?</Text>
          </View>
        </View>

        <TextInput
          style={styles.textArea}
          placeholder="Share your thoughts..."
          multiline
          value={postText}
          onChangeText={setPostText}
        />

        <View style={styles.divider} />

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="image-outline" size={20} color="#555" />
            <Text style={styles.iconText}>Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera-outline" size={20} color="#555" />
            <Text style={styles.iconText}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.postButton,
              postText.trim()
                ? styles.postButtonActive
                : styles.postButtonDisabled,
            ]}
            disabled={!postText.trim()}
            onPress={handlePost}
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffffa9", padding: 15 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  profileRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: "bold", fontSize: 16 },
  subtitle: { fontSize: 13, color: "#555" },
  textArea: {
    borderWidth: 2,
    borderColor: "#73abe4ff",
    borderRadius: 8,
    padding: 10,
    minHeight: 70,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#eaeaea",
    marginVertical: 10,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: { flexDirection: "row", alignItems: "center" },
  iconText: { marginLeft: 5, color: "#555" },
  postButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  postButtonDisabled: {
    backgroundColor: "#ccc",
  },
  postButtonActive: {
    backgroundColor: "#2f9e8f",
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
