export default async function handler(req, res) {
  const number = Number(req.query.id);
  const amenityNumber = Number(req.query.amenity_parent);
  const resData = await fetch(
    `http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${number}&amenity_parent_id=${amenityNumber}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));

  res.json(resData);
}

// http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${page}&amenity_parent_id=${amenityParentId}
