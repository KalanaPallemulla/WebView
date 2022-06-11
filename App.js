import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";
import Web from "./assets/Web";
import BackgroundImage from "./assets/Background.jpeg";

export default function App() {
  const [click, setClick] = useState(false);

  return (
    <View style={styles.container}>
      <>
        {!click && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageBackground
              resizeMode="cover"
              style={{ flex: 1, width: "100%", justifyContent: "center" }}
              source={require("./assets/Background.jpeg")}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{ width: "50%" }}
                  title="Click me"
                  onPress={() => setClick(true)}
                />
              </View>
            </ImageBackground>
          </View>
        )}
        {click && (
          <View style={styles.container}>
            <Web />
          </View>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
