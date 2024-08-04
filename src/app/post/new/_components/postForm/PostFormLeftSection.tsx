'use client';
import { ReactNode, useState, useEffect } from 'react';
import usePostFormContext from '../../_hooks/usePostFormContext';
import { Rating } from '@/components/molecules';
import { PostFormLabel } from './PostFormLabel';
import { PostPlaceField } from './postFormElement';
import { getMenus } from '@/api/post';
import { CloseSVG } from '@/components/svg/CloseSVG';

const Tag = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <span
      className='inline-flex h-[45px] cursor-pointer items-center justify-center gap-1 rounded-3xl bg-gray-50 px-5 text-gray-800 body-16 hover:bg-gray-75 [&>svg]:h-4 [&>svg]:w-4'
      onClick={onClick}
    >
      <span>{children}</span>
      <CloseSVG />
    </span>
  );
};

export const PostFormLeftSection = () => {
  const {
    register,
    placeId,
    menus,
    starRating,
    handleStarRatingChange,
    handleMenuAdd,
    handleMenuRemove,
  } = usePostFormContext();
  const [menu, setMenu] = useState('');
  const [recommendedMenus, setRecommendedMenus] = useState<
    { id: number; menu: string }[]
  >([]);

  useEffect(() => {
    const updateRecommendedMenus = async () => {
      const data = await getMenus(placeId);

      if (data) {
        setRecommendedMenus(data);
      }
    };

    if (placeId) {
      updateRecommendedMenus();
    }
  }, [placeId]);

  return (
    <div className='flex flex-col gap-12'>
      <PostPlaceField />
      <div>
        <PostFormLabel>사용자 별점</PostFormLabel>
        <Rating
          number={5}
          rating={starRating}
          onStarRatingChange={handleStarRatingChange}
        />
      </div>
      <div className='flex flex-col'>
        <PostFormLabel>나의 후기</PostFormLabel>
        <textarea
          {...register('content')}
          className='h-[250px] resize-none rounded border border-gray-100 p-3 outline-none placeholder:text-gray-200'
          placeholder='내가 먹은 메뉴나 가게 분위기 등을 자유롭게 써주세요'
        ></textarea>
      </div>
      <div>
        <PostFormLabel>추천 메뉴 등록 (최대 5개)</PostFormLabel>
        <div className='relative flex min-h-[50px] flex-wrap gap-3 rounded border border-gray-100 p-3 body-16'>
          {menus &&
            menus.map((menu, idx) => {
              return (
                <Tag key={idx} onClick={() => handleMenuRemove(idx)}>
                  {menu}
                </Tag>
              );
            })}
          {menus && menus.length < 5 && (
            <input
              className='outline-none placeholder:text-gray-200'
              type='text'
              placeholder='메뉴를 등록해보세요'
              value={menu}
              onKeyDown={(e) => {
                if (e.nativeEvent.isComposing) {
                  return;
                }
                if (e.key === 'Enter') {
                  e.preventDefault();
                  const newMenu = menu.trim();
                  if (!newMenu) return;
                  handleMenuAdd(newMenu);
                  setMenu('');
                }
              }}
              onChange={(e) => setMenu(e.target.value)}
            />
          )}
          <div className='absolute left-0 top-full z-50 mt-3 max-h-[25rem] w-full rounded-3xl bg-white px-5 py-6 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <p className='text-gray-800 body-18'>이런 메뉴는 어떠세요?</p>
            <div className='flex flex-wrap'>
              {recommendedMenus.map((menu) => (
                <Tag key={menu.id} onClick={() => handleMenuAdd(menu.menu)}>
                  {menu.menu}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
