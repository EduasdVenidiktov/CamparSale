import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage";
import FavoritesPage from "./components/pages/FavoritesPage/FavoritesPage";
import CatalogPage from "./components/pages/CatalogPage/CatalogPage";
import Navigation from "./components/Navigation/Navigation";
// import Modal from "./components/Modal/Booking/Modal"; // Предполагая, что Modal находится в этой папке

export default function App() {
  const [camperData, setCamperData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Пример загрузки данных из JSON файла
    fetch("/path/to/camperData.json")
      .then((response) => response.json())
      .then((data) => setCamperData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleBook = (formData) => {
    console.log("Booking data:", formData);
    setModalOpen(false);
  };

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

      {/* Добавлен модальный компонент */}
      <button onClick={() => setModalOpen(true)}>Show Camper Info</button>
      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        camper={camperData}
        onBook={handleBook}
      /> */}
    </>
  );
}

// import { Route, Routes } from "react-router-dom";

// import HomePage from "./components/pages/HomePage/HomePage";
// import FavoritesPage from "./components/pages/FavoritesPage/FavoritesPage";
// import CatalogPage from "./components/pages/CatalogPage/CatalogPage";
// import Navigation from "./components/Navigation/Navigation";

// export default function App() {
//   return (
//     <>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/catalog" element={<CatalogPage />} />
//         <Route path="/favorites" element={<FavoritesPage />} />
//         <Route path="*" element={<HomePage />} />{" "}
//         {/* Перенаправлення на Home для невідомих маршрутів */}
//       </Routes>
//     </>
//   );
// }
