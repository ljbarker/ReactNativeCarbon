import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    TextInput,
    StyleSheet,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParamList } from "../App";
import CarbonDataType from "../types/CarbonDataType";
import { Ionicons } from "@expo/vector-icons";
import WebsiteDataItem from "../components/Item";

type SearchScreenProps = NativeStackScreenProps<NativeStackParamList, "Search">;

const SearchScreen = ({ navigation, route }: SearchScreenProps) => {
    const { params } = route;
    const [query, setQuery] = useState("");
    const [data, setData] = useState<CarbonDataType[]>([]);
    const [loading, setLoading] = useState(false);

    // TODO: How can we update the data when the route params change? Hint: useEffect

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Ionicons
                    onPress={() => {
                        // TODO: Go back to the history screen here, make sure to pass along data!
                    }}
                    name="arrow-back"
                    size={24}
                />
            ),
        });
    }, [data]);

    const fetchResults = async () => {
        // TODO: How can we fetch the results from the API? Note: This is a bit more challenging then the rest!
    };

    return (
        <>
            <TextInput
                placeholder="Search"
                value={query}
                onChangeText={(newText) => setQuery(newText)}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                autoComplete="off"
                style={styles.textInput}
            />
            <Button title="Search" onPress={fetchResults} disabled={loading} />
            {/* TODO: What should we show when the result is loading? */}
            {loading && <></>}
            {/* TODO: Set up the FlatList */}
            {/* <FlatList
                data={}
                renderItem={({ item, index }) => (

                )}
            /> */}
        </>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    textInput: {
        margin: 10,
        padding: 7,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "lightgray",
    },
});
