import { useCallback, useEffect, useState } from 'react';
import SearchJobbersView from './search-jobbers-view';
import useNavigation from '../../hooks/useNavigation';
import { Screen } from '../../data/Screen';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchJobber } from '../../redux/searchJobbers/searchJobberThunk';
import { SearchJobberResponse } from '../../models/apiResponse/SearchJobberResponse';

const SearchJobbers = ({ navigation }: any) => {

  const { navigateToScreen } = useNavigation(navigation);
  const dispatch = useDispatch<AppDispatch>();
  const bookingData = useSelector((state: any) => state.booking.bookingData);
  const numService = useSelector((state: any) => state.home.numService);
  const isLoading = useSelector((state: any) => state.searchJobber.isLoading);
  const [data, setData] = useState<SearchJobberResponse[] | undefined>([]);

  const dataQuery = {
    numService,
    address: bookingData.homeAddress != null ? bookingData.homeAdress : bookingData.pickupAddress,
    dateDebut: bookingData.dateDebut,
    dateFin: bookingData.dateFin,
    estimatedDuration:bookingData.estimatedDuration,
    jobberCounts: bookingData.jobberCounts,
    date: bookingData.date,
    heure: bookingData.time,
    exigences: bookingData.exigences
  };

  useEffect(() => {
    dispatch(fetchJobber(dataQuery)).then((result) => {
      setData(result.payload as SearchJobberResponse[])
    });

  }, [])


  const goBackToHomePage = useCallback(() => {
    navigateToScreen(Screen.tabsNavigation);
  }, [navigateToScreen]);

  return (
    <SearchJobbersView
      jobbers={data}
      navigation={navigation}
      isLoading={isLoading}
      goBackToHomePage={goBackToHomePage}
    />
  );
};

export default SearchJobbers;
