import React from "react";
import Search from './../components/Search'
import Title from './../components/Title'
class Welcome extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Search />
        </header>
      </div>
    );
  }
}

export default Welcome;
