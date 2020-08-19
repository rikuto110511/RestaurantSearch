import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ResultScreen from "../screens/ResultScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ホーム" component={HomeScreen} />
      {/* <Stack.Screen name="編集" component={EditScreen} /> */}
      <Stack.Screen name="検索結果" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
