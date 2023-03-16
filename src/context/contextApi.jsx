import { useContext, useState, useEffect, createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    fetcSelectedCategory(selectCategories);
  }, [selectCategories]);
  const fetcSelectedCategory = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      console.log(res);
      setSearchResult(res);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {console.log(props.children)}
      {props.children}
    </Context.Provider>
  );
};
