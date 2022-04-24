import React from "react";
import { Appbar } from "react-native-paper";

export default function TopHeader({ title="title", subtitle="subtitle", goBackVisible=true, goBack, showSearch=true, navigation }) {
  const _goBack = () => {
    goBack();
  }

  const _handleSearch = () => navigation.navigate("Home");

  const _handleMore = () => console.log("Shown more");
  return (
    <Appbar.Header dark={true} style={{ backgroundColor:"#36454F" }}>
        {goBackVisible && <Appbar.BackAction onPress={_goBack} />}
      
      <Appbar.Content title={title} subtitle={subtitle} />
      {showSearch && <Appbar.Action icon="home" onPress={_handleSearch} />}
      
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
}
