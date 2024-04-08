import { ReactNode } from 'react';
import { DarkTheme, ThemeProvider, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { SessionProvider } from "@/context/authentication/authentication.state";
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

interface RootProviderProps {
  children: ReactNode;
}

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1973e7',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};


export default function Providers({ children: routerEntry }: RootProviderProps): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <PaperProvider theme={theme}>
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <SessionProvider>
        {routerEntry}
      </SessionProvider>
    </ThemeProvider>
    </PaperProvider>
  );
}
