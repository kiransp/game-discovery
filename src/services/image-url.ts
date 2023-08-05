import noImage from "../assets/no-image-placeholder.webp";

const cropImageUrl = (imageUrl: string) => {
  const target = "/media/";
  if (!imageUrl) return noImage;
  const index = imageUrl.indexOf(target) + target.length;
  return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
};

export default cropImageUrl;
