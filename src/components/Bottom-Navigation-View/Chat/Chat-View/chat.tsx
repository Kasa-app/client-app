import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ChatInputView from '../Chat-Input/chat-input-view';
import styles from './chat-view-style';
import ChatHeaderView from '../Chat-Header/chat-header-view';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { actions } from '../../../../redux/chat/chatSlice';
import { saveMessages } from '../../../../redux/chat/chatThunk';
import ChatView from './chat-view';

const Chat = () => {

  const messages = useSelector((state: any) => state.chat.messages);
  const dispatch = useDispatch<AppDispatch>();
  const { setMessages } = actions;

  useEffect(() => {

    //utilisé temporairement pour les tests
    
    dispatch(setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date().toISOString(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]));

  }, []);

  const handleSend = async ({ inputText }: any) => {

    if (inputText.trim() === '') {
      return;
    }

    const newMessage = {
      _id: messages.length + 1,
      text: inputText,
      createdAt: new Date().toISOString(),
      user: {
        _id: 1,
      },
    };

    dispatch(setMessages([...messages, newMessage]));
    dispatch(saveMessages({messages: messages, idReceiver: 3}));  
  };

  return (
    <>
      <ChatHeaderView />
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item._id.toString()}
          renderItem={ChatView}
        />
        <ChatInputView handleSend={handleSend} />
      </View>
    </>
  );
};

export default Chat;
