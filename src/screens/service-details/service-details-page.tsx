import { useEffect, useState } from "react";
import ServiceDetailsPageView from "./service-details-page-view";
import { useDispatch, useSelector } from "react-redux";
import { actions as serviceDetailsActions } from "../../redux/serviceDetails/serviceDetailsSlice";
import { useBookingPageNavigation } from "./serviceDetailsUtils";
import { fetchServiceDetails } from "../../redux/serviceDetails/serviceDetailsThunk";
import { AppDispatch } from "../../redux/store";
import { ServiceDetailsResponse } from "../../models/apiResponse/ServiceDetailsResponse";
import React from "react";

const ServiceDetailsPage = ({ navigation }: any) => {

  const dispatch = useDispatch<AppDispatch>();
  const { goToBookingPage } = useBookingPageNavigation({ dispatch: dispatch, nav: navigation });

  const numService = useSelector((state: any) => state.home.numService);
  const [data, setData] = useState<ServiceDetailsResponse | null>(null);
  const { setEstimatedServiceDuration, setNomService } = serviceDetailsActions;

  useEffect(() => {
    dispatch(fetchServiceDetails(numService))
      .then((result) => {
        const payload = result.payload as ServiceDetailsResponse;
        setData(payload as ServiceDetailsResponse);
        dispatch(setNomService(payload.nomService));
        const estimatedServiceDuration  = payload.estimatedServiceDuration;
       if (estimatedServiceDuration) {
           dispatch(setEstimatedServiceDuration(estimatedServiceDuration));
       }
      })
  }, []);

  return (
    <ServiceDetailsPageView
      averageCost={data?.averageCost}
      description={data?.description}
      estimatedServiceDuration={data?.estimatedServiceDuration}
      goToBookingPage={goToBookingPage}
      navigation={navigation}
      nomService={data?.nomService}
      image={data?.image}
    />
  );
};

export default React.memo(ServiceDetailsPage);