import React, {createContext, useState, useEffect, useMemo} from 'react';

const InputContext = createContext();

export default InputContext;

export const InputContextProvider = ({children}) => {
  const [input, setInput] = useState('');

  //   const   = postId => {
  //     if (!Liked.includes(postId)) {
  //       setLiked(prev => [...prev, postId]);
  //     }
  //   };

  const context = useMemo(() => {
    return {
      input,
      setInput,
    };
  }, [input]);

  return (
    <InputContext.Provider value={context}>{children}</InputContext.Provider>
  );
};
