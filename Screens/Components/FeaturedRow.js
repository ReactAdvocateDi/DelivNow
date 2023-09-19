import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View style={styles.rowView}>
                <Text style={styles.rowText}>{title}</Text>
                <ArrowRightIcon color="#34B233" />
            </View>
            <Text style={styles.descriptionText}>{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollview}
            >
                <RestaurantCard
                    id={123}
                    imgUrl={"https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"}
                    title="Burger Treat"
                    rating={4.5}
                    genre="Japanese"
                    address="123, main st"
                    short_description="this is test descrip"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl={"https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"}
                    title="Burger Treat"
                    rating={4.5}
                    genre="Japanese"
                    address="123, main st"
                    short_description="this is test descrip"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl={"https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"}
                    title="Burger Treat"
                    rating={4.5}
                    genre="Japanese"
                    address="123, main st"
                    short_description="this is test descrip"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow

const styles = StyleSheet.create({
    rowView: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    },
    rowText: {
        fontWeight: 'bold',
        fontSize: 15,

    },
    descriptionText: {
        fontSize: 12,
        color: 'gray',
        paddingLeft: 16,
        paddingRight: 16,
    },
    scrollview: {
        paddingTop: 8,
    }

})