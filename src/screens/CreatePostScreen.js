import { Text, StyleSheet, View, Image, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

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

  const onSubmit = () => {
    console.warn("On Submit", description);
    setDescription("");

    navigation.goBack();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
    aspectRatio: 4/3,
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