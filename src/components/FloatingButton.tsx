import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {SECONDARY_LIGHT} from '../constants/colors';

interface FloatingButtonProps {
  iconName: string;
  iconSize: number;
}

const FloatingButton = ({iconName, iconSize}: FloatingButtonProps) => {
  return (
    <View>
      <View style={styles.floatingContainer}>
        <View style={styles.iconBox}>
          <Icon name={iconName} size={iconSize} color={'#ffffff'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    backgroundColor: SECONDARY_LIGHT,
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
export default FloatingButton;
