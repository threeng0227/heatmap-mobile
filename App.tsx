/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Heatmap from './scenes/Heatmap/Heatmap';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <Heatmap />
    </View>
  );
}

export default App;
