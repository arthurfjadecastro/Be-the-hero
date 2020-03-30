import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Essential to use routes
import { NavigationContainer } from "@react-navigation/native";
import { Incidents } from "./Incidents";
import { Details } from "./Incidents/Details";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
