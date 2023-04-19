import Stars from "./Stars";

interface RatingProps {
  rating: number;
  reviews:number;
}

function Rating({ rating,reviews }: RatingProps): JSX.Element {
  return (
    <div className="flex items-center flex-row">
      <p className="text-[#F9993A] text-lg mr-1 font-bold	">{rating}</p>
      <Stars stars={rating} />
      <p className="text-[#808080] text-sm ml-1.5	">({reviews})</p>
    </div>
  );
}

export default Rating;
