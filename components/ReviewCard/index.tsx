import Image from "next/image";
import StarRating from "@/components/StarRating";


interface Props {
  img: string;
  company: string;
  author: string;
  quote: string;
  rating: number;
}

const ReviewCard = ({ img, author, company, quote, rating }: Props) => (
  <div>
    <div className="overflow-hidden rounded-3xl mb-5">
      <Image src={img} width="250" height="150" className="w-full h-auto" alt="" />
    </div>
    <p className="md:text-xl text-center">&ldquo;{quote}&rdquo;</p>
    <hr className="my-2" />
    <div className="flex flex-col md:flex-row justify-between">
      <StarRating rating={rating} />
      <div>
        <p>{author}</p>
        <p>{company}</p>
      </div>
    </div>
  </div>
);

export default ReviewCard;
