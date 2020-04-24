import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';

import Main from './pages/main';
import Products from './pages/products';

export default createCompatNavigatorFactory(createStackNavigator)(
  {
    Main,
    Products,
  },
  {
    navigationOptions: {
      herderStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);
