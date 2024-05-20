import React, { useCallback, useEffect, useState } from 'react';
import { mapCategoriesToServiceListData, mapServicesToServiceListData } from '../../utils/DataMapper';
import ServiceListView from './service-list-page-view';
import { ServiceListData } from '../../models/dataType/ServiceList';
import { CategoriesListResponse } from '../../models/apiResponse/CategoriesListResponse';
import { Screen } from '../../data/Screen';
import useNavigation from '../../hooks/useNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/home/homeSlice';
import { fetchServiceList } from '../../redux/serviceList/serviceListThunk';
import { AppDispatch } from '../../redux/store';

const ServiceList = ({ navigation }: any) => {
  const numCategorie = useSelector((state: any) => state.home.numCategorie)
  const [data, setData] = useState<ServiceListData[] | undefined>(undefined);
  const [isSubcategories, setIsSubcategories] = useState(false);
  const { setNumService, setNumCategorie } = actions;
  const dispatch = useDispatch<AppDispatch>();

  const { navigateToScreen, pushScreen } = useNavigation(navigation);

  useEffect(() => {

    dispatch(fetchServiceList(numCategorie))
      .then((result) => {
        const payload = result.payload as CategoriesListResponse;
        const subcategories = payload.subcategories;
        if (subcategories?.length > 0) {
          setData(mapCategoriesToServiceListData(subcategories));
          setIsSubcategories(true);
        }
        else {
          setData(mapServicesToServiceListData(payload.services));
        }
      })
  }, []);

  const handlePress = useCallback((num: any, nomService: string) => {
    if (isSubcategories) {
      dispatch(setNumCategorie(num));
      pushScreen(Screen.serviceList);
    } else {
      dispatch(setNumService(num));
      navigateToScreen(Screen.serviceDetails);
    }
  }, [isSubcategories]);

  return (
    <ServiceListView
      serviceList={data}
      handlePress={handlePress}
      navigation={navigation}
    />
  );
};

export default ServiceList;
