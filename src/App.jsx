// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage";
import FavoritesPage from "./components/pages/FavoritesPage/FavoritesPage";
import CatalogPage from "./components/pages/CatalogPage/CatalogPage";
import Navigation from "./components/Navigation/Navigation";

// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";

// import useContact from "../useContact.json";
// import css from "./App.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectNameFilter } from "./redux/filtersSlice";
// import { selectContacts } from "./redux/contactsSlice";

export default function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filteredContacts = useSelector(selectNameFilter);

  // Ефект для збереження стану в локальне сховище
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />{" "}
        {/* Перенаправлення на Home для невідомих маршрутів */}
      </Routes>
    </>

    // <div className={css.container}>
    //   <h1 className={css.title}>CampcarSale</h1>
    //   <ContactForm />
    //   <SearchBox value={searchTerm} onChange={setSearchTerm} />
    //   <ContactList contacts={filteredContacts} />
    // </div>
  );
}
