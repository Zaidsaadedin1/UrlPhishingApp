import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Chart as ChartJS } from "react-native-chart-kit";

const DonutChart = ({ percentage }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const data = {
        datasets: [
          {
            data: [percentage, 100 - percentage],
            colors: ["green", "lavender"],
          },
        ],
      };

      chartInstance.current = new ChartJS({
        type: "pie",
        data,
        options: {
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
            doughnutlabel: {
              labels: [],
            },
          },
        },
      });

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Chart ref={chartRef} style={styles.chart} />
      <Text style={styles.label}>{`${percentage}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  chart: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default DonutChart;
