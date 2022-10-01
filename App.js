import { withAuthenticator } from 'aws-amplify-react-native';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import Navigator from "./src/navigation";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true }});
Auth.configure(awsconfig);

function App() {

  // Auth.currentAuthenticatedUser().then((data) => console.log(data))
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withAuthenticator(App);