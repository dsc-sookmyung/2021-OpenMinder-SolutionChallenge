import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfilePage from './ProfilePage';
import UpdateProfile from './UpdateProfile';
import UploadPost from './UploadPost';
import DetailPage from '../community/DetailPage';
import ResultPage from '../dataPage/ResultPage';
import CalendarPage from '../dataPage/CalendarPage';
import PieChartPage from '../dataPage/PieChartPage';
import LineGraphPage from '../dataPage/LineGraphPage';

const Stack = createStackNavigator();

function MyPageRoot() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >        
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="UploadPost" component={UploadPost} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
          <Stack.Screen name="CalendarPage" component={CalendarPage} />
          <Stack.Screen name="LineGraphPage" component={PieChartPage} />
          <Stack.Screen name="PieChartPage" component={LineGraphPage} />
      </Stack.Navigator>
    );
  }

  export default MyPageRoot;