import React,{useEffect} from 'react';
import { StyleSheet, } from 'react-native';
import AppNavigator from './routes/AppNavigator';
import BootSplash from "react-native-bootsplash";

function App(): JSX.Element {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, [])

  return (
    <AppNavigator />      
  );
}

const styles = StyleSheet.create({
  
});

export default App;
