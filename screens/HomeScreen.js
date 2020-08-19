import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, Slider } from "react-native";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTopContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  buttonBottomContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  sliderContainer: {
    marginTop: 30,
    flexDirection: "column",
  },
  rangeLabel: {
    marginLeft: 20,
    fontSize: 20,
  },
  slider: {
    marginLeft: "10%",
    marginRight: "10%",
  },
});

export default HomeScreen = ({ navigation }) => {
  const [searchRange, setSearchRange] = useState(500);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonTopContainer}>
        <Button buttonName="ios-cafe" displayValue="カフェ・デザート" />
        <Button buttonName="ios-restaurant" displayValue="おひるごはん" />
      </View>
      <View style={styles.buttonBottomContainer}>
        <Button buttonName="ios-beer" displayValue="よるごはん" />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.rangeLabel}>現在地から：{searchRange}m</Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          minimumTrackTintColor="#1EB1FC"
          maximumTractTintColor="#1EB1FC"
          step={1}
          value={searchRange}
          onValueChange={(searchRange) => setSearchRange(searchRange)}
          style={styles.slider}
          thumbTintColor="#1EB1FC"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("検索結果")}>
          <Text>TEST</Text>
        </TouchableOpacity>
      </View>

      {/* ダミー */}
      <View
        style={{
          position: "absolute",
          top: 700,
          width: "100%",
          height: "10%",
          backgroundColor: "red",
        }}
      >
        <Text style={{ fontSize: 30, paddingTop: 23, paddingLeft: 10 }}>
          広告（仮）
        </Text>
      </View>
    </SafeAreaView>
  );
};
