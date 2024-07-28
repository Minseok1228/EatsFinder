import { PostFormLabel } from './PostFormLabel';
import { PostKeywordField } from './PostKeywordField';

export const PostFormRightSection = () => {
  return (
    <div>
      <PostFormLabel>이 맛집을 표현하는 키워드</PostFormLabel>
      <div className='mt-6 flex gap-3'>
        <div className='flex flex-col gap-6'>
          <PostKeywordField category='음식/가격' />
          <PostKeywordField category='음료/디저트' />
        </div>
        <PostKeywordField category='분위기/공간' />
        <PostKeywordField category='서비스/기타' />
      </div>
    </div>
  );
};
