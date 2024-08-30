import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons";
import HeaderCPW from "../Header/HeaderCPW";
// import HeaderTrashgo from '../Header/HeaderTrashgo';

const ChangePassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.SAV}>
      <View>
        <HeaderCPW></HeaderCPW>
      </View>
      <View style={styles.containerPage}>
        <View style={styles.containerTrashgo}>
          <Text style={styles.textTrash}>trash</Text>
          <Text style={styles.textGO}>GO</Text>
        </View>
        <Text style={styles.subText}>Ganti Password</Text>
        <Text style={styles.subText2}>Masukkan email Anda dan password baru anda</Text>
        <View>
          <View style={styles.boxInput}>
            <Text style={styles.textInput}>Email</Text>
            <TextInput placeholder="Alamat Email" style={styles.formInput}></TextInput>
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.textInput}>Password Baru</Text>
            <TextInput placeholder="Masukkan Password Baru" style={styles.formInput}></TextInput>
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.textInput}>Konfirmasi Password Baru</Text>
            <TextInput placeholder="Konfirmasi Password Baru" style={styles.formInput}></TextInput>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.buttonSimpan}>
          <Text style={styles.textSimpan}>Simpan Perubahan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SAV: {
    backgroundColor: "#105263",
    flex: 1,
  },
  containerPage: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  Appbar: {
    backgroundColor: "#105263",
    marginTop: 20,
  },
  containerTrashgo: {
    flexDirection: "row",
  },
  textTrash: {
    fontFamily: "FutuBdIt",
    fontSize: 35,
    color: "#fff",
  },
  textGO: {
    fontFamily: "FutuBd",
    fontSize: 35,
    color: "#fff",
  },
  subText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
  subText2: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  formInput: {
    height: 40,
    width: 320,
    backgroundColor: "#ffffff",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    paddingLeft: 10,
  },
  textInput: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
  },
  boxInput: {
    marginTop: 10,
  },
  buttonSimpan: {
    backgroundColor: "#105263",
    paddingHorizontal: 15,
    marginTop: 50,
    borderRadius: 8,
    height: 40,
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  textSimpan: {
    fontFamily: "FutuBd",
    color: "#fff",
    fontSize: 16,
  },
});

export default ChangePassword;
