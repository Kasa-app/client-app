import React from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './chat-discussion-list-style';
import { userImgTest } from '../../../../data/ImagesPath';
import Header from '../../../Header/header';
import { Screen } from '../../../../data/Screen';
import useNavigation from '../../../../hooks/useNavigation';

const ChatDiscussionList = ({ navigation }: any) => {

  //component temporaire, a retravailler lorsque la fonc permettant de selectionner un jobber pour discuter sera faite
  const { navigateToScreen } = useNavigation(navigation);
  const chatData = [
    { id: 1, name: 'John Doe', avatar: 'https://placeimg.com/140/140/any', lastMessage: 'Hello!', lastMessageTime: '10:30 AM' },
    { id: 2, name: 'Jane Smith', avatar: 'https://placeimg.com/140/140/people', lastMessage: 'Hi there!', lastMessageTime: '11:45 AM' },
  ];

  const renderChatItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigateToScreen(Screen.chat)}>
      <View style={styles.container}>
        <Image source={userImgTest} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.message}>{item.lastMessage}</Text>
        </View>
        <Text style={styles.time}>{item.lastMessageTime}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Header navigation={navigation} back={Screen.tabsNavigation} />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={styles.messageTitle}>Messages</Text>
          <FlatList
            data={chatData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderChatItem} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ChatDiscussionList;
