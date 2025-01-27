import { logoImg } from '@/constants/logo';
import { ActiveDataType, ActiveType, SimplifiedData } from '@/types/authType';

const typeMessages: Record<ActiveType, string> = {
  POST_LIKES: '님의 게시물에 좋아요를 눌렀어요.',
  COMMENT_LIKES: '님의 댓글',
  COMMENT: '님의 게시물에 남긴 댓글',
  REPLY: '님의 댓글에 남긴 답글',
  REPLY_LIKES: '님의 답글',
};
export const simplifyTimeLineData = (data: ActiveDataType): SimplifiedData => {
  const { type, createdAt } = data;

  switch (type) {
    case 'COMMENT':
      return {
        type: 'comment',
        id: data.comment!.id,
        postId: data.comment!.postId,
        postUserNickname:
          data.comment!.createdBy.postUserNickname || '탈퇴한 유저',
        postImageUrl: data.comment?.createdBy.postImageUrl || logoImg,
        typeMessage: typeMessages['COMMENT'],
        content: data.comment!.content,
        createdAt,
      };
    case 'REPLY':
      return {
        type: 'reply',
        id: data.reply!.id,
        postId: data.reply!.commentId,
        postUserNickname:
          data.reply!.createdBy.replyUserNickname || '탈퇴한 유저',
        postImageUrl: data.reply?.createdBy.replyImageUrl || logoImg,
        typeMessage: typeMessages['REPLY'],
        content: data.reply!.content,
        createdAt,
      };
    case 'POST_LIKES':
      return {
        type: 'postLike',
        id: data.postLike!.postId,
        postId: data.postLike!.postId,
        postUserNickname:
          data.postLike!.createdBy.postUserNickname || '탈퇴한 유저',
        postImageUrl: data.postLike?.createdBy.postImageUrl || logoImg,
        typeMessage: typeMessages['POST_LIKES'],
        createdAt,
      };

    case 'COMMENT_LIKES':
      return {
        type: 'commentLike',
        id: data.commentLike!.commentId,
        postId: data.commentLike!.postId,
        postUserNickname:
          data.commentLike!.createdBy.commentUserNickname || '탈퇴한 유저',
        postImageUrl:
          data.commentLike?.createdBy.commentUserImageUrl || logoImg,
        typeMessage: typeMessages['COMMENT_LIKES'],
        content: data.commentLike!.commentContent,
        createdAt,
      };

    case 'REPLY_LIKES':
      return {
        type: 'replyLikes',
        id: data.replyLike!.replyId,
        postId: data.replyLike!.replyId,
        postUserNickname:
          data.replyLike!.createdBy.replyUserNickname || '탈퇴한 유저',
        postImageUrl: data.replyLike?.createdBy.replyImageUrl || logoImg,
        typeMessage: typeMessages['REPLY_LIKES'],
        content: data.replyLike!.replyContent,
        createdAt,
      };

    default:
      return {
        type: 'unknown',
        id: 0,
        postId: 0,
        postUserNickname: '',
        postImageUrl: '',
        typeMessage: '',
        content: '',
        createdAt,
      };
  }
};
