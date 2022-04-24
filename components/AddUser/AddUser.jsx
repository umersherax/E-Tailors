import React, { useState, useEffect } from "react";
import {
  TextInput,
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
  Snackbar,
  IconButton,
} from "react-native-paper";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import TopHeader from "../paper/AppBar";
import { appThemeColor } from "../common/style";
import { AddUserApi } from "../common/ApiLayer/AddUser";
import { CommonActions } from "@react-navigation/native";

const AddUser = ({ navigation, route }) => {
  const initialValues = {
    userName: "",
    shoulder: "",
    waist: "",
    kamar: "",
    pait: "",
  };
  const [visible, setVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState("");
  console.log('chala');

  useEffect(() => {
    if (route.params?.data) {
      setIsNewUser(route.params?.data);
    }
  }, [route.params]);


  const [visibleToast, setVisibleToast] = React.useState(false);

  const onDismissSnackBar = () => setVisibleToast(false);

  const handleInputChange = (value, name, index) => {
    setValues({
      ...values,
      [name] : value
    })
  };

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    console.log(values);
    // let finalObj = {
    //   mobileNumber,
    //   name: values[0]?.userName,
    //   values,
    // };
    // AddUserApi(finalObj);
    setVisible(false);
    
    navigation.goBack();
  };

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <>
      <TopHeader
        title={"Add customer details"}
        subtitle=""
        goBackVisible={ isNewUser ? true : false}
        showSearch={false}
        goBack={goBack}
        navigation={navigation}

      />
      <Provider>
        <ScrollView style={{ marginBottom: 14 }}>
          <View style={styles.mainView}>
            <TextInput
              label="Phone number"
              value={mobileNumber}
              onChangeText={(text) => setMobileNumber(text)}
              mode="outlined"
              keyboardType="numeric"
              right={<TextInput.Icon name="cellphone-iphone" />}
              style={{ display: isNewUser ? "none" : "flex" }}
            />
            <View style={{ marginTop: 20 }} />

            <TextInput
              label="User Name"
              value={values.userName}
              onChangeText={(text) =>
                handleInputChange(text, "userName")
              }
              mode="outlined"
              right={<TextInput.Icon name="human" />}
            />
            <View style={{ marginTop: 10 }} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                label="Waist"
                value={values.waist}
                onChangeText={(text) => handleInputChange(text, "waist")}
                mode="outlined"
                style={{ width: "48%" }}
                keyboardType="numeric"
              />

              <TextInput
                label="Shoulder"
                value={values.shoulder}
                onChangeText={(text) =>
                  handleInputChange(text, "shoulder")
                }
                mode="outlined"
                style={{ width: "48%" }}
                keyboardType="numeric"
              />
            </View>
            <View style={{ marginTop: 10 }} />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                label="Kamar"
                value={values.kamar}
                onChangeText={(text) => handleInputChange(text, "kamar")}
                mode="outlined"
                style={{ width: "48%" }}
                keyboardType="numeric"
              />

              <TextInput
                label="Shoulder"
                value={values.pait}
                onChangeText={(text) => handleInputChange(text, "pait")}
                mode="outlined"
                style={{ width: "48%" }}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Button
            icon="account-edit"
            mode="contained"
            onPress={showDialog}
            style={{
              marginTop: 50,
              width: "90%",
              alignSelf: "center",
              backgroundColor: appThemeColor,
            }}
          >
            DONE
          </Button>
        </ScrollView>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Success</Dialog.Title>
            <Dialog.Content>
              <Paragraph>User Updated</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Snackbar
          visible={visibleToast}
          onDismiss={onDismissSnackBar}
          duration={2000}
        >
          User deleted
        </Snackbar>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  otherStyle: {
    position: "absolute",
    justifyContent: "center",
  },
});

export default AddUser;
