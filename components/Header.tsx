import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  logo?: any;
};

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
}) => {
  console.log("I am Header AND I rendered again");
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {showBackButton ? (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={styles.backButtonPlaceholder} />
        )}

        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>{title}</Text>

        {/* <View style={{ width: 24 }} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  backButton: {
    width: 24,
    marginRight: 10,
  },
  backButtonPlaceholder: {
    width: 24,
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
});

export default Header;
