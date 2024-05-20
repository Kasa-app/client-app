import React from 'react';
import styles from './social-media-box-style';
import { Image, Text, View } from 'react-native';
import { appleLogo, facebookLogo, gmailLogo, headerLogo } from '../../../data/ImagesPath';
const SocialMediaBox = ({ title, marginTop }: any) => {
    
        return (
            <View style={[styles.container, { marginTop: marginTop }]}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.mediaSocialContainer}>
                    <Image source={appleLogo} style={styles.appleLogo} />
                    <Image source={facebookLogo} style={styles.gmailFbLogo} />
                    <Image source={gmailLogo} style={styles.gmailFbLogo} />
                </View>
            </View>
        );
}
export default SocialMediaBox;