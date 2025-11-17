import React from "react";

const ContextProvider = ({ children }) => {
  const authInfo = {
    
  };
  return <AuthCOntext value={authInfo}>{children}</AuthCOntext>;
};

export default ContextProvider;
