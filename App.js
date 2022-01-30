import { NavigationContainer } from '@react-navigation/native';
import { TabOne, TabTwo } from './src/screens/TabScreens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JokeScreen from './src/screens/JokeScreen';
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab One" component={TabOne} />
      <Tab.Screen name="Tab Two" component={TabTwo} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} >
        <Drawer.Screen name="Menu" component={TabScreens} />
        <Drawer.Screen name="Delivery!" component={JokeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
