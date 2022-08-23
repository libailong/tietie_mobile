import { StyleSheet, View } from "react-native";
import React, { CSSProperties, useState } from "react";
import SegmentedPicker from "../../components/SegmentedPicker";
import SearchBar from "../../components/SearchBar";
import { Text, Card, Button } from "@rneui/themed";
import RentalCard from "./Rental/RentalCard";
import RentalPage from "./Rental/RentalPage";
import ResellPage from "./Resell/ResellPage";
import HelpPage from "./Help/HelpPage";
import SearchBarWithIcon from "../../components/SearchBarWithIcon";
import MapView from "./MapView";

type Props = {};

const LifestyleScreen = (props: Props) => {
    const [label, setLabel] = useState('resell');
    const [searchText, setSearchText] = useState();
    const [showMap, setShowMap] = useState(false);

    const style = StyleSheet.create({
        invisible: {
            display: "none",
        },
        container: {
            marginTop: 0,
        },
        searchBar: {
            marginTop: 10,
        },
    });

    return (
        <View>
            <SegmentedPicker
                data={{ Resell: "resell", Sublet: "sublet", Help: "help" }}
                onValueChanged={setLabel}
            />
            <View style={style.searchBar}>
                <SearchBarWithIcon
                    city="New York"
                    showMap={showMap}
                    setShowMap={setShowMap}
                />
            </View>
            {showMap ? (
                <View style={style.container}>
                    <MapView />
                </View>
            ) : (
                <View style={style.container}>
                    <View style={label !== "sublet" && style.invisible}>
                        <RentalPage />
                    </View>
                    <View style={label !== "resell" && style.invisible}>
                        <ResellPage />
                    </View>
                    <View style={label !== "help" && style.invisible}>
                        <HelpPage />
                    </View>
                </View>
            )}
        </View>
    );
};

export default LifestyleScreen;
