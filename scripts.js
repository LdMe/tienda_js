// definición de variables

const productos = [
    // Electrónica
    {
        id: 1,
        nombre: "Smartphone X",
        descripcion: "Un potente smartphone con pantalla AMOLED y 128GB de almacenamiento.",
        precio: 599.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OKCxBvyly3SrP9ZZt0ewsAAAAA%26pid%3DApi&f=1&ipt=dc807eb85ffd728aa6639454d3524960120c17c444c7f4e5556009a6929e59a4&ipo=images",
        categoria: "Electrónica"
    },
    {
        id: 2,
        nombre: "Auriculares Inalámbricos",
        descripcion: "Auriculares con cancelación de ruido y batería de 24 horas.",
        precio: 129.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61bvPu32r9L._AC_SS450_.jpg&f=1&nofb=1&ipt=9a1cd56bedf33720073ea86ec59b3e9916952a817dee531ac2b6695c806c5990&ipo=images",
        categoria: "Electrónica"
    },
    {
        id: 3,
        nombre: "Laptop Ultra",
        descripcion: "Laptop ultraligera con procesador de última generación y SSD de 512GB.",
        precio: 999.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs13emagst.akamaized.net%2Fproducts%2F51102%2F51101092%2Fimages%2Fres_3b05e37cad04087652048eecb32132f1.jpg%3Fwidth%3D450%26height%3D450%26hash%3DBB1F9F28B37AC59309DE6B9892AC1863&f=1&nofb=1&ipt=9042f5cee04b6e63ad7f403805b1d260474e9ac977c773595ab8931701d90ac1&ipo=images",
        categoria: "Electrónica"
    },

    // Ropa
    {
        id: 4,
        nombre: "Camiseta Casual",
        descripcion: "Camiseta de algodón 100% con diseño moderno.",
        precio: 19.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Ropa"
    },
    {
        id: 5,
        nombre: "Zapatillas Deportivas",
        descripcion: "Zapatillas con amortiguación avanzada para mayor comodidad.",
        precio: 79.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Ropa"
    },
    {
        id: 6,
        nombre: "Chaqueta Impermeable",
        descripcion: "Chaqueta resistente al agua y al viento, ideal para el invierno.",
        precio: 89.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Ropa"
    },

    // Hogar
    {
        id: 7,
        nombre: "Cafetera Automática",
        descripcion: "Cafetera con molinillo integrado y espumador de leche.",
        precio: 249.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Hogar"
    },
    {
        id: 8,
        nombre: "Robot Aspirador",
        descripcion: "Aspirador inteligente con mapeo láser y control por app.",
        precio: 399.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Hogar"
    },
    {
        id: 9,
        nombre: "Lámpara LED",
        descripcion: "Lámpara con brillo ajustable y conexión USB.",
        precio: 29.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Hogar"
    },

    // Deportes
    {
        id: 10,
        nombre: "Bicicleta de Montaña",
        descripcion: "Bicicleta con suspensión delantera y frenos de disco.",
        precio: 599.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Deportes"
    },
    {
        id: 11,
        nombre: "Mancuernas Ajustables",
        descripcion: "Juego de mancuernas con ajuste de peso hasta 20kg.",
        precio: 149.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Deportes"
    },
    {
        id: 12,
        nombre: "Esterilla de Yoga",
        descripcion: "Esterilla antideslizante para yoga y pilates.",
        precio: 24.99,
        imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20210604%2Fourmid%2Fpngtree-gray-network-placeholder-png-image_3416659.jpg&f=1&nofb=1&ipt=0995bed7fc47afa10940a5d673fc4324c5ef74d5efab1e28977ce8b0450c6f13&ipo=images",
        categoria: "Deportes"
    }
];
const productosAlternativos = [
    // Alimentos
    {
        id: 1,
        nombre: "Miel Orgánica",
        descripcion: "Miel pura de abeja sin aditivos, cosechada de manera sostenible.",
        precio: 12.99,
        imagen: "https://example.com/miel.jpg",
        categoria: "Alimentos"
    },
    {
        id: 2,
        nombre: "Queso Curado Artesanal",
        descripcion: "Queso madurado durante 12 meses con un sabor intenso y textura firme.",
        precio: 24.99,
        imagen: "https://example.com/queso.jpg",
        categoria: "Alimentos"
    },
    {
        id: 3,
        nombre: "Café Molido Premium",
        descripcion: "Café 100% arábica con notas a chocolate y caramelo.",
        precio: 18.99,
        imagen: "https://example.com/cafe.jpg",
        categoria: "Alimentos"
    },

    // Juguetes
    {
        id: 4,
        nombre: "Set de Construcción",
        descripcion: "Más de 500 piezas para construir estructuras y figuras.",
        precio: 39.99,
        imagen: "https://example.com/construccion.jpg",
        categoria: "Juguetes"
    },
    {
        id: 5,
        nombre: "Muñeco de Peluche",
        descripcion: "Suave y abrazable, ideal para niños y coleccionistas.",
        precio: 14.99,
        imagen: "https://example.com/peluche.jpg",
        categoria: "Juguetes"
    },
    {
        id: 6,
        nombre: "Rompecabezas de 1000 Piezas",
        descripcion: "Desafiante puzzle con una hermosa ilustración de un paisaje.",
        precio: 19.99,
        imagen: "https://example.com/rompecabezas.jpg",
        categoria: "Juguetes"
    },

    // Jardinería
    {
        id: 7,
        nombre: "Kit de Huerto Urbano",
        descripcion: "Incluye semillas, sustrato y macetas para iniciar un huerto en casa.",
        precio: 34.99,
        imagen: "https://example.com/huerto.jpg",
        categoria: "Jardinería"
    },
    {
        id: 8,
        nombre: "Regadera Metálica",
        descripcion: "Regadera de acero inoxidable con capacidad de 2L.",
        precio: 22.99,
        imagen: "https://example.com/regadera.jpg",
        categoria: "Jardinería"
    },
    {
        id: 9,
        nombre: "Tierra para Plantas",
        descripcion: "Sustrato enriquecido con nutrientes para un crecimiento saludable.",
        precio: 15.99,
        imagen: "https://example.com/tierra.jpg",
        categoria: "Jardinería"
    },

    // Música
    {
        id: 10,
        nombre: "Guitarra Acústica",
        descripcion: "Guitarra de madera con cuerdas de acero y gran resonancia.",
        precio: 129.99,
        imagen: "https://example.com/guitarra.jpg",
        categoria: "Música"
    },
    {
        id: 11,
        nombre: "Micrófono de Estudio",
        descripcion: "Micrófono cardioide ideal para grabaciones de alta calidad.",
        precio: 89.99,
        imagen: "https://example.com/microfono.jpg",
        categoria: "Música"
    },
    {
        id: 12,
        nombre: "Auriculares de Estudio",
        descripcion: "Auriculares con sonido neutro para producción musical.",
        precio: 74.99,
        imagen: "https://example.com/auriculares.jpg",
        categoria: "Música"
    }
];


