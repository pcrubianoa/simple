import * as React from 'react';
import { ReactNode } from 'react';
import { DarkTheme, ThemeProvider, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { SessionProvider } from "@/context/authentication/authentication.state";
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

import { SQLiteProvider } from "expo-sqlite/next";
import { useSQLiteContext } from "expo-sqlite/next";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

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

const loadDatabase = async () => {
  const dbName = "logisBares.db";
  const dbAsset = require("../assets/logisBares.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};


export default function Providers({ children: routerEntry }: RootProviderProps): React.JSX.Element {
  const colorScheme = useColorScheme();
  const [dbLoaded, setDbLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    loadDatabase()
      .then(() => setDbLoaded(true))
      .catch((e) => console.error(e));
  }, []);

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <PaperProvider theme={theme}>
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <SessionProvider>
        <SQLiteProvider databaseName="logisBares.db" useSuspense>
          {routerEntry}
        </SQLiteProvider>
      </SessionProvider>
    </ThemeProvider>
    </PaperProvider>
  );
}
