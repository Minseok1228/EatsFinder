import PostContent from './postContent';
import PostComment from './postComments';
import { PostContentType } from '@/types/postType';

interface PostPageProps {
  postContent: PostContentType;
}

const PostPage = ({ postContent }: PostPageProps) => {
  return (
    <>
      <PostContent postContent={postContent} />
      <PostComment />
    </>
  );
};

export default PostPage;
