import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FloatingButton, ProfileCards} from '../../components';
import {LIGHT_COLOR} from '../../constants/colors';

interface CallsProps {}

const Calls = ({}: CallsProps) => {
  const item = {
    id: 1,
    name: 'Aditya',
    lastMessage: 'Yesterday, 11:54 PM',
    profilePic: '',
    lastSeen: '10:36 PM',
  };
  return (
    <View style={styles.rootCalls}>
      <ProfileCards {...{item}} call={true} />
      <View style={{position: 'absolute', bottom: 10, right: 10}}>
        <FloatingButton iconName="phone" iconSize={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootCalls: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
});
export default Calls;
