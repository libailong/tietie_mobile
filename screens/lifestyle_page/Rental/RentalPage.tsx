import React, { useEffect, useState } from "react";
import {View} from 'react-native';
import {House} from './House';
import RentalCardList from './RentalCardList';
import { server } from "../../../config";


const RentalPage = () => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        fetch(`${server}/api/rental/rentals`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            response.json().then(data => setHouses(data.houses));
        });
    }, []);
    return (
        <View>
            <RentalCardList houses={houses} />
        </View>
    );
};

export default RentalPage;
