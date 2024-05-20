import { ScrollView, Text, View } from "react-native";
import styles from "./service-details-styles";
import FullHorizontalLine from "../../components/Horizontal-Line/full-horizontal-line";
import Description from "../../components/Description/description";
import { APP_TEXT } from "../../data/AppText";
import ButtonWithBackgroundColor from "../../components/Button-with-color-background/button";
import FastImage from "react-native-fast-image";
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import Header from "../../components/Header/header";
import { Screen } from "../../data/Screen";

type Props = {
  averageCost: number | undefined;
  description: string | undefined;
  estimatedServiceDuration: number | undefined;
  goToBookingPage: () => void;
  navigation: any;
  nomService: string | undefined;
  image: string | undefined;
};

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const ServiceDetailsPageView = ({
  averageCost,
  description,
  estimatedServiceDuration,
  goToBookingPage,
  navigation,
  nomService,
  image,
}: Props) => {
  return (
    <>
      <Header navigation={navigation} backRoute={Screen.tabsNavigation} />
      <ScrollView>
        <ShimmerPlaceHolder
          visible={true}
          style={styles.image}
        >
          <FastImage
            source={{
              uri: image,
              priority: FastImage.priority.high
            }}
            style={styles.image}
          />
        </ShimmerPlaceHolder>

        <View style={styles.descriptionContainer}>
          <ShimmerPlaceHolder
            style={styles.title}
            visible={image ? true : false}
          >
            <Text style={styles.title}>{nomService}</Text>
            {description && (
              <Description description={description} />
            )}
          </ShimmerPlaceHolder>
        </View>

        <FullHorizontalLine />

        <View style={styles.descriptionContainer}>
          <View style={styles.labelContainer}>
            <ShimmerPlaceHolder
              style={styles.label}
              visible={image ? true : false}
            >
              <Text style={styles.label}>{APP_TEXT.services.estimation_taux_horaire}</Text>
              <Text style={{ ...styles.label, color: '#000' }}>{`${averageCost}$`}</Text>
            </ShimmerPlaceHolder>
          </View>
          <View style={styles.labelContainer}>
            <ShimmerPlaceHolder
              style={styles.label}
              visible={image ? true : false}
            >
              <Text style={styles.label}>{APP_TEXT.services.estimation_duree_service}</Text>
              <Text style={{ ...styles.label, color: '#000' }}>{`${estimatedServiceDuration}h`}</Text>
            </ShimmerPlaceHolder>
          </View>
        </View>

        <View>
          {image != undefined &&
            <ButtonWithBackgroundColor
              buttonText={APP_TEXT.services.start_booking}
              handlePress={goToBookingPage}
              customButtonStyle={styles.button}
              customButtonTextStyle={styles.buttonText}
            />
          }
        </View>
      </ScrollView>
    </>
  );
};

export default ServiceDetailsPageView;
