import React from "react";
import { PostView } from "./styles";
import { Text, Image } from "react-native";

export const PostScreen = ({ route }) => {
  const { item } = route.params;
  console.log({ item });

  return (
    <PostView>
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={{ width: 150, height: 150 }}
      />
      <Text>{item.title}</Text>
    </PostView>
  );
};
