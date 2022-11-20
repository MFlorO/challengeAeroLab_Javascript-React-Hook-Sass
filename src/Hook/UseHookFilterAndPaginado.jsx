import { useState } from "react";
import { useProduct } from "~/Hook";




export const UseHookFilterAndPaginado = () => {

	const productAll = useProduct(); //Me traigo del Hook los datos

	const [productCopia, setProductCopia] = useState(productAll) //Creo una copia de la "data"
  
	const [filters, setFilters] = useState("") //Estado para setear cuando clickeo los botones filter
  
	const [currentPage, setCurrentPage] = useState(0) //Estado para manejar la pagina

	
	const itemsPerPage = 12
	

	let filterProducts = () => { 
   
		if(filters === "Highest Price"  ) return [...productCopia].slice(currentPage, currentPage + itemsPerPage).sort((a,b) => b.cost - a.cost );
			
		if(filters === "Lowest Price") return [...productCopia].slice(currentPage, currentPage + itemsPerPage).sort((a,b) => a.cost - b.cost )
			
		if(filters === "All Element") return [...productCopia].slice(currentPage, currentPage + itemsPerPage)
	
		return [...productCopia].slice(currentPage, currentPage + itemsPerPage);
	  }
	
	  let cantidad = filterProducts().length > 0 ? filterProducts().length + currentPage : currentPage
	
	 


		return [filterProducts, productCopia, setProductCopia, filters, setFilters, currentPage, setCurrentPage, cantidad, itemsPerPage ]
};


