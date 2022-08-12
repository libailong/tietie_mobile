import React from 'react';
import {House} from './House';
import RentalCard from './RentalCard';
import {FlatList} from 'react-native';

type Props = {
    houses: Array<House>;
};

const RentalCardList = (props: Props) => {
    const houses = props.houses;
    return (
        <FlatList
            data={houses}
            renderItem={({item}: {item: House}) => <RentalCard house={item} />}
        />
    );
};

export default RentalCardList;
