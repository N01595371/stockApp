// NewsDetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// News details screen component
const NewsDetailsScreen = ({ route }) => {
    const { newsItem } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.news}>
            <Text style={styles.newsTitle}>{newsItem.title}</Text>
            <Image source={{ uri: newsItem.image_url }} style={styles.newsImage} />
            <Text style={styles.newsDescription}>{newsItem.description}</Text>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "lightblue",
        
        
    },
    news:{
        marginTop:25,
        borderWidth: 2,
        borderRadius:5,
        backgroundColor:"white",
        padding: 16,
        

    },
    newsTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    newsDescription: {
        marginBottom: 8,
    },
    newsImage: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
        marginBottom: 8,
    },
});

export default NewsDetailsScreen;
