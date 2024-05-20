import React, { useCallback, useContext, useEffect, useState } from 'react'
import AskUserPasswordView from './ask-user-password-view';
import { isPasswordValid } from '../../../utils/AuthentificationUtils';
import { AuthentificationContext } from '../../../context/authentification/authentification-context';

const AskUserPassword = ({ handleSignUp }: any) => {
    const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    const {signUpData,setSignUpData} = useContext(AuthentificationContext);
    const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);
    const [showPasswordSpecError, setShowPasswordSpecError] = useState(false);

    useEffect(() => {
        setIsContinueButtonDisabled(!(password.trim() != '' && confirmPassword.trim() != '' &&
            checkboxValue));
    }, [password, confirmPassword, checkboxValue]);

    const validatePasswords = useCallback(() => {
        let hasError = false;

        if (password !== confirmPassword) {
            setShowPasswordMatchError(true);
            setShowPasswordSpecError(false);
            hasError = true;
        }
        else if (confirmPassword.trim() !== ' ' && !isPasswordValid({ password: confirmPassword })) {
            setShowPasswordSpecError(true);
            setShowPasswordMatchError(false);
            hasError = true;
        } else {
            setShowPasswordSpecError(false);
            setShowPasswordMatchError(false);
        }

        return !hasError;
    }, [password, confirmPassword]);

    const handleCreateAccountPress = useCallback(async () => {
        const isValidationSuccessful = validatePasswords();
        if (isValidationSuccessful) {
            setSignUpData({ ...signUpData!, motDePasse: confirmPassword });
            await handleSignUp(confirmPassword);
        }
    }, [password, confirmPassword, handleSignUp, validatePasswords]);

    const onCheckboxChange = () => {
        (checkboxValue) ? setCheckboxValue(false) : setCheckboxValue(true)
    };

    return (
        <AskUserPasswordView
            isContinueButtonDisabled={isContinueButtonDisabled}
            checkboxValue={checkboxValue}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            onCheckboxChange={onCheckboxChange}
            handleCreateAccountPress={handleCreateAccountPress}
            showPasswordMatchError={showPasswordMatchError}
            showPasswordSpecError={showPasswordSpecError}
        />
    )
}

export default AskUserPassword;