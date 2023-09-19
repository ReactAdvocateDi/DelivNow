import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,

}) => {
    return (
        <TouchableOpacity style={styles.cardOpacity}>
            <Image
                source={{
                    uri: imgUrl,
                }}
                style={styles.cardImg}
            />
            <View style={styles.cardView}>
                <Text style={styles.cardText}>{title}</Text>
                <View style={styles.starView}>
                    <StarIcon color="green" opacity={0.5} size={20} style={styles.starIcon} />
                    <Text style={styles.starText}>
                        <Text style={styles.ratingText}>{rating}</Text> . {genre} </Text>
                </View>
                <View>
                    <MapPinIcon color="gray" opacity={0.4} size={20} />
                    <Text style={styles.mapView}>Nearby . {address} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({
    cardOpacity: {
        backgroundColor: 'white',
        marginRight: 3,
        borderRadius: 8, // Optional: Add border-radius for rounded corners
        padding: 16, // Optional: Add padding for content spacing

        // Shadow properties
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 6, // Elevation for Android (optional)
    },

    cardImg: {
        height: 100,
        width: 180,
        borderRadius: 5,
    },
    cardView: {
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 7,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingTop: 8,
    },
    starIcon: {
        marginLeft: -5,

    },
    starView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    starText: {
        fontSize: 10,
        color: 'gray',
        bottom: -2,
        paddingLeft: 3,

    },
    ratingText: {
        color: 'green',
    },
    mapText: {
        fontSize: 10,
        color: 'gray',

    },
    mapView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4,
        marginRight: 4,


    }
})