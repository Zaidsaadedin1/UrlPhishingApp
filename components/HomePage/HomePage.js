import React, { useState } from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";

function HomePage() {
  const [url, setUrl] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  async function detectPhishing() {
    if (!url) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await apis.checkApi(url);

      if (response.status === 200) {
        setData(response.data);
        console.log(response);
        setIsLoading(false);
        setUrl("");
      }
    } catch (error) {
      console.error("Error checking URL:", error);
      setIsLoading(false);
      setUrl("");
    }
  }
  return (
    <ScrollView>
      <View>
        <View>
          <Text>Phishing Detector App</Text>
        </View>
        <TextInput
          placeholder="Enter Url To Check It ..."
          value={url}
          onChangeText={(text) => setUrl(text)}
        />
        <Button
          title="Check"
          disabled={isloading}
          onPress={() => detectPhishing()}
        />
      </View>
    </ScrollView>
  );
}

export default HomePage;
