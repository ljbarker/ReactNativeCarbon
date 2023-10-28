import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./screens/SearchScreen";
import HistoryScreen from "./screens/HistoryScreen";
import CarbonDataType from "./types/CarbonDataType";

// if you wanted to use a bottom tab navigator, you could!
// you'd need to install yarn add @react-navigation/bottom-tabs
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// see https://github.com/AnatuGreen/ReactNative-ContextAPI-Sample-App/tree/main for an example of an app that uses useContext to share the state and the updateState functions between screens
// const BottomTabNavigator = createBottomTabNavigator();

// this is a type definition for the parameters that can be passed to the screens, using the navigation.navigate function
export type NativeStackParamList = {
    Search: undefined | { data: CarbonDataType[] };
    History: undefined | { data: CarbonDataType[] };
};

const NativeStackNavigator = createNativeStackNavigator<NativeStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            {/* TODO: How can we set up the screen routing using the native stack navigator defined above? */}
        </NavigationContainer>
    );
}
