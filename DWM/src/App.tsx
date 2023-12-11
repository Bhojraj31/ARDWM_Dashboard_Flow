/*  Copyright: AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws */
/**
 * @param - NA
 * @return -- NA
 * @Name:- App
 * @Type:- Functional Component
 * @Role:- For showing Root component
 * @Sprint:- 
 * @Created by:- Bhojraj Singh Shekhawat
 * @Created on:-  01-11-2023
 * @Last Modified by:- No
 * @Last modified on:- No
 */

import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './routes/AppNavigator';
import BootSplash from "react-native-bootsplash";
import { ThemeProvider } from './theme/ThemeProvider';
import { PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: '#040D14'
    }}>
      <StatusBar
        backgroundColor='#040D14'
        barStyle={'light-content'}
      />
      <ThemeProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </ThemeProvider>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

});

export default App;
