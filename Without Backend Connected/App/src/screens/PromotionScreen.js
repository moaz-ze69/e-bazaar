import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import ItemCard from "../components/ItemCard";
import ListFooterComponent from "../components/ListFooterComponent";
import Brand from "../components/promotion/Brand";
import Product from "../components/promotion/Product";
import colors from "../config/colors";

let data = [
  {
    id: 1,
    title: "Unilever",
    parent: null,
    subID: null,
  },
  {
    id: 2,
    title: "Reckitt",
    parent: null,
    subID: null,
  },
  {
    id: 3,
    title: "PepsiCo.",
    parent: null,
    subID: null,
  },
  {
    id: 4,
    title: "LU CBL",
    parent: null,
    subID: null,
  },
  {
    id: 5,
    title: "Omore",
    parent: null,
    subID: null,
  },
  {
    id: 6,
    title: "Nestle",
    parent: null,
    subID: null,
  },
  {
    id: 7,
    title: "Shan Foods",
    parent: null,
    subID: null,
  },
  {
    id: 8,
    title: "The Coca Cola Company",
    parent: null,
    subID: null,
  },
  {
    id: 9,
    title: "Lifebouy",
    parent: 1,
    categoryID: 1,
    subID: null,
  },
  {
    id: 10,
    title: "Dove",
    parent: 1,
    categoryID: 2,
    subID: null,
  },
  {
    id: 11,
    title: "Lux",
    parent: 1,
    categoryID: 3,
    subID: null,
  },
  {
    id: 12,
    title: "Pond's",
    parent: 1,
    categoryID: 4,
    subID: null,
  },
  {
    id: 13,
    title: "Glow & Lovely",
    parent: 1,
    categoryID: 5,
    subID: null,
  },
  {
    id: 14,
    title: "TRESemme",
    parent: 1,
    categoryID: 6,
    subID: null,
  },
  {
    id: 15,
    title: "Sunsilk",
    parent: 1,
    categoryID: 7,
    subID: null,
  },
  {
    id: 16,
    title: "Unilever",
    parent: 1,
    categoryID: 8,
    subID: null,
  },
  {
    id: 17,
    title: "Surf Excel",
    parent: 1,
    categoryID: 9,
    subID: null,
  },
  {
    id: 18,
    title: "knorr",
    parent: 1,
    categoryID: 10,
    subID: null,
  },
  {
    id: 19,
    title: "Dettol",
    parent: 2,
    categoryID: 1,
    subID: null,
  },
  {
    id: 20,
    title: "Harpic",
    parent: 2,
    categoryID: 2,
    subID: null,
  },
  {
    id: 21,
    title: "Mortein",
    parent: 2,
    categoryID: 3,
    subID: null,
  },
  {
    id: 22,
    title: "Veet",
    parent: 2,
    categoryID: 4,
    subID: null,
  },
  {
    id: 23,
    title: "Reckitt",
    parent: 2,
    categoryID: 5,
    subID: null,
  },
  {
    id: 24,
    title: "Cherry Blossom",
    parent: 2,
    categoryID: 6,
    subID: null,
  },
  {
    id: 25,
    title: "Durex",
    parent: 2,
    categoryID: 7,
    subID: null,
  },
  {
    id: 26,
    title: "Pepsi",
    parent: 3,
    categoryID: 1,
    subID: null,
  },
  {
    id: 27,
    title: "Sting",
    parent: 3,
    categoryID: 2,
    subID: null,
  },
  {
    id: 28,
    title: "Slice",
    parent: 3,
    categoryID: 3,
    subID: null,
  },
  {
    id: 29,
    title: "Mountain Dew",
    parent: 3,
    categoryID: 4,
    subID: null,
  },
  {
    id: 30,
    title: "Mirinda",
    parent: 3,
    categoryID: 5,
    subID: null,
  },
  {
    id: 31,
    title: "Gatorade",
    parent: 3,
    categoryID: 6,
    subID: null,
  },
  {
    id: 32,
    title: "7up",
    parent: 3,
    categoryID: 7,
    subID: null,
  },
  {
    id: 33,
    title: "Aquafina",
    parent: 3,
    categoryID: 8,
    subID: null,
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 34,
    parent: 1,
    price: 289,
    quantity: 450,
    source: {
      uri: "https://media-products.airliftexpress.com/large/55bd9cb3-3477-4aa7-a29b-e5b7bee24aff_8961014245721.jpg",
    },
    subID: 1,
    title: "Lifebuoy Hand Wash Refill Mild Care with Cream 450ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 35,
    parent: 1,
    price: 650,
    quantity: 1,
    source: {
      uri: "https://media-products.airliftexpress.com/large/e92c84a3-8fdf-4593-a20f-0ad224961c9f_1130741-1.jpg",
    },
    subID: 1,
    title: "Lifebuoy Hand Wash Refill Mild Care with Cream 1L",
    unit: "L",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 36,
    parent: 1,
    price: 650,
    quantity: 1,
    source: {
      uri: "https://media-products.airliftexpress.com/large/e92c84a3-8fdf-4593-a20f-0ad224961c9f_1130741-1.jpg",
    },
    subID: 1,
    title: "Lifebuoy Hand Wash Refill Mild Care with Cream 1L",
    unit: "L",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 37,
    parent: 1,
    price: 106,
    quantity: 90,
    source: {
      uri: "https://media-products.airliftexpress.com/large/1c644612-5c20-47e3-ad23-e0153bb05adf_Lifebuoy%20Herbal%20Strong%20Shampoo%2090ml.jpeg",
    },
    subID: 1,
    title: "Lifebuoy Herbal Strong Shampoo 90ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 38,
    parent: 1,
    price: 106,
    quantity: 62,
    source: {
      uri: "https://media-products.airliftexpress.com/large/043d0785-ed55-4e07-a641-750944adf740_Lifebuoy%20Soap%20Lemon%20Fresh%20146gm.jpg",
    },
    subID: 1,
    title: "Lifebuoy Soap Lemon Fresh 135gm",
    unit: "gm",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 39,
    parent: 1,
    price: 199,
    quantity: 200,
    source: {
      uri: "https://media-products.airliftexpress.com/large/bdbc3549-0957-43cb-b019-c5f5a4ebcd28_lifebuoy.png",
    },
    subID: 1,
    title: "Lifebuoy Total 10 Germs Protection Hand Wash, 200ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 40,
    parent: 1,
    price: 210,
    quantity: 175,
    source: {
      uri: "https://media-products.airliftexpress.com/large/a91dbff3-4daf-49cf-85de-c495388d84ed_Lifebuoy%20Shampoo%20Strong%20%26%20Thick%20175ml.jpeg",
    },
    subID: 1,
    title: "Lifebuoy Shampoo Strong & Thick 175ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 41,
    parent: 1,
    price: 220,
    quantity: 175,
    source: {
      uri: "https://media-products.airliftexpress.com/large/d430450e-3b37-4ab6-8974-07fadabacfc7_Lifebouy%20Silky%20Soft%20Shampoo%20175ml.jpeg",
    },
    subID: 1,
    title: "Lifebouy Silky Soft Shampoo 175ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 42,
    parent: 1,
    price: 530,
    quantity: 360,
    source: {
      uri: "https://media-products.airliftexpress.com/large/fa7fdcfe-f9ac-4fa5-96d8-b48412d1d4b8_woo.jpg",
    },
    subID: 2,
    title: "Dove Dryness Care Shampoo 360ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 43,
    parent: 1,
    price: 315,
    quantity: 180,
    source: {
      uri: "https://media-products.airliftexpress.com/large/ab41cbc2-ce9f-441c-9c0b-2584270b3247_woo.jpg",
    },
    subID: 2,
    title: "Dove Intense Repair Conditioner 180ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 44,
    parent: 1,
    price: 315,
    quantity: 180,
    source: {
      uri: "https://media-products.airliftexpress.com/large/9cafb8d9-d6d6-4387-bb07-6b5a71e9cf83_8961014236514.jpg",
    },
    subID: 2,
    title: "Dove Hair Fall Rescue Conditioner 180ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 45,
    parent: 1,
    price: 530,
    quantity: 360,
    source: {
      uri: "Dove Nourishing Oil Care Shampoo 360ml",
    },
    subID: 2,
    title: "Dove Nourishing Oil Care Shampoo 360ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 46,
    parent: 1,
    price: 287,
    quantity: 175,
    source: {
      uri: "https://media-products.airliftexpress.com/large/c6d45fff-bad3-4dc7-ae47-8ccd534fce14_woo.jpg",
    },
    subID: 2,
    title: "Dove Shampoo Dryness Care 175ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 47,
    parent: 1,
    price: 530,
    quantity: 360,
    source: {
      uri: "https://media-products.airliftexpress.com/large/b7e37466-22e1-487d-ac27-b18f9c872408_woo.jpg",
    },
    subID: 2,
    title: "Dove Shampoo Hair Fall Rescue 360ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 48,
    parent: 1,
    price: 295,
    quantity: 175,
    source: {
      uri: "https://media-products.airliftexpress.com/large/d5722f49-f5f6-455f-b403-2edd9430095c_woo.jpg",
    },
    subID: 2,
    title: "Dove Shampoo Intense Repair 175ml",
    unit: "ml",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 49,
    parent: 1,
    price: 50,
    quantity: 70,
    source: {
      uri: "https://media-products.airliftexpress.com/large/a57d9bca-8bcc-4836-83ec-d40d9242c692_Lux%20Velvet%20Touch%2070g.jpeg",
    },
    subID: 3,
    title: "Lux Velvet Glow 70gm",
    unit: "gm",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 50,
    parent: 1,
    price: 81,
    quantity: 140,
    source: {
      uri: "https://media-products.airliftexpress.com/large/63449d65-7764-4d23-80a6-ad3d8aae63d2_Lux%20Purple%20Lotus%20140gm.jpeg",
    },
    subID: 3,
    title: "Lux Purple Lotus 140gm",
    unit: "gm",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 51,
    parent: 1,
    price: 86,
    quantity: 140,
    source: {
      uri: "https://media-products.airliftexpress.com/large/9115fe3f-05a2-4c6d-8f03-5dad8ad005f5_Lux%20Fresh%20Splash%20140gm%20.jpeg",
    },
    subID: 3,
    title: "Lux Fresh Splash 140gm",
    unit: "gm",
  },
];

