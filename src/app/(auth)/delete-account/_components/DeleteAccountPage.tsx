import { Checkbox } from '@/components/atoms';
import { AddSVG } from '@/components/svg/AddSVG';
import { AlarmBellSVG } from '@/components/svg/AlarmBellSVG';
import { AlarmlightSVG } from '@/components/svg/AlarmlightSVG';
import { ArrowSVG } from '@/components/svg/ArrowSVG';
import { BookmarkSVG } from '@/components/svg/BookmarkSVG';
import { CheckBoxSVG } from '@/components/svg/CheckBoxSVG';
import { CheckSVG } from '@/components/svg/CheckSVG';
import { CloseSVG } from '@/components/svg/CloseSVG';
import { Close_loginSVG } from '@/components/svg/Close_loginSVG';
import { DeleteSVG } from '@/components/svg/DeleteSVG';
import { DropSVG } from '@/components/svg/DropSVG';
import { EditSVG } from '@/components/svg/EditSVG';
import { ErrorSVG } from '@/components/svg/ErrorSVG';
import { FavSVG } from '@/components/svg/FavSVG';
import { HashtagSVG } from '@/components/svg/HashtagSVG';
import { LocationSVG } from '@/components/svg/LocationSVG';
import { LockSVG } from '@/components/svg/LockSVG';
import {
  MarklocationMyListSVG,
  MarklocationNomalSVG,
} from '@/components/svg/MarklocationSVG';
import { MeatballSVG } from '@/components/svg/MeatballSVG';
import { MenuSVG } from '@/components/svg/MenuSVG';
import { MoreSVG } from '@/components/svg/MoreSVG';
import { MyLocationSVG } from '@/components/svg/MyLocationSVG';
import { NotiSVG } from '@/components/svg/NotiSVG';
import { RatingStarSVG } from '@/components/svg/RatingstarSVG';
import { ThumbsSVG } from '@/components/svg/ThumbsSVG';
import { VisibilitySVG } from '@/components/svg/VisibilitySVG';
import React from 'react';

export const DeleteAccountPage = () => {
  return (
    <div className='flex flex-col items-center gap-[60px]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-gray-700 title-34'>탈퇴 안내</h2>
        <p className='text-gray-300'>
          탈퇴 신청 전에 안내사항을 꼭 확인해주세요
        </p>
      </div>
      <CheckSVG />
      <CheckSVG size='regular' color='default' />
      <CheckSVG size='regular' color='green' />
      <CheckSVG size='regular' color='orange' />
      <CheckSVG size='large' color='green' />
      <CheckSVG size='large' color='orange' />
      <CheckSVG size='large' color='default' />
      <CheckSVG />
      <FavSVG />
      <FavSVG isFill={false} />
      <ArrowSVG direction='down' />
      <ArrowSVG direction='left' />
      <ArrowSVG direction='right' />
      <CheckBoxSVG isChecked='blank' />
      <CheckBoxSVG isChecked='check' />
      <CheckBoxSVG isChecked='default' />
      <BookmarkSVG />
      <BookmarkSVG isFill={false} />
      <AddSVG />
      <AddSVG isUsable={false} />
      <AlarmlightSVG />
      <AlarmlightSVG isFill={false} />
      <CloseSVG />
      <Close_loginSVG />
      <DeleteSVG />
      <DropSVG isUp={false} />
      <DropSVG />
      <EditSVG />
      <ErrorSVG />
      <HashtagSVG />
      <LocationSVG />
      <MyLocationSVG />
      <LockSVG />
      <MarklocationMyListSVG />
      <MarklocationNomalSVG />
      <MeatballSVG />
      <MenuSVG />
      <MoreSVG />
      <NotiSVG />
      <AlarmBellSVG />
      <RatingStarSVG />
      <VisibilitySVG />
      <VisibilitySVG isVisible={false} />
      <RatingStarSVG isFill='empty' />
      <RatingStarSVG isFill='half' />
      <ThumbsSVG />
      <ThumbsSVG isUp={false} />
    </div>
  );
};
