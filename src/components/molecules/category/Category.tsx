import { CategoryImage } from '@/components/atoms';
import { CATEGORY_IMAGES } from '@/constants/categoryImages';

export const Category = () => {
  return (
    <div className='flex justify-between'>
      {CATEGORY_IMAGES.map((it) => {
        return (
          <CategoryImage
            src={it.src}
            alt={it.alt}
            label={it.label}
            key={it.alt}
          />
        );
      })}
    </div>
  );
};
