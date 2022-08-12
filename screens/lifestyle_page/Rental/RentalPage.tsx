import React from 'react';
import {View} from 'react-native';
import {House} from './House';
import RentalCardList from './RentalCardList';

const houses: Array<House> = [
    {
        title: 'House1',
        description: 'description1',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp4zY9y85b1jeJbuEzkP_oaEUaGz1HZ12Am1SpSddSQ&s',
        price: 300,
    },
    {
        title: 'House2',
        description: 'description2',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gagCctNKqdQc3MMpE1yn302aRLDCyWcXFitqYb4FJw&s',
        price: 400,
    },
    {
        title: 'House2',
        description: 'description2',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gagCctNKqdQc3MMpE1yn302aRLDCyWcXFitqYb4FJw&s',
        price: 400,
    },
    {
        title: 'House2',
        description: 'description2',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gagCctNKqdQc3MMpE1yn302aRLDCyWcXFitqYb4FJw&s',
        price: 400,
    },
];

const RentalPage = () => {
    return (
        <View>
            <RentalCardList houses={houses} />
        </View>
    );
};

export default RentalPage;
