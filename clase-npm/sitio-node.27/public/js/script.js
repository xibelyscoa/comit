window.onload=function() {
  const url = 'http://localhost:3000/api/products'
  const xmlhttp = new XMLHttpRequest();
  
  const ocultarLoader = () => {
    const loading = document.querySelector('#productos img')
    loading.style.display = 'none'
  }
 
  const crearListaDeProductos = (productos) => {
    const lista = document.createElement('ol')
    const contenedor = document.querySelector('#productos')
    
    productos.forEach((producto) => {
      const elemento = document.createElement('li')
      elemento.textContent = producto
      lista.appendChild(elemento)
    })
 
    contenedor.appendChild(lista)
  }
 
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        const respuesta = JSON.parse(xmlhttp.responseText);
        ocultarLoader()
        crearListaDeProductos(respuesta.products)
      }
  };
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
 }