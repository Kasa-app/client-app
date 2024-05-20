import React, { useCallback } from 'react';
import { HomeBodyView } from './home-body-view';
import { Screen } from '../../../../data/Screen';
import useNavigationService from '../../../../hooks/useNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { actions } from '../../../../redux/home/homeSlice'
const HomeBody = ({ navigation }: any) => {

  const { navigateToScreen } = useNavigationService(navigation);
  const data = useSelector((state: any) => state.home.homeData);
  const { setNumService,setNumCategorie } = actions;

  const dispatch = useDispatch<AppDispatch>();

  const handleCategoriesPress = useCallback((num: any) => {
    dispatch(setNumCategorie(num));
    navigateToScreen(Screen.serviceList);
  }, []);


  const handleServicesPress = useCallback((num: any) => {
    dispatch(setNumService(num));
    navigateToScreen(Screen.serviceDetails);
  }, []);

  return (
    <HomeBodyView
      categories={data?.categories}
      popularServices={data?.popularServices}
      recommendedServices={data?.recommendedServices}
      firstName={undefined} //ToDo soon in a futur ticket
      handleCategoriesPress={handleCategoriesPress}
      handleServicesPress={handleServicesPress}
    />
  );

};


export default React.memo(HomeBody);