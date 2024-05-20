import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Planifiee } from '../../History/Planifiee/planifiee';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './Top-bar-styles';
import FullHorizontalLine from '../../../Horizontal-Line/full-horizontal-line';
import { Terminee } from '../../History/Terminee/terminee';

const TopBarNavigation = () => {

  const Tab = createMaterialTopTabNavigator();
  const insets = useSafeAreaInsets();

  return (
    <>
      <Text style={styles.textStyle}>
        Mes reservations
      </Text>
      <FullHorizontalLine height={2} />

      <Tab.Navigator
        initialRouteName="Planifiée"
        screenOptions={{
          tabBarActiveTintColor: '#C27129',
          tabBarIndicatorStyle:{backgroundColor:'#C27129'},
          tabBarInactiveTintColor: '#000000',
          tabBarLabelStyle: { fontFamily: 'AvenirNext-Bold', fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white', marginTop: insets.top }
        }}
      >
        <Tab.Screen
          name="Planifiée"
          component={Planifiee}
          options={{ tabBarLabel: "Planifiée" }} />


        <Tab.Screen
          name="Terminée"
          component={Terminee}
          options={{ tabBarLabel: "Terminée" }} />
      </Tab.Navigator></>
  )
}

export default TopBarNavigation

