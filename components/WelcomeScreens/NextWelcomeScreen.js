import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NextWelcomeScreen = ({ navigation }) => {
  const handleNextPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: "rgba(26, 34, 165, 0.8)" }]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Next Screen</Text>
        <Text style={styles.description}>
          This is the next screen after the WelcomeScreen.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginBottom: 50,
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
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(26, 34, 165, 0.8)",
  },
});

export default NextWelcomeScreen;
