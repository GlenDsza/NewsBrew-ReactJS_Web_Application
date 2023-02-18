import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title =
      "NewsBrew | " +
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1);
  }

  async updateNews() {
    try {
      this.props.setProgress(10);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      );
      this.props.setProgress(50);
      this.setState({
        totalResults: res.data.totalResults,
        articles: res.data.articles,
        loading: false,
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      );
      this.setState({
        totalResults: res.data.totalResults,
        articles: this.state.articles.concat(res.data.articles),
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center my-2 ">
          {this.props.category === "general"
            ? "NewsBrew | Top Headlines"
            : "Top Headlines | " +
              this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
                          ? title.length > 62
                            ? title.slice(0, 62) + "..."
                            : title
                          : "..."
                      }
                      description={
                        description
                          ? description.length > 120
                            ? description.slice(0, 120) + "..."
                            : description
                          : "..."
                      }
                      imageUrl={
                        urlToImage
                          ? urlToImage
                          : "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
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
      </>
    );
  }
}

export default News;
