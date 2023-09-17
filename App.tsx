import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import SocialApp from "./components/social-app";

export default function App() {
  const [randomBackground, setRandomBackground] = useState<string>("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
    console.log(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me!</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Created By: Kannu Mandora</Text>
      <SocialApp />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    marginTop: 20,

  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    color: "#FFFFFF",
    fontSize: 24,
    textTransform: "uppercase",
  },
});
