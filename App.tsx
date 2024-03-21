/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import RootNavigator from './src/navigators/RootNavigator';
import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App;
