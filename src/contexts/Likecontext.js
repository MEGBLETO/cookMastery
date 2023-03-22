import React, {createContext, useState, useEffect, useMemo} from 'react';

const LikedContext = createContext();

export default LikedContext;

export const LikedContextProvider = ({children}) => {
  const [Liked, setLiked] = useState([]);

  const likePost = postId => {
    if (!Liked.includes(postId)) {
      setLiked(prev => [...prev, postId]);
    }
  };

  const context = useMemo(() => {
    return {
      Liked,
      setLiked,
      likePost,
    };
  }, [Liked]);

  return (
    <LikedContext.Provider value={context}>{children}</LikedContext.Provider>
  );
};
