import campersData from "../../../../campersData.json";
import DocumentTitle from "../../DocumentTitle";
import Filter from "../../Filters/Filters";
import Location from "../../Location/Location";
import css from "./CatalogPage.module.css";
import CamperCardList from "../../CamperCardList/CamperCardList";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <DocumentTitle>CatalogPage</DocumentTitle>
      <div className={css.LeftSideBox}>
        <Location />
        <Filter />
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
