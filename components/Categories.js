import { ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* {tarjeta categoria} */}
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2022/09/receta-de-caipirina.jpg" title="Cocktails"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2022/01/arroz-primavera.jpg" title="Arroces"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2021/11/fideua-de-mariscos.jpg" title="Pastas"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2015/08/hojas-de-remolacha.png" title="Ensaladas"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Tacos"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2022/11/receta-de-empanadas-de-cebolla-y-queso.jpg" title="Empanadas"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2022/01/pizza-calabresa.jpg" title="Pizzas"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2022/06/receta-de-tarta-banoffee.jpg" title="Postres"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2021/12/banana-split-helado.jpg" title="Helados"/>

        </ScrollView>
    );
};

export default Categories;