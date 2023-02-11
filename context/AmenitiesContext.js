import { createContext, useEffect, useState } from "react";
const AmenitiesContext = createContext();

export function AmenitiesProvider({ children, data }) {
  const [parentData, setParentData] = useState(null);
  const [childData, setChildData] = useState(null);
  const [page, setPage] = useState(1); //Pagina seleccionada (De la lista de amenidades)
  const [amenityParentId, setAmenityParentId] = useState(1); //Pagina seleccionada (De la lista de amenidades)

  //Fetching el api de amenidades parent a traves de Next Route Api
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/parents`);
      const data = await res.json();
      return setParentData(data);
    }
    fetchData();
  }, []);

  // Fetching el api de amenidades child a traves de Next Route Api
  useEffect(() => {
    async function fetchChildData() {
      fetch(`/api/amenities/${page}/?amenity_parent=${amenityParentId}`)
        .then((res) => res.json())
        .then((data) => {
          // Guarda la informacion child en state
          setChildData(data);
        })
        .catch((err) => console.log(err.message));
    }
    fetchChildData();
  }, [page, amenityParentId]);
  return (
    <AmenitiesContext.Provider
      value={{ parentData, childData, page, setPage, setAmenityParentId }}
    >
      {children}
    </AmenitiesContext.Provider>
  );
}

export default AmenitiesContext;
