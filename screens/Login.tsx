import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getHeight, getWidth } from "../utils/Stylehelper";
import colors from "../tokens/colors";

const Login = ({ navigation }: any) => {
  const validNumber = "123456789";

  let userNumber = "";

  const handleLogin = () => {
    if (userNumber === validNumber) {
      // Alert.alert('Success', 'Login Successful!');
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid Number", "Please enter correct number");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/zomato.jpg")} />

      <View style={{ padding: 10 }}>
        <Text style={styles.title}>
          India's #1 Food Delivery and Dining App
        </Text>

        <Text style={styles.log}>Log in or Sign up</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={(text) => (userNumber = text)}
        />
        {/* <Mybutton onPress={() => navigation.navigate("Home")} /> */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        {/* <Text style={styles.log}>or</Text> */}
        <Text style={styles.termsText}>
          By continuing, you agree to our Terms of Service & Privacy Policy
        </Text>
      </View>
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
  },
  input: {
    borderWidth: getWidth(1),
    borderColor: colors.inputBorder,
    borderRadius: getHeight(8),
    padding: 12,
    marginBottom: 15,
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
  },
  termsText: {
    marginTop: getHeight(12),
    textAlign: "center",
    fontSize: getHeight(12),
    color: colors.termsColor,
  },
  log: {
    textAlign: "center",
    marginBottom: 8,
  },
});
