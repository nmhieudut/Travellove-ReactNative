import * as ActionTypes from './types';

export const likeAction = (id, isLiked) => ({
  type: ActionTypes.LIKE,
  isLiked,
});

export const dislikeAction = (id) => ({
  type: ActionTypes.DISLIKE,
  id,
});
