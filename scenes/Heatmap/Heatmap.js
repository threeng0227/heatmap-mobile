// import React, {Component} from 'react';
// import {Platform, Text, Dimensions, View} from 'react-native';
// import WebView from 'react-native-webview';
// import HeatmapUtils from '../../utils/HeatmapUtils';
// import styles from './Heatmap.styles';

// const HeatMap = () => {
//   const pitchLength = 105;
//   const pitchWidth = 68;
//   const pitchLengthSimulated = 500;
//   const pitchWidthSimulated = Dimensions.get('window').width;
//   function getRandomValue(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   var data = [
//     {x: 30, y: 50},
//     {x: 32, y: 52},
//     {x: 35, y: 55},
//     {x: 30, y: 60},
//     {x: 28, y: 58},
//     {x: 40, y: 50},
//     {x: 42, y: 48},
//     {x: 45, y: 45},
//     {x: 50, y: 40},
//     {x: 52, y: 42},
//     {x: 55, y: 45},
//     {x: 60, y: 50},
//     {x: 62, y: 52},
//     {x: 65, y: 55},
//     {x: 30, y: 70},
//     {x: 32, y: 72},
//     {x: 35, y: 75},
//     {x: 40, y: 70},
//     {x: 42, y: 68},
//     {x: 45, y: 65},
//     {x: 50, y: 60},
//     {x: 52, y: 62},
//     {x: 55, y: 65},
//     {x: 60, y: 70},
//     {x: 62, y: 72},
//     {x: 65, y: 75},
//     {x: 30, y: 30},
//     {x: 32, y: 32},
//     {x: 35, y: 35},
//     {x: 40, y: 30},
//     {x: 42, y: 28},
//     {x: 45, y: 25},
//     {x: 50, y: 20},
//     {x: 52, y: 22},
//     {x: 55, y: 25},
//     {x: 60, y: 30},
//     {x: 62, y: 32},
//     {x: 65, y: 35},
//   ];
//   data.forEach(point => {
//     point.value = getRandomValue(4, 20);
//   });

//   var points = [];
//   var max = 0;
//   var len = -1;

//   while (len++ < data.length - 1) {
//     var val = data[len];
//     // now also with custom radius
//     var radius = 25;

//     max = Math.max(max, val.value);
//     var point = {
//       x: (val.x / pitchLength) * pitchLengthSimulated,
//       y: (val.y / pitchWidth) * (pitchWidthSimulated / 2),
//       value: val.value,
//       // radius configuration on point basis
//       radius: radius,
//     };
//     points.push(point);
//   }
//   // heatmap data format
//   var arr = {
//     max: max,
//     data: points,
//   };
//   const uri =
//     Platform.OS === 'ios'
//       ? 'heatmap.html'
//       : 'file:///android_asset/heatmap.html';
//   //   console.log('arr', arr);
//   const script = `
//     var heatmapInstance = h337.create({
//       container: document.querySelector('.heatmap'),
//     });
//     heatmapInstance.setData(${arr});
//   `;

//   return (
//     <View style={styles.container}>
//       <View style={styles.webview}>
//         <WebView
//           source={{uri: uri}}
//           scrollEnabled={false}
//           injectedJavaScript={script}
//           javaScriptEnabled
//         />
//       </View>
//     </View>
//   );
// };
// export default HeatMap;
import React, {Component} from 'react';
import {Platform, Text, Dimensions, View} from 'react-native';
import WebView from 'react-native-webview';
import HeatmapUtils from '../../utils/HeatmapUtils';
import styles from './Heatmap.styles';

export default class Heatmap extends Component {
  state = {};
  render() {
    const pitchLength = 105;
    const pitchWidth = 68;
    const pitchLengthSimulated = 420;
    console.log('pitchLengthSimulated', pitchLengthSimulated);
    const pitchWidthSimulated = 272;
    var data = [
      {x: 30, y: 50, value: 20},
      {x: 32, y: 52, value: 20},
      {x: 35, y: 55, value: 20},
      {x: 30, y: 60, value: 20},
      {x: 28, y: 58, value: 20},
      {x: 40, y: 50, value: 20},
      {x: 42, y: 48, value: 10},
      {x: 45, y: 45, value: 4},
      {x: 50, y: 40, value: 4},
      {x: 52, y: 42, value: 16},
      {x: 55, y: 45, value: 12},
      {x: 60, y: 50, value: 9},
      {x: 62, y: 52, value: 20},
      {x: 65, y: 55, value: 20},
      {x: 30, y: 70, value: 20},
      {x: 32, y: 72, value: 20},
      {x: 35, y: 75, value: 9},
      {x: 40, y: 70, value: 20},
      {x: 42, y: 68, value: 20},
      {x: 45, y: 65, value: 5},
      {x: 50, y: 60, value: 9},
      {x: 52, y: 62, value: 20},
      {x: 55, y: 65, value: 20},
      {x: 60, y: 70, value: 20},
      {x: 62, y: 72, value: 20},
      {x: 65, y: 75, value: 20},
      {x: 30, y: 30, value: 9},
      {x: 32, y: 32, value: 9},
      {x: 35, y: 35, value: 5},
      {x: 40, y: 30, value: 20},
      {x: 42, y: 28, value: 7},
      {x: 45, y: 25, value: 9},
      {x: 50, y: 20, value: 12},
      {x: 52, y: 22, value: 20},
      {x: 55, y: 25, value: 14},
      {x: 60, y: 30, value: 12},
      {x: 62, y: 32, value: 12},
      {x: 65, y: 35, value: 20},
    ];
    var points = [];
    var max = 0;
    var len = -1;

    while (len++ < data.length - 1) {
      var val = data[len];
      // now also with custom radius
      var radius = 25;

      max = Math.max(max, val.value);
      var point = {
        x: (val.x / pitchLength) * pitchLengthSimulated,
        y: (val.y / pitchWidth) * (pitchWidthSimulated / 2),
        value: val.value,
        // radius configuration on point basis
        radius: radius,
      };
      points.push(point);
    }
    let webview = null;
    const uri =
      Platform.OS === 'ios'
        ? 'heatmap.html'
        : 'file:///android_asset/heatmap.html';
    const script = heatmapInputGenerator(points, radius, max);
    webview = (
      <WebView
        source={{uri: uri}}
        scrollEnabled={false}
        nestedScrollEnabled={false}
        injectedJavaScript={script}
        javaScriptEnabled
        scalesPageToFit
        domStorageEnabled={true}
      />
    );

    return (
      <View style={styles.container}>
        <View style={styles.webview}>{webview}</View>
      </View>
    );
  }
}

const heatmapInputGenerator = (points, max) => {
  return `
    var heatmapInstance = h337.create({
      container: document.querySelector('.heatmap'),
    
    });
    heatmapInstance.setData({
      max: ${max},
      data: ${JSON.stringify(points)}
    });
  `;
};

const randomize = max => parseInt(Math.random() * (max + 1));
