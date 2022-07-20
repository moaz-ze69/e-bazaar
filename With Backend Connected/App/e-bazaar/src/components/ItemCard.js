import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";

import colors from "../config/colors";
import PriceTag from "./PriceTag";
import QuantityButton from "./QuantityButton";
import CartButton from "./CartButton";
import ListItemSeperator from "../components/ListItemSeparator";
import ItemSelection from "../components/ItemSelection";

export default function ItemCard({
  color,
  onPress,
  item,
  bottomData = [],
  style,
}) {
  let refRBSheet = useRef();
  let [isItemAvailable, setIsItemAvailable] = useState(
    item.attributes.stock > 0 ? true : false
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.covercontainer}>
          <Image
            source={{ uri: item.attributes.image }}
            style={styles.coverImage}
          />
        </View>
        <PriceTag
          backgroundColor={colors.clay}
          borderColor={colors.camel}
          price={item.attributes.price}
          customStyle={styles.priceTag}
        />
        <Card.Content>
          <Title style={styles.title}>Rs {item.attributes.price}</Title>
        </Card.Content>
        <Card.Content>
          <Paragraph style={styles.paragraph} numberOfLines={2}>
            {item.attributes.title}
          </Paragraph>
        </Card.Content>
        <View style={styles.buttonContainer}>
          <QuantityButton
            color={color}
            icon={bottomData.length > 1 ? "chevron-down" : null}
            size={item.attributes.size}
            onPress={() => {
              bottomData.length > 1 ? refRBSheet.current.open() : null;
            }}
          />
          <CartButton isItemAvailable={isItemAvailable} item={item} />
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={500}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <View style={{ padding: 20, paddingTop: 0 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Select Size</Text>
          {bottomData.length != 0 && (
            <Text style={{ fontSize: 17, marginTop: 15 }}>
              {bottomData[0].title}
            </Text>
          )}
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            data={bottomData}
            ItemSeparatorComponent={ListItemSeperator}
            keyExtractor={(item) => item.id.toString()}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <ItemSelection
                item={item}
                onPress={() => {
                  refRBSheet.current.close();
                  setIsItemAvailable(item.attributes.stock > 0 ? true : false);
                }}
              />
            )}
          />
        </View>
      </RBSheet>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2 - 40,
    height: 340,
    backgroundColor: colors.white,
    borderRadius: 5,
    margin: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: colors.light,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 15,
    paddingTop: 15,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  covercontainer: {
    height: 140,
    margin: 10,
  },
  coverImage: {
    flex: 1,
    width: null,
    resizeMode: "contain",
  },
  priceTag: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
