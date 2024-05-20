import { Image, Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./chat-view-style";
import { userImgTest } from "../../../../data/ImagesPath";
import { formatMessageTime } from "../../../../utils/MessageUtils";

const ChatView = ({ item }: { item: any }) => (

    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">

          <SafeAreaView>
            <View>
              <View style={{ flexDirection: 'row' }}>
                {item.user._id !== 1 && (
                  <View style={styles.avatarContainer}>
                    <Image source={userImgTest} style={styles.avatar} />
                  </View>
                )}
                {item.user._id !== 1 && (
                  <View style={styles.otherMessage}>
                    <Text style={styles.messageText}>{item.text}</Text>
                    <Text style={styles.messageTime}>{formatMessageTime(item.createdAt)}</Text>
                  </View>
                )}
              </View>

              {item.user._id == 1 && (
                <View style={styles.myMessage}>
                  <Text style={styles.messageText}>{item.text}</Text>
                  <Text style={styles.messageTime}>{formatMessageTime(item.createdAt)}</Text>
                </View>
              )}

            </View>

          </SafeAreaView>

        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback >
    </>

  );
  export default ChatView;
