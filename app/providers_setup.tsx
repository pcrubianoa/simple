import { ReactNode } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { SessionProvider } from "@/context/authentication/authentication.state";
import { PaperProvider } from 'react-native-paper';

interface RootProviderProps {
  children: ReactNode;
}

export default function Providers({ children: routerEntry }: RootProviderProps): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <PaperProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <SessionProvider>
        {routerEntry}
      </SessionProvider>
    </ThemeProvider>
    </PaperProvider>
  );
}
