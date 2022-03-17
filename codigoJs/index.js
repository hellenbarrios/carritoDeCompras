const producto = document.querySelector('.producto');
const imgDef = document.querySelector('.imgDef');
const titulo = document.querySelector('.titulo');
const precio = document.querySelector('.precio');
const contgrid = document.querySelector('.contgrid');
const tablaCarr = document.querySelector('.tablaCarr');

try{
	fetch('productos/elementos.json')
	.then(respuesta => {
		return respuesta.json();
	})
	.then(datos => {
		let contador = 0;
		while(datos.length > contador){
			let producto = document.createElement('div'); 
			let imgCont = document.createElement('div');
			let img = document.createElement('img');
			let contenido = document.createElement('div');
			let titulo = document.createElement('h2');
			let contenido2 = document.createElement('div');
			let precio = document.createElement('p');
			let AddCarr = document.createElement('button');

			producto.setAttribute('class', 'producto');
			imgCont.setAttribute('class', 'imgCont');
			img.setAttribute('src', datos[contador].img);
			img.setAttribute('alt', 'Imagen');
			contenido.setAttribute('class', 'contenido');
			titulo.setAttribute('class', 'titulo');
			contenido2.setAttribute('class', 'contenido2');
			precio.setAttribute('class', 'precio');

			titulo.innerHTML = datos[contador].nombre;
			precio.innerHTML = "$" + datos[contador].precio;

			AddCarr.setAttribute('class', 'btnAddCarr');
			AddCarr.setAttribute('value', contador);
			AddCarr.innerHTML = "COMPRAR";
			producto.appendChild(imgCont);
			imgCont.appendChild(img);
			producto.appendChild(contenido);
			contenido.appendChild(titulo);
			producto.appendChild(contenido2);
			contenido2.appendChild(precio);
			contenido2.appendChild(AddCarr);
			
			contgrid.appendChild(producto);

			AddCarr.addEventListener('click', (e) => {
				const tr = document.createElement('tr');
				const td = document.createElement('td');
				td.innerHTML = datos[AddCarr.value].nombre
				tr.appendChild(td);
				tablaCarr.appendChild(tr);
			});
			contador++;
		}
		
	})
}catch(e){
	console.log();
}

