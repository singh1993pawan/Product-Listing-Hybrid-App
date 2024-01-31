import { DarkTheme, useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, StatusBar, FlatList, Image, Button, ScrollView, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./carousel/CarouselCardItem";
import { Rating } from 'react-native-stock-star-rating'


const ProductDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const data = item.images;
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0)

    return (
        <View style={styles.container}>
            <View>
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />
            </View>
            <View>
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>
            <View style={{ marginLeft: 15, marginRight: 15 }}>
                <View>
                    <Text style={styles.fontTitleStyle}>{item.title}</Text>
                </View>
                <View style={styles.offerStyle}>
                    <Text style={styles.fontPriceStyle}>${item.price}</Text>
                    <Text style={styles.fontOfferStyle}>{item.discountPercentage}% Off</Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Rating stars={4.7} maxStars={5} size={25} />
                    </View>

                </View>
                <View style={{marginTop:10}}>
                    <Text>{item.description}</Text>
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    fontTitleStyle: {
        fontSize: 24,
        color: 'black',
    }, fontPriceStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    offerStyle: {
        flexDirection: "row",
        marginTop: 5
    },
    fontOfferStyle: {
        fontSize: 18,
        color: 'red',
        fontWeight: '400',
        marginLeft: 15
    },
});
export default ProductDetails;
