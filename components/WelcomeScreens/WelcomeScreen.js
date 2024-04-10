import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handleNextPress = () => {
    navigation.navigate("NextWelcomeScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to URL Phishing Detector!</Text>
        <Text style={styles.description}>
          Protect yourself from phishing attacks by verifying URLs before
          clicking.
        </Text>
        <Text style={styles.additionalText}>
          Here are some tips to stay safe online:
        </Text>
        <Text style={styles.additionalText}>
          - Avoid clicking on suspicious links sent via email or messages.
        </Text>
        <Text style={styles.additionalText}>
          - Double-check the URL before entering sensitive information.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(26, 34, 165, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(26, 34, 165, 0.8)",
  },
});

export default WelcomeScreen;
