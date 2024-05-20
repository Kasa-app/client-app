import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatView from "../../Chat/Chat-View/chat";
import CalendarView from "../../Calendar/calendar-view";
import { View } from "react-native";
import { Image } from "react-native-elements";
import { accountLogo, calendarLogo, chatLogo, findServiceLogo, historyLogo, homeLogo } from "../../../../data/ImagesPath";
import HomeBody from "../../Home/Home-body/home-body";
import { shadowStyles } from "./shadow-style";
import { CustomFindButtonView } from "./custom-find-button-view";
import { tabBarStyles } from "./tabs-navigation-style";
import { FindView } from "../../Find/find-view";
import TopBarNavigation from "../Top/Top-bar-navigation";
import Account from "../../Account/account";
import ChatDiscussionList from "../../Chat/Chat-Discussion-List/chat-discussion-list-view";

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        unmountOnBlur: false,
        tabBarStyle: tabBarStyles.tabBarStyle, ...shadowStyles.shadow
      }}>

      <Tab.Screen name="Home" component={HomeBody} options={{
        tabBarIcon: ({ focused }) => (

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={homeLogo}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#E67918' : '#CDC2B8'
              }}
            />
          </View>

        ),
      }} />
      <Tab.Screen name="Chat" component={ChatDiscussionList} options={{
        tabBarStyle: { display: "none" },
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={chatLogo}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#E67918' : '#CDC2B8'
              }}
            />
          </View>
        )
      }}
      />

      <Tab.Screen name="Find" component={FindView} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={findServiceLogo}
              resizeMode="contain"
              style={{
                marginLeft: '35%',
                width: 35,
                height: 35,
                tintColor: '#E67918'
              }}
            />
          </View>
        ),
        tabBarButton: (props) => (
          <CustomFindButtonView {...props} />
        )
      }} />

      <Tab.Screen name="History" component={TopBarNavigation} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={historyLogo}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#E67918' : '#CDC2B8'
              }}
            />
          </View>
        )
      }}

      />

      <Tab.Screen name="Calendar" component={CalendarView} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={calendarLogo}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#E67918' : '#CDC2B8'
              }}
            />
          </View>
        )
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={accountLogo}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#E67918' : '#CDC2B8'
              }}
            />
          </View>
        )
      }}
      />
    </Tab.Navigator>
  )
}
