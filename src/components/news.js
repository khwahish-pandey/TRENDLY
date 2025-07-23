import React, { Component } from "react";
import Newsline from "./newsline";
import Rotator from "./rotator";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [], 
      loading: false,
      currentPage: 1,
      articlesPerPage: 5, 
    };
  }

  async componentDidMount() {
    this.setState({ loading: true }); 
    try {
      this.props.setprog(30);
      document.title = `Trendly - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
      const api =
        `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=10&apikey=${this.props.apikey}`;

      let response = await fetch(api);
      this.props.setprog(70);
      let data = await response.json();
      console.log("API Response:", data);
      this.props.setprog(100);

      this.setState({
        article: data.articles || [],
        loading: false, 
      });
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      this.setState({ article: [], loading: false });
    }
  }

  handleNext = () => {
    const totalPages = Math.ceil(this.state.article.length / this.state.articlesPerPage);
    if (this.state.currentPage < totalPages) {
      this.setState({ currentPage: this.state.currentPage + 1, loading: true }, () => {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 500); 
      });
    }
  };

  handlePrevious = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1, loading: true }, () => {
        setTimeout(() => {
          this.setState({ loading: false }); 
        }, 500); 
      });
    }
  };

  render() {
    const { article, currentPage, articlesPerPage, loading } = this.state;

  
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = article.slice(indexOfFirstArticle, indexOfLastArticle);

    const totalPages = Math.ceil(article.length / articlesPerPage);

    return (
      <div className="container my-4">
        <h1 className="mb-5 d-flex justify-content-center " style={{marginTop:'90px'}}><u>Trendly {`-top ${this.props.category}`} headlines</u></h1>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <Rotator />
          </div>
        ) : (
          <>
            <div className="row">
              {currentArticles.length > 0 ? (
                currentArticles.map((element, index) => (
                  <div className="col-md-4" key={index}>
                    <Newsline
                      title={`${element.title?.slice(0, 55)}....`}
                      description={`${element.description?.slice(0, 88)}.....`}
                      imageUrl={element.image}
                      url={element.url}
                      publishedAt={element.publishedAt}
                      source={element.source}
                    />
                  </div>
                ))
              ) : (
                <p>No articles found or failed to load.</p>
              )}
            </div>

            <div className="d-flex justify-content-between my-3">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.handlePrevious}
                disabled={currentPage === 1}
              >
                &#8592; Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.handleNext}
                disabled={currentPage === totalPages}
              >
                Next &#8594;
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default News;
