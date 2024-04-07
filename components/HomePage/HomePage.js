import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import DonutChart from "../../DonutChart/DonutChart";

function HomePage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function detectPhishing() {
    if (!url) {
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      // Simulating API call with setTimeout
      setTimeout(() => {
        setIsLoading(false);
        setData([{ title: "Fake URL Detected", score: 95 }]);
        setUrl("");
      }, 2000); // Simulate a 2-second delay
    } catch (error) {
      console.error("Error checking URL:", error);
      setIsLoading(false);
      setError("Error checking URL. Please try again.");
      setUrl("");
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Phishing Detector App</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter URL to Check"
            value={url}
            onChangeText={(text) => setUrl(text)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonView}>
              <Button
                color="red"
                title="Check"
                disabled={isLoading}
                onPress={() => detectPhishing()}
                style={styles.button}
              />
            </View>
          </View>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.resultContainer}>
          {isLoading ? (
            <Text style={styles.loadingText}>Checking...</Text>
          ) : (
            data.map((item, index) => (
              <View key={index} style={styles.resultItem}>
                <Text style={styles.resultTitle}>{item.title}</Text>
                <Text style={styles.resultScore}>Score: {item.score}</Text>
                <DonutChart data={item} />
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 10,
  },
  resultItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resultScore: {
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonView: {
    width: 100,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
  },
});

export default HomePage;
