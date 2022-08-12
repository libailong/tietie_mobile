import React from 'react';
import {Card, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {House} from './House';

type Props = {
    house: House;
};

const style = StyleSheet.create({
    cardTitle: {
        textAlign: 'left',
        marginTop: 10,
        fontSize: 18,
        marginBottom: 8,
    },
    cardDescription: {},
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    address: {
        textAlignVertical: 'bottom',
    },
});

const RentalCard = (props: Props) => {
    const house = props.house;
    return (
        <Card>
            <Card.Image source={{uri: house.uri}} />
            <Card.Title style={style.cardTitle}>{house.title}</Card.Title>
            <Text style={style.cardDescription}>{house.description}</Text>
            <View style={style.priceWrapper}>
                <Text style={style.cardPrice}>${house.price}/month</Text>
                <Text style={style.address}>address</Text>
            </View>
        </Card>
    );
};

export default RentalCard;
