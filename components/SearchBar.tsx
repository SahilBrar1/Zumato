import { TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { getHeight, getWidth } from "../utils/Stylehelper";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <TextInput
      value={query}
      onChangeText={(text) => setQuery(text)}
      placeholder="Search"
      style={styles.input}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    marginVertical: getHeight(10),
    height: getHeight(43),
    marginTop: getHeight(16),
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
  },
});
