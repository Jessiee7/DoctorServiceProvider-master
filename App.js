import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens Import
import Login from './app/screens/Login';
import SignIn from './app/screens/SignIn';
import JobList from './app/screens/JobList';
import JobDetails from './app/screens/JobDetails';
import CompleteJob from './app/screens/CompleteJob';
import JobHistory from './app/screens/JobHistory';
import FinishJob from './app/screens/FinishJob';
import JobDetailStatus from './app/screens/JobDetailStatus';
const Stack = createStackNavigator();

const MainStack=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{header: ()=> null}}  />
      <Stack.Screen name="SignIn" component={SignIn} options={{header: ()=> null}}/>
      <Stack.Screen name="JobList" component={JobList} options={{header: ()=> null}}/>
      <Stack.Screen name="JobDetails" component={JobDetails} options={{header: ()=> null}}/>
      <Stack.Screen name="CompleteJob" component={CompleteJob} options={{header: ()=> null}}/>
      <Stack.Screen name="JobHistory" component={JobHistory} options={{header: ()=> null}}/>
      <Stack.Screen name="FinishJob" component={FinishJob} options={{header: ()=> null}}/>
      <Stack.Screen name="JobDetailStatus" component={JobDetailStatus} options={{header: ()=> null}}/>

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}





