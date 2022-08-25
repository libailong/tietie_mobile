import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { server } from "../../../config";
import ProductCardList from "./ProductCardList";

const ResellPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${server}/api/resell/resell_products`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
            },
        }).then(response => {
            response.json().then(data => {
                if (data.products) {
                    setProducts(data.products);
                }
            });
        });
    }, []);
    console.log(products);
    return (
        <View>
            <ProductCardList products={products} />
        </View>
    );
};

export default ResellPage;
