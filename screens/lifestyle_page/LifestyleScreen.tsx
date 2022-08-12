import {StyleSheet, View} from 'react-native';
import React, {CSSProperties, useState} from 'react';
import SegmentedPicker from '../../components/SegmentedPicker';
import SearchBar from '../../components/SearchBar';
import {Text, Card, Button} from '@rneui/themed';
import RentalCard from "./Rental/RentalCard";
import RentalPage from "./Rental/RentalPage";
import ResellPage from "./Resell/ResellPage";
import HelpPage from "./Help/HelpPage";

type Props = {};

const LifestyleScreen = (props: Props) => {
    const [label, setLabel] = useState();
    const [searchText, setSearchText] = useState();

    const style = StyleSheet.create({
        invisible: {
            display: 'none',
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
                data={{Resell: 'resell', Sublet: 'sublet', Help: 'help'}}
                onValueChanged={setLabel}
            />
            <View style={style.searchBar}>
                <SearchBar onSubmit={console.log} />
            </View>
            <View
                style={[
                    style.container,
                    label !== 'sublet' && style.invisible,
                ]}>
                <RentalPage />
            </View>
            <View
                style={[
                    style.container,
                    label !== 'resell' && style.invisible,
                ]}>
                <ResellPage />
            </View>
            <View
                style={[style.container, label !== 'help' && style.invisible]}>
                <HelpPage />
            </View>
        </View>
    );
};

export default LifestyleScreen;
