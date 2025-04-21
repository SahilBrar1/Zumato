import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getHeight, getWidth } from "../utils/Stylehelper";
import colors from "../tokens/colors";
import { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import strings from "../constants/strings";

const Login = () => {
  const userIdref = useRef(null);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [userId, setUserId] = useState("");

  const handleLogin = async () => {
    const storedUserId = "1234567890";

    if (userId === storedUserId) {
      await AsyncStorage.setItem("isLoggedIn", "true");
      navigation.replace("Home");
    } else {
      Alert.alert(strings.alertTitle, strings.alertMessage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", // ⬅️ Pushes content to center
               }}keyboardShouldPersistTaps="handled">
          <Image style={styles.image} source={require("../assets/zomato.jpg")} />

          <View style={{ padding: 10, flex: 1 }}>
            <Text style={styles.title}>{strings.appTitle}</Text>

            <Text style={styles.log}>{strings.loginHeading}</Text>
            <TextInput
              style={styles.input}
              ref={userIdref}
              value={userId}
              onChangeText={(text) => setUserId(text)}
              placeholder={strings.phonePlaceholder}
              keyboardType="phone-pad"
              maxLength={10}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>{strings.continueButton}</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>{strings.terms}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlueExtraLight,
  },
  image: {
    width: "100%",
    height: getHeight(350),
    resizeMode: "cover",
    marginBottom: getWidth(20),
  },
  title: {
    fontSize: getHeight(28),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: getHeight(20),
    fontFamily: 'Poppins-Bold',
  },
  input: {
    borderWidth: getWidth(1),
    borderColor: colors.inputBorder,
    borderRadius: getHeight(8),
    padding: 12,
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: colors.btnBackground,
    padding: 15,
    borderRadius: getHeight(8),
  },
  buttonText: {
    color: colors.backgroundBlueExtraLight,
    textAlign: "center",
    fontSize: getHeight(16),
    fontFamily: 'Poppins-SemiBold',
  },
  termsText: {
    marginTop: getHeight(12),
    textAlign: "center",
    fontSize: getHeight(12),
    color: colors.termsColor,
    fontFamily: 'Poppins-Light',
  },
  log: {
    textAlign: "center",
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
});
