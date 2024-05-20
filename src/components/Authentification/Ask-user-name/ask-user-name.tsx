import React, { useContext, useEffect, useState } from 'react'
import { NavigatorContext } from '../../../context/navigation/navigator-context';
import AskUserNameView from './ask-user-name-view';
import { AuthentificationContext } from '../../../context/authentification/authentification-context';
import { InscriptionStepper } from '../../../models/stepper/InscriptionStepper';

const AskUserName = () => {

    const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);
    const [firstName, setFirstName] = useState('');
    const {signUpData,setSignUpData} = useContext(AuthentificationContext);
    const [lastName, setLastName] = useState('');

    const { setActiveStep } = useContext(NavigatorContext);

    const handleContinueBtnPress = () => {
        setSignUpData({ ...signUpData!, prenom: lastName, nom: firstName });
        setActiveStep(InscriptionStepper.UserBirthdate);
    };

    useEffect(() => {
        setIsContinueButtonDisabled(!(firstName.trim() != '' && lastName.trim() != ''));
    }, [firstName, lastName]);

    return (
        <AskUserNameView
            isContinueButtonDisabled={isContinueButtonDisabled}
            handlePress={handleContinueBtnPress}
            setLastName={setLastName}
            setFirstName={setFirstName}
        />
    );
}



export default AskUserName;