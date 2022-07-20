import React from "react";

import ItemDetailCard from "../components/ItemDetailCard";

export default function ItemDetailScreen({ route }) {
  let item = route.params;
  return <ItemDetailCard item={item} />;
}