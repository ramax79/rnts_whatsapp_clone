import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import {LIGHT_COLOR, PRIMARY, PRIMARY_DARK} from '../constants/colors';
import CameraScreen from '../screens/CameraScreen/CameraScreen';

interface MainProps {}

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
export type MatrimonyTabParamList = {
  chats: undefined;
  status: undefined;
  calls: undefined;
  camera: undefined;
};

export type WhatsAppStackParamList = {
  home: undefined;
};

export type combineTabWithStackProps<T extends keyof MatrimonyTabParamList> =
  CompositeNavigationProp<
    MaterialTopTabNavigationProp<MatrimonyTabParamList, T>,
    StackNavigationProp<WhatsAppStackParamList>
  >;

const MaterialTopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
        },
        tabBarStyle: {
          backgroundColor: PRIMARY,
        },

        tabBarActiveTintColor: LIGHT_COLOR,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="camera"
        options={{
          tabBarLabel: () => (
            <View>
              <Icon name="camera" size={26} color={PRIMARY_DARK} />
            </View>
          ),
        }}
        component={CameraScreen}
      />
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
};

const Main = ({}: MainProps) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={PRIMARY_DARK} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={({navigation, route}) => ({
              title: 'WhatsApp',
              headerTintColor: LIGHT_COLOR,
              headerStyle: {
                elevation: 0,
                backgroundColor: PRIMARY,
              },
              headerRight: () => {
                return (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => console.log('Search')}
                      style={{marginHorizontal: 15}}>
                      <Icon name="search" size={26} color={LIGHT_COLOR} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => console.log('menu Clicked')}
                      style={{marginHorizontal: 5}}>
                      <Icon
                        name="more-vertical"
                        size={26}
                        color={LIGHT_COLOR}
                      />
                    </TouchableOpacity>
                  </View>
                );
              },
            })}
            name="home"
            component={MaterialTopTab}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Main;
