import { ProfileImage } from '@/components/atoms';
import { Comment, Search } from '@/components/molecules';

const example = new Array(4).fill(0);

const PostComments = () => {
  return (
    <section className='flex flex-col gap-6'>
      <div>
        <h2 className='text-gray-700 subTitle-28'>댓글(4개)</h2>
      </div>
      <div className='flex gap-6'>
        <ProfileImage size={60} />
        <Search className='w-full' />
      </div>
      <div>
        {example.map((_, idx) => (
          <Comment key={idx} />
        ))}
      </div>
    </section>
  );
};

export default PostComments;
