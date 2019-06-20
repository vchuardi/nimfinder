import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
	state = {
		userInput: ''
	}

    onChange = (e) => this.setState({
		userInput: e.target.value
    })

    onSubmit = (e) => {
		e.preventDefault();
		this.props.userInput(this.state.userInput);
    }

	render() {
		return (
			<div>
				<header>
					<form onSubmit={this.onSubmit}>
                        <input type="text" value={this.state.userInput} className="textbox" onChange={this.onChange} />
                        <input type="submit" value="Submit" />
                    </form>
				</header>
			</div>
		);
	}
}

export default SearchBar;
