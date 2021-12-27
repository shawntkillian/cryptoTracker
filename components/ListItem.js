import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';


const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {

    const printChangeColor = priceChangePercentage7d > 0? '#34C759': '#FF3B30'
    return(
        <TouchableOpacity>
            <View style = {styles.itemWrapper}>
                {/* Left Side*/}
                <View style= {styles.leftWrapper}>
                    <Image style={styles.image} source = {{uri: logoUrl }}/>
                    <View style= {styles.titleWrapper}>
                        <Text style= {styles.title}>{name}</Text>
                        <Text style= {styles.subTitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>
                {/* Right Side*/}
                <View style= {styles.rightWrapper}>
               
                        <Text style= {styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                        <Text style= {[styles.subTitle, {color:printChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
itemWrapper: {  
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},
leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
},
rightWrapper: {
    alignItems: 'flex-end'
},
image: {
    height: 48,
    width: 48
},
titleWrapper: {
    marginLeft: 8,
},
title: {
    fontSize: 18
},
subTitle: {
    fontSize: 14,
    marginTop: 4,
    color: '#A9ABB1',
},
})

export default ListItem

