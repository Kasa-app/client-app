import { Fragment } from "react";
import { ScrollView, Text, View } from "react-native";
import JobberCard from "../../components/Booking/JobberCard/jobber-card";
import Header from "../../components/Header/header";
import { Screen } from "../../data/Screen";
import styles from "./search-jobbers-styles";
import { APP_TEXT } from "../../data/AppText";
import ButtonWithBackgroundColor from "../../components/Button-with-color-background/button";

const SearchJobbersView = ({ goBackToHomePage, isLoading, jobbers, navigation }: any) => {
  return (
    <>
      <Header navigation={navigation} backRoute={Screen.booking} />
      <ScrollView>
        {jobbers?.length > 0 ? jobbers.map((jobber: any) => (
          <Fragment key={jobber.numJobber}>
            <JobberCard
              navigation={navigation}
              prenom={jobber.prenom}
              note={jobber.note}
              jobber={jobber}
              salary={jobber.tauxHoraire}
              creationDate={jobber.dateCreation}
              commentsCount={jobber.commentaires?.length || 0}
              servicesDoneCount={jobber.nombreServiceRealise}
            />
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
          </Fragment>
        )) : !isLoading && (
          <View style={styles.noJobbersContainer}>
            <Text style={styles.noJobbersText}>{APP_TEXT.booking.no_jobbers}</Text>
            <ButtonWithBackgroundColor
              buttonText={APP_TEXT.booking.back_to_home}
              handlePress={goBackToHomePage}
              customButtonStyle={styles.goBackButton}
              customButtonTextStyle={styles.goBackButtonText}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default SearchJobbersView;
