import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const post = {
  id: "p1",
  createdAt: "April 13, 2022",
  User: {
    id: "u1",
    image:
      "assets/IMG_7868.jpg",
    name: "Sayandeep Nayak",
  },
  description:
    "Today was the day we discovered \"Katak Batak\". It gives superhuman thinking ability to anyone who eats it! Plus it\'s tasty af",
  image: "assets/katak_batak.jpg",
  numberOfLikes: 69,
  numberOfShares: 11,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image source={{ uri: post.User.image }} style={styles.profileImage} />

        </View>

        {/* Body */}

        <View style={styles.footer}>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50
  }
});
