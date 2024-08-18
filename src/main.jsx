import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import { FavoritesProvider } from "./components/FavoritesContext/FavoritesContext.jsx"; // Імпорт провайдера

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
