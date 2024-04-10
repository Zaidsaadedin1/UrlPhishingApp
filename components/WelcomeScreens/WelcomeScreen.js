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
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to URL Phishing Detector!</Text>
        <Text style={styles.description}>
          Protect yourself from phishing attacks by verifying URLs before
          clicking.
        </Text>
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>
            Here are some tips to stay safe online:
          </Text>
          <Text style={styles.additionalText}>
            .Avoid clicking on suspicious links sent via email or messages.
          </Text>
          <Text style={styles.additionalText}>
            .Double-check the URL before entering sensitive information.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 16,
  },
  description: {
    fontSize: 25,
    color: "black",
    marginBottom: 12,
    fontWeight: "bold",
  },
  additionalTextContainer: {
    flex: 1,
    justifyContent: "center",
    fontWeight: "bold",
  },
  additionalText: {
    fontSize: 23,
    color: "black",
    marginBottom: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 150,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default WelcomeScreen;
