import React, { createContext, useState } from "react";
import axios from "axios";

export let dataContext = createContext({});

export default function DataProvider({ children }) {
  let [departments, setDepartments] = useState();
  let [generalCategories, setGeneralCategories] = useState();
  let [subCategories, setSubCategories] = useState();
  let [itemCategories, setItemCategories] = useState();
  let [products, setProducts] = useState();
  let [popularItems, setPopularItems] = useState();
  let [cartItems, setCartItems] = useState([]);

  let fetchDepartments = async () => {
    try {
      await axios
        .get("http://192.168.43.198:1337/api/departments")
        .then((response) => {
          setDepartments(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  let fetchGeneralCategories = async (department) => {
    try {
      await axios
        .get(
          "http://192.168.43.198:1337/api/general-categories?filters[department][name][$eq]=" +
            department +
            "&&sort[0]=id"
        )
        .then((response) => {
          setGeneralCategories(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  let fetchSubCategories = async (department) => {
    try {
      await axios
        .get(
          "http://192.168.43.198:1337/api/sub-categories?filters[general_category][department][name][$eq]=" +
            department +
            "&&populate=*&&sort[0]=id"
        )
        .then((response) => {
          setSubCategories(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  let fetchItemCategories = async (subCategory) => {
    try {
      await axios
        .get(
          "http://192.168.43.198:1337/api/item-categories?filters[sub_category][name][$eq]=" +
            subCategory +
            "&&populate=*&&sort[0]=id"
        )
        .then((response) => {
          setItemCategories(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  let fetchProducts = async (itemCategory) => {
    try {
      await axios
        .get(
          "http://192.168.43.198:1337/api/products?filters[item_category][name][$eq]=" +
            itemCategory +
            "&&populate=*&&sort[0]=id"
        )
        .then((response) => {
          setProducts(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  let fetchPopularItems = async () => {
    try {
      await axios
        .get("http://192.168.43.198:1337/api/popular-items?populate=*")
        .then((response) => {
          setPopularItems(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  let setCart = async (item) => {
    try {
      await axios.post("http://192.168.43.198:1337/api/cart-items");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dataContext.Provider
      value={{
        departments,
        fetchDepartments,
        subCategories,
        setSubCategories,
        fetchSubCategories,
        generalCategories,
        fetchGeneralCategories,
        itemCategories,
        setItemCategories,
        fetchItemCategories,
        products,
        setProducts,
        fetchProducts,
        popularItems,
        fetchPopularItems,
        cartItems,
        setCartItems,
        setCart,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}
