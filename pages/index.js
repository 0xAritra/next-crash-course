import { server } from "../config"
import ArticleList from "../components/ArticleList"
import { articles } from "../data"

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export async function getStaticProps() {
  // const res = await fetch(`${server}/api/articles`)
  // const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}
