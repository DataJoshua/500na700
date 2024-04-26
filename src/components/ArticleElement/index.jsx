import "./ArticleElement.scss";

function ArticleElement({ article }) {
  const imgStyles = {
    background: `url(${article.img})`, 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover"
  }

  return(
    <>
      <article className="article-wrapper">
        <div className="article__img" style={imgStyles}></div>
        <main className="article__body">
          <h1 className="article__title">{article.title.toUpperCase()}</h1>
          <span className="article__date">{article.date}</span>
          <p className="article__subtitle">{article.subtitle.toUpperCase()}</p>
          <p className="article__description">{article.description}</p>
        </main>
      </article>
    </> 
  )
}

export default ArticleElement;
