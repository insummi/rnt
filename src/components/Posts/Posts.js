import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Alert,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import {
  PostText,
  PostTitle,
  PostView,
  PostImage,
  PostDetails,
} from "./styles";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getPhotos = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Ошибка при получении фотографи");
      })
      .finally(() => setLoading(false));
  };

  const _keyExtractor = (item) => item.id;

  useEffect(getPhotos, []);

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate("Post", { item })}>
        <PostView>
          <PostImage source={{ url: item?.thumbnailUrl }} />
          <PostDetails>
            <PostTitle>{item?.title}</PostTitle>
            <PostText>{item?.id}</PostText>
          </PostDetails>
        </PostView>
      </TouchableOpacity>
    ),
    [posts]
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={_keyExtractor}
      initialNumToRender={10}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={getPhotos} />
      }
      renderItem={renderItem}
    />
  );
};

export default Posts;
