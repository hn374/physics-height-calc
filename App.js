import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import LaunchScreen from "./src/pages/launchScreen.js";
import HomeScreen from "./src/pages/homeScreen.js";
import { Provider as PaperProvider } from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <View style={ styles.viewContainer }>
        {/* <LaunchScreen></LaunchScreen> */}
        <HomeScreen></HomeScreen>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#41C4FC',
  },
});

export default App;
