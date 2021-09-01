import React, { useState, useEffect, Fragment } from "react";
import NewItem from "../NewsItem/NewItem";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, pageSize }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, settotalResult] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=abaa6107267d44c1bb3130af863788d7&page=${page}&pageSize=${pageSize}`;
    {
      setLoading(true);
    }
    let data = await fetch(url);
    let parsedData = await data.json();
    // const setArticles = parsedData.articles;
    // console.log(setArticles);

    setArticles(parsedData.articles);
    settotalResult(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    update();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=abaa6107267d44c1bb3130af863788d7&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // const setArticles = parsedData.articles;
    // console.log(setArticles);

    setArticles(articles.concat(parsedData.articles));
    settotalResult(parsedData.totalResults);
  };
  //Nxt button
  // nxtChangeHandler = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.update();
  // };

  // prevChangeHandler = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.update();
  // };

  return (
    <Fragment>
      <h2
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Today's {capitalizeFirstLetter(category)} Headlines
      </h2>
      {/* checking loading dataa is true or not */}
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* If loading is false then show the articles vice versa */}

            {articles.map((el) => {
              return (
                <div className="col-md-4 " key={el.url}>
                  <NewItem
                    title={el.title}
                    desc={el.description ? el.description : ""}
                    imgUrl={el.urlToImage}
                    url={el.url}
                    date={el.publishedAt}
                    author={el.author}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.prevChangeHandler}
          >
            &#8592; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nxtChangeHandler}
          >
            Next &#8594;
          </button>
        </div> */}
    </Fragment>
  );
};

// News.defaultProps = {
//   country: "in",
//   pageSize: 5,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
export default News;
