import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const NextWelcomeScreen = ({ navigation }) => {
  const handleNextPress = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Our Security Solution!</Text>
        <Text style={styles.description}>
          Explore our machine learning-powered tools to detect phishing URLs.
        </Text>
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>
            Our machine learning models are trained to:
          </Text>
          <Text style={styles.additionalText}>
            .Identify suspicious patterns in URLs.
          </Text>
          <Text style={styles.additionalText}>
            .Utilize advanced algorithms to analyze website content for phishing
            indicators.
          </Text>
          <Text style={styles.additionalText}>
            .Deliver proactive alerts and robust protection mechanisms against
            phishing attacks in real-time.
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

export default NextWelcomeScreen;
