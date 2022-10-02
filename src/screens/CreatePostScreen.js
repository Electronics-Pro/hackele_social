import { Text, StyleSheet, View, Image, TextInput, Button, KeyboardAvoidingView } from "react-native";
//import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { DataStore, Auth, Storage } from "aws-amplify";
import { Entypo } from "@expo/vector-icons";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid";
import { Post } from "../models";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const user = {
  id: "u2",
  image:
    "https://raw.githubusercontent.com/Electronics-Pro/hackele_social/main/assets/user2.jpg",
  name: "Sayandeep Nayak",
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const onSubmit = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    const newPost = {
      description: description,
      numberOfLikes: 0,
      numberOfShares: 0,
      postUserId: userData.attributes.sub,
      _version: 1,
    };

    if (image) {
      newPost.image = await uploadFile(image);
    }

    await DataStore.save(new Post(newPost));

    setDescription("");
    setImage(null);
    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadFile = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${uuidv4()}.png`;
      await Storage.put(key, blob, {
        contentType: "image/png", // contentType is optional
      });
      return key;
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  }

  return (
    <View style={[styles.container]}>

      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>
      
      <TextInput value={description} onChangeText={setDescription} placeholder="What would you like to share with the world?" multiline />

      <Image source={{ uri:image }} style={styles.image} />

      <View style={styles.buttonContainer}>

      </View>

      <Button title="Post" onPress={onSubmit} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingTop: 20,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  profileImage:{
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
    marginTop: 10,
  },
  name: {
    fontWeight: "500",
  },
  buttonContainer: {
    marginTop: "auto",
  },
  icon: {
    marginLeft: "auto"
  },
});

export default CreatePostScreen;