export default function PromotionScreen({ navigation }) {
  let [selectedBrand, setSelectedBrand] = useState(data[0]);
  let [products, setProducts] = useState(
    data.filter(
      (element) => element.parent === selectedBrand.id && element.subID === null
    )
  );
  let [selectedProduct, setSelectedProduct] = useState(products[0]);

  let [items, setItems] = useState(
    data.filter(
      (element) =>
        element.parent === selectedBrand.id &&
        element.subID === selectedProduct.parent
    )
  );

  useEffect(() => {
    setProducts(
      data.filter(
        (element) =>
          element.parent === selectedBrand.id && element.subID === null
      )
    );
    setItems(
      data.filter(
        (element) =>
          element.parent === selectedBrand.id &&
          element.subID === selectedProduct.categoryID
      )
    );
  }, [selectedBrand, selectedProduct]);

  let brands = data.filter((element) => element.parent === null);

  return (
    <View>
      <View style={styles.brandsContainer}>
        <FlatList
          data={brands}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode={"never"}
          renderItem={({ item }) => (
            <Brand
              title={item.title}
              active={item === selectedBrand ? true : false}
              onPress={() => {
                setSelectedBrand(item);
              }}
            />
          )}
        />
      </View>
      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode={"never"}
          renderItem={({ item }) => (
            <Product
              title={item.title}
              active={item === selectedProduct ? true : false}
              onPress={() => {
                setSelectedProduct(item);
              }}
            />
          )}
        />
      </View>
      <View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          ListFooterComponent={<ListFooterComponent />}
          overScrollMode={"never"}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              color={colors.lightBlue}
              onPress={() => navigation.navigate("Item Details", item)}
              style={{
                width: Dimensions.get("window").width / 2,
                marginHorizontal: 0,
                margin: 0,
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    backgroundColor: "yellow",
    borderColor: colors.goGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  brandsContainer: {
    paddingHorizontal: 5,
  },
});
