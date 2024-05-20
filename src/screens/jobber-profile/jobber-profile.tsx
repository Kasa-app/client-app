import JobberProfileView from "./jobber-profile-view";
import { useCallback, useContext, useState } from "react";
import useNavigation from "../../hooks/useNavigation";
import { Screen } from "../../data/Screen";
import { createAppointment } from "../../redux/booking/bookingThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { AuthentificationContext } from "../../context/authentification/authentification-context";

const JobberProfile = ({ navigation }: any) => {
  
  const selectedJobber = useSelector((state: any) => state.booking.selectedJobber);
  const { navigateToScreen } = useNavigation(navigation);
  const [isMakingAppointment, setIsMakingAppointment] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const numService = useSelector((state: any) => state.home.numService);
  const bookingData = useSelector((state: any) => state.booking.bookingData);
  const { client } = useContext(AuthentificationContext);

  const {
    nom,
    prenom,
    commentaires,
    description,
    note,
    tauxHoraire,
    nombreServiceRealise,
    langues
  } = selectedJobber;

  const handleCreateAppointment = useCallback(async () => {
    setIsMakingAppointment(true);

    const data = {
      dateDebut: new Date(`${bookingData.date}T${bookingData.time}Z`).toISOString(),
      numService,
      numJobber: selectedJobber?.numJobber,
      numClient: client?.numClient,
    };

    dispatch(createAppointment(data)).catch(() => {
      setIsMakingAppointment(false);
    })


    navigateToScreen(Screen.tabsNavigation);
  }, [createAppointment]);

  return (
    <>
      <JobberProfileView
        nom={nom}
        prenom={prenom}
        comments={commentaires}
        commentsCount={commentaires.length}
        description={description}
        handleCreateAppointment={handleCreateAppointment}
        note={note}
        servicesDoneCount={nombreServiceRealise}
        selectedServiceCount={0}
        salary={tauxHoraire}
        langues={langues}
        isMakingAppointment={isMakingAppointment}
        navigation={navigation}
      />
    </>
  );
};

export default JobberProfile;
