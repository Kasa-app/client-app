import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../../screens/authentification/login/login-page-view';
import SignUpPage from '../../screens/authentification/signup/signup-page';
import StartupPage from '../../screens/authentification/startup/startup-page';
import ServiceDetailsPage from '../../screens/service-details/service-details-page';
import { TabsNavigation } from '../../components/Bottom-Navigation-View/Tabs-navigation/Bottom/tabs-navigation-view';
import ServiceList from '../../screens/service-list/service-list-page';
import SearchJobbersPage from '../../screens/search-jobbers/search-jobbers';
import JobberProfilePage from '../../screens/jobber-profile/jobber-profile';
import BookingPage from '../../screens/booking/booking-page';
import LaunchPage from '../../screens/launch-page/launch-page';
import Chat from '../../components/Bottom-Navigation-View/Chat/Chat-View/chat';

const Stack = createNativeStackNavigator();

export const NavigatorContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation: 'slide_from_bottom',
                    animationDuration: 200
                }}
                initialRouteName='LaunchScreen'
            >
                <Stack.Screen name="LaunchScreen" component={LaunchPage} />
                <Stack.Screen name="StartupScreen" component={StartupPage} />
                <Stack.Screen name="LoginScreen" component={LoginPage} />
                <Stack.Screen name="SignUpScreen" component={SignUpPage} />
                <Stack.Screen name="ServiceDetailsScreen" component={ServiceDetailsPage} />
                <Stack.Screen name="BookingScreen" component={BookingPage} />
                <Stack.Screen name="ChatScreen" component={Chat} />
                <Stack.Screen name="TabsNavigationScreen" component={TabsNavigation} />
                <Stack.Screen name="ServiceListScreen" component={ServiceList} />
                <Stack.Screen name="SearchJobbersScreen" component={SearchJobbersPage} />
                <Stack.Screen name="JobberProfileScreen" component={JobberProfilePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
