import React, { useContext } from 'react';
import useQuery from '../../../../hooks/useQuery';
import { getAppointment } from '../../../../services/AgendaService';
import { AuthentificationContext } from '../../../../context/authentification/authentification-context';
import { PlanifieeView } from './planifiee-view';

export const Planifiee = () => {
  const { client } = useContext(AuthentificationContext);
  const { data } = useQuery(getAppointment, { clientId: client?.numClient });

  return (
    <PlanifieeView appointments={data} />
  );
};
