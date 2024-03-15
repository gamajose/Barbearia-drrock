import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainsStacks from './src/stacks/MainStacks';

export default () => {
  return (
    <NavigationContainer>
      <MainsStacks />
    </NavigationContainer>
  );
}