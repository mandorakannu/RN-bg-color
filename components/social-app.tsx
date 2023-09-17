import {
  Image,
  StyleSheet,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function SocialApp() {
  const gotoSocialApp = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => gotoSocialApp("https://www.instagram.com/mandorakannu")}
      >
        <Image
          style={styles.icons}
          source={require("../assets/png/instagram.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          gotoSocialApp("https://www.linkedin.com/in/mandorakannu")
        }
      >
        <Image
          style={styles.icons}
          source={require("../assets/png/linkedin.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => gotoSocialApp("https://www.github.com/mandorakannu")}
      >
        <Image
          style={styles.icons}
          source={require("../assets/png/github.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    backgroundColor: "transparent",
    marginVertical: 20,
    width: 50,
    height: 50,
  },
});
