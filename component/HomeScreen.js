import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchStockList, fetchNewsFeed, searchStock } from "./api";

// Home screen component
const HomeScreen = () => {
  const navigation = useNavigation();
  const [stocks, setStocks] = useState([]);
  const [newsFeed, setNewsFeed] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showStockList, setShowStockList] = useState(false);

  // Fetch stock list and news feed on component mount
  useEffect(() => {
    fetchStockList().then((data) => setStocks(data));

    fetchNewsFeed().then((data) => setNewsFeed(data));
  }, []);

  // Function to handle stock search
  const handleSearch = () => {
    if (searchTerm) {
      searchStock(searchTerm)
        .then((data) => setSearchResults(data))
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        });
    }
  };

  // Function to handle button press
  const handleAction = () => {
    // Toggle the visibility of the stock list
    setShowStockList(!showStockList);
    // Clear search results when showing the stock list
    setSearchResults([]);
  };

  // Render individual stock item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.stockItem}
      onPress={() => navigation.navigate("StockDetails", { stock: item })}
      onLongPress={() => navigation.navigate("StockDetails", { stock: item })}
    >
      <Text>
        {item.ticker} {item.name} {item.price}
      </Text>
    </TouchableOpacity>
  );

  // Render individual news item
  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate("NewsDetails", { newsItem: item })}
    >
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Image source={{ uri: item.image_url }} style={styles.newsImage} />
      <Text style={styles.newsDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>


      {/* Button to display stock list */}
      <TouchableOpacity style={styles.stockButton} onPress={handleAction}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Stocks</Text>
      </TouchableOpacity>

      {/* Search input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Stock Symbols"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        {/* Search button */}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      

      {/* Search results or stock list */}
      {searchResults.length > 0 && (
        <>
          <Text style={styles.stockListHeading}>Search Results</Text>
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.ticker}
          />
        </>
      )}

      {showStockList && stocks.length > 0 && (
        <>
           <Text style={styles.stockListHeading}>Symbols</Text> 
          <FlatList
            data={stocks}
            renderItem={renderItem}
            keyExtractor={(item) => item.ticker}
          />
        </>
      )}

      {/* News feed list */}
      <Text style={styles.stockListHeading}>News Feed</Text>
      <FlatList
        data={newsFeed}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.uuid}
        style={styles.newsFeed}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  searchButton: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    marginTop: 20, 
    marginBottom: 20, 
    paddingHorizontal: 10, 
    paddingVertical: 5,
  },
  stockButton:{
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderRadius: 20,
    Margin: 10,
    padding:14,

  },
  button: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    borderRadius: 20,
    MarginBottom: 10,
  },
  stockListHeading: {
    fontSize: 18,
    fontWeight: "bold",
    MarginBottom: 10,
    backgroundColor: "lightgreen",
    borderRadius: 20,
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding:5,
  },
  stockItem: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: "aliceblue",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  newsItem: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "lightyellow",
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
  newsFeed: {
    marginBottom: 16,
  },
});

export default HomeScreen;
