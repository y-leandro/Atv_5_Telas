import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import alunoLogin from '../pages/alunoLogin'
import alunoInicio from '../pages/alunoInicio'
import admLogin from '../pages/admLogin'
import admInicio from '../pages/admInicio'


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="alunoLogin" 
        component= { alunoLogin } 
        options= { {headerShown: false} }
        />
      <Stack.Screen 
        name="admLogin" 
        component= { admLogin } 
        options= { {headerShown: false} }
        />
      <Stack.Screen 
        name="alunoInicio" 
        component= { alunoInicio } 
        options= { {headerShown: false} }
        />
      <Stack.Screen 
        name="admInicio" 
        component= { admInicio } 
        options= { {headerShown: false} }
        />
    </Stack.Navigator>
  )
}