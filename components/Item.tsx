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
    const [expanded, setExpanded] = useState(false);
    const color = data.green ? "green" : "red";
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                <View style={styles.container}>
                    <Text>{data.url}</Text>
                    <View style = {styles.containerRightSection}>
                        <Text>{data.cleanerThan}</Text>
                        <Ionicons color={color} name = {expanded ? "chevron-up" : "chevron-down"}/>
                    </View>
                </View>
            </TouchableOpacity>
            {expanded && (
                <TouchableOpacity
                    style={styles.dropdown}
                    onPress={() => {
                        setExpanded(false);
                    }}
                >
                    <Text>Bytes: {data.bytes}</Text>
                    <Text>Adjusted Bytes: {data.statistics.adjustedBytes}</Text>
                    <Text>CO2 Grams: {data.statistics.co2.grid.grams}</Text>
                    <Ionicons
                        onPress={() => {
                            // TODO: How can we update the data when clicking the remove option?
                            setData((prevData) => {
                                const newData = [...prevData];
                                newData.splice(index, 1);
                                setData(newData);
                            });
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
