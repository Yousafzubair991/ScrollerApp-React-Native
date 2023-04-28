import React, {useEffect, useState} from 'react';
import Navigator from './src/navigation/Navigator';
import {useDispatch} from 'react-redux';
import authToken from './src/api/authToken';
import {addJwtToken} from './src/redux/jwt.slice';
import {ActivityIndicator} from 'react-native';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveData();
    return;
  }, []);

  const retrieveData = async () => {
    setLoading(true);
    try {
      const userToken = await authToken.getToken();
      if (userToken !== null) {
        dispatch(addJwtToken({token: userToken}));
        console.log('Token saved in Redux');
      } else {
        console.log('No token found');
      }
    } catch (e) {
      console.log('Failed to fetch the data from storage', e);
    }
    setLoading(false);
  };

  return loading ? (
    <ActivityIndicator color={'blue'} size="large" />
  ) : (
    <Navigator />
  );
};
export default App;
