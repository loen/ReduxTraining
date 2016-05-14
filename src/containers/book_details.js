import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component {

  render() {
    if(!this.props.book){
      return <div>Please select a book</div>
    }
    return(
      <div>
         <h3>Books details for: </h3>
         <div>Title: {this.props.book.title}</div>
         <div>pages: {this.props.book.pages}</div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect (mapStateToProps)(BookDetails);
