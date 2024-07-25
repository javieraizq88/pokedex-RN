import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/presentation/navigator/StackNavigator';
import { PaperProvider } from 'react-native-paper';

export const App = () => {

  return (
    <PaperProvider>

      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

