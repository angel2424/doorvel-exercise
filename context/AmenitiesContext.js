import { createContext, useEffect, useState } from "react";
const AmenitiesContext = createContext();

export function AmenitiesProvider({ children }) {
  const [parentData, setParentData] = useState(null);
  const [childData, setChildData] = useState(null);
  const [page, setPage] = useState(1); //Pagina seleccionada (De la lista de amenidades)
  const [amenityParentId, setAmenityParentId] = useState(1); //Pagina seleccionada (De la lista de amenidades)

  //Fetching el api de amenidades parent
  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://localhost:3000/?url=http://54.177.198.128:8001/api/cat-amenities-parents/?format=json`
      )
        .then((res) => res.json())
        .then((data) => setParentData(data))
        .catch((err) => console.log(err.message));
    }
    fetchData();
  }, []);

  // Fetching el api de amenidades child
  useEffect(() => {
    async function fetchChildData() {
      fetch(
        `http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${page}&amenity_parent_id=${amenityParentId}`
      )
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
