import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './chat-header-style';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const ChatHeaderView = ({ }: any) => {
  return (
    <View style={styles.container}>
      <Avatar
        size="medium"
        containerStyle={styles.avatar}
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', //temporary image
        }}
      />

      <Text style={styles.userName}>
        name
      </Text>

      <TouchableOpacity>
        <Icon style={styles.phoneIcon} name="phone" size={22} />
      </TouchableOpacity>
    </View>
  )
}

export default ChatHeaderView;