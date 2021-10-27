import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, PermissionsAndroid} from 'react-native';
import {combineTabWithStackProps} from '../../container/Main';
// import { Camera } from "expo-camera";
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';

interface CameraScreenProps {
  navigation: combineTabWithStackProps<'camera'>;
}
const CameraScreen = ({navigation}: CameraScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerStyle: {
        display: 'none',
      },
    });
  }, []);

  const [camera, setCamera] = useState(null);
  // const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const photo1 = await camera.takePictureAsync(options);
      // setPhoto(photo1.uri);
      const d = Math.floor(Date.now());
      const dest =
        RNFS.ExternalDirectoryPath +
        '/Photo_' +
        Math.floor(Date.now()) +
        '.jpg';
      RNFS.moveFile(photo1.uri, dest)
        .then(() => {
          console.log('Image MOVE ', photo1.uri, '--to--', dest);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('no camera');
    }
  };

  useEffect(() => {
    async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <RNCamera ref={setCamera} style={styles.camera}>
        {/* {photo && (
          <View style={styles.takePhotoContainer}>
            <Image source={{uri: photo}} style={{height: 200, width: 200}} />
          </View>
        )} */}
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    borderColor: '#ff0000',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  takePhotoContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
export default CameraScreen;
