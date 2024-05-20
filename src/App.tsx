import React from 'react';
import Toast from 'react-native-toast-message';
import { NavigatorProvider } from './context/navigation/navigator-provider';
import { NavigatorContainer } from './context/navigation/navigator-container';
import { AuthentificationProvider } from './context/authentification/authentification-provider';
import { DialogProvider } from './context/dialog/dialog-provider';
import store from './redux/store'
import { Provider } from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
        <NavigatorProvider>
          <DialogProvider>
            <AuthentificationProvider>
              <NavigatorContainer />
              <Toast position='top' visibilityTime={5000} />
            </AuthentificationProvider>
          </DialogProvider>
        </NavigatorProvider>
    </Provider>
  );
}

export default App;
