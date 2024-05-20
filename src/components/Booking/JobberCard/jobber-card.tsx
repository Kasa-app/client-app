import { useCallback, useContext, useState } from "react";
import useNavigation from "../../../hooks/useNavigation";
import JobberCardView from "./jobber-card-view";
import { Screen } from "../../../data/Screen";
import { actions } from '../../../redux/booking/bookingSlice'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { createAppointment } from "../../../redux/booking/bookingThunk";
import { AuthentificationContext } from "../../../context/authentification/authentification-context";

type Props = {
  prenom: string;
  navigation: any;
  jobber: any;
  note: number;
  salary: number;
  creationDate: string;
  commentsCount: number;
  servicesDoneCount: number;
  photo?: string;
};

const JobberCard = ({
  prenom,
  navigation,
  jobber,
  note,
  salary,
  creationDate,
  commentsCount,
  servicesDoneCount,
  photo
}: Props) => {

  const { navigateToScreen } = useNavigation(navigation);
  const { setSelectedJobber } = actions;
  const selectedJobber = useSelector((state: any) => state.booking.selectedJobber);
  const numService = useSelector((state: any) => state.home.numService);
  const bookingData = useSelector((state: any) => state.booking.bookingData);
  const { client } = useContext(AuthentificationContext);

  const [isMakingAppointment, setIsMakingAppointment] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onSeeJobberProfilePress = useCallback(() => {
    dispatch(setSelectedJobber(jobber));
    navigateToScreen(Screen.jobberProfile);
  }, [navigateToScreen]);

  const handleCreateAppointment = useCallback(async () => {
    
    dispatch(setSelectedJobber(jobber));
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
    <JobberCardView
      prenom={prenom}
      note={note}
      salary={salary}
      creationDate={creationDate}
      commentsCount={commentsCount}
      servicesDoneCount={servicesDoneCount}
      photo={photo}
      isMakingAppointment={isMakingAppointment}
      onSeeJobberProfilePress={onSeeJobberProfilePress}
      handleCreateAppointment={handleCreateAppointment}
    />
  );
};

export default JobberCard;
