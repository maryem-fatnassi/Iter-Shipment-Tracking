import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const CurvedHeader = ({ height, curveHeight, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.upperBlock, { height: height, backgroundColor: color }]} />
      
      <View style={styles.svgWrapper}>
        <Svg 
          height={curveHeight} 
          width={width} 
          viewBox={`0 0 ${width} ${curveHeight}`}
        >
          <Path
            d={`M0 0 Q${width / 2} ${curveHeight * 2} ${width} 0 L${width} 0 L0 0 Z`}
            fill={color}
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position:'relative',
  },
  upperBlock: {
    width: '100%',
  },
  svgWrapper: {
    marginTop: -1,
  }
});

export default CurvedHeader;