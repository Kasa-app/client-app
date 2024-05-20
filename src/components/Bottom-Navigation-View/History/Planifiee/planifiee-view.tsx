import { FlatList, View } from 'react-native';
import React from 'react';
import { GetAppointmentResponse } from '../../../../models/apiResponse/GetAppointmentResponse';
import Appointment from '../Appointment/appointment';

type Props = {
  appointments: GetAppointmentResponse[] | undefined;
};

export const PlanifieeView = ({ appointments }: Props) => {
  return (
    <View>
      <FlatList
        data={appointments}
        renderItem={({ item }) => <Appointment appointment={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};
