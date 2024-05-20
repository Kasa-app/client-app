import {useEffect } from 'react';
import useNavigationService from './useNavigation';
import { BackHandler } from 'react-native';

const useBackButtonHandler = ({ setActiveStep, navigation, backStep, routeName }: any) => {
    const {navigateToScreen} = useNavigationService(navigation);

    useEffect(() => {
        const handleBackButtonClick = () => {

            if (!backStep) {
                navigateToScreen(routeName);
                return false;
            }
            if (setActiveStep) {
                setActiveStep(backStep);
            }
            return true;
        };

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, [backStep, setActiveStep]);
}

export { useBackButtonHandler};
