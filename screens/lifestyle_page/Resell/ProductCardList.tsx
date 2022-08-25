import React from 'react';
import {FlatList} from 'react-native';
import {Product} from './Product';
import ProductCard from './ProductCard';

type Props = {
    products: Array<Product>;
};

const RentalCardList = (props: Props) => {
    const products = props.products;
    return (
        <FlatList
            data={products}
            renderItem={({item}: {item: Product}) => (
                <ProductCard product={item} />
            )}
        />
    );
};

export default RentalCardList;
