import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/welcome";
import ForgetPassword from './screens/forgetPassword';
import Index from './navigation/index'

export default function App() {
  return (
    
   <Index />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
