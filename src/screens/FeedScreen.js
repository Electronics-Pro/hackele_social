import { FlatList, Pressable, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { DataStore} from "aws-amplify";
import { Post } from "../models";
import FeedPost from "../components/FeedPost";

const img =
  "https://raw.githubusercontent.com/Electronics-Pro/hackele_social/main/assets/user2.jpg";

const FeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    DataStore.query(Post).then(setPosts);
  }, [])

  const createPost = () => {
    navigation.navigate("Create Post");
  }

  return(
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item}/>}
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{ uri: img }} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});

export default FeedScreen;