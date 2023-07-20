export const products = [
    {
        id: 1,
        title: 'MATE IMPERIAL PREMIUM',
        price: 19000, 
        category: 'mate',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392614/ImperialLiso_kq7ofu.jpg',
    },
    {
        id: 2,
        title: 'MOCHILA MATEANDO', 
        price: 13000, 
        category: 'accesorios',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392612/mochila_a2ulya.jpg',
    },
    {
        id: 3,
        title: 'Bombilla Pico de Loro',
        price: 9000, 
        category: 'bombilla',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/picoloro1_nbmbef.jpg',
    },
    {
        id: 4,
        title: 'Termo Media Manija',
        price: 12000, 
        category: 'accesorios',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392612/termo_am5lmw.jpg',
    },
    {
        id: 5,
        title: 'Termo Personalizado',
        price: 14000, 
        category: 'accesorios',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392612/termopersonalizado_l4ykmw.jpg',
    },
    {
        id: 6,
        title: 'BOMBILLON de Alpaca',
        price: 9000, 
        category:'bombilla',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/bombillon_nv4cbm.jpg',
    },
    {
        id: 7,
        title: 'MATE ACERO TÉRMICO',
        price: 13500, 
        category: 'mate',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392614/mateacero_qmrz8u.jpg',
    },
    {
        id: 8,
        title: 'TORPEDO CINCELADO',
        price: 16000, 
        category: 'mate',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392614/torpedo_feucaf.jpg',
    },
    {
        id: 9,
        title: 'MATE CAMIONERO PREMIUM',
        price: 20000, 
        category: 'mate',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/camionero_a0zjeg.jpg',
    },
    {
        id: 10,
        title: 'YERBERA DE CUERO',
        price: 6000, 
        category: 'accesorios',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392612/yerbero_nnwkfk.jpg',
    },
    {
        id: 11,
        title: 'MATERA DE CUERO GRUESO',
        price: 6500, 
        category: 'accesorios',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/matera_plnybz.jpg',
    },
    {
        id: 12,
        title: 'YERBERA TAMBO',
        price: 6500, 
        category: 'accesorios',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392612/yerbero1_lr50hg.jpg',
    },
    {
        id: 13,
        title: 'MATE IMPERIAL ALGARROBO',
        price: 14500, 
        category: 'mate',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392614/matealgarrobo_ncgdio.png',
    },
    {
        id: 14,
        title: 'Bombilla Alpaca Cincelada',
        price: 9000, 
        category: 'bombilla',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/cincelada_ds9ykp.jpg',
    },
    {
        id: 15,
        title: "BOMBILLÓN Pico de Rey",
        price: 9000, 
        category: "bombilla",
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/picorey_kfpt0k.jpg',
    },
    {
        id: 16,
        title: 'MATE DE CERÁMICA',
        price: 13000, 
        category: 'mate',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/ceramica_wqz6ww.jpg',
    },
    {
        id: 17,
        title: 'IMPERIAL DELUXE BLANCO',
        price: 19000, 
        category: 'mate',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392613/blanco_qika24.jpg',
    },
    {
        id: 18,
        title: 'Yerba Despalada Matesur',
        price: 2000, 
        category: 'yerba',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392614/yerba1_qapzcy.webp',
    },
    {
        id: 19,
        title: 'Yerba CANARIAS Uruguaya',
        price: 2200, 
        category: 'yerba',
        img: 'https://res.cloudinary.com/duslo5lw8/image/upload/v1688392614/canarias_sljn4o.jpg',
    },
]

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
