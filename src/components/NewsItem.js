import React from 'react'

const NewsItem = (props) => {
    let {title, description, imgUrl, newsUrl, author, date, source} = props; // DATA destructuring in JS. pulling out title & Desc from json data
    return (
      <div>
        <div className="my-3">
            <div className="card">
            <img src={!imgUrl?"https://img.freepik.com/free-vector/realistic-news-studio-background_23-2150026877.jpg?size=626&ext=jpg&ga=GA1.2.2038541506.1689263091&semt=sph":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}
              <span className="sr-only btn btn-light">{source}</span>
              </h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">Last updated by {!author?"unknown":author} on {new Date (date).toUTCString()}</small></p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
            </div>
            </div>
        </div>
    </div>
    )
}

export default NewsItem
