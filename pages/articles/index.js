export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: { articles: data },
  }
}

const Articles = ({ articles }) => {
  console.log(Articles)
  return (
    <div>
      <h1>All Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <a>
            <h3>{article.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Articles
