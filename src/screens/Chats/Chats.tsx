import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {userList} from '../../services/data';
import {userListProps} from '../../services/interface';
import {LIGHT_COLOR} from '../../constants/colors';
import {FloatingButton, ProfileCards} from '../../components';

interface ChatsProps {}

const Chats = ({}: ChatsProps) => {
  const renderItem = ({item}: {item: userListProps}) => {
    return <ProfileCards {...{item}} />;
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={userList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <FloatingButton iconName="message-square" iconSize={30} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
});
export default Chats;
