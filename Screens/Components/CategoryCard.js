import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Image source={{ uri: imgUrl }}
                style={styles.catcardimg}
            />
            <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>

    )
}

export default CategoryCard

const styles = StyleSheet.create({
    opacityStyle: {
        position: 'relative',
        paddingRight: 4,
    },
    catcardimg: {
        height: 60,
        width: 60,
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    cardText: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        color: 'white',
        fontWeight: 'bold',

    },
})