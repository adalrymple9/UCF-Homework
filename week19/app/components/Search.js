var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Search = React.createClass({

  // set the initial state variables
  getInitialState: function() {
    return {
      results: {}
    };
  },

  //function will be passed down into child components 

  setQuery: function(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: { docs: data.docs } });
    }.bind(this));
  },

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    console.log("Render Results", this.state.results);

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Search;
