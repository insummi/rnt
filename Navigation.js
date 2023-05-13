import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { PostScreen } from "./src/screens/PostScreen/PostScreen";

export const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#810823"
              />
            ),
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#810823"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate("Home")}
                title="Home"
                color="#543689"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
