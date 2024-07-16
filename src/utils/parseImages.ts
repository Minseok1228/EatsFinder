const parseImages = (
  thumbnailUrl: string,
  imageUrl: string | null,
  name: string,
) => {
  const images = [thumbnailUrl];

  if (imageUrl !== null) {
    images.concat(imageUrl.split(','));
  }
  return images.map((image, idx) => {
    return { src: image, alt: `${name}${idx}` };
  });
};

export default parseImages;
