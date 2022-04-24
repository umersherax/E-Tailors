import React, {useState, useRef} from "react";
import { ScrollView, View } from "react-native";
import { DataTable, Searchbar, ProgressBar } from "react-native-paper";
import TopHeader from "../paper/AppBar";
import userData from "../dummyData";
import { useSelector, useDispatch } from "react-redux";
export default function Users({ navigation }) {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");
  const dispatch = useDispatch();

  const onChangeSearch = (query) => setSearchQuery(query);
  const [loading, setLoading] = useState(0);



  React.useEffect(() => {
    // console.log('chala');
    // dispatch({
    //   type: "TEST",
    //   payload: ""
    // })
    
    setPage(0);
  }, [itemsPerPage]);

  const nextPage = () => {
    alert("hello");
  };

  const details = (userData) => {
    navigation.navigate("UserDetails", { userData });
  };

  const handleSearch = () => {
    alert("search: " + searchQuery);
  };

  return (
    <>
        
      <TopHeader title="All Users" subtitle="Home" goBackVisible={false} navigation={navigation} />
      <View style={{ marginHorizontal: 10 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={handleSearch}
          style={{ marginTop: 30 }}
        />

        <ScrollView
          contentContainerStyle={{ paddingBottom: 100, marginTop: 20 }}
        >
          <DataTable>
            <DataTable.Header style={{ backgroundColor: "#36454F" }}>
              <DataTable.Title textStyle={{ fontSize: 22, color: "#fff" }}>
                Name
              </DataTable.Title>
              <DataTable.Title textStyle={{ fontSize: 22, color: "#fff" }}>
                Contact
              </DataTable.Title>
            </DataTable.Header>
            {userData.map(
              (data, i) =>
                i <= itemsPerPage && (
                  <DataTable.Row key={i} style={{}} onPress={() => details(data)}>
                    <DataTable.Cell>{data.name}</DataTable.Cell>
                    <DataTable.Cell>{data.number}</DataTable.Cell>
                  </DataTable.Row>
                )
            )}

            <DataTable.Pagination
              page={page}
              onPageChange={nextPage}
              label="1-2 of 6"
            />
          </DataTable>

        </ScrollView>
      </View>
    </>
  );
}
