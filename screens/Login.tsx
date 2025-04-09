import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

const Login = ({ navigation }: any) => {
  const validNumber = '123456789';  

  let userNumber = ''; 

  const handleLogin = () => {
    if (userNumber === validNumber) {
      // Alert.alert('Success', 'Login Successful!');
      navigation.navigate('Home')
    } else {
      Alert.alert('Invalid Number', 'Please enter correct number');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/zomato.jpg")} />

      <Text style={styles.title}>India's #1 Food Delivery and Dining App</Text>

      <Text style={styles.log}>Log in or Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        onChangeText={(text) => userNumber = text}
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
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  termsText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
  },
  log: {
    textAlign: "center",
  },
});
