import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import styles from "./appointment-styles";
import { GetAppointmentResponse } from "../../../../models/apiResponse/GetAppointmentResponse";
import { APP_TEXT } from "../../../../data/AppText";
import ButtonWithBackgroundColor from "../../../Button-with-color-background/button";
import { ServiceDetailsResponse } from "../../../../models/apiResponse/ServiceDetailsResponse";

type Props = {
  appointment: GetAppointmentResponse;
  serviceDetails: ServiceDetailsResponse | undefined;
};

const AppointmentView = ({ appointment, serviceDetails }: Props) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View>
      <View style={styles.cardView}>
        <ShimmerPlaceHolder
          style={styles.cardShimmer}
          visible={true}
        >
          <FastImage
            style={styles.cardContainer}
            source={{uri: serviceDetails?.image}}
            resizeMode={FastImage.resizeMode.cover}
          />
        </ShimmerPlaceHolder>

        <View style={styles.textContainerColumn}>
          <Text style={styles.serviceNameTitle}>
            {APP_TEXT.history.service_name}: <Text style={styles.dataText}>
              {serviceDetails?.nomService}
            </Text>
          </Text>

          <Text style={styles.dateHourTitle}>
            {APP_TEXT.history.date_hour_title}: <Text style={styles.dataText}>
            {appointment?.dateDebut}
            </Text>
          </Text>
          <Text style={styles.adresseTitle}>
            {APP_TEXT.history.adresse_title}: <Text style={styles.dataText}>
              95 rue king ouest
            </Text>
          </Text>
        </View>
      </View>
      <ButtonWithBackgroundColor
        buttonText={APP_TEXT.history.button_title}
        handlePress={() => { }}
        customButtonStyle={styles.button}
        customButtonTextStyle={styles.buttonText}
      />
      <View style={styles.separator}></View>
    </View>
  );
};

export default AppointmentView;
