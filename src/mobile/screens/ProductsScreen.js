import { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const ProductsScreen = () => {
  const [products] = useState([
    {
      id: "1",
      name: "Whey Protein",
      category: "Alimentício",
      price: 89.9,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Haltere 10kg",
      category: "Academia",
      price: 45.0,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      name: "Barra Energética",
      category: "Alimentício",
      price: 8.9,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      name: "Tapete de Yoga",
      category: "Academia",
      price: 120.0,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produtos..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />

      <View style={styles.cartFooter}>
        <Text style={styles.cartText}>Carrinho ({cart.length})</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  searchInput: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  cartFooter: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  cartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductsScreen;
