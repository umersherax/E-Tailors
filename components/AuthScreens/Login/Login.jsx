import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { appThemeColor } from "../../common/style";
import {
  TextInput,
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
} from "react-native-paper";
import { LoginUser } from "../../common/ApiLayer/AddUser";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from "react-redux";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = () => {
    const data = { name, pwd };
    const response  = LoginUser(data);
    console.log(data);
  }

  return (
    
    <View style={styles.mainBody}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, color: "#333" }}>E-Tailors</Text>
      <Ionicons name={"cut-outline"} size={40} color={"#333"} style={{ marginLeft: 20, marginTop: 8 }}  />
      </View>

      <View style={{ marginTop: 60, marginHorizontal: 20 }}>

        <TextInput
          label="Mobile Number"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          keyboardType="numeric"
          right={<TextInput.Icon name="cellphone-iphone" />}
        />
        <View style={{ marginTop: 20 }} />
        <TextInput
          label="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)}
          mode="outlined"
          secureTextEntry={true}
          right={<TextInput.Icon name="onepassword" />}

        />
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
            onPress={handleLogin}
          >
            LOGIN
          </Button>
      </View>
      <Text onPress={()=>navigation.navigate("register-user")} style={{ alignSelf: 'center', marginTop: 27, fontSize:15 }}>Create new account</Text>

    </View>
  );
}


const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
});