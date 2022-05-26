

fetch('https://rickandmortyapi.com/api/character',{
	method: 'GET'
})
.then(response => response.json())
.then(function(json){

	var container = document.querySelector('.container');

	json.results.map(function(results){
		console.log(json)
		container.innerHTML+=`
		 <div> <img src=` + results.image + `></div><br>
		 <strong>` + results.name + `</strong><br>
		 <span>` + results.species + `</span><br>
		 <i>` + results.status + `</i><br>
		 <hr>
		`;
	})
	
});

