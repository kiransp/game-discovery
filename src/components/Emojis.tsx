import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  if (rating < 3) return;
  const ratingMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "30px", mt: 2 },
    4: { src: thumbsUp, alt: "Excellent", boxSize: "25px", mt: 2 },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "30px", mt: 2 },
  };

  return <Image {...ratingMap[rating]} />;
};

export default Emojis;
