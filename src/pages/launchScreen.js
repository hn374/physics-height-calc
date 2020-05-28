import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

function LaunchScreen() {
    return(
        <View>
            <Text style={styles.header}>Physics Height Calculator</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      fontSize: 52,
      fontFamily: 'Avenir-Roman',
      color: 'white',
      fontWeight: '900',
      textAlign: 'center',
    },
});

export default LaunchScreen;