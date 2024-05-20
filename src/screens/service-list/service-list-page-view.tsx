import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/header'
import SearchBarView from '../../components/Bottom-Navigation-View/Home/Search-bar/search-bar-view'
import { styles } from './service-list-page-style'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import FastImage from 'react-native-fast-image'
import { ServiceListData } from '../../models/dataType/ServiceList'
import { Screen } from '../../data/Screen'

type Props = {
  serviceList: ServiceListData[] | undefined
  handlePress: any
  navigation: any
}
const ServiceListView = ({
  navigation,
  serviceList,
  handlePress,
}: Props) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
  return (
    <>
      <Header navigation={navigation} backRoute={Screen.tabsNavigation} />
      <View style={styles.searchBar}>
        <SearchBarView style={styles.searchBar.width} />
      </View>

      <FlatList
        style={styles.listContainer}
        data={serviceList}
        renderItem={({ item }) => (

          <View style={styles.container}>
            <TouchableOpacity
              delayPressOut={50}
              onPress={() => handlePress(item.num, item.nom)}
            >
              <View style={styles.cardView}>
                <ShimmerPlaceHolder
                  style={styles.cardShimmer}
                  visible={(serviceList) ? true: false}
                >
                  <FastImage
                    style={styles.cardContainer}
                    source={{ uri: item.image }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                  style={styles.serviceNameShimmer}
                  visible={(serviceList) ? true: false}
                >
                  <Text style={styles.serviceName}>{item.nom}</Text>
                </ShimmerPlaceHolder>
              </View>
            </TouchableOpacity>
            <View style={styles.separator}></View>
          </View>
        )}
        keyExtractor={(item) => item.num}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </>
  )
}

export default ServiceListView;