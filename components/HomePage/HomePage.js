import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { apis } from "../../Api/Apis";
import { ProgressChart } from "react-native-chart-kit";
import LoadingDots from "react-native-loading-dots";

function HomePage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const data = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.0, 0.0, 0.0],
  };
  async function detectPhishing() {
    if (!url) {
      return;
    }
    setIsLoading(true);
    setError("");
    setTimeout(async () => {
      try {
        const response = await apis.checkApi(url);
        if (response.status === 200) {
          setIsLoading(false);
          setData([{ title: "Fake URL Detected", score: response.data.score }]);
          setUrl("");
        } else {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error checking URL:", error);
        setIsLoading(false);
        setError("Error checking URL. Please try again.");
        setUrl("");
      }
    }, 2000);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Phishing Detector</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter URL to Check"
            value={url}
            onChangeText={(text) => setUrl(text)}
          />
          <View style={styles.buttonContainer}>
            <View>
              <TouchableHighlight
                style={styles.submit}
                onPress={() => detectPhishing()}
                underlayColor="#fff"
              >
                <Text style={styles.submitText}>Check Url</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.resultContainer}>
          {isLoading ? (
            <LoadingDots />
          ) : (
            <View style={styles.resultItem}>
              <ProgressChart
                data={data}
                width={300}
                height={220}
                strokeWidth={16}
                radius={32}
                hideLegend={false}
                chartConfig={{
                  color: (opacity = 1) => `rgba(26, 34, 146, ${opacity})`,
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                }}
              />
            </View>
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
    textTransform: "uppercase",
    color: "rgba(26, 34, 165, 0.8)",
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
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: "white",
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
    color: "white",
    marginBottom: 10,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    width: 150,
  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "rgba(26, 34, 165, 0.8)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default HomePage;
