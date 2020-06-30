import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StartScreen } from "./screens/StartScreen";
import { MainScreen } from "./screens/MainScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    // <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            options={{
              headerTitleAlign: "center",
              headerTitle: "StartScreen",
              headerStyle: {
                backgroundColor: Platform.OS === "ios" ? "black" : "blue",
              },
              headerTintColor: Platform.OS === "ios" ? "blue" : "black",
            }}
            name="StartScreen"
            component={StartScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            // options={{
            //   headerTitleAlign: "center",
            //   headerTitle: "MainScreen",
            //   headerStyle: {
            //     backgroundColor: Platform.OS === "ios" ? "black" : "blue",
            //   },
            //   headerTintColor: Platform.OS === "ios" ? "blue" : "black",
            // }}
            name="MainScreen"
            component={MainScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    //  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
