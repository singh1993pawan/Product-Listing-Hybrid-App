const { View, StyleSheet } = require("react-native");
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StarRating = () => {
    const totalStars = 5;
    const gainStars = 3;
    return (
        <View style={styles.container}>

            {
                Array.from({ length: gainStars }, (x, i) => {
                    return (
                        <MaterialIcons key={i} name="star" size={30} color="#FFA000" />
                    )
                })

            }

            {

                Array.from({ length: totalStars - gainStars }, (x, i) => {
                    return (
                        <MaterialIcons key={i} name="star-border" size={30} color="#FFA000" />
                    )
                })

            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",

    },
});

export default StarRating;