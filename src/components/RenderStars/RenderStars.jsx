import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import css from "./RenderStars.module.css"; // Убедитесь, что этот путь правильный
const RenderStars = ({ rating }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <AiFillStar key={`filled-${index}`} className={css.iconStyle} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <AiOutlineStar key={`empty-${index}`} className={css.iconStyle} />
      ))}
    </>
  );
};

export default RenderStars;
