import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        //<h3>{article.title}</h3> 
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
