import React from 'react';

import Page from './page'
class Pages extends React.Component {
  constructor(){
    super();
    this.state = {
      pages: []
    };
    setTimeout(()=>{
      const pages = this.props.pages;
      console.log(pages);
      this.setState({pages: pages});
    },100)
  }

  render() {
    const pages = this.state.pages;
    console.log(pages);
    const map = pages.map((object,i) => <Page key={i} obj={object} />);
    return(
      <div>
      <h1> Blogs: </h1>
      <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody> 
      {map}  
      </tbody>
      </table>
      <a href="/pages/new"> Create new </a>
      </div>
    );
  }
}

export default Pages;


