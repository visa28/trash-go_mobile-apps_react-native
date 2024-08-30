//Import
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Material
//Screen
import SplashScreen from "./SplashScreen";
import CameraScreens from "./navBar/CameraScreen";
import ChatScreens from "./navBar/ChatScreen";
import HomeScreen from "./navBar/HomeScreen";
import ProfileScreen from "./navBar/ProfileScreen";
import MapsScreen from "./navBar/MapsScreen";
import NavTabs from "./NavTabs";
import CameraScreen from "./navBar/CameraScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import SettingScreen from "./SettingScreen";
import LaporanScreen from "./Features/LaporanScreen";
import ScheduleScreen from "./Features/ScheduleScreen";
import HistoryScreen from "./HistoryScreen";
import EditProfile from "./Features/EditProfile";
import ChangePassword from "./Features/ChangePassword";
import NotifScreen from "./Features/NotifScreen";
import DetailsLaporan from "./Features/DetailsLaporan";
//Image

//Start Application
const Stack = createNativeStackNavigator();

const AllScreen = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="NavTabs" component={NavTabs} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MapScreen" component={MapsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreens} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="LaporanScreen" component={LaporanScreen} />
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="NotifScreen" component={NotifScreen} />
        <Stack.Screen name="DetailLaporan" component={DetailsLaporan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllScreen;
