import Meta from "../../../components/Meta"
import { server } from "../../../config"
import Link from "next/link"
// import { useRouter } from "next/router"
import { articles } from "../../../data"

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    // <div>article {id}</div>
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}

// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  // )
  // const res = await fetch(`${server}/api/articles/${context.params.id}`)
  // const article = await res.json()

  let article
  const filtered = articles.filter((article) => {
    return article.id.toString() === context.params.id
  })

  if (filtered.length > 0) {
    article = filtered[0]
  }

  return { props: { article } }
}

export async function getStaticPaths() {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  // const res = await fetch(`${server}/api/articles`)
  // const articles = await res.json()
  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default article
