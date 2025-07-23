import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import News from "./components/news";

export default class App extends Component {
  apikey="4b67732e0fbd9d9b218f8119b8643653";
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="general"
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="sports"
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="science"
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="health"
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="business"
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="technology"
                country="us"
                category="technology"
              />
            }
          />
          <Route
            path="/nation"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey} 
                key="nation"
                country="us"
                category="nation"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="us"
                category="entertainment"
              />
            }
            
          />
          
         
            <Route
            path="/au"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="au"
                category="general"
              />
            }
            
          />
           <Route
            path="/br"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="br"
                category="general"
              />
            }
            
          />
           <Route
            path="/ca"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="ca"
                category="general"
              />
            }
            
          />
           <Route
            path="/cn"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="cn"
                category="general"
              />
            }
            
          />
           <Route
            path="/eg"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="eg"
                category="general"
              />
            }
            
          />
           <Route
            path="/fr"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="fr"
                category="general"
              />
            }
            
          />
           <Route
            path="/de"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="de"
                category="general"
              />
            }
            
          />
           <Route
            path="/hk"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="hk"
                category="general"
              />
            }
            
          />
           <Route
            path="/it"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="it"
                category="general"
              />
            }
            
          />
           <Route
            path="/jp"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="jp"
                category="general"
              />
            }
            
          />
          <Route
            path="/in"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="in"
                category="general"
              />
            }
            
          />
           <Route
            path="/pk"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="pk"
                category="general"
              />
            }
            
          />
           <Route
            path="/ph"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="ph"
                category="general"
              />
            }
            
          />
           <Route
            path="/ru"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="ru"
                category="general"
              />
            }
            
          />
           <Route
            path="/sg"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="sg"
                category="general"
              />
            }
            
          />
           <Route
            path="/se"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="se"
                category="general"
              />
            }
            
          />
           <Route
            path="/ch"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="ch"
                category="general"
              />
            }
            
          />
           <Route
            path="/tw"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="tw"
                category="general"
              />
            }
            
          />
           <Route
            path="/ua"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="ua"
                category="general"
              />
            }
            
          />
           <Route
            path="/gb"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="entertainment"
                country="gb"
                category="general"
              />
            }
            
          />
          
          <Route
            path="/world"
            element={
              <News
                setprog={this.setProgress} apikey={this.apikey}
                key="world"
                country="us"
                category="world"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
