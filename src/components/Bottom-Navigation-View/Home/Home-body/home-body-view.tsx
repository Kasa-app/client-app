import { FlatList, Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import HomeHeader from '../Home-header/home-header-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './home-body-style';
import { homePic } from '../../../../data/ImagesPath';
import { APP_TEXT } from '../../../../data/AppText';
import { Categorie } from '../../../../models/dataType/Categorie';
import { Service } from '../../../../models/dataType/Service';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import SearchBarView from '../Search-bar/search-bar-view';
import EmptyHomeListView from './empty-home-list-view';
import HomeListView from './home-list-view';

type Props = {
  categories: Categorie[] | undefined;
  popularServices: Service[] | undefined;
  recommendedServices: Service[] | undefined;
  firstName: string | undefined;
  handleCategoriesPress: any;
  handleServicesPress: any;
};

export const HomeBodyView = ({
  categories,
  popularServices,
  recommendedServices,
  firstName,
  handleCategoriesPress,
  handleServicesPress,
}: Props) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <>
      <HomeHeader firstName={firstName} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <SafeAreaView>
            <ShimmerPlaceHolder
              style={styles.homePicShimmer}
              visible={true}
            >
              <View>
                <FastImage
                  style={styles.homePic}
                  source={homePic}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
              <View style={styles.searchBarStyle}>
                <SearchBarView />
              </View>
            </ShimmerPlaceHolder>

            <View>

              <Text style={styles.categorie}>{APP_TEXT.homePage.categorie_section}</Text>

              <FlatList
                style={styles.listContainer}
                horizontal={true}
                data={categories?.filter(item => item.numParentcategorie == null)}
                ListEmptyComponent={() => {
                  return (
                    <EmptyHomeListView />
                  )
                }}
                renderItem={({ item }) => (
                  <HomeListView
                    handlePress={handleCategoriesPress}
                    num={item.numCategorie}
                    image={item.image}
                    nom={item.nomCategorie}
                  />
                )}
                keyExtractor={(item) => item.numCategorie}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              />

              <Text style={styles.popularService}>{APP_TEXT.homePage.popular_services_section}</Text>

              <FlatList
                style={styles.listContainer}
                horizontal={true}
                data={popularServices}
                ListEmptyComponent={() => {
                  return (
                    <EmptyHomeListView />
                  )
                }}
                renderItem={({ item }) => (
                 <HomeListView
                    handlePress={handleServicesPress}
                    num={item.numService}
                    image={item.image}
                    nom={item.nomService}
                  />
                )}
                keyExtractor={(item) => item.numService}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              />

              <Text style={styles.popularService}>{APP_TEXT.homePage.recommended_services_section}</Text>
              <FlatList
                style={styles.recommendedServicesContainer}
                horizontal={true}
                data={recommendedServices}
                ListEmptyComponent={() => {
                  return (
                    <EmptyHomeListView />
                  )
                }}
                renderItem={({ item }) => (
                  <HomeListView
                    handlePress={handleServicesPress}
                    num={item.numService}
                    image={item.image}
                    nom={item.nomService}
                  />
                )}
                
                keyExtractor={(item) => item.numService}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              />
            </View>

          </SafeAreaView>

        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback >
    </>
  );
};
