import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import allPosts from "../../postsRus.json";

export const BlogTab = () => {
  const url = "../../assets/images/blog/2.jpeg";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text>BLOG</Text>
        </View>
        <FlatList
          data={allPosts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  style={{
                    width: 330,
                    height: 230,
                    marginBottom: 10,
                    borderRadius: 10,
                    right: 10,
                    bottom: 30,
                    // position: "absolute",
                  }}
                  // source={{
                  //   uri: item.userAvatar,
                  // }}
                  // source={require(`${item.img}`)}
                  source={{ uri: item.image }}
                  // source={require(`${url}`)}

                  // style={{ flex: 1, width: "100%", height: 180 }}
                />
                <Text>{item.img}</Text>
                <Text>{item.message}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
