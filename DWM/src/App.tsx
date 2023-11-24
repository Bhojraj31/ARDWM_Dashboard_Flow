import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './routes/AppNavigator';
import BootSplash from "react-native-bootsplash";
import { background } from './assets/constants/ColorConstants';
import { ThemeProvider } from './theme/ThemeProvider';

function App(): JSX.Element {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: background
    }}>
      <StatusBar
        backgroundColor={background}
        barStyle={'light-content'}
      />
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
