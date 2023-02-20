import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { query } = useParams();
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    try {
      console.log("update");
      props.setProgress(10);
      setLoading(true);
      const res = await axios.get(
        props.search
          ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
          : `https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      );
      props.setProgress(50);
      setArticles(res.data.articles);
      setTotalResults(res.data.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateNews();
    document.title = `NewsBrew | ${capitalizeFirstLetter(props.category)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${
          props.country
        }&sortBy=popularity&category=${props.category}&apiKey=${
          props.apiKey
        }&page=${page + 1}&pageSize=${props.pageSize}`
      );
      setPage(page + 1);
      setTotalResults(res.data.totalResults);
      setArticles(articles.concat(res.data.articles));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ minHeight: "500px" }}>
      <h1 className="text-center mb-3" style={{ marginTop: "85px" }}>
        {props.category === "general"
          ? "NewsBrew | Top Headlines"
          : `Top Headlines |  ${capitalizeFirstLetter(props.category)}`}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              let {
                source,
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              } = element;
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={
                      title
                        ? title.length > 55
                          ? title.slice(0, 55) + "..."
                          : title
                        : "..."
                    }
                    description={
                      description
                        ? description.length > 105
                          ? description.slice(0, 105) + "..."
                          : description
                        : "..."
                    }
                    imageUrl={
                      urlToImage === null || urlToImage === ""
                        ? "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
                        : urlToImage
                    }
                    newsUrl={url}
                    author={author}
                    date={publishedAt}
                    source={source}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

export default News;
