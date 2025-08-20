import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const posts = [
  {
    id: "1",
    name: "Alex Johnson",
    date: "8/12/2025",
    content:
      "Just finished building an amazing React Native app! The development experience was incredible.",
    likes: 24,
    comments: 2,
  },
  {
    id: "2",
    name: "Sarah Chen",
    date: "8/12/2025",
    content:
      "Beautiful sunset from my morning hike. Nature never fails to inspire! 🌅",
    likes: 88,
    comments: 2,
  },
];

export default function FeedScreen() {
  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
      }}
    >
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ color: "gray", fontSize: 12 }}>{item.date}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="close" size={18} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <Text style={{ marginTop: 8, fontSize: 14 }}>{item.content}</Text>

      {/* Footer actions */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-around",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="heart-outline" size={18} color="gray" />
          <Text style={{ marginLeft: 4 }}>{item.likes}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="chatbubble-outline" size={18} color="gray" />
          <Text style={{ marginLeft: 4 }}>{item.comments}</Text>
        </View>
        <Ionicons name="share-outline" size={18} color="gray" />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 12 }}>
      {/* Feed Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Feed</Text>
        <TouchableOpacity>
          <Ionicons name="refresh" size={22} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Feed List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
