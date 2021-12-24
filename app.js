const request = require('request');

const url = `https://jsonplaceholder.typicode.com/users`;

request({url:url, json : true},(error,response)=>{
	if(error){
		console.log(error);
	}else{
		console.log(response.body);
	}
} )