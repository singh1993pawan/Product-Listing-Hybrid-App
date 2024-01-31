import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, StatusBar, FlatList, Image, Button, ScrollView, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
    const [productsList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [selectedState, setSelectedState] = useState(false);

    const getProductByCategory = async (category) => {
        const url = 'https://dummyjson.com/products/category/';
        let result = await fetch(`${url}${category}`);
        result = await result.json();
        setProductList(result.products)
    }

    const getAllProductApi = async () => {
        const url = 'https://dummyjson.com/products';
        let result = await fetch(url);
        result = await result.json();
        setProductList(result.products)
    }

    const getAllCategoryApi = async () => {
        const url = 'https://dummyjson.com/products/categories';
        let result = await fetch(url);
        result = await result.json();
        setCategoryList(result)
    }
    useEffect(() => {
        getAllProductApi();
        getAllCategoryApi();

    }, [])
    return (
        <View style={styles.container}>
            
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor='white'
                animated={true}
            />
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.horizontalContainer}>
                        {
                            categoryList.map((item) => {
                                return (

                                    <View style={{ marginLeft: 15 }}>
                                        <TouchableOpacity style={styles.buttonUnselectedStyle} onPress={() => { getProductByCategory(item); () => setSelectedState(true) }} >
                                            <Text style={styles.textDarkGray}>{item}</Text>
                                        </TouchableOpacity>
                                    </View>

                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>

            <View>
                <FlatList
                    data={productsList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={styles.cardStyle}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Product Details',{item})}>
                                <Image
                                    style={styles.imageThumbnail}
                                    source={{ uri: item.thumbnail }}
                                />
                                <Text style={styles.fontTitleStyle}>{item.title}</Text>
                                <View style={styles.offerStyle}>
                                    <Text style={styles.fontPriceStyle}>${item.price}</Text>
                                    <Text style={styles.fontOfferStyle}>{item.discountPercentage}% Off</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )}
                    numColumns={2}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    cardStyle: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        marginTop: 10
    },
    fontTitleStyle: {
        fontSize: 18,
        color: 'black',
    }, fontPriceStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    offerStyle: {
        flexDirection: "row",
    },
    fontOfferStyle: {
        fontSize: 14,
        color: 'red',
        fontWeight: '400',
        marginLeft: 15
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },
    buttonSelectedStyle: {
        height: 45,
        backgroundColor: '#3D3635',
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    textWhite: {
        fontSize: 15,
        color: 'white',
    },
    textDarkGray: {
        fontSize: 15,
        color: '#3D3635',
    },
    buttonUnselectedStyle: {
        height: 45,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    // buttonStyle: {
    //     flex:1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 50,
    //     height: 50,
    // }
});
export default HomeScreen;
