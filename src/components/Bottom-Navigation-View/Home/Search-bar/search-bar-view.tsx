import React from 'react';
import { TextInput, Image, View } from 'react-native';
import { searchIcon } from '../../../../data/ImagesPath';
import { APP_TEXT } from '../../../../data/AppText';
import styles from './search-bar-style';

const SearchBarView = ({ width }: any) => {

  return (
    <View style={[styles.inputContainer, { width: width }]}>
      <TextInput
        style={styles.input}
        placeholder={APP_TEXT.homePage.search_placeHolder}
      />
      <Image style={styles.searchIcon} source={searchIcon} />
    </View>
  );
};

export default SearchBarView;
