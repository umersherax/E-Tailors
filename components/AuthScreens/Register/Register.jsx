import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { appThemeColor } from "../../common/style";
import {
  TextInput,
  Button,
} from "react-native-paper";
import { LoginUser } from "../../common/ApiLayer/AddUser";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";

export default function Register({ navigation }) {
  const [ cellNumber, setCellNumber ] = useState("");
  const [error, setError] = useState(false);
  const reqLen = 11;

  const handleNext = () => {
      if(cellNumber.length !== reqLen){
          setError(true);
      }else{
        navigation.navigate('get-otp',{cellNumber});
      }
  };

  const handleInput = (e) => {
    setCellNumber(e);
    setError(false);
  }

  return (
    <View style={styles.mainBody}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 40, color: "#333" }}>E-Tailors</Text>
        <Ionicons
          name={"cut-outline"}
          size={40}
          color={"#333"}
          style={{ marginLeft: 20, marginTop: 8 }}
        />
      </View>

      <View style={{ marginTop: 60, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, color: "#333" }}>
          Enter your mobile number
        </Text>

        <TextInput
          label="Mobile Number"
          value={cellNumber}
          onChangeText={(text) => handleInput(text)}
          mode="outlined"
          keyboardType="numeric"
          right={<TextInput.Icon name="cellphone-iphone" />}
          activeOutlineColor="#333"
          outlineColor="#333"
          style={{ marginTop: 15 }}
          error={error}
        />
        <Text style={{ fontSize: 12, color: "gray", marginTop: 10 }}>
          By proceeding, you will get code through a SMS message on above phone
          number. Enter that code in next screen
        </Text>

        <View style={{ marginTop: 20 }} />
        <Button
          icon="arrow-right-bold"
          mode="contained"
          style={{
            marginTop: 50,
            width: "90%",
            padding: "2%",
            alignSelf: "center",
            backgroundColor: appThemeColor,
          }}
          onPress={handleNext}
        >
          NEXT
        </Button>
      </View>
      <Text onPress={()=>navigation.navigate("login-user")} style={{ alignSelf: 'center', marginTop: 27, fontSize:15 }}>Already have an account ? Login</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
