import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { apis } from "../../Api/Apis";
import LoadingDots from "react-native-loading-dots";
import { PieChart } from "react-native-gifted-charts";

function HomePage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  async function detectPhishing() {
    if (!url) {
      setError("Please enter a URL.");
      return;
    }
    setIsLoading(true);
    setError("");
    setTimeout(async () => {
      try {
        const response = await apis.checkApi(url);
        if (response.status === 200) {
          setData([{ title: "Fake URL Detected", score: response.data.score }]);
        } else {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error checking URL:", error);
        setError(`Error checking URL: ${error.message}`);
      } finally {
        setIsLoading(false);
        setUrl("");
      }
    }, 2000);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LoadingDots />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Phishing Detector</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter URL to Check"
              value={url}
              onChangeText={setUrl}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
          <View style={styles.submit}>
            <TouchableHighlight
              style={styles.button}
              onPress={detectPhishing}
              underlayColor="#ddd"
            >
              <Text style={styles.submitText}>Check URL</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.resultContainer}>
            <View style={styles.pieChart}>
              <PieChart
                donut
                innerRadius={95}
                data={[
                  {
                    value: 33.33,
                    color: "rgba(46, 54, 195, 0.8)",
                    label: "First Lighter Blue",
                  },

                  { value: 10, color: "#F0F8FF", label: "gray" },
                ]}
              />
              <Text>Naive Bayes Algorithm</Text>
            </View>
            <View style={styles.pieChart}>
              <PieChart
                donut
                innerRadius={95}
                data={[
                  {
                    value: 33.33,
                    color: "rgba(66, 74, 225, 0.8)",
                    label: "Second Lighter Blue",
                  },

                  { value: 60, color: "#F0F8FF", label: "gray" },
                ]}
              />
              <Text>Logistic Regression Algorithm</Text>
            </View>

            <View style={styles.pieChart}>
              <PieChart
                donut
                innerRadius={95}
                data={[
                  {
                    value: 33.34,
                    color: "rgba(86, 94, 255, 0.8)",
                    label: "Third Lighter Blue",
                  },
                  { value: 70, color: "#F0F8FF", label: "gray" },
                ]}
              />
              <Text>Gradient Descent Algorithm</Text>
            </View>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.resultContainer}>
              <PieChart
                donut
                data={[
                  { value: 50, color: "#ff0000", label: "Red" },
                  { value: 50, color: "#F0F8FF", label: "gray" },
                ]}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    marginBottom: 10,
  },
  submit: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(26, 34, 165, 0.8)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  button: {
    width: 150,
  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultScore: {
    fontSize: 16,
  },
  pieChart: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default HomePage;
