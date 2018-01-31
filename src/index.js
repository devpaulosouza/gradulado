import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import Login from './scenes/Login/index';

import firebaseConfig from './secret/firebase';

firebase.initializeApp(firebaseConfig);

const App = StackNavigator({
  Login: { screen: Login },
});

export default App;
