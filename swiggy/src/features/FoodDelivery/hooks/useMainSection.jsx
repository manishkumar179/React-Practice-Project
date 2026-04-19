import { useState } from "react";
import { useParams } from "react-router";

export const useMain = () => {

  let { name } = useParams();

  

  return {
    name,
    
  };
};