import { Button, FlatList, StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParamList } from "../App";
import { useEffect, useState } from "react";
import CarbonDataType from "../types/CarbonDataType";
import { Ionicons } from "@expo/vector-icons";
import WebsiteDataItem from "../components/Item";

type HistoryScreenProps = NativeStackScreenProps<
    NativeStackParamList,
    "History"
>;

const HistoryScreen = ({ navigation, route }: HistoryScreenProps) => {
    const { params } = route;
    const [data, setData] = useState<CarbonDataType[]>([]);
    // TODO: How can we update the data when the route params change? Hint: useEffect

    return (
        <>
            <View style={styles.container}>
                <Button
                    title="Clear History"
                    onPress={() => {
                        // TODO: Clear the history here
                    }}
                />
                <Ionicons
                    onPress={() => {
                        // TODO: Go to the search screen here, make sure to pass along data!
                    }}
                    name="search-outline"
                    size={24}
                />
            </View>
            {/* TODO: Set up the FlatList */}
            {/* <FlatList
                data={}
                renderItem={({ item, index }) => (
                    
                )}
            /> */}
        </>
    );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
        alignItems: "center",
    },
});
