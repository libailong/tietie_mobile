import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Divider } from "@rneui/base";
import Svg, { G, Path } from "react-native-svg";

type Props = {
    city: string;
    showMap: boolean;
    setShowMap: (showMap: boolean) => void;
};

const SearchBarWithIcon = (props: Props) => {
    const [searchText, setSearchText] = useState('');
    return (
        <View style={styles.inputWrapper}>
            <View style={styles.inputBase}>
                <Text>New York</Text>
                <Divider
                    orientation="vertical"
                    width={1}
                    style={styles.divider}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder="Search here..."
                />
            </View>
            <TouchableOpacity onPress={() => props.setShowMap(!props.showMap)}>
                <View style={styles.icon}>
                    {props.showMap ? <ListIcon /> : <MapIcon />}
                    <Text style={styles.iconText}>
                        {props.showMap ? 'List' : 'Map'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    location: {
        maxWidth: "10ch",
    },
    divider: {
        marginHorizontal: 8,
    },
    input: {},
    inputBase: {
        borderWidth: 1,
        marginLeft: 12,
        padding: 10,
        height: 40,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
    },
    icon: {
        marginHorizontal: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    iconText: {
        fontSize: 12,
    },
});

const MapIcon = () => {
    return (
        <Svg viewBox="0 0 1024 1024" width="24" height="24">
            <G>
                <Path
                    d="M649.6 960c-12.8 0-25.6-9.6-28.8-22.4-6.4-16 3.2-35.2 19.2-41.6l256-86.4V428.8l-115.2 38.4c-16 6.4-35.2-3.2-41.6-19.2-6.4-16 3.2-35.2 19.2-41.6l160-51.2c9.6-6.4 19.2-3.2 28.8 3.2 6.4 6.4 12.8 16 12.8 25.6v448c0 12.8-9.6 25.6-22.4 28.8l-278.4 96c-3.2 3.2-6.4 3.2-9.6 3.2z"
                    fill="#212121"
                />
                <Path
                    d="M649.6 960c-3.2 0-6.4 0-9.6-3.2l-278.4-96c-16-6.4-25.6-22.4-19.2-41.6 6.4-16 22.4-25.6 41.6-19.2l278.4 96c16 6.4 25.6 22.4 19.2 41.6-6.4 12.8-19.2 22.4-32 22.4z"
                    fill="#212121"
                />
                <Path
                    d="M96 960c-6.4 0-12.8-3.2-19.2-6.4-9.6-6.4-12.8-16-12.8-25.6V480c0-12.8 9.6-25.6 22.4-28.8l73.6-28.8c16-6.4 35.2 3.2 41.6 19.2s-3.2 35.2-19.2 41.6l-54.4 19.2v380.8l233.6-80c16-6.4 35.2 3.2 41.6 19.2 6.4 16-3.2 35.2-19.2 41.6l-278.4 96H96z"
                    fill="#212121"
                />
                <Path
                    d="M480 416c-54.4 0-96-41.6-96-96s41.6-96 96-96 96 41.6 96 96-41.6 96-96 96z m0-128c-19.2 0-32 12.8-32 32s12.8 32 32 32 32-12.8 32-32-12.8-32-32-32z"
                    fill="#212121"
                />
                <Path
                    d="M480 688l-22.4-25.6C435.2 640 256 435.2 256 320c0-124.8 99.2-224 224-224s224 99.2 224 224c0 115.2-179.2 320-201.6 342.4l-22.4 25.6zM480 160c-89.6 0-160 70.4-160 160 0 60.8 89.6 188.8 160 272 70.4-83.2 160-211.2 160-272 0-89.6-70.4-160-160-160z"
                    fill="#212121"
                />
            </G>
        </Svg>
    );
};

const ListIcon = () => {
    return (
        <Svg viewBox="0 0 1024 1024" width="24" height="24">
            <G>
                <Path
                    d="M170.666667 277.333333a85.333333 85.333333 0 1 0 0-170.666666 85.333333 85.333333 0 0 0 0 170.666666zM405.333333 128a64 64 0 1 0 0 128h469.333334a64 64 0 0 0 0-128h-469.333334zM341.333333 490.666667A64 64 0 0 1 405.333333 426.666667h469.333334a64 64 0 0 1 0 128h-469.333334A64 64 0 0 1 341.333333 490.666667z m0 298.666666A64 64 0 0 1 405.333333 725.333333h469.333334a64 64 0 0 1 0 128h-469.333334A64 64 0 0 1 341.333333 789.333333z m-85.333333-298.666666a85.333333 85.333333 0 1 1-170.666667 0 85.333333 85.333333 0 0 1 170.666667 0z m-85.333333 384a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z"
                    fill="#212121"
                />
            </G>
        </Svg>
    );
};
export default SearchBarWithIcon;
