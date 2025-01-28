import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, ActivityIndicator, Button } from "react-native";
import { useState } from "react";

const logoImg = require("./assets/adaptive-icon.png");



export default function App() {
  const [showLoad, setShowLoad] = useState(true)

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="midnightblue" animating={showLoad} />
      <Button title="Show Load" onPress={ () => {
        if(showLoad == true)
          setShowLoad(false)
        else
          setShowLoad(true)
      }} />
    </View >
  );
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "red",
      flex: 1,
      padding: 100
    },
    text: {
      color: "blue"
    },
    img: {
      width: 300,
      height: 300
    }
  }
)