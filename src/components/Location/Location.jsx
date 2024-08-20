import { useState } from "react";
import css from "./Location.module.css";
import { GrLocation } from "react-icons/gr";
import data from "../../../campersData.json";

function Location() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchTerm(userInput);

    // Отримуємо список збігів
    const filteredLocations = data
      .map((item) => item.location)
      .filter((location) =>
        location.toLowerCase().includes(userInput.toLowerCase())
      );

    // Встановлюємо збіги у стан
    setSuggestions(userInput ? filteredLocations : []);
  };

  const handleSuggestionClick = (suggestion) => {
    // При кліку на пропозицію встановлюємо її як значення поля
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Location</p>
      <div className={css.inputWrapper}>
        <GrLocation className={css.iconStyle} />
        <input
          className={css.inputField}
          type="text"
          placeholder="City"
          value={searchTerm}
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
          <ul className={css.suggestionsList}>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className={css.suggestionItem}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Location;
