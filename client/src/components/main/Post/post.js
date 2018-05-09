import React, { Component } from 'react';
import autoBind from 'react-autobind';
import "./post.css";
import "react-toggle/style.css" // for ES6 modules
import {Container, Row, Col} from 'react-grid-system';


class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      placeholder: props.placeholder,
      isAnonymous: false,
      isEnabled: (props.isEnabled || false)
    }
    autoBind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleUnknownChange(event){
    this.setState({isAnonymous: event.target.checked});
  }

  render() {
    let { isEnabled } = this.state;
    let { submitText } = this.props;
    console.log("Post: ", this.props);
    return (
      <form onSubmit={this.handleSubmit}>

        {
          isEnabled && (
            <Container>
              <Row>
                <Col>
                  <textarea id="postID" value={this.state.value} onChange={this.handleChange} placeholder={this.state.placeholder}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input id='submitButton' type="submit" value={submitText}/>
                </Col>
              </Row>
            </Container>
          )
        }


      </form>
    );
  }
}

export default Post;
