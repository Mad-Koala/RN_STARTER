import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './src/config/routes';
import { store } from 'store/setup';
import { AppRegistry, Text, TextInput } from 'react-native';
console.disableYellowBox = true;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
Navigation.events().registerAppLaunchedListener(() => {
  console.log(store,"===========",Provider)
  registerScreens(store, Provider);
});
AppRegistry.registerComponent('LeaseTour', () => App);
