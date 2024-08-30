import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar, StyleSheet, BackHandler, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

// import Home from './botnav/HomeScreen';
import ChatScreens from "./navBar/ChatScreen";
import HomeScreen from "./navBar/HomeScreen";
import MapsScreen from "./navBar/MapsScreen";
import CameraScreen from "./navBar/CameraScreen";
import ProfileScreen from "./navBar/ProfileScreen";

const Tab = createBottomTabNavigator();

const NavTabs = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={styles.ScreenStyles}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.button}>
              <Icon name="home" size={30} color={focused ? "#ffffff" : "#cccccc"} />
              <Text style={{ color: focused ? "#ffffff" : "#cccccc" }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.button}>
              <Icon name="forum" size={30} color={focused ? "#ffffff" : "#cccccc"} />
              <Text style={{ color: focused ? "#ffffff" : "#cccccc" }}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.qrCode}>
              {/* <TouchableOpacity style={styles.qrCode}> */}
              <Icon name="camera-alt" size={30} color={focused ? "#ffffff" : "#ffffff"} />
              {/* </TouchableOpacity> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MapsScreen"
        component={MapsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.button}>
              <Icon name="place" size={30} color={focused ? "#ffffff" : "#cccccc"} />
              <Text style={{ color: focused ? "#ffffff" : "#cccccc" }}>Maps</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.button}>
              <Icon name="person" size={30} color={focused ? "#ffffff" : "#cccccc"} />
              <Text style={{ color: focused ? "#ffffff" : "#cccccc" }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  button: { justifyContent: "center", alignItems: "center" },
  qrCode: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#98BB66",
    height: 50,
    width: 50,
    borderRadius: 30,
    marginBottom: 10,
  },
  ScreenStyles: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    // tabBarIconStyle: {display: 'none'},
    tabBarStyle: {
      backgroundColor: "#105263",
      borderRadius: 10,
      height: 80,
      elevation: 3,
      position: "absolute",
      bottom: -10,
      left: 0,
      right: 0,
    },
  },
});

export default NavTabs;
