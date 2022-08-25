import React from 'react';
import {Card, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {House} from './House';

type Props = {
    house: House;
};

export const style = StyleSheet.create({
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
        maxWidth: 150,
    },
});

const RentalCard = (props: Props) => {
    const house = props.house;
    return (
        <Card>
            <Card.Image
                source={{
                    uri:
                        house.pictures[0] ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gagCctNKqdQc3MMpE1yn302aRLDCyWcXFitqYb4FJw&s',
                }}
            />
            <Card.Title style={style.cardTitle}>{house.name}</Card.Title>
            <Text style={style.cardDescription}>{house.description}</Text>
            <View style={style.priceWrapper}>
                <Text style={style.cardPrice}>${house.price}/month</Text>
                <Text style={style.address}>{house.address}</Text>
            </View>
        </Card>
    );
};

export default RentalCard;
