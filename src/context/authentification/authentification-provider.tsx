import React, { useCallback, useState } from 'react';
import { ClientData } from '../../models/dataType/ClientInfo';
import { AuthentificationContextType } from '../../models/contextType/AuthentificationContextType';
import { AuthentificationContext } from './authentification-context';
import { HomePageResponse } from '../../models/apiResponse/HomePageResponse';

export const AuthentificationProvider = ({ children }: any) => {
	const [client, setClient] = useState<ClientData>();
	const [homePageData, setHomePageData] = useState<HomePageResponse>();
	const [signUpData, setSignUpData] = useState<ClientData>();
	
	const setAuthHomePageData = useCallback((data: { client: ClientData | undefined, homePageData: HomePageResponse | undefined }) => {
		setClient(data.client);
		setHomePageData(data.homePageData);
	}, []);
	
	const context: AuthentificationContextType = { client, homePageData, signUpData, setSignUpData, setAuthHomePageData };

	return (
		<AuthentificationContext.Provider value={context}>
			{children}
		</AuthentificationContext.Provider>
	);
};

