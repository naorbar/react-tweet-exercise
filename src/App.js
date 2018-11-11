import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

/* This is how to add fontawesome icons: */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faAngry, faGem, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faAngry, faGem, faCheckCircle)


class Tweet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nnn: 'hello',
			disabled: true,
			text_disabled: false,
			chars_left: 10,
			chars_overflow: '',
			addphototext: 'Add Photo',
			addphotogif: 'gem'
		};
	}
		
	handleTextChange(e) {
		console.log('change ' + e.target.value);
		
		this.setState ({ nnn: e.target.value });
		if (e.target.value.length === 0) {
			this.setState ({ disabled: true, chars_left: 10 });
		} else if (e.target.value.length > 0 && e.target.value.length <= 10) {
			this.setState ({ disabled: false, chars_left: 10-e.target.value.length });
		} else {
			alert("chars_overflow: " + e.target.value.substring(10));
			this.setState ({ disabled: true, chars_left: 'too long', chars_overflow: e.target.value.substring(10) });
		}
	}
		
	handleAddPhotoClick(e) {
		if (this.state.addphototext === 'Photo Added') {
			this.setState ({ addphototext: 'Add Photo', addphotogif: 'gem'});
		} else {
			this.setState ({ addphototext: 'Photo Added', addphotogif: 'check-circle'});
		}
	}
	
	  render() {
		return (
		  <div className="well clearfix">
		  <textarea className="form-control" onChange={e => this.handleTextChange(e)} disabled={this.state.text_disabled}></textarea>
			<span>{this.state.chars_left}</span><br/>
			<button className="btn btn-primary pull-right" disabled={this.state.disabled}>Tweet</button>
			<button className="btn btn-primary pull-right" onClick={e => this.handleAddPhotoClick(e)}><FontAwesomeIcon icon={this.state.addphotogif}/>{this.state.addphototext}</button>
		  </div>
		);
	  }
}


class App extends Component {
	
	  render() {
		return (
		  <div>
			<Tweet/>
		  </div>
		);
	  }
}

export default App;
