import { articles } from "../../../data"

export default function handler(req, res) {
  const filtered = articles.filter((article) => {
    return article.id.toString() === req.query.id
  })
  if (filtered.length > 0) res.status(200).json(filtered[0])
  else
    res
      .status(404)
      .json({ message: `Error 404: Post ${req.query.id} Not Found` })
}
