const superagent = require("superagent");

export default function handler(req, res) {
  const number = Number(req.query.id);
  const amenityNumber = Number(req.query.amenity_parent);

  if (isNaN(number) || typeof number !== "number") {
    res.status(400).send("Invalid request!!");
  }
  superagent
    .get(
      `http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${number}&amenity_parent_id=${amenityNumber}`
    )
    .then((response) => {
      res.status(200).json(JSON.parse(response.text));
    });
}

// http://54.177.198.128:8001/api/cat-amenities-childs/?format=json&page=${page}&amenity_parent_id=${amenityParentId}
