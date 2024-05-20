import React, { useEffect } from 'react';
import LaunchPageView from './launch-page-view';
import { Screen } from '../../data/Screen';
import useNavigation from '../../hooks/useNavigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchHomeData } from '../../redux/home/homeThunk';

const LaunchPage = ({ navigation }: any) => {
  const { replaceScreen } = useNavigation(navigation);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHomeData()).then(() => {
      replaceScreen(Screen.tabsNavigation);
    });

  }, []);

  return <LaunchPageView />;
}

export default LaunchPage;
