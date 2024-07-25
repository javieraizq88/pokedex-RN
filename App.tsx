import 'react-native-gesture-handler';

import { StackNavigator } from './src/presentation/navigator/StackNavigator';
import { ThemeContextProvider } from './src/presentation/context/ThemeContext';

export const App = () => {

  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>

  );
}

