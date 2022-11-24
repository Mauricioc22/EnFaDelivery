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
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Testing 1"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Testing 2"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Testing 3"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Testing 3"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Testing 3"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Testing 3"/>
            <CategoryCard imgUrl="https://www.paulinacocina.net/wp-content/uploads/2020/08/tacos-meat-food-mexican-lunch-dinner-640x480.jpg" title="Testing 3"/>

        </ScrollView>
    );
};

export default Categories;