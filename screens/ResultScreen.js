import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";

// const styles = StyleSheet.create({
//   container: {
//     fontSize: 50,
//   },
// });

export default ResultScreen = ({ route }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 35.681236,
        longitude: 139.767125,
        latitudeDelta: 0.02, //小さくなるほどズーム
        longitudeDelta: 0.02,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 35.681236,
          longitude: 139.767125,
        }}
        title={"東京駅"}
        description={"JRの駅です。"}
        onPress={() => alert("click")}
      />
    </MapView>
  );
};
