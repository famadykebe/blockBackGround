var appDemarage = function(){

var nb_blocks =  document.getElementById("nb_blocks")
var  color_blocks = document.getElementById('color_blocks')
var  create_blocks = document.getElementById('create_blocks')


var create_bloker = function(){
	var blocks = document.getElementById('blocks') 
	var nb_blocksValue = nb_blocks.value

	

	for(var i=0; i < nb_blocksValue;i++){

		var element = document.createElement('div')
		element.classList.add('mesdiv')
		blocks.appendChild(element)

		element.style.backgroundColor=color_blocks.value
		element.style.borderStyle="dashed"
		element.style.borderWidth = "4px";

		element.addEventListener('click', function(){
			this.classList.toggle('contoure')
		})
		
	}

	
	create_blocks.addEventListener('click',function(){

		var newdiv = document.querySelectorAll('.contoure')
		

		for(var i = 0; i < newdiv.length; i++)
		{

			newdiv[i].style.backgroundColor=color_blocks.value

			console.log(nb_blocks)

			console.log(newdiv[i])

		}



	})

	remove.addEventListener('click',function(){


		var newdiv = document.querySelectorAll('.mesdiv.contoure')

		for(var i = 0; i < newdiv.length; i++)
		{

			newdiv[i].remove()

			// console.log(nb_blocks)

			// console.log(newdiv[i])

		}





	})

}



create_blocks.addEventListener('click',create_bloker)

// create_blocks.addEventListener('click',changeColor)

}


window.addEventListener('DOMContentLoaded',appDemarage)


