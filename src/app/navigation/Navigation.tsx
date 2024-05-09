
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Sections } from '../Sections'
import { Details } from '../Details'


const {Navigator , Screen} = createMaterialTopTabNavigator()
export function Navigation() {

  return (
    <NavigationContainer >
      <Navigator screenOptions={{
        tabBarActiveTintColor: '#FE7300',
        tabBarInactiveTintColor: '#0496F5',
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          paddingVertical: 6,
          textTransform: 'capitalize'
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#191919',

        },
        tabBarIndicatorStyle: {
          backgroundColor: '#FE7300',
          height: 4
        }
      }}>
        <Screen name="Sessões" component={Sections} />
        <Screen name="Detalhes" component={Details} />
      </Navigator>
    </NavigationContainer>
  )
}