import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: 'Home' }} />
        <Drawer.Screen name="(drawer)/profile" options={{ title: 'Meu Perfil' }} />
        <Drawer.Screen name="signin" options={{ title: 'Login' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}