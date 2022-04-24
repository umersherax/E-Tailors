import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import TopHeader from "../../paper/AppBar";

import * as React from "react";
import { View } from "react-native";
import { Button, Drawer, Divider, DataTable } from "react-native-paper";
import {appThemeColor} from '../../common/style';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function EachUser({ navigation, route }) {
  const { data } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  const edit = () => {
    navigation.navigate("EditUser",{
        data
    });
  };

  return (
    <>
      <TopHeader
        title={data.name}
        subtitle="Details"
        goBackVisible={true}
        goBack={goBack}
        showSearch={false}
        navigation={navigation}
      />
      <View style={{ marginTop: 10 }}>
        <Drawer.Item
          style={{ backgroundColor: "lightgray" }}
          icon="human"
          label={`${data.name}`}
        />
        <Drawer.Item
          style={{ backgroundColor: "lightgray" }}
          icon="update"
          label={`Last updated - ${data.updatedAt}`}
        />
        <View style={{ marginTop: 40 }} />

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Size</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Waist</DataTable.Cell>
            <DataTable.Cell numeric>{data.waist}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Shoulder</DataTable.Cell>
            <DataTable.Cell numeric>{data.shoulder}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View style={{ display: 'flex', flexDirection:'row', justifyContent: 'flex-end' , marginTop:50 }}>


        <Ionicons
          name={"create-outline"}
          size={40}
          color={appThemeColor}
          style={{ marginLeft: 20, marginTop: 3 }}
          onPress={edit}
        />

        <Ionicons
          name={"trash-outline"}
          size={40}
          color={"#DB403F"}
          style={{ marginLeft: 20, marginTop: 3 }}
        />
        </View>
       
      </View>
    </>
  );
}
