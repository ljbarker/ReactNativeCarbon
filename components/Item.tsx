import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CarbonDataType from "../types/CarbonDataType";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface WebsiteDataItemProps {
    data: CarbonDataType;
    index: number;
    // This looks a little fancy, but it's just a way for us to specify that this is a function which will update a state action. After declaring the function and setting the useState hook, hovering over the name of the function in VSCode gives us the specific type definition for the function.
    setData: React.Dispatch<React.SetStateAction<CarbonDataType[]>>;
}

const WebsiteDataItem = ({ data, index, setData }: WebsiteDataItemProps) => {
    // TODO: How can wetrack whether a given section is expanded?
    // following line is just a placeholder; delete it!
    const expanded = false;
    // TODO: How can we color a given entry?
    const color = "";
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    // TOOD: How can we toggle the expanded state when the item is pressed?
                }}
            >
                <View style={styles.container}>
                    {/* TODO: Set up an entry for a given data item, using relevant parts of the API response data */}
                </View>
            </TouchableOpacity>
            {expanded && (
                <TouchableOpacity
                    style={styles.dropdown}
                    // TODO: What should happen when the dropdown section is pressed?
                    onPress={() => {}}
                >
                    {/* TODO: Add text elements to show the relevant parts of the API response data to go into the dropdown */}
                    <Ionicons
                        onPress={() => {
                            // TODO: How can we update the data when clicking the remove option?
                        }}
                        name="remove-circle-outline"
                        size={24}
                        color="red"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default WebsiteDataItem;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 50,
        alignItems: "center",
    },
    containerRightSection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    dropdown: {
        padding: 10,
    },
});
