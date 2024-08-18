import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/Modal/modalSlice";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperCardList.module.css";

const CamperCardList = ({ campers }) => {
  const dispatch = useDispatch();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCampers, setVisibleCampers] = useState(
    campers.slice(0, itemsPerPage)
  );

  const handleShowMore = (camper) => {
    dispatch(openModal(camper));
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setVisibleCampers(campers.slice(0, nextPage * itemsPerPage));
  };

  return (
    <div>
      <div className={css.camperCardList}>
        {visibleCampers.map((camper) => (
          <CamperCard
            key={camper.id}
            camper={camper}
            onShowMore={() => handleShowMore(camper)}
          />
        ))}
      </div>
      {visibleCampers.length < campers.length && (
        <button onClick={handleLoadMore} className={css.btnLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperCardList;

//============== 4 elements instead previos ====================================
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { openModal } from "../../redux/Modal/modalSlice";
// import CamperCard from "../CamperCard/CamperCard";
// import css from "./CamperCardList.module.css";

// const CamperCardList = ({ campers }) => {
//   const dispatch = useDispatch();
//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastCamper = currentPage * itemsPerPage;
//   const indexOfFirstCamper = indexOfLastCamper - itemsPerPage;
//   const currentCampers = campers.slice(indexOfFirstCamper, indexOfLastCamper);

//   const handleShowMore = (camper) => {
//     dispatch(openModal(camper));
//   };

//   const handleLoadMore = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div>
//       <div className={css.camperCardList}>
//         {currentCampers.map((camper) => (
//           <CamperCard
//             key={camper.id}
//             camper={camper}
//             onShowMore={() => handleShowMore(camper)}
//           />
//         ))}
//       </div>
//       {indexOfLastCamper < campers.length && (
//         <button onClick={handleLoadMore} className={css.btnLoadMore}>
//           Load more
//         </button>
//       )}
//     </div>
//   );
// };

// export default CamperCardList;
//========== with pages`s number =======================
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { openModal } from "../../redux/Modal/modalSlice";
// import CamperCard from "../CamperCard/CamperCard";
// import Pagination from "../Pagination/Pagination"; // Імпорт компонента пагінації
// import css from "./CamperCardList.module.css";

// const CamperCardList = ({ campers }) => {
//   const dispatch = useDispatch();
//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastCamper = currentPage * itemsPerPage;
//   const indexOfFirstCamper = indexOfLastCamper - itemsPerPage;
//   const currentCampers = campers.slice(indexOfFirstCamper, indexOfLastCamper);

//   const handleShowMore = (camper) => {
//     dispatch(openModal(camper));
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <div className={css.camperCardList}>
//         {currentCampers.map((camper) => (
//           <CamperCard
//             key={camper.id}
//             camper={camper}
//             onShowMore={() => handleShowMore(camper)}
//           />
//         ))}
//       </div>
//       <Pagination
//         totalItems={campers.length}
//         itemsPerPage={itemsPerPage}
//         onPageChange={handlePageChange}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// export default CamperCardList;

// //=================================================================================
// // import { useDispatch } from "react-redux";
// // import { openModal } from "../../redux/Modal/modalSlice";
// // import CamperCard from "../CamperCard/CamperCard";

// // import css from "./CamperCardList.module.css";

// // const CamperCardList = ({ campers }) => {
// //   const dispatch = useDispatch();

// //   const handleShowMore = (camper) => {
// //     dispatch(openModal(camper));
// //   };

// //   return (
// //     <div>
// //       <div className={css.camperCardList}>
// //         {campers.map((camper) => (
// //           <CamperCard
// //             key={camper.id}
// //             camper={camper}
// //             onShowMore={() => handleShowMore(camper)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CamperCardList;
