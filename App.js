import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        {/* Add a top-level container view with the desired background color */}
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </View>
      </TailwindProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// Define the styles for the container
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up all available space
    backgroundColor: 'gray', // Light gray background color
  },
});
