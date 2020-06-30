import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const StartScreen = () => {
  const navigation = useNavigation();
  const [lowerCarLeft] = useState(new Animated.Value(0));

 const runAnimation = () => {
    lowerCarLeft.setValue(-50);
    // upperCarLeft.setValue(100);

    Animated.parallel([
        Animated.timing(lowerCarLeft, {
            toValue: 100,
            duration: 5000
        }),
        // Animated.timing(upperCarLeft, {
        //     toValue: -50,
        //     duration: 2000
        // })
    ]).start(() => runAnimation());
};

useEffect(() => {
    runAnimation();
});

//   useEffect(() => {
//     Animated.timing(lowerCarLeft, {
//       toValue: 100,
//       duration: 2000,
//     }).start();
//     console.log(lowerCarLeft);
//   }, []);

  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Animated.Image
          resizeMode="center"
          source={require("../assets/images/pngegg.png")}
          style={{
            ...styles.birdImage,
            ...styles.lowerBird,
            left: lowerCarLeft.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: 30,
            padding: 10,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "blue",
            backgroundColor: "white",
          }}
          // style={styles.comment}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <Text>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    //   fontFamily: "ubuntu-regular",

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  birdImage: {
    height: 80,
    position: "absolute",
    width: 160,
    // left: lowerCarLeft.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: ['0%', '100%']
    // })
  },

  lowerBird: {
    bottom: 10,
    // left: lowerCarLeft
  },
});
