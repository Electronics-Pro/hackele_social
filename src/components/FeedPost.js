import { Entypo, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { S3Image } from "aws-amplify-react-native";
import { DataStore } from 'aws-amplify';
import { User } from '../models'
import { useState, useEffect } from "react";
import LikeImage from '../../assets/images/like.png';

const dummy_img = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const FeedPost = ({ post }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
	const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    DataStore.query(User, post.postUserId).then(setUser);
  })
  
  return (
    <Pressable style={styles.post}>

      {/* Header */}
      <Pressable style={styles.header} onPress={() => navigation.navigate("Profile", {id: post.postUserId})}>
        {user?.image ? (
          <S3Image imgKey={user.image} style={styles.profileImage} />
          ) : (
          <Image
            source={{ uri: dummy_img }}
            style={styles.profileImage}
          />
        )}
        <View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="grey" style={styles.icon} />
      </Pressable>

      {/* Body */}
      {post.description && <Text style={styles.description}>{post.description}</Text>}
      {post.image && <S3Image imgKey={post.image} style={styles.image} resizeMode="cover" />}

      {/* Footer */}
      <View style={styles.footer}>

        {/* Stats */}
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon}></Image>
          <Text style={styles.likedBy}>DAIIII-YAH and {post.numberOfLikes} others</Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsRow}>
          
          <Pressable onPress={() => setIsLiked(!isLiked)} style={styles.iconButton}>
            <AntDesign name={isLiked ? "like1" : "like2"} size={18} color={isLiked ? "#5e91ff" : "gray"} />
            <Text style={[styles.iconButtonText, { color: isLiked ? "#5e91ff" : "gray" },]}>{isLiked ? "Liked" : "Like⠀"}</Text>
          </Pressable>

          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>

          <View style={styles.iconButton}>
            <MaterialCommunityIcons name="share-outline" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>

        </View>

      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginVertical: 7,
    backgroundColor: "#fff",
  },

  //header
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "grey",
  },
  icon: {
    marginLeft: "auto",
  },

  //body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  image:{
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },

  //footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },

  //Buttons row
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  }
});

export default FeedPost;