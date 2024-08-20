import campersData from "../../../../campersData.json";
import DocumentTitle from "../../DocumentTitle";
import Location from "../../Location/Location";
import css from "./CatalogPage.module.css";
import CamperCardList from "../../CamperCardList/CamperCardList";
import Filters from "../../Filters/Filters";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <DocumentTitle>CatalogPage</DocumentTitle>
      <div className={css.LeftSideBox}>
        <Location />
        <Filters />
        <button type="submit" className={css.btnShowSearch}>
          Search
        </button>
      </div>
      <div className={css.rightSideBox}>
        <CamperCardList campers={campersData} />
      </div>
    </div>
  );
}
