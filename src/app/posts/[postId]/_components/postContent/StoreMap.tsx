'use client';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const StoreMap = () => {
  return (
    <div className='py-[10px]'>
      <div className='mb-2 flex justify-between body-16'>
        <span className='text-gray-600'>부산 동구 중앙대로 225</span>
        <span
          className='cursor-pointer text-gray-300'
          onClick={() => {
            navigator.clipboard.writeText('부산 동구 중앙대로 225');
            alert('복사되었습니다.');
          }}
        >
          주소복사
        </span>
      </div>
      <Map
        className='h-[150px] w-full rounded-3xl'
        center={{ lat: 33.5563, lng: 126.79581 }}
      >
        <MapMarker
          position={{ lat: 33.55635, lng: 126.795841 }}
          image={{ src: '/marker.png', size: { width: 48, height: 48 } }}
        />
      </Map>
    </div>
  );
};

export default StoreMap;
