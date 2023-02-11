export default async function handler(req, res) {
  const resData = await fetch(
    "http://54.177.198.128:8001/api/cat-amenities-parents/?format=json"
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));

  res.status(200).json(resData);
}
