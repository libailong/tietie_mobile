import React from 'react';
import {Card, Text} from '@rneui/themed';
import {View} from 'react-native';
import { Product } from "./Product";
import { style } from "../Rental/RentalCard";

type Props = {
    product: Product;
};

const ProductCard = (props: Props) => {
    const product = props.product;
    return (
        <Card>
            <Card.Image
                source={{
                    uri:
                        product?.picture[0] ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gagCctNKqdQc3MMpE1yn302aRLDCyWcXFitqYb4FJw&s',
                }}
            />
            <Card.Title style={style.cardTitle}>{product.title}</Card.Title>
            <Text style={style.cardDescription}>{product.description}</Text>
            <View style={style.priceWrapper}>
                <Text style={style.cardPrice}>{product.price}</Text>
                <Text style={style.address}>{product.address}</Text>
            </View>
        </Card>
    );
};

export default ProductCard;
