// @ts-nocheck
// // @ts-nocheck
import {Navigation} from 'react-native-navigation';
import withRedux from 'hoc/withRedux';
import {lazy} from 'react';
const Login = lazy(() => import('../components/auth/login'));


export const registerScreens = (store, Provider) => {
  const withReduxStore = withRedux(store);
  Navigation.registerComponentWithRedux('Login', withReduxStore(Login));
  
};
