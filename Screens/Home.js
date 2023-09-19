import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from './Components/Categories';
import FeaturedRow from './Components/FeaturedRow';


const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    //(C:\Users\HP\Desktop\Builds\DelivNow\delivnow)// 
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewStyle}>
                <Image
                    source={{
                        uri: 'https://Links.papareact.com/wru'
                    }}
                    style={styles.imageStyle}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>Deliver Now</Text>
                    <View style={styles.locationContainer}>
                        <Text style={styles.textHeader2}>Current Location</Text>
                        <ChevronDownIcon size={20} color="#34B233" />
                    </View>
                </View>
                <UserIcon size={30} color="#34B233" style={styles.userIcon} />
            </View>
            <View style={styles.mainview}>
                <View style={styles.searchbox}>
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput placeholder='Restaurant and Cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon color="#34B233" />
            </View>
            <ScrollView>
                <Categories />

                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="paid placement from our partners"
                />

                <FeaturedRow
                    id="1234"
                    title="Tasty Discounts"
                    description="paid placement from our partners"
                />

                <FeaturedRow
                    id="12345"
                    title="Offers near you!"
                    description="paid placement from our partners"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        backgroundColor: '#fff',
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Align items at the start and end of the container
        marginHorizontal: 16,
        marginRight: 16,
        paddingTop: 20, // Add some marginTop to push the items down
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    textHeader: {
        fontWeight: 'bold',
        color: '#718096',
        fontSize: 12,
        marginBottom: 5,
    },
    locationContainer: {
        flexDirection: 'row', // Align text and icon horizontally
        alignItems: 'center', // Center vertically within the container
    },
    textHeader2: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        color: 'red',
    },
    imageStyle: {
        height: 40,
        width: 40,
        backgroundColor: '#d2d6dc',
        padding: 4,
        borderRadius: 100,
    },
    userIcon: {
        // Move the UserIcon to the far right
    },
    searchbox: {
        flexDirection: 'row',
        backgroundColor: '#D3D3D3',
        margin: 9,
        flex: 1,
        padding: 5,
        alignItems: 'center',


    },
    mainview: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 2,
        marginLeft: 16,
        marginRight: 16,


    }
})
