import DocumentTitle from "../../DocumentTitle";
import { useFavorites } from "../../FavoritesContext/FavoritesContext"; // Імпорт хука для доступу до контексту

export default function FavoritesPage() {
  const { favorites } = useFavorites(); // Отримання улюблених камперів

  return (
    <>
      <DocumentTitle>FavoritesPage</DocumentTitle>
      <h1>FavoritesPage</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((camper) => (
            <li key={camper._id}>
              <h2>{camper.name}</h2>
              <p>Price: €{camper.price}.00</p>
              <p>Location: {camper.location}</p>
              {/* Виведіть іншу інформацію про кампер тут */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </>
  );
}
