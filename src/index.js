import { StackNavigator } from 'react-navigation';
import Login from './scenes/Login/index';

const App = StackNavigator({
  Login: { screen: Login },
});

export default App;
