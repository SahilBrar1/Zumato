import {
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import ItemComponent from "./ItemComponent";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchPosts, postData } from "../apis/api";
import { useQueryClient } from "@tanstack/react-query";

const FlatlistComponent = () => {
  const queryClient = useQueryClient();
  //useQuery
  const { data, isLoading, isError, fetchStatus } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //useQuery

  //useMutation
  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  //useMutation
  //useState
  const [name, setName] = useState("");
  //useState

  if (isLoading) {
    return <Text style={styles.text}>Loading....</Text>;
  }
  if (isError) {
    return <Text style={styles.text}>Error fetching data!</Text>;
  }
  if (mutation.isPending) {
    return <Text style={styles.text}>fetching data in mutation</Text>;
  }
  if (fetchStatus === "fetching") {
    return <Text style={styles.text}> fetching data for query</Text>;
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button
        title="Add Title for the post"
        onPress={() => mutation.mutate({ name })}
        disabled={mutation.isPending}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent name={item.name} />}
      />
    </View>
  );
};

export default FlatlistComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  text: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
