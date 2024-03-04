import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='(toptabs)'
        options={{
          title: 'Mesas',
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Productos',
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Mi Perfil',
        }}
      />
      {/* === Excluded Screebs from bottom tabs === href: null */}
      <Tabs.Screen
        name='nested'
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
