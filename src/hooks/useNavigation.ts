const useNavigation = (navigation :any) => {

  const replaceScreen = ((routeName: any) => {
    navigation.replace(routeName);
  });

  const navigateToScreen = ((routeName:any) => {
    navigation.navigate(routeName);
  });

  const pushScreen = ((routeName:any) => {
    navigation.push(routeName);
  });

  return {
    replaceScreen,
    navigateToScreen,
    pushScreen
  };
};

export default useNavigation;