// definición de funciones
function crearTarjetaProducto(producto){
    // crear elementos html
    const articulo = document.createElement("article");
    const divTextos = document.createElement("div");
    const imagen = document.createElement("img");
    const titulo = document.createElement("h3");
    const descripcion = document.createElement("p");
    const precio = document.createElement("p");
    const categoria = document.createElement("p");

    // dar valores a los elementos
    articulo.classList.add("product");
    articulo.setAttribute("id","product-"+producto.id);

    divTextos.classList.add("product-info");

    imagen.setAttribute("src",producto.imagen);
    imagen.setAttribute("alt","imagen de producto "+producto.nombre);

    titulo.textContent = producto.nombre;

    descripcion.textContent = producto.descripcion;

    precio.classList.add("product-price");
    precio.textContent = producto.precio + "€";
    if(producto.precio > 200){
        precio.classList.add("expensive");
    }
    
    categoria.classList.add("product-category");
    categoria.textContent = "categoría: "+producto.categoria;


    // relacionar elementos
    divTextos.append(titulo,descripcion,precio,categoria);

    articulo.append(imagen,divTextos);

    const seccion = document.getElementById("product-list");
    seccion.appendChild(articulo);


}

function crearTarjetasProductos(productos){
    for(let i = 0; i < productos.length; i++){
        crearTarjetaProducto(productos[i]);
    }
}
function crearFiltroDeTexto(productos){
    const searchBar = document.getElementById("searchbar");
    
    searchBar.addEventListener("input",(e)=>{
        const searchTerm = e.target.value; // el texto que buscamos
        const productCards = document.getElementsByClassName("product"); // lista de elementos con clase product
        for(let i = 0; i < productCards.length; i++){
            const productCard = productCards[i];
            // opcion 1: sacar la informacion del html (desventaja: puede ser necesario limpiar datos )
            // const nombre = productCard.querySelector("h3").textContent;
            // const descripcion = productCard.querySelector("p").textContent;
    
            // opcion 2: buscar el producto en la lista a partir del id
            const productId = productCard.id.replace("product-","");
            const producto = productos.find(p => p.id == productId);
            const nombre = producto.nombre;
            const descripcion = producto.descripcion;
    
    
            if(nombre.toLowerCase().includes(searchTerm.toLowerCase()) || descripcion.toLowerCase().includes(searchTerm.toLowerCase())){
                productCard.classList.remove("hidden");
            }else{
                productCard.classList.add("hidden");
            }
        }
    })
}
function crearFiltroDePrecio(productos){
    const priceSearch = document.getElementById("price-search");
    priceSearch.addEventListener("input",(e)=>{
        const searchPrice = parseFloat(e.target.value);
        console.log(searchPrice)
        const productCards = document.getElementsByClassName("product"); // lista de elementos con clase product
        for(let i = 0; i < productCards.length; i++){
            const productCard = productCards[i];
            // opcion 1: sacar la informacion del html (desventaja: puede ser necesario limpiar datos )
            // const priceString = productCard.querySelector(".product-price").replace("€","");
            // const productPrice = parseFloat(priceString);

            // opcion 2: buscar el producto en la lista a partir del id
            const productId = productCard.id.replace("product-","");
            const producto = productos.find(p => p.id == productId);
            const productPrice = producto.precio;

            if(productPrice <= searchPrice || isNaN(searchPrice)){
                productCard.classList.remove("hidden");
            }else{
                productCard.classList.add("hidden");
            }
        }
    })   
}
function crearFiltroDeCategorias(productos){
    const categorias = new Set(); // lista de categorías que no se repitan
    for(let i = 0; i < productos.length; i++){
        categorias.add(productos[i].categoria);
    }
    const categoriasArray = Array.from(categorias);

    // buscamos el selector
    const selector = document.getElementById("category-select");
    for(let i = 0; i < categoriasArray.length; i++){
        const opcion = document.createElement("option"); // creamos un elemento de tipo 'option'
        opcion.value =categoriasArray[i]; // le damos un valor
        opcion.textContent= categoriasArray[i]; // le damos un texto visible
        selector.appendChild(opcion);// lo añadimos al selector
    }

}
// ejecución de funciones
crearTarjetasProductos(productos)

crearFiltroDeTexto(productos);
crearFiltroDePrecio(productos);
crearFiltroDeCategorias(productos);

