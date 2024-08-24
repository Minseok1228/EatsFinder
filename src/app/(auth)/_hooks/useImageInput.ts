import { MutableRefObject, useState } from 'react';

export const useImageInput = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const handleImageInput = (
    inputRef: MutableRefObject<HTMLInputElement | null>,
  ) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };
  return { previewImage, handleImageInput, handleFileChange };
};
