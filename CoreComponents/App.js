import { View, StyleSheet, Text, Image, ImageBackground, ScrollView } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text><Text style={styles.text}>Hello </Text>word
        </Text>
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <ImageBackground source={logoImg}>
          <Text>iMAGE text</Text>
        </ImageBackground>
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
        <Image style={styles.img} source={{ uri: "https://picsum.photos/300" }} />
      </ScrollView>
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