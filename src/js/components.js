import '../css/components.css';
import '../css/styles.css';
// import logo from '../images/webpack-logo.png';


export const saludar = ( nombre ) => {
	console.log('Creando etiqueta h1');
	const h1 = document.createElement('h1');
	h1.innerText = `Hola ${nombre}!!!`;

	document.body.append( h1 );

	// console.log('Cargando imagen ' + logo);
	// const img = document.createElement('img');
	// img.src = logo;
	// document.body.append( img );
}