import { APP_TEXT } from "../data/AppText";

export const manageEnregistrerClientError = (error: any, showDialog: any, handleOkButtonPress: any) => {
  const errorMessage = error.response.data.errors[0].message;
  
  if (error.response.status === 400 && errorMessage.includes("courriel existe")) {
    showDialog({ message: APP_TEXT.authentification.signUp.email_already_exist, callback: handleOkButtonPress});
  }
};

