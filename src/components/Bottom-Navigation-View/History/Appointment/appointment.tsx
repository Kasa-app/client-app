import useQuery from "../../../../hooks/useQuery";
import { GetAppointmentResponse } from "../../../../models/apiResponse/GetAppointmentResponse";
import { getServiceDetails } from "../../../../services/ManagementService";
import AppointmentView from "./appointment-view";

type Props = {
  appointment: GetAppointmentResponse;
};

const Appointment = ({ appointment }: Props) => {
  const { data } = useQuery(getServiceDetails, { serviceId: appointment.numService });

  return (
    <AppointmentView
      key={appointment.id}
      appointment={appointment}
      serviceDetails={data}
    />
  );
};

export default Appointment;