import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import querystring from 'querystring';
import Results from './components/Results'

// Constants and Variables
const configLogin = {
	headers: {
	  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
}

const bodyLogin = {
	username: 'vincent_chuardi',
	password: '13517103vc'
}

const dataHeader = {
	name: 'Nama',
	nim_tpb: 'NIM TPB',
	nim_jur: 'NIM Jurusan',
	prodi: 'Prodi'
}

const baseURL = 'https://api.stya.net/nim'
const loginURL = '/login'
const byName = '/byname'
const byNIM = '/byid'

var configSearchByName = {
	headers: {
		'Auth-Token': ''
	},
	params: {
		'name': ''
	}
}

var configSearchByNIM = {
	headers: {
		'Auth-Token': ''
	},
	params: {
		'query': ''
	}
}

class App extends Component {
	// Containing temporary data
	state = {
		token: '',
		data: [
			{
				name: 'Nama',
				nim_tpb: 'NIM TPB',
				nim_jur: 'NIM Jurusan',
				prodi: 'Prodi'
			}
		]
	}

	// Token Getter
	getToken = () => {
		return this.state.token
	}

	// Data Size
	getDataSize = () => {
		return this.state.data.length
	}

	// Reset Data
	resetData = () => {
		this.setState({ data: [dataHeader] })
	}

	// Set ConfigParamName
	setConfigSearchByNameParamsName = (name) => {
		configSearchByName.params.name = name;
	}

	// Set ConfigParamNIM
	setConfigSearchByNameParamsNIM = (nim) => {
		configSearchByNIM.params.query = nim;
	}

	// Stringify
	stringify = (body) => {
		return querystring.stringify(body);
	}

	// Login API to Get Token
	login = () => {
		axios.post(baseURL+loginURL,this.stringify(bodyLogin),configLogin)
		  .then(res => this.setState({
			token: res.data.token
		  }));
	}

	// Search Using Name and NIM
	searchByName = (userInput) => {
		this.setConfigSearchByNameParamsName(userInput)

		axios.get(baseURL+byName,configSearchByName)
		  .then(res => res.data.payload.forEach(mahasiswa => {
			  this.setState({data: [...this.state.data, mahasiswa]})
		  }))
	}

	searchByNIM = (userInput) => {
		this.setConfigSearchByNameParamsNIM(userInput)

		axios.get(baseURL+byNIM,configSearchByNIM)
		  .then(res => res.data.payload.forEach(mahasiswa => {
			this.setState({data: [...this.state.data, mahasiswa]})
		  }))
	}

	// Validating User Search Method, by Name or by NIM
	userInput = (userInput) => {
		this.resetData();
		if (isNaN(userInput)) { // byName
			configSearchByName.headers["Auth-Token"] = this.getToken()
			this.searchByName(userInput);
		}
		else {	// byNIM
			configSearchByNIM.headers["Auth-Token"] = this.getToken()
			this.searchByNIM(userInput);
		}
	}

	componentWillMount() {
		this.login();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<br />
					<span>
						Enter Name/NIM Below:
					</span>
					<SearchBar userInput={this.userInput} />
					<p className="Additional-Information">
						(Example: "Jonathan", "Kevin A", "13517000")
					</p>
					<Results results={this.state.data} size={this.getDataSize()} />
				</header>
			</div>
		);
	}
}

export default App;
