import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
} from "react-native";
import Constants from "expo-constants";

export const MainTab = () => {
  const [lowerCarLeft] = useState(new Animated.Value(0));

  const runAnimation = () => {
    lowerCarLeft.setValue(-50);
    // upperCarLeft.setValue(100);

    Animated.parallel([
      Animated.timing(lowerCarLeft, {
        toValue: 100,
        duration: 5000,
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../../assets/images/krrr.jpg")}
            style={{ flex: 1, width: null, height: null, opacity: 0.1 }}
          />
        </View>
        <Text style={styles.mainHead}>
          Креативный дизайн и современные технологии разработки
        </Text>
        <Image
          source={require("../../assets/images/phone.jpg")}
          style={{ flex: 1, width: "100%", height: 180 }}
        />
        <Animated.Text
          style={{
            ...styles.textAnim,
            left: lowerCarLeft.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        >
          УСЛУГИ
        </Animated.Text>
        <Text style={styles.mainTextHead}>Сопровождение и обслуживание </Text>
        <Text style={styles.mainText}>
          Хостинг, техническое сопровождение, контроль работоспособности
        </Text>
        <Text style={styles.mainTextHead}>Мобильные приложения </Text>
        <Text style={styles.mainText}>
          Разрабатываем мобильные приложения для iOS и Android
        </Text>
        <Text style={styles.mainTextHead}>Разработка сайта</Text>
        <Text style={styles.mainText}>
          Интернет-магазин, сайт компании, сайт-визитка, проекты "под ключ".
        </Text>
        <Text style={styles.mainTextHead}>SMM/SEO Продвижение</Text>
        <Text style={styles.mainText}>
          Ведем социальные сети и создаем системы привлечения клиентов,
          продвигаем сайты в поисковых системах.
        </Text>
        <Text style={styles.mainTextHead}>Проработка макета</Text>
        <Text style={styles.mainText}>
          Дизайн сайтов любой сложности - низкие и высокие бюджеты, дизайн
          магазинов, промо-сайтов, сайтов компаний.
        </Text>
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
  mainHead: {
    paddingTop: 80,
    fontWeight: "bold",
    textAlign: "left",
    // paddingLeft: 20,
    fontSize: 48,
    paddingBottom: 80,
  },
  mainText: {
    textAlign: "left",
    // paddingLeft: 20,
    fontSize: 18,
  },
  mainTextHead: {
    textAlign: "left",
    // paddingLeft: 20,
    fontSize: 24,
  },
  textAnim:{
    fontSize: 33,
    paddingBottom: 80,
    paddingTop: 80,
    fontWeight: "bold",
  }
});
