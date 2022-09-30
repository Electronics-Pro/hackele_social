import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import FeedPost from './src/components/FeedPost';

const post1 = {
  id: "p1",
  createdAt: "April 13, 2022",
  User: {
    id: "u1",
    image:
      "https://github.com/Electronics-Pro/hackele_social/blob/main/assets/IMG_7868.jpg?raw=true",
    name: "Sayandeep Nayak",
  },
  description: "Today was the day we discovered \"Katak Batak\". It gives superhuman thinking ability to anyone who eats it! It\'s tasty af too!",
  image: "https://raw.githubusercontent.com/Electronics-Pro/hackele_social/main/assets/katak_batak.jpg",
  numberOfLikes: 69,
  numberOfShares: 11,
};

const post2 = {
  id: "p1",
  createdAt: "April 13, 2022",
  User: {
    id: "u1",
    image:
      "https://github.com/Electronics-Pro/hackele_social/blob/main/assets/IMG_7868.jpg?raw=true",
    name: "Sayandeep Nayak",
  },
  description: "Today was the day we discovered \"Katak Batak\". It gives superhuman thinking ability to anyone who eats it! It\'s tasty af too!",
  image: "https://raw.githubusercontent.com/Electronics-Pro/hackele_social/main/assets/katak_batak.jpg",
  numberOfLikes: 69,
  numberOfShares: 11,
};

const post3 = {
  id: "p1",
  createdAt: "April 13, 2022",
  User: {
    id: "u1",
    image:
      "https://github.com/Electronics-Pro/hackele_social/blob/main/assets/IMG_7868.jpg?raw=true",
    name: "Sayandeep Nayak",
  },
  description: "Today was the day we discovered \"Katak Batak\". It gives superhuman thinking ability to anyone who eats it! It\'s tasty af too!",
  image: "https://raw.githubusercontent.com/Electronics-Pro/hackele_social/main/assets/katak_batak.jpg",
  numberOfLikes: 69,
  numberOfShares: 11,
};

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPost />
      <FeedPost />
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
});
