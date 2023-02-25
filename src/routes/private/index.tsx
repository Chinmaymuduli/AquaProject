import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabs} from '../layouts';
import {PrivateRoutesTypes} from 'src/types/AllRoutes';
import {Private} from 'screens';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#000',
        headerBackTitleVisible: false,
        headerTitleStyle: {fontFamily: 'Montserrat-Bold'},
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Jobs" component={Private.Jobs} />
      <Stack.Screen
        name="ChangePassword"
        component={Private.ChangePassword}
        options={{
          headerShown: true,
          headerTitle: 'Change Password',
        }}
      />
      <Stack.Screen
        name="TodayJobs"
        component={Private.TodayJobs}
        options={{
          headerShown: true,
          headerTitle: 'Today Jobs',
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Private.Notifications}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="JobHistory"
        component={Private.JobHistory}
        options={{
          headerShown: true,
          headerTitle: 'Job History',
        }}
      />
      <Stack.Screen
        name="JobDetails"
        component={Private.JobDetails}
        options={{
          headerShown: true,
          headerTitle: 'Job Details',
        }}
      />
      <Stack.Screen
        name="JobHistoryDetails"
        component={Private.JobHistoryDetails}
        options={{
          headerShown: true,
          headerTitle: 'Job History Details',
        }}
      />
      <Stack.Screen
        name="AddService"
        component={Private.AddService}
        options={{
          headerShown: true,
          headerTitle: 'Add Services',
        }}
      />
      <Stack.Screen
        name="ContactUs"
        component={Private.ContactUs}
        options={{
          headerShown: true,
          headerTitle: 'Contact Us',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Private.Profile}
        options={{
          headerShown: true,
          headerTitle: 'Profile',
        }}
      />
      <Stack.Screen
        name="BankDetails"
        component={Private.BankDetails}
        options={{
          headerShown: true,
          headerTitle: 'Add Bank Details',
        }}
      />
      <Stack.Screen
        name="Rating"
        component={Private.Rating}
        options={{
          headerShown: true,
          headerTitle: 'Rating & Review',
        }}
      />
      <Stack.Screen
        name="Faqs"
        component={Private.Faqs}
        options={{
          headerShown: true,
          headerTitle: 'Faqs',
        }}
      />
      <Stack.Screen
        name="SendReview"
        component={Private.SendReview}
        options={{
          headerShown: true,
          headerTitle: 'Review',
        }}
      />
      <Stack.Screen
        name="MapTracking"
        component={Private.MapTracking}
        options={{
          headerShown: false,
          // headerTitle: 'Review',
        }}
      />
      <Stack.Screen
        name="VideoPicker"
        component={Private.VideoPicker}
        options={{
          headerShown: false,
          // headerTitle: 'Review',
        }}
      />
      <Stack.Screen
        name="Help"
        component={Private.Help}
        options={{
          headerShown: true,
          headerTitle: 'Request help',
        }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
