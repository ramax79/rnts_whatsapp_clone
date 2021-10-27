import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  GREY_COLOR,
  LIGHT_COLOR,
  PRIMARY,
  SECONDARY_LIGHT,
} from '../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfileCard from '../../components/ProfileCard';
interface StatusProps {}

const Status = ({}: StatusProps) => {
  return (
    <View style={styles.rootStatus}>
      <ProfileCard
        create={true}
        title="My Status"
        subTitle="Tap to add status update"
      />
      <View style={styles.section}>
        <View style={{marginHorizontal: 15}}>
          <Text>Recent Updates</Text>
        </View>
      </View>
      <ProfileCard create={false} title="John Doe" subTitle="Today, 6:40 PM" />
      <View style={styles.floatingActionContainer}>
        <View style={styles.create}>
          <Entypo name="edit" size={20} color={PRIMARY} />
        </View>
        <View style={styles.camera}>
          <Entypo name="camera" size={26} color={LIGHT_COLOR} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootStatus: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },

  section: {
    backgroundColor: GREY_COLOR,
    height: 30,
    justifyContent: 'center',
  },
  floatingActionContainer: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    alignItems: 'center',
  },
  create: {
    backgroundColor: GREY_COLOR,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  camera: {
    marginVertical: 10,
    backgroundColor: SECONDARY_LIGHT,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});

export default Status;
