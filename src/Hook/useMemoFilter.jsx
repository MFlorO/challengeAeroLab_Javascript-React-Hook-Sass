
import React, {useState, useMemo} from 'react'
import { useProduct } from './useHookProduct';

export const useMemoFilter = () =>{

  const productAll = useProduct(); //Me traigo del Hook los datos

  const [filters, setFilters] = useState("Most Recent" || "Lowest Price" || "Highest Price")

  const filterProducts = useMemo(() => { //SOLO se va a ejecutar cuando las dependencias cambien
   
    if(filters === "Highest Price"  ) {
      return [...productAll].sort((a,b) => b.cost - a.cost );
    }
    
    if(filters === "Lowest Price") {
      return [...productAll].sort((a,b) => a.cost + b.cost );
    }
    
    if(filters === "Most Recent") return productAll

    return productAll;
    
}, [filters, productAll])

  return (
    [filters, setFilters, filterProducts]
  )
}

