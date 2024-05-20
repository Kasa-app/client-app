import { useCallback, useContext, useEffect, useState } from "react";
import useNavigation from "../../../hooks/useNavigation";
import AccountView from "./account-view";
import { Screen } from "../../../data/Screen";
import useQuery from "../../../hooks/useQuery";
import { getClientsProfile } from "../../../services/AuthentificationService";
import { AuthentificationContext } from "../../../context/authentification/authentification-context";

const Account = ({ navigation }: any) => {
  const { navigateToScreen } = useNavigation(navigation);
  const { client } = useContext(AuthentificationContext);
  const { data } = useQuery(getClientsProfile, { data: { clientIds: [client?.numClient]}})
  const [profileLoaded, setProfileLoaded] = useState(false);

  const handleOnLogoutPress = useCallback(() => {
    navigateToScreen(Screen.authentification.startup);
  }, [navigateToScreen]);

  useEffect(() => {
    if (data) {
      setProfileLoaded(true);
    }
  }, [data]);

  const {
    nom,
    prenom,
    photo,
    dateCreation
  } = data?.length > 0 && data[0] || {};

  return (
    <AccountView
      nom={nom}
      prenom={prenom}
      photo={photo}
      dateCreation={dateCreation}
      handleOnLogoutPress={handleOnLogoutPress}
      profileLoaded={profileLoaded}
    />
  );
};

export default Account;
