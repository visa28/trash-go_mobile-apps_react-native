import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import TrashgoIcon from "../img/trashgoicon.svg";

const SplashScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    AppleTea: require("../font/AppleTea.ttf"),
    FutuBd: require("../font/FutuBd.ttf"),
    FutuBdIt: require("../font/FutuBdIt.ttf"),
    PoppinsRegular: require("../font/Poppins-Regular.ttf"),
    PoppinsBold: require("../font/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../font/Poppins-SemiBold.ttf"),
    PoppinsBlack: require("../font/Poppins-Black.ttf"),
  });
  useEffect(() => {
    setTimeout(() => {
      try {
        const _validationSession = async () => {
          const isLogin = await AsyncStorage.getItem("sessionID");
          navigation.navigate(isLogin ? "NavTabs" : "LoginScreen");
        };
        _validationSession();
      } catch (error) {
        console.log(error);
      }
    }, 2500);
  }, []);

  return (
    <View style={styles.pages}>
      {/* <View>
        <TrashgoIcon height={200} width={250}></TrashgoIcon>
      </View> */}
      <View style={styles.containerTrashgo}>
        <Text style={styles.textTrash}>trash</Text>
        <Text style={styles.textGo}>GO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#105263",
  },
  image: {
    width: 220,
    height: 220,
  },
  textTrash: {
    color: "#fff",
    fontFamily: "FutuBdIt",
    fontSize: 50,
  },
  textGo: {
    fontFamily: "FutuBd",
    fontSize: 50,
    color: "#fff",
  },
  containerTrashgo: {
    flexDirection: "row",
  },
});

export default SplashScreen;
