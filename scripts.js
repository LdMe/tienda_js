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

for(let i = 0; i < productos.length; i++){
    crearTarjetaProducto(productos[i]);
}