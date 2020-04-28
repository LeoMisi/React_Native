import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}} />
);

Product.navigationOptions = ({navigation}) => ({
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#DA552F',
  },
  headerTintColor: '#FFF',
  title: navigation.state.params.product.title,
});

export default Product;
