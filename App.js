import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";
import Web from "./assets/Web";

export default function App() {
  const [click, setClick] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      {!click && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Click me" onPress={() => setClick(true)} />
        </View>
      )}
      {click && (
        <View style={styles.container}>
          <Web />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
