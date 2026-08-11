import { BRANDS } from './brands';
import { importProductImages, FALLBACK_IMAGE } from './catalogGenerator';

/**
 * Catálogo Oficial de Produtos Bagless
 * 40 Marcas x 15 Produtos = 600 Produtos no Total
 * Cobertura de 3 Tiers (Económico, Médio, Luxo) em todas as categorias.
 * Imagens 100% validadas via HTTP Status 200 OK.
 * Ordenado por CATEGORIA e PREÇO.
 */

const RAW_PRODUCTS = [
  {
    "id": "prod-primark-wallet-13",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Carteira Leather Cardholder Primark",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 26,
    "fullPurchasePrice": 26,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-wallet-13",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Carteira Leather Cardholder H&M",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 29,
    "fullPurchasePrice": 29,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-wallet-13",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Carteira Leather Cardholder Bershka",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 29,
    "fullPurchasePrice": 29,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-wallet-13",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Carteira Leather Cardholder Pull & Bear",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 30,
    "fullPurchasePrice": 30,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-wallet-13",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Carteira Leather Cardholder Uniqlo",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-wallet-13",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Carteira Leather Cardholder Gap",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-wallet-13",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Carteira Leather Cardholder Vans",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-wallet-13",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Carteira Leather Cardholder Converse",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-wallet-13",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Carteira Leather Cardholder Zara",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-wallet-13",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Carteira Leather Cardholder Puma",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-sunglasses-15",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Óculos de Sol Acetato Premium Primark",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 36,
    "fullPurchasePrice": 36,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-wallet-13",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Carteira Leather Cardholder Mango",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 37,
    "fullPurchasePrice": 37,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-wallet-13",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Carteira Leather Cardholder Levi's",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 38,
    "fullPurchasePrice": 38,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-wallet-13",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Carteira Leather Cardholder Adidas",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 38,
    "fullPurchasePrice": 38,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-wallet-13",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Carteira Leather Cardholder Nike",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 40,
    "fullPurchasePrice": 40,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-sunglasses-15",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Óculos de Sol Acetato Premium Bershka",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 41,
    "fullPurchasePrice": 41,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-sunglasses-15",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Óculos de Sol Acetato Premium Pull & Bear",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 43,
    "fullPurchasePrice": 43,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-sunglasses-15",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Óculos de Sol Acetato Premium Uniqlo",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-sunglasses-15",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Óculos de Sol Acetato Premium Gap",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-sunglasses-15",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Óculos de Sol Acetato Premium Vans",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-sunglasses-15",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Óculos de Sol Acetato Premium Converse",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-sunglasses-15",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Óculos de Sol Acetato Premium Puma",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-sunglasses-15",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Óculos de Sol Acetato Premium Levi's",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 54,
    "fullPurchasePrice": 54,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-sunglasses-15",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Óculos de Sol Acetato Premium Adidas",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 54,
    "fullPurchasePrice": 54,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-sunglasses-15",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Óculos de Sol Acetato Premium Nike",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 56,
    "fullPurchasePrice": 56,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-bag-14",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Mala Travel Leather Tote Primark",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 68,
    "fullPurchasePrice": 68,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-bag-14",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Mala Travel Leather Tote Bershka",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 77,
    "fullPurchasePrice": 77,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-wallet-13",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Carteira Leather Cardholder Superdry",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 77,
    "fullPurchasePrice": 77,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-bag-14",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Mala Travel Leather Tote Pull & Bear",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 81,
    "fullPurchasePrice": 81,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-wallet-13",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Carteira Leather Cardholder Calvin Klein",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 82,
    "fullPurchasePrice": 82,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-wallet-13",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Carteira Leather Cardholder Guess",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 82,
    "fullPurchasePrice": 82,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-bag-14",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Mala Travel Leather Tote Uniqlo",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 85,
    "fullPurchasePrice": 85,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-bag-14",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Mala Travel Leather Tote Gap",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 85,
    "fullPurchasePrice": 85,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-bag-14",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Mala Travel Leather Tote Vans",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 85,
    "fullPurchasePrice": 85,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-bag-14",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Mala Travel Leather Tote Converse",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 85,
    "fullPurchasePrice": 85,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-wallet-13",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Carteira Leather Cardholder Tommy Hilfiger",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 86,
    "fullPurchasePrice": 86,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-wallet-13",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Carteira Leather Cardholder The North Face",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 86,
    "fullPurchasePrice": 86,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-wallet-13",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Carteira Leather Cardholder Diesel",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 91,
    "fullPurchasePrice": 91,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-wallet-13",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Carteira Leather Cardholder Lacoste",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 91,
    "fullPurchasePrice": 91,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-wallet-13",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Carteira Leather Cardholder Armani Exchange",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 91,
    "fullPurchasePrice": 91,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-bag-14",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Mala Travel Leather Tote Puma",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 94,
    "fullPurchasePrice": 94,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-wallet-13",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Carteira Leather Cardholder Michael Kors",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 96,
    "fullPurchasePrice": 96,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-bag-14",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Mala Travel Leather Tote Mango",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 98,
    "fullPurchasePrice": 98,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-wallet-13",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Carteira Leather Cardholder Ralph Lauren",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 101,
    "fullPurchasePrice": 101,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-bag-14",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Mala Travel Leather Tote Levi's",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 102,
    "fullPurchasePrice": 102,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-bag-14",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Mala Travel Leather Tote Adidas",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 102,
    "fullPurchasePrice": 102,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-bag-14",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Mala Travel Leather Tote Nike",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 106,
    "fullPurchasePrice": 106,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-wallet-13",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Carteira Leather Cardholder Hugo Boss",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 106,
    "fullPurchasePrice": 106,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-sunglasses-15",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Óculos de Sol Acetato Premium Superdry",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 108,
    "fullPurchasePrice": 108,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-sunglasses-15",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Óculos de Sol Acetato Premium Guess",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 115,
    "fullPurchasePrice": 115,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-sunglasses-15",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Óculos de Sol Acetato Premium Tommy Hilfiger",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 122,
    "fullPurchasePrice": 122,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-sunglasses-15",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Óculos de Sol Acetato Premium The North Face",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 122,
    "fullPurchasePrice": 122,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-sunglasses-15",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Óculos de Sol Acetato Premium Diesel",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 128,
    "fullPurchasePrice": 128,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-sunglasses-15",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Óculos de Sol Acetato Premium Armani Exchange",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 128,
    "fullPurchasePrice": 128,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-sunglasses-15",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Óculos de Sol Acetato Premium Michael Kors",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 135,
    "fullPurchasePrice": 135,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-sunglasses-15",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Óculos de Sol Acetato Premium Ralph Lauren",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 142,
    "fullPurchasePrice": 142,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-bag-14",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Mala Travel Leather Tote Superdry",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 204,
    "fullPurchasePrice": 204,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-bag-14",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Mala Travel Leather Tote Calvin Klein",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 217,
    "fullPurchasePrice": 217,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-bag-14",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Mala Travel Leather Tote Guess",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 217,
    "fullPurchasePrice": 217,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-bag-14",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Mala Travel Leather Tote The North Face",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 230,
    "fullPurchasePrice": 230,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-bag-14",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Mala Travel Leather Tote Diesel",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 242,
    "fullPurchasePrice": 242,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-bag-14",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Mala Travel Leather Tote Lacoste",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 242,
    "fullPurchasePrice": 242,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-bag-14",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Mala Travel Leather Tote Ralph Lauren",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 268,
    "fullPurchasePrice": 268,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-wallet-13",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Carteira Leather Cardholder Acne Studios",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 287,
    "fullPurchasePrice": 287,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-wallet-13",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Carteira Leather Cardholder Common Projects",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 287,
    "fullPurchasePrice": 287,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-wallet-13",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Carteira Leather Cardholder Jacquemus",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 314,
    "fullPurchasePrice": 314,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-wallet-13",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Carteira Leather Cardholder Zimmermann",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 340,
    "fullPurchasePrice": 340,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-wallet-13",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Carteira Leather Cardholder Burberry",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 376,
    "fullPurchasePrice": 376,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-wallet-13",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Carteira Leather Cardholder LOEWE",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 376,
    "fullPurchasePrice": 376,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-wallet-13",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Carteira Leather Cardholder Balenciaga",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 394,
    "fullPurchasePrice": 394,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-sunglasses-15",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Óculos de Sol Acetato Premium Acne Studios",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 403,
    "fullPurchasePrice": 403,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-sunglasses-15",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Óculos de Sol Acetato Premium Common Projects",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 403,
    "fullPurchasePrice": 403,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-wallet-13",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Carteira Leather Cardholder Versace",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 403,
    "fullPurchasePrice": 403,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-wallet-13",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Carteira Leather Cardholder Gucci",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 403,
    "fullPurchasePrice": 403,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-wallet-13",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Carteira Leather Cardholder Prada",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 412,
    "fullPurchasePrice": 412,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-wallet-13",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Carteira Leather Cardholder Saint Laurent",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 430,
    "fullPurchasePrice": 430,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-sunglasses-15",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Óculos de Sol Acetato Premium Jacquemus",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 441,
    "fullPurchasePrice": 441,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-wallet-13",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Carteira Leather Cardholder Chanel",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 448,
    "fullPurchasePrice": 448,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-bag-12",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Bolsa de Viagem em Pele para Relógio Rolex",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "price": 450,
    "fullPurchasePrice": 450,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-louis-vuitton-wallet-13",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Carteira Leather Cardholder Louis Vuitton",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 466,
    "fullPurchasePrice": 466,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-sunglasses-15",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Óculos de Sol Acetato Premium Zimmermann",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 479,
    "fullPurchasePrice": 479,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-wallet-13",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Carteira Leather Cardholder Hermès",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 493,
    "fullPurchasePrice": 493,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-sunglasses-15",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Óculos de Sol Acetato Premium Burberry",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 529,
    "fullPurchasePrice": 529,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-sunglasses-15",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Óculos de Sol Acetato Premium LOEWE",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 529,
    "fullPurchasePrice": 529,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-sunglasses-15",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Óculos de Sol Acetato Premium Balenciaga",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 554,
    "fullPurchasePrice": 554,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-sunglasses-15",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Óculos de Sol Acetato Premium Versace",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 567,
    "fullPurchasePrice": 567,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-sunglasses-15",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Óculos de Sol Acetato Premium Gucci",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 567,
    "fullPurchasePrice": 567,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-sunglasses-15",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Óculos de Sol Acetato Premium Prada",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 580,
    "fullPurchasePrice": 580,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-sunglasses-15",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Óculos de Sol Acetato Premium Saint Laurent",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 605,
    "fullPurchasePrice": 605,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-bag-14",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Estojo Duplo de Viagem para Relógios Rolex",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 650,
    "fullPurchasePrice": 650,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-acne-studios-bag-14",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Mala Travel Leather Tote Acne Studios",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 762,
    "fullPurchasePrice": 762,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-bag-14",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Mala Travel Leather Tote Common Projects",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 762,
    "fullPurchasePrice": 762,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-bag-14",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Mala Travel Leather Tote Jacquemus",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 833,
    "fullPurchasePrice": 833,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-bag-14",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Mala Travel Leather Tote Zimmermann",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 904,
    "fullPurchasePrice": 904,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-bag-14",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Mala Travel Leather Tote Burberry",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1000,
    "fullPurchasePrice": 1000,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-bag-14",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Mala Travel Leather Tote LOEWE",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1000,
    "fullPurchasePrice": 1000,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-bag-14",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Mala Travel Leather Tote Balenciaga",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1047,
    "fullPurchasePrice": 1047,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-bag-14",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Mala Travel Leather Tote Versace",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1071,
    "fullPurchasePrice": 1071,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-bag-14",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Mala Travel Leather Tote Gucci",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1071,
    "fullPurchasePrice": 1071,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-bag-14",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Mala Travel Leather Tote Prada",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1095,
    "fullPurchasePrice": 1095,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-bag-14",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Mala Travel Leather Tote Saint Laurent",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1142,
    "fullPurchasePrice": 1142,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-bag-14",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Mala Travel Leather Tote Chanel",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1190,
    "fullPurchasePrice": 1190,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-bag-15",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Caixa Watch Winder Oficial Rolex",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "price": 1200,
    "fullPurchasePrice": 1200,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-louis-vuitton-bag-14",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Mala Travel Leather Tote Louis Vuitton",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1238,
    "fullPurchasePrice": 1238,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-bag-14",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Mala Travel Leather Tote Hermès",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 1309,
    "fullPurchasePrice": 1309,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-wallet-13",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Botões de Punho Ouro 18k Crown Rolex",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 1800,
    "fullPurchasePrice": 1800,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-primark-sneakers-11",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Sapatilhas Leather Clean Low Primark",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 44,
    "fullPurchasePrice": 44,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-sneakers-11",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Sapatilhas Leather Clean Low H&M",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-sneakers-11",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Sapatilhas Leather Clean Low Bershka",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-sneakers-11",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Sapatilhas Leather Clean Low Pull & Bear",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 52,
    "fullPurchasePrice": 52,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-sneakers-11",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Sapatilhas Leather Clean Low Uniqlo",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 55,
    "fullPurchasePrice": 55,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-sneakers-11",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Sapatilhas Leather Clean Low Gap",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 55,
    "fullPurchasePrice": 55,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-sneakers-11",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Sapatilhas Leather Clean Low Vans",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 55,
    "fullPurchasePrice": 55,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-sneakers-11",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Sapatilhas Leather Clean Low Converse",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 55,
    "fullPurchasePrice": 55,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-loafers-12",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Mocassins Soft Leather Loafers Primark",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 60,
    "fullPurchasePrice": 60,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-sneakers-11",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Sapatilhas Leather Clean Low Zara",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 61,
    "fullPurchasePrice": 61,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-sneakers-11",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Sapatilhas Leather Clean Low Puma",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 61,
    "fullPurchasePrice": 61,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-sneakers-11",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Sapatilhas Leather Clean Low Mango",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 63,
    "fullPurchasePrice": 63,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-sneakers-11",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Sapatilhas Leather Clean Low Levi's",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 66,
    "fullPurchasePrice": 66,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-sneakers-11",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Sapatilhas Leather Clean Low Adidas",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 66,
    "fullPurchasePrice": 66,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-loafers-12",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Mocassins Soft Leather Loafers H&M",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 68,
    "fullPurchasePrice": 68,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-loafers-12",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Mocassins Soft Leather Loafers Bershka",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 68,
    "fullPurchasePrice": 68,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-sneakers-11",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Sapatilhas Leather Clean Low Nike",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 69,
    "fullPurchasePrice": 69,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-loafers-12",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Mocassins Soft Leather Loafers Pull & Bear",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 71,
    "fullPurchasePrice": 71,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-loafers-12",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Mocassins Soft Leather Loafers Uniqlo",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-loafers-12",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Mocassins Soft Leather Loafers Gap",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-loafers-12",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Mocassins Soft Leather Loafers Vans",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-loafers-12",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Mocassins Soft Leather Loafers Converse",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-loafers-12",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Mocassins Soft Leather Loafers Zara",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 83,
    "fullPurchasePrice": 83,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-loafers-12",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Mocassins Soft Leather Loafers Puma",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 83,
    "fullPurchasePrice": 83,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-loafers-12",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Mocassins Soft Leather Loafers Mango",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 86,
    "fullPurchasePrice": 86,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-loafers-12",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Mocassins Soft Leather Loafers Levi's",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 90,
    "fullPurchasePrice": 90,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-loafers-12",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Mocassins Soft Leather Loafers Adidas",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 90,
    "fullPurchasePrice": 90,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-loafers-12",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Mocassins Soft Leather Loafers Nike",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 94,
    "fullPurchasePrice": 94,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-sneakers-11",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Sapatilhas Leather Clean Low Superdry",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 132,
    "fullPurchasePrice": 132,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-sneakers-11",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Sapatilhas Leather Clean Low Calvin Klein",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 140,
    "fullPurchasePrice": 140,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-sneakers-11",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Sapatilhas Leather Clean Low Guess",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 140,
    "fullPurchasePrice": 140,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-sneakers-11",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Sapatilhas Leather Clean Low Tommy Hilfiger",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 149,
    "fullPurchasePrice": 149,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-sneakers-11",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Sapatilhas Leather Clean Low The North Face",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 149,
    "fullPurchasePrice": 149,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-sneakers-11",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Sapatilhas Leather Clean Low Diesel",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 157,
    "fullPurchasePrice": 157,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-sneakers-11",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Sapatilhas Leather Clean Low Lacoste",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 157,
    "fullPurchasePrice": 157,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-sneakers-11",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Sapatilhas Leather Clean Low Armani Exchange",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 157,
    "fullPurchasePrice": 157,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-sneakers-11",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Sapatilhas Leather Clean Low Michael Kors",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 165,
    "fullPurchasePrice": 165,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-sneakers-11",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Sapatilhas Leather Clean Low Ralph Lauren",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 173,
    "fullPurchasePrice": 173,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-loafers-12",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Mocassins Soft Leather Loafers Superdry",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 180,
    "fullPurchasePrice": 180,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-sneakers-11",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Sapatilhas Leather Clean Low Hugo Boss",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 182,
    "fullPurchasePrice": 182,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-loafers-12",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Mocassins Soft Leather Loafers Calvin Klein",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 191,
    "fullPurchasePrice": 191,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-loafers-12",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Mocassins Soft Leather Loafers Guess",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 191,
    "fullPurchasePrice": 191,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-loafers-12",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Mocassins Soft Leather Loafers Tommy Hilfiger",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 203,
    "fullPurchasePrice": 203,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-loafers-12",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Mocassins Soft Leather Loafers The North Face",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 203,
    "fullPurchasePrice": 203,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-loafers-12",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Mocassins Soft Leather Loafers Diesel",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 214,
    "fullPurchasePrice": 214,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-loafers-12",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Mocassins Soft Leather Loafers Lacoste",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 214,
    "fullPurchasePrice": 214,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-loafers-12",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Mocassins Soft Leather Loafers Armani Exchange",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 214,
    "fullPurchasePrice": 214,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-loafers-12",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Mocassins Soft Leather Loafers Michael Kors",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 225,
    "fullPurchasePrice": 225,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-loafers-12",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Mocassins Soft Leather Loafers Ralph Lauren",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 236,
    "fullPurchasePrice": 236,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-loafers-12",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Mocassins Soft Leather Loafers Hugo Boss",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 248,
    "fullPurchasePrice": 248,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-sneakers-11",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Sapatilhas Leather Clean Low Acne Studios",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 493,
    "fullPurchasePrice": 493,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-sneakers-11",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Sapatilhas Leather Clean Low Common Projects",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 493,
    "fullPurchasePrice": 493,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-sneakers-11",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Sapatilhas Leather Clean Low Jacquemus",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 539,
    "fullPurchasePrice": 539,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-sneakers-11",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Sapatilhas Leather Clean Low Zimmermann",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 585,
    "fullPurchasePrice": 585,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-sneakers-11",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Sapatilhas Leather Clean Low Burberry",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 647,
    "fullPurchasePrice": 647,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-sneakers-11",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Sapatilhas Leather Clean Low LOEWE",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 647,
    "fullPurchasePrice": 647,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-loafers-12",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Mocassins Soft Leather Loafers Acne Studios",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 672,
    "fullPurchasePrice": 672,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-loafers-12",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Mocassins Soft Leather Loafers Common Projects",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 672,
    "fullPurchasePrice": 672,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-sneakers-11",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Sapatilhas Leather Clean Low Balenciaga",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 678,
    "fullPurchasePrice": 678,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-sneakers-11",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Sapatilhas Leather Clean Low Versace",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 693,
    "fullPurchasePrice": 693,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-sneakers-11",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Sapatilhas Leather Clean Low Gucci",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 693,
    "fullPurchasePrice": 693,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-sneakers-11",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Sapatilhas Leather Clean Low Prada",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 708,
    "fullPurchasePrice": 708,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-loafers-12",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Mocassins Soft Leather Loafers Jacquemus",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 735,
    "fullPurchasePrice": 735,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-sneakers-11",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Sapatilhas Leather Clean Low Saint Laurent",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 739,
    "fullPurchasePrice": 739,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-sneakers-11",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Sapatilhas Leather Clean Low Chanel",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 770,
    "fullPurchasePrice": 770,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-loafers-12",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Mocassins Soft Leather Loafers Zimmermann",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 798,
    "fullPurchasePrice": 798,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-sneakers-11",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Sapatilhas Leather Clean Low Louis Vuitton",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 801,
    "fullPurchasePrice": 801,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-sneakers-11",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Sapatilhas Leather Clean Low Hermès",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 847,
    "fullPurchasePrice": 847,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-loafers-12",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Mocassins Soft Leather Loafers Burberry",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 882,
    "fullPurchasePrice": 882,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-loafers-12",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Mocassins Soft Leather Loafers LOEWE",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 882,
    "fullPurchasePrice": 882,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-loafers-12",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Mocassins Soft Leather Loafers Balenciaga",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 924,
    "fullPurchasePrice": 924,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-loafers-12",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Mocassins Soft Leather Loafers Versace",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 945,
    "fullPurchasePrice": 945,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-loafers-12",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Mocassins Soft Leather Loafers Gucci",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 945,
    "fullPurchasePrice": 945,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-loafers-12",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Mocassins Soft Leather Loafers Prada",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 966,
    "fullPurchasePrice": 966,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-loafers-12",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Mocassins Soft Leather Loafers Saint Laurent",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 1008,
    "fullPurchasePrice": 1008,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-loafers-12",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Mocassins Soft Leather Loafers Chanel",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 1050,
    "fullPurchasePrice": 1050,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-loafers-12",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Mocassins Soft Leather Loafers Louis Vuitton",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 1092,
    "fullPurchasePrice": 1092,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-loafers-12",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Mocassins Soft Leather Loafers Hermès",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "price": 1155,
    "fullPurchasePrice": 1155,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-perfume-15",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Eau de Parfum 100ml H&M",
    "tier": "eco",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-perfume-15",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Eau de Parfum 100ml Zara",
    "tier": "eco",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 39,
    "fullPurchasePrice": 39,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-perfume-15",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Eau de Parfum 100ml Mango",
    "tier": "eco",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 40,
    "fullPurchasePrice": 40,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-perfume-15",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Eau de Parfum 100ml Calvin Klein",
    "tier": "mid",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 89,
    "fullPurchasePrice": 89,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-perfume-15",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Eau de Parfum 100ml Lacoste",
    "tier": "mid",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 100,
    "fullPurchasePrice": 100,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-perfume-15",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Eau de Parfum 100ml Hugo Boss",
    "tier": "mid",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 116,
    "fullPurchasePrice": 116,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-perfume-15",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Eau de Parfum 100ml Chanel",
    "tier": "luxury",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 490,
    "fullPurchasePrice": 490,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-perfume-15",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Eau de Parfum 100ml Louis Vuitton",
    "tier": "luxury",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 510,
    "fullPurchasePrice": 510,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-perfume-15",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Eau de Parfum 100ml Hermès",
    "tier": "luxury",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 539,
    "fullPurchasePrice": 539,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-watch-14",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Relógio Steel Chrono H&M",
    "tier": "eco",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 41,
    "fullPurchasePrice": 41,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-watch-14",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Relógio Steel Chrono Zara",
    "tier": "eco",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-watch-14",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Relógio Steel Chrono Tommy Hilfiger",
    "tier": "mid",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 122,
    "fullPurchasePrice": 122,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-watch-14",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Relógio Steel Chrono Armani Exchange",
    "tier": "mid",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 128,
    "fullPurchasePrice": 128,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-watch-14",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Relógio Steel Chrono Michael Kors",
    "tier": "mid",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 135,
    "fullPurchasePrice": 135,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-watch-14",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Relógio Steel Chrono Hugo Boss",
    "tier": "mid",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 149,
    "fullPurchasePrice": 149,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-watch-1",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Oyster Perpetual 36mm Steel Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "price": 6200,
    "fullPurchasePrice": 6200,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-6",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Explorer II 42mm Polar White Dial Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 9800,
    "fullPurchasePrice": 9800,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-2",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Datejust 41mm Fluted Bezel Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 10500,
    "fullPurchasePrice": 10500,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-11",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Milgauss Z-Blue Dial Steel Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "price": 11200,
    "fullPurchasePrice": 11200,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-7",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Sea-Dweller 43mm Oystersteel Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "price": 13100,
    "fullPurchasePrice": 13100,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-3",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Submariner Date 41mm Ceramic Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "price": 14200,
    "fullPurchasePrice": 14200,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-10",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Sky-Dweller Annual Calendar Steel Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 15600,
    "fullPurchasePrice": 15600,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-4",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio GMT-Master II \"Pepsi\" Steel Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    "price": 16800,
    "fullPurchasePrice": 16800,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-8",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Yacht-Master 40 Everose Gold Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    "price": 29500,
    "fullPurchasePrice": 29500,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-5",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Cosmograph Daytona Gold 18k Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "price": 38000,
    "fullPurchasePrice": 38000,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-rolex-watch-9",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Relógio Day-Date 40 Platinum Ice Blue Rolex",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "price": 42000,
    "fullPurchasePrice": 42000,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "40mm"
    ],
    "colors": [
      "Prata / Ouro"
    ],
    "description": "Peça oficial de assinatura Rolex. Confeccionada com precisão absoluta."
  },
  {
    "id": "prod-primark-tshirt-3",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "T-Shirt Essential Logo Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 18,
    "fullPurchasePrice": 18,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-tshirt-3",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "T-Shirt Essential Logo H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 20,
    "fullPurchasePrice": 20,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-tshirt-3",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "T-Shirt Essential Logo Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 20,
    "fullPurchasePrice": 20,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-tshirt-3",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "T-Shirt Essential Logo Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 21,
    "fullPurchasePrice": 21,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-swimwear-10",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Calção de Banho Quick-Dry Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-tshirt-3",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "T-Shirt Essential Logo Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-tshirt-3",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "T-Shirt Essential Logo Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-tshirt-3",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "T-Shirt Essential Logo Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-tshirt-3",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "T-Shirt Essential Logo Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-tshirt-3",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "T-Shirt Essential Logo Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 24,
    "fullPurchasePrice": 24,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-tshirt-3",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "T-Shirt Essential Logo Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 24,
    "fullPurchasePrice": 24,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-swimwear-10",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Calção de Banho Quick-Dry H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 25,
    "fullPurchasePrice": 25,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-swimwear-10",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Calção de Banho Quick-Dry Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 25,
    "fullPurchasePrice": 25,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-tshirt-3",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "T-Shirt Essential Logo Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 25,
    "fullPurchasePrice": 25,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-tshirt-3",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "T-Shirt Essential Logo Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 26,
    "fullPurchasePrice": 26,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-tshirt-3",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "T-Shirt Essential Logo Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 26,
    "fullPurchasePrice": 26,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-swimwear-10",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Calção de Banho Quick-Dry Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 27,
    "fullPurchasePrice": 27,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-tshirt-4",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Polo Piqué Signature Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 28,
    "fullPurchasePrice": 28,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-swimwear-10",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Calção de Banho Quick-Dry Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 28,
    "fullPurchasePrice": 28,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-swimwear-10",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Calção de Banho Quick-Dry Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 28,
    "fullPurchasePrice": 28,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-tshirt-3",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "T-Shirt Essential Logo Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 28,
    "fullPurchasePrice": 28,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-swimwear-10",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Calção de Banho Quick-Dry Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 28,
    "fullPurchasePrice": 28,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-swimwear-10",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Calção de Banho Quick-Dry Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 28,
    "fullPurchasePrice": 28,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-swimwear-10",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Calção de Banho Quick-Dry Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 31,
    "fullPurchasePrice": 31,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-swimwear-10",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Calção de Banho Quick-Dry Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 31,
    "fullPurchasePrice": 31,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-tshirt-4",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Polo Piqué Signature H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-tshirt-4",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Polo Piqué Signature Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-swimwear-10",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Calção de Banho Quick-Dry Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-tshirt-4",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Polo Piqué Signature Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 33,
    "fullPurchasePrice": 33,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-trousers-7",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Calça Chino Smart Tailored Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 34,
    "fullPurchasePrice": 34,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-swimwear-10",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Calção de Banho Quick-Dry Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 34,
    "fullPurchasePrice": 34,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-swimwear-10",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Calção de Banho Quick-Dry Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 34,
    "fullPurchasePrice": 34,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-tshirt-4",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Polo Piqué Signature Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-tshirt-4",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Polo Piqué Signature Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-swimwear-10",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Calção de Banho Quick-Dry Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-tshirt-4",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Polo Piqué Signature Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-tshirt-4",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Polo Piqué Signature Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-shirt-5",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Camisa 100% Linho Resort Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 36,
    "fullPurchasePrice": 36,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-trousers-6",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Jeans Straight Denim Fit Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 38,
    "fullPurchasePrice": 38,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-trousers-7",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Calça Chino Smart Tailored H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 38,
    "fullPurchasePrice": 38,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-trousers-7",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Calça Chino Smart Tailored Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 38,
    "fullPurchasePrice": 38,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-tshirt-4",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Polo Piqué Signature Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 39,
    "fullPurchasePrice": 39,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-tshirt-4",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Polo Piqué Signature Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 39,
    "fullPurchasePrice": 39,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-trousers-7",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Calça Chino Smart Tailored Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 40,
    "fullPurchasePrice": 40,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-tshirt-4",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Polo Piqué Signature Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 40,
    "fullPurchasePrice": 40,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-shirt-5",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Camisa 100% Linho Resort H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 41,
    "fullPurchasePrice": 41,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-shirt-5",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Camisa 100% Linho Resort Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 41,
    "fullPurchasePrice": 41,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-trousers-7",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Calça Chino Smart Tailored Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 42,
    "fullPurchasePrice": 42,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-trousers-7",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Calça Chino Smart Tailored Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 42,
    "fullPurchasePrice": 42,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-tshirt-4",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Polo Piqué Signature Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 42,
    "fullPurchasePrice": 42,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-tshirt-4",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Polo Piqué Signature Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 42,
    "fullPurchasePrice": 42,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-trousers-7",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Calça Chino Smart Tailored Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 42,
    "fullPurchasePrice": 42,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-trousers-7",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Calça Chino Smart Tailored Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 42,
    "fullPurchasePrice": 42,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-trousers-6",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Jeans Straight Denim Fit H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 43,
    "fullPurchasePrice": 43,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-trousers-6",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Jeans Straight Denim Fit Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 43,
    "fullPurchasePrice": 43,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-shirt-5",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Camisa 100% Linho Resort Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 43,
    "fullPurchasePrice": 43,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-tshirt-4",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Polo Piqué Signature Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 44,
    "fullPurchasePrice": 44,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-shirt-5",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Camisa 100% Linho Resort Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-shirt-5",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Camisa 100% Linho Resort Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-shirt-5",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Camisa 100% Linho Resort Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-shirt-5",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Camisa 100% Linho Resort Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-trousers-7",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Calça Chino Smart Tailored Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 46,
    "fullPurchasePrice": 46,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-trousers-6",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Jeans Straight Denim Fit Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 46,
    "fullPurchasePrice": 46,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-trousers-7",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Calça Chino Smart Tailored Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 46,
    "fullPurchasePrice": 46,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-trousers-6",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Jeans Straight Denim Fit Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 48,
    "fullPurchasePrice": 48,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-trousers-7",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Calça Chino Smart Tailored Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 48,
    "fullPurchasePrice": 48,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-trousers-6",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Jeans Straight Denim Fit Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 48,
    "fullPurchasePrice": 48,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-trousers-6",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Jeans Straight Denim Fit Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 48,
    "fullPurchasePrice": 48,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-trousers-6",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Jeans Straight Denim Fit Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 48,
    "fullPurchasePrice": 48,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-shirt-5",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Camisa 100% Linho Resort Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-trousers-7",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Calça Chino Smart Tailored Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-trousers-7",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Calça Chino Smart Tailored Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-shirt-5",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Camisa 100% Linho Resort Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 50,
    "fullPurchasePrice": 50,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-jacket-8",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Casaco Puffer Lightweight Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 52,
    "fullPurchasePrice": 52,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-shirt-5",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Camisa 100% Linho Resort Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 52,
    "fullPurchasePrice": 52,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-trousers-6",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Jeans Straight Denim Fit Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 53,
    "fullPurchasePrice": 53,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-trousers-7",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Calça Chino Smart Tailored Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 53,
    "fullPurchasePrice": 53,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-trousers-6",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Jeans Straight Denim Fit Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 53,
    "fullPurchasePrice": 53,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-tshirt-3",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "T-Shirt Essential Logo Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 53,
    "fullPurchasePrice": 53,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-shirt-5",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Camisa 100% Linho Resort Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 54,
    "fullPurchasePrice": 54,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-shirt-5",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Camisa 100% Linho Resort Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 54,
    "fullPurchasePrice": 54,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-trousers-6",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Jeans Straight Denim Fit Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 55,
    "fullPurchasePrice": 55,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-shirt-5",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Camisa 100% Linho Resort Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 56,
    "fullPurchasePrice": 56,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-tshirt-3",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "T-Shirt Essential Logo Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 56,
    "fullPurchasePrice": 56,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-tshirt-3",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "T-Shirt Essential Logo Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 56,
    "fullPurchasePrice": 56,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-trousers-6",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Jeans Straight Denim Fit Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 58,
    "fullPurchasePrice": 58,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-trousers-6",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Jeans Straight Denim Fit Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 58,
    "fullPurchasePrice": 58,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-jacket-8",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Casaco Puffer Lightweight H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 59,
    "fullPurchasePrice": 59,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-jacket-8",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Casaco Puffer Lightweight Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 59,
    "fullPurchasePrice": 59,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-tshirt-3",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "T-Shirt Essential Logo Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 59,
    "fullPurchasePrice": 59,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-tshirt-3",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "T-Shirt Essential Logo The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 59,
    "fullPurchasePrice": 59,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-trousers-6",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Jeans Straight Denim Fit Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 60,
    "fullPurchasePrice": 60,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-jacket-8",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Casaco Puffer Lightweight Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 62,
    "fullPurchasePrice": 62,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-tshirt-3",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "T-Shirt Essential Logo Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 63,
    "fullPurchasePrice": 63,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-tshirt-3",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "T-Shirt Essential Logo Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 63,
    "fullPurchasePrice": 63,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-tshirt-3",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "T-Shirt Essential Logo Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 63,
    "fullPurchasePrice": 63,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-jacket-8",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Casaco Puffer Lightweight Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 65,
    "fullPurchasePrice": 65,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-jacket-8",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Casaco Puffer Lightweight Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 65,
    "fullPurchasePrice": 65,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-jacket-8",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Casaco Puffer Lightweight Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 65,
    "fullPurchasePrice": 65,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-jacket-8",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Casaco Puffer Lightweight Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 65,
    "fullPurchasePrice": 65,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-tshirt-3",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "T-Shirt Essential Logo Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 66,
    "fullPurchasePrice": 66,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-swimwear-10",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Calção de Banho Quick-Dry Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 67,
    "fullPurchasePrice": 67,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-tshirt-3",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "T-Shirt Essential Logo Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 69,
    "fullPurchasePrice": 69,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-swimwear-10",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Calção de Banho Quick-Dry Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 71,
    "fullPurchasePrice": 71,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-swimwear-10",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Calção de Banho Quick-Dry Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 71,
    "fullPurchasePrice": 71,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-jacket-8",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Casaco Puffer Lightweight Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 72,
    "fullPurchasePrice": 72,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-jacket-8",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Casaco Puffer Lightweight Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 72,
    "fullPurchasePrice": 72,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-tshirt-3",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "T-Shirt Essential Logo Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 73,
    "fullPurchasePrice": 73,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-jacket-8",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Casaco Puffer Lightweight Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-blazer-9",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Blazer Tailored Wool Blend Primark",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 76,
    "fullPurchasePrice": 76,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-swimwear-10",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Calção de Banho Quick-Dry Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 76,
    "fullPurchasePrice": 76,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-swimwear-10",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Calção de Banho Quick-Dry The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 76,
    "fullPurchasePrice": 76,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-jacket-8",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Casaco Puffer Lightweight Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 78,
    "fullPurchasePrice": 78,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-jacket-8",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Casaco Puffer Lightweight Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 78,
    "fullPurchasePrice": 78,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-swimwear-10",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Calção de Banho Quick-Dry Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 80,
    "fullPurchasePrice": 80,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-swimwear-10",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Calção de Banho Quick-Dry Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 80,
    "fullPurchasePrice": 80,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-swimwear-10",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Calção de Banho Quick-Dry Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 80,
    "fullPurchasePrice": 80,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-jacket-8",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Casaco Puffer Lightweight Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 81,
    "fullPurchasePrice": 81,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-tshirt-4",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Polo Piqué Signature Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 84,
    "fullPurchasePrice": 84,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-swimwear-10",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Calção de Banho Quick-Dry Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 84,
    "fullPurchasePrice": 84,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-blazer-9",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Blazer Tailored Wool Blend H&M",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 86,
    "fullPurchasePrice": 86,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-blazer-9",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Blazer Tailored Wool Blend Bershka",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 86,
    "fullPurchasePrice": 86,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-swimwear-10",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Calção de Banho Quick-Dry Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 88,
    "fullPurchasePrice": 88,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-tshirt-4",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Polo Piqué Signature Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 89,
    "fullPurchasePrice": 89,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-tshirt-4",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Polo Piqué Signature Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 89,
    "fullPurchasePrice": 89,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-blazer-9",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Blazer Tailored Wool Blend Pull & Bear",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 90,
    "fullPurchasePrice": 90,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-swimwear-10",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Calção de Banho Quick-Dry Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 92,
    "fullPurchasePrice": 92,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-blazer-9",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Blazer Tailored Wool Blend Uniqlo",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-blazer-9",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Blazer Tailored Wool Blend Gap",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-blazer-9",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Blazer Tailored Wool Blend Vans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-blazer-9",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Blazer Tailored Wool Blend Converse",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-tshirt-4",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Polo Piqué Signature Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-tshirt-4",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Polo Piqué Signature The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-tshirt-4",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Polo Piqué Signature Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 100,
    "fullPurchasePrice": 100,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-tshirt-4",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Polo Piqué Signature Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 100,
    "fullPurchasePrice": 100,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-tshirt-4",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Polo Piqué Signature Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 100,
    "fullPurchasePrice": 100,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-trousers-7",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Calça Chino Smart Tailored Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 101,
    "fullPurchasePrice": 101,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-blazer-9",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Blazer Tailored Wool Blend Zara",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 105,
    "fullPurchasePrice": 105,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-blazer-9",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Blazer Tailored Wool Blend Puma",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 105,
    "fullPurchasePrice": 105,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-tshirt-4",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Polo Piqué Signature Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 105,
    "fullPurchasePrice": 105,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-trousers-7",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Calça Chino Smart Tailored Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 107,
    "fullPurchasePrice": 107,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-trousers-7",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Calça Chino Smart Tailored Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 107,
    "fullPurchasePrice": 107,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-shirt-5",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Camisa 100% Linho Resort Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 108,
    "fullPurchasePrice": 108,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-blazer-9",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Blazer Tailored Wool Blend Mango",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 109,
    "fullPurchasePrice": 109,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-tshirt-4",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Polo Piqué Signature Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-trousers-7",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Calça Chino Smart Tailored Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 113,
    "fullPurchasePrice": 113,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-trousers-7",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Calça Chino Smart Tailored The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 113,
    "fullPurchasePrice": 113,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-blazer-9",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Blazer Tailored Wool Blend Levi's",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 114,
    "fullPurchasePrice": 114,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-blazer-9",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Blazer Tailored Wool Blend Adidas",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 114,
    "fullPurchasePrice": 114,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-shirt-5",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Camisa 100% Linho Resort Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 115,
    "fullPurchasePrice": 115,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-trousers-6",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Jeans Straight Denim Fit Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 115,
    "fullPurchasePrice": 115,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-shirt-5",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Camisa 100% Linho Resort Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 115,
    "fullPurchasePrice": 115,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-tshirt-4",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Polo Piqué Signature Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 116,
    "fullPurchasePrice": 116,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-blazer-9",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Blazer Tailored Wool Blend Nike",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 119,
    "fullPurchasePrice": 119,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-trousers-7",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Calça Chino Smart Tailored Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-trousers-7",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Calça Chino Smart Tailored Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-trousers-7",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Calça Chino Smart Tailored Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-shirt-5",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Camisa 100% Linho Resort Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 122,
    "fullPurchasePrice": 122,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-trousers-6",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Jeans Straight Denim Fit Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 122,
    "fullPurchasePrice": 122,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-shirt-5",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Camisa 100% Linho Resort The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 122,
    "fullPurchasePrice": 122,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-trousers-6",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Jeans Straight Denim Fit Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 122,
    "fullPurchasePrice": 122,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-trousers-7",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Calça Chino Smart Tailored Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 126,
    "fullPurchasePrice": 126,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-shirt-5",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Camisa 100% Linho Resort Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 128,
    "fullPurchasePrice": 128,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-shirt-5",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Camisa 100% Linho Resort Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 128,
    "fullPurchasePrice": 128,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-shirt-5",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Camisa 100% Linho Resort Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 128,
    "fullPurchasePrice": 128,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-trousers-6",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Jeans Straight Denim Fit Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 130,
    "fullPurchasePrice": 130,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-trousers-6",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Jeans Straight Denim Fit The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 130,
    "fullPurchasePrice": 130,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-trousers-7",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Calça Chino Smart Tailored Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 132,
    "fullPurchasePrice": 132,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-shirt-5",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Camisa 100% Linho Resort Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 135,
    "fullPurchasePrice": 135,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-trousers-6",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Jeans Straight Denim Fit Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 137,
    "fullPurchasePrice": 137,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-trousers-6",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Jeans Straight Denim Fit Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 137,
    "fullPurchasePrice": 137,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-trousers-6",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Jeans Straight Denim Fit Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 137,
    "fullPurchasePrice": 137,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-trousers-7",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Calça Chino Smart Tailored Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 139,
    "fullPurchasePrice": 139,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-shirt-5",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Camisa 100% Linho Resort Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 142,
    "fullPurchasePrice": 142,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-trousers-6",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Jeans Straight Denim Fit Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 144,
    "fullPurchasePrice": 144,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-shirt-5",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Camisa 100% Linho Resort Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 149,
    "fullPurchasePrice": 149,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-trousers-6",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Jeans Straight Denim Fit Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 151,
    "fullPurchasePrice": 151,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-jacket-8",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Casaco Puffer Lightweight Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 156,
    "fullPurchasePrice": 156,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-trousers-6",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Jeans Straight Denim Fit Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 158,
    "fullPurchasePrice": 158,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-jacket-8",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Casaco Puffer Lightweight Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 166,
    "fullPurchasePrice": 166,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-jacket-8",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Casaco Puffer Lightweight Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 166,
    "fullPurchasePrice": 166,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-jacket-8",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Casaco Puffer Lightweight Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 176,
    "fullPurchasePrice": 176,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-jacket-8",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Casaco Puffer Lightweight The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 176,
    "fullPurchasePrice": 176,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-jacket-8",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Casaco Puffer Lightweight Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 185,
    "fullPurchasePrice": 185,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-jacket-8",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Casaco Puffer Lightweight Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 185,
    "fullPurchasePrice": 185,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-jacket-8",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Casaco Puffer Lightweight Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 185,
    "fullPurchasePrice": 185,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-jacket-8",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Casaco Puffer Lightweight Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 195,
    "fullPurchasePrice": 195,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-tshirt-3",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "T-Shirt Essential Logo Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 197,
    "fullPurchasePrice": 197,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-tshirt-3",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "T-Shirt Essential Logo Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 197,
    "fullPurchasePrice": 197,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-jacket-8",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Casaco Puffer Lightweight Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 205,
    "fullPurchasePrice": 205,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-jacket-8",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Casaco Puffer Lightweight Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 215,
    "fullPurchasePrice": 215,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-tshirt-3",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "T-Shirt Essential Logo Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 216,
    "fullPurchasePrice": 216,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-blazer-9",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Blazer Tailored Wool Blend Superdry",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 228,
    "fullPurchasePrice": 228,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-tshirt-3",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "T-Shirt Essential Logo Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 234,
    "fullPurchasePrice": 234,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-blazer-9",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Blazer Tailored Wool Blend Calvin Klein",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 242,
    "fullPurchasePrice": 242,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-blazer-9",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Blazer Tailored Wool Blend Guess",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 242,
    "fullPurchasePrice": 242,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-swimwear-10",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Calção de Banho Quick-Dry Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 251,
    "fullPurchasePrice": 251,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-swimwear-10",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Calção de Banho Quick-Dry Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 251,
    "fullPurchasePrice": 251,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-blazer-9",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Blazer Tailored Wool Blend Tommy Hilfiger",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 257,
    "fullPurchasePrice": 257,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-blazer-9",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Blazer Tailored Wool Blend The North Face",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 257,
    "fullPurchasePrice": 257,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-tshirt-3",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "T-Shirt Essential Logo Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 259,
    "fullPurchasePrice": 259,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-tshirt-3",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "T-Shirt Essential Logo LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 259,
    "fullPurchasePrice": 259,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-blazer-9",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Blazer Tailored Wool Blend Diesel",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 271,
    "fullPurchasePrice": 271,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-blazer-9",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Blazer Tailored Wool Blend Lacoste",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 271,
    "fullPurchasePrice": 271,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-blazer-9",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Blazer Tailored Wool Blend Armani Exchange",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 271,
    "fullPurchasePrice": 271,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-tshirt-3",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "T-Shirt Essential Logo Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 271,
    "fullPurchasePrice": 271,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-swimwear-10",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Calção de Banho Quick-Dry Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 274,
    "fullPurchasePrice": 274,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-tshirt-3",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "T-Shirt Essential Logo Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 277,
    "fullPurchasePrice": 277,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-tshirt-3",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "T-Shirt Essential Logo Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 277,
    "fullPurchasePrice": 277,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-tshirt-3",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "T-Shirt Essential Logo Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 283,
    "fullPurchasePrice": 283,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-blazer-9",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Blazer Tailored Wool Blend Michael Kors",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 285,
    "fullPurchasePrice": 285,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-tshirt-3",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "T-Shirt Essential Logo Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 296,
    "fullPurchasePrice": 296,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-swimwear-10",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Calção de Banho Quick-Dry Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 298,
    "fullPurchasePrice": 298,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-blazer-9",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Blazer Tailored Wool Blend Ralph Lauren",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 299,
    "fullPurchasePrice": 299,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-tshirt-3",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "T-Shirt Essential Logo Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 308,
    "fullPurchasePrice": 308,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-blazer-9",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Blazer Tailored Wool Blend Hugo Boss",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 314,
    "fullPurchasePrice": 314,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-tshirt-4",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Polo Piqué Signature Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 314,
    "fullPurchasePrice": 314,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-tshirt-4",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Polo Piqué Signature Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 314,
    "fullPurchasePrice": 314,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-tshirt-3",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "T-Shirt Essential Logo Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 320,
    "fullPurchasePrice": 320,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-swimwear-10",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Calção de Banho Quick-Dry Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 329,
    "fullPurchasePrice": 329,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-swimwear-10",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Calção de Banho Quick-Dry LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 329,
    "fullPurchasePrice": 329,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-tshirt-3",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "T-Shirt Essential Logo Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 339,
    "fullPurchasePrice": 339,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-tshirt-4",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Polo Piqué Signature Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 343,
    "fullPurchasePrice": 343,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-swimwear-10",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Calção de Banho Quick-Dry Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 345,
    "fullPurchasePrice": 345,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-swimwear-10",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Calção de Banho Quick-Dry Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 353,
    "fullPurchasePrice": 353,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-swimwear-10",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Calção de Banho Quick-Dry Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 353,
    "fullPurchasePrice": 353,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-swimwear-10",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Calção de Banho Quick-Dry Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 361,
    "fullPurchasePrice": 361,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-tshirt-4",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Polo Piqué Signature Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 372,
    "fullPurchasePrice": 372,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-trousers-7",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Calça Chino Smart Tailored Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 376,
    "fullPurchasePrice": 376,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-trousers-7",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Calça Chino Smart Tailored Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 376,
    "fullPurchasePrice": 376,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-swimwear-10",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Calção de Banho Quick-Dry Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 376,
    "fullPurchasePrice": 376,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-swimwear-10",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Calção de Banho Quick-Dry Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 392,
    "fullPurchasePrice": 392,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-shirt-5",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Camisa 100% Linho Resort Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 403,
    "fullPurchasePrice": 403,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-shirt-5",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Camisa 100% Linho Resort Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 403,
    "fullPurchasePrice": 403,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-swimwear-10",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Calção de Banho Quick-Dry Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 408,
    "fullPurchasePrice": 408,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-trousers-7",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Calça Chino Smart Tailored Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 412,
    "fullPurchasePrice": 412,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-tshirt-4",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Polo Piqué Signature Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 412,
    "fullPurchasePrice": 412,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-tshirt-4",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Polo Piqué Signature LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 412,
    "fullPurchasePrice": 412,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-trousers-6",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Jeans Straight Denim Fit Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 430,
    "fullPurchasePrice": 430,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-trousers-6",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Jeans Straight Denim Fit Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 430,
    "fullPurchasePrice": 430,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-tshirt-4",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Polo Piqué Signature Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 431,
    "fullPurchasePrice": 431,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-swimwear-10",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Calção de Banho Quick-Dry Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 431,
    "fullPurchasePrice": 431,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-shirt-5",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Camisa 100% Linho Resort Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 441,
    "fullPurchasePrice": 441,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-tshirt-4",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Polo Piqué Signature Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 441,
    "fullPurchasePrice": 441,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-tshirt-4",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Polo Piqué Signature Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 441,
    "fullPurchasePrice": 441,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-trousers-7",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Calça Chino Smart Tailored Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 447,
    "fullPurchasePrice": 447,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-tshirt-4",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Polo Piqué Signature Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 451,
    "fullPurchasePrice": 451,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-trousers-6",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Jeans Straight Denim Fit Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 470,
    "fullPurchasePrice": 470,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-tshirt-4",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Polo Piqué Signature Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 470,
    "fullPurchasePrice": 470,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-shirt-5",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Camisa 100% Linho Resort Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 479,
    "fullPurchasePrice": 479,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-tshirt-4",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Polo Piqué Signature Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 490,
    "fullPurchasePrice": 490,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-trousers-7",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Calça Chino Smart Tailored Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 494,
    "fullPurchasePrice": 494,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-trousers-7",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Calça Chino Smart Tailored LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 494,
    "fullPurchasePrice": 494,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-tshirt-4",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Polo Piqué Signature Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 510,
    "fullPurchasePrice": 510,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-trousers-6",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Jeans Straight Denim Fit Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 511,
    "fullPurchasePrice": 511,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-trousers-7",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Calça Chino Smart Tailored Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 517,
    "fullPurchasePrice": 517,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-shirt-5",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Camisa 100% Linho Resort Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 529,
    "fullPurchasePrice": 529,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-trousers-7",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Calça Chino Smart Tailored Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 529,
    "fullPurchasePrice": 529,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-trousers-7",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Calça Chino Smart Tailored Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 529,
    "fullPurchasePrice": 529,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-shirt-5",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Camisa 100% Linho Resort LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 529,
    "fullPurchasePrice": 529,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-tshirt-4",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Polo Piqué Signature Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 539,
    "fullPurchasePrice": 539,
    "gender": "unissex",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-trousers-7",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Calça Chino Smart Tailored Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 541,
    "fullPurchasePrice": 541,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-shirt-5",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Camisa 100% Linho Resort Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 554,
    "fullPurchasePrice": 554,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-trousers-6",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Jeans Straight Denim Fit Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 564,
    "fullPurchasePrice": 564,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-trousers-7",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Calça Chino Smart Tailored Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 564,
    "fullPurchasePrice": 564,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-trousers-6",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Jeans Straight Denim Fit LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 564,
    "fullPurchasePrice": 564,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-shirt-5",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Camisa 100% Linho Resort Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 567,
    "fullPurchasePrice": 567,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-shirt-5",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Camisa 100% Linho Resort Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 567,
    "fullPurchasePrice": 567,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-shirt-5",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Camisa 100% Linho Resort Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 580,
    "fullPurchasePrice": 580,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-jacket-8",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Casaco Puffer Lightweight Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 582,
    "fullPurchasePrice": 582,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-jacket-8",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Casaco Puffer Lightweight Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 582,
    "fullPurchasePrice": 582,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-trousers-7",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Calça Chino Smart Tailored Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 588,
    "fullPurchasePrice": 588,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-trousers-6",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Jeans Straight Denim Fit Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 591,
    "fullPurchasePrice": 591,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-trousers-6",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Jeans Straight Denim Fit Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 605,
    "fullPurchasePrice": 605,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-trousers-6",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Jeans Straight Denim Fit Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 605,
    "fullPurchasePrice": 605,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-shirt-5",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Camisa 100% Linho Resort Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 605,
    "fullPurchasePrice": 605,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-trousers-7",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Calça Chino Smart Tailored Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 612,
    "fullPurchasePrice": 612,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-trousers-6",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Jeans Straight Denim Fit Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 618,
    "fullPurchasePrice": 618,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-shirt-5",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Camisa 100% Linho Resort Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 630,
    "fullPurchasePrice": 630,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-jacket-8",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Casaco Puffer Lightweight Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 637,
    "fullPurchasePrice": 637,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-trousers-6",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Jeans Straight Denim Fit Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 645,
    "fullPurchasePrice": 645,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-trousers-7",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Calça Chino Smart Tailored Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 647,
    "fullPurchasePrice": 647,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-shirt-5",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Camisa 100% Linho Resort Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 655,
    "fullPurchasePrice": 655,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-trousers-6",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Jeans Straight Denim Fit Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 672,
    "fullPurchasePrice": 672,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-jacket-8",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Casaco Puffer Lightweight Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 692,
    "fullPurchasePrice": 692,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-shirt-5",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Camisa 100% Linho Resort Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 693,
    "fullPurchasePrice": 693,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-trousers-6",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Jeans Straight Denim Fit Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 699,
    "fullPurchasePrice": 699,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-trousers-6",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Jeans Straight Denim Fit Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 739,
    "fullPurchasePrice": 739,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-jacket-8",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Casaco Puffer Lightweight Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 764,
    "fullPurchasePrice": 764,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-jacket-8",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Casaco Puffer Lightweight LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 764,
    "fullPurchasePrice": 764,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-jacket-8",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Casaco Puffer Lightweight Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 801,
    "fullPurchasePrice": 801,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-jacket-8",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Casaco Puffer Lightweight Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 819,
    "fullPurchasePrice": 819,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-jacket-8",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Casaco Puffer Lightweight Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 819,
    "fullPurchasePrice": 819,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-jacket-8",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Casaco Puffer Lightweight Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 837,
    "fullPurchasePrice": 837,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-blazer-9",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Blazer Tailored Wool Blend Acne Studios",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 851,
    "fullPurchasePrice": 851,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-blazer-9",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Blazer Tailored Wool Blend Common Projects",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 851,
    "fullPurchasePrice": 851,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-jacket-8",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Casaco Puffer Lightweight Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 874,
    "fullPurchasePrice": 874,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-jacket-8",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Casaco Puffer Lightweight Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 910,
    "fullPurchasePrice": 910,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-blazer-9",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Blazer Tailored Wool Blend Jacquemus",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 931,
    "fullPurchasePrice": 931,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-jacket-8",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Casaco Puffer Lightweight Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 946,
    "fullPurchasePrice": 946,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-jacket-8",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Casaco Puffer Lightweight Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 1001,
    "fullPurchasePrice": 1001,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-blazer-9",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Blazer Tailored Wool Blend Zimmermann",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1011,
    "fullPurchasePrice": 1011,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-blazer-9",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Blazer Tailored Wool Blend Burberry",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1117,
    "fullPurchasePrice": 1117,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-blazer-9",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Blazer Tailored Wool Blend LOEWE",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1117,
    "fullPurchasePrice": 1117,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-blazer-9",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Blazer Tailored Wool Blend Balenciaga",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1170,
    "fullPurchasePrice": 1170,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-blazer-9",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Blazer Tailored Wool Blend Versace",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1197,
    "fullPurchasePrice": 1197,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-blazer-9",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Blazer Tailored Wool Blend Gucci",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1197,
    "fullPurchasePrice": 1197,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-blazer-9",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Blazer Tailored Wool Blend Prada",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1224,
    "fullPurchasePrice": 1224,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-blazer-9",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Blazer Tailored Wool Blend Saint Laurent",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1277,
    "fullPurchasePrice": 1277,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-blazer-9",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Blazer Tailored Wool Blend Chanel",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1330,
    "fullPurchasePrice": 1330,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-blazer-9",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Blazer Tailored Wool Blend Louis Vuitton",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1383,
    "fullPurchasePrice": 1383,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-blazer-9",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Blazer Tailored Wool Blend Hermès",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 1463,
    "fullPurchasePrice": 1463,
    "gender": "masculino",
    "occasion": "formal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-socks-1",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Pack Meias Algodão Primark",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 10,
    "fullPurchasePrice": 10,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-socks-1",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Pack Meias Algodão H&M",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 11,
    "fullPurchasePrice": 11,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-socks-1",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Pack Meias Algodão Bershka",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 11,
    "fullPurchasePrice": 11,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-socks-1",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Pack Meias Algodão Pull & Bear",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 11,
    "fullPurchasePrice": 11,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-underwear-2",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Pack Boxers Stretch Primark",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 12,
    "fullPurchasePrice": 12,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Primark. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-socks-1",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Pack Meias Algodão Uniqlo",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 12,
    "fullPurchasePrice": 12,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-socks-1",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Pack Meias Algodão Gap",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 12,
    "fullPurchasePrice": 12,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-socks-1",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Pack Meias Algodão Vans",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 12,
    "fullPurchasePrice": 12,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-socks-1",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Pack Meias Algodão Converse",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 12,
    "fullPurchasePrice": 12,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-socks-1",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Pack Meias Algodão Zara",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 13,
    "fullPurchasePrice": 13,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-socks-1",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Pack Meias Algodão Puma",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 13,
    "fullPurchasePrice": 13,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-h-and-m-underwear-2",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "Pack Boxers Stretch H&M",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial H&M. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-bershka-underwear-2",
    "brandId": "bershka",
    "brandName": "Bershka",
    "brand": "Bershka",
    "name": "Pack Boxers Stretch Bershka",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Bershka. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-pull-and-bear-underwear-2",
    "brandId": "pull-and-bear",
    "brandName": "Pull & Bear",
    "brand": "Pull & Bear",
    "name": "Pack Boxers Stretch Pull & Bear",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Pull & Bear. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-socks-1",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Pack Meias Algodão Mango",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-socks-1",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Pack Meias Algodão Levi's",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-socks-1",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Pack Meias Algodão Adidas",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-uniqlo-underwear-2",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Pack Boxers Stretch Uniqlo",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Uniqlo. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gap-underwear-2",
    "brandId": "gap",
    "brandName": "Gap",
    "brand": "Gap",
    "name": "Pack Boxers Stretch Gap",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gap. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-socks-1",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Pack Meias Algodão Nike",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-vans-underwear-2",
    "brandId": "vans",
    "brandName": "Vans",
    "brand": "Vans",
    "name": "Pack Boxers Stretch Vans",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Vans. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-converse-underwear-2",
    "brandId": "converse",
    "brandName": "Converse",
    "brand": "Converse",
    "name": "Pack Boxers Stretch Converse",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Converse. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zara-underwear-2",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Pack Boxers Stretch Zara",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 17,
    "fullPurchasePrice": 17,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-mango-underwear-2",
    "brandId": "mango",
    "brandName": "Mango",
    "brand": "Mango",
    "name": "Pack Boxers Stretch Mango",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 17,
    "fullPurchasePrice": 17,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Mango. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-puma-underwear-2",
    "brandId": "puma",
    "brandName": "Puma",
    "brand": "Puma",
    "name": "Pack Boxers Stretch Puma",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 17,
    "fullPurchasePrice": 17,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Puma. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-levis-underwear-2",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Pack Boxers Stretch Levi's",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 18,
    "fullPurchasePrice": 18,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Levi's. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-adidas-underwear-2",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Pack Boxers Stretch Adidas",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 18,
    "fullPurchasePrice": 18,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Adidas. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-nike-underwear-2",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Pack Boxers Stretch Nike",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 18,
    "fullPurchasePrice": 18,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Nike. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-socks-1",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Pack Meias Algodão Tommy Hilfiger",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-socks-1",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Pack Meias Algodão Calvin Klein",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-socks-1",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Pack Meias Algodão Ralph Lauren",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-socks-1",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Pack Meias Algodão Superdry",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-socks-1",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Pack Meias Algodão Diesel",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-socks-1",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Pack Meias Algodão Michael Kors",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-socks-1",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Pack Meias Algodão Hugo Boss",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-socks-1",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Pack Meias Algodão Lacoste",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-socks-1",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Pack Meias Algodão The North Face",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-socks-1",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Pack Meias Algodão Guess",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-socks-1",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Pack Meias Algodão Armani Exchange",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-tommy-hilfiger-underwear-2",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Pack Boxers Stretch Tommy Hilfiger",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Tommy Hilfiger. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-calvin-klein-underwear-2",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Pack Boxers Stretch Calvin Klein",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Calvin Klein. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-ralph-lauren-underwear-2",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Pack Boxers Stretch Ralph Lauren",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Ralph Lauren. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-superdry-underwear-2",
    "brandId": "superdry",
    "brandName": "Superdry",
    "brand": "Superdry",
    "name": "Pack Boxers Stretch Superdry",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Superdry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-diesel-underwear-2",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Pack Boxers Stretch Diesel",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Diesel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-michael-kors-underwear-2",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Pack Boxers Stretch Michael Kors",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hugo-boss-underwear-2",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Pack Boxers Stretch Hugo Boss",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hugo Boss. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-lacoste-underwear-2",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Pack Boxers Stretch Lacoste",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Lacoste. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-underwear-2",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "Pack Boxers Stretch The North Face",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial The North Face. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-guess-underwear-2",
    "brandId": "guess",
    "brandName": "Guess",
    "brand": "Guess",
    "name": "Pack Boxers Stretch Guess",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Guess. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-armani-exchange-underwear-2",
    "brandId": "armani-exchange",
    "brandName": "Armani Exchange",
    "brand": "Armani Exchange",
    "name": "Pack Boxers Stretch Armani Exchange",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Armani Exchange. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-socks-1",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Pack Meias Algodão Acne Studios",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-socks-1",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Pack Meias Algodão Jacquemus",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-socks-1",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Pack Meias Algodão Zimmermann",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-socks-1",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Pack Meias Algodão Common Projects",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-socks-1",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Pack Meias Algodão Burberry",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-socks-1",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Pack Meias Algodão Versace",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-socks-1",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Pack Meias Algodão Prada",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-socks-1",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Pack Meias Algodão Gucci",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-socks-1",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Pack Meias Algodão Balenciaga",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-socks-1",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Pack Meias Algodão Saint Laurent",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-socks-1",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Pack Meias Algodão LOEWE",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-socks-1",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Pack Meias Algodão Louis Vuitton",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-socks-1",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Pack Meias Algodão Chanel",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-socks-1",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Pack Meias Algodão Hermès",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "gender": "masculino",
    "occasion": "praia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-acne-studios-underwear-2",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Pack Boxers Stretch Acne Studios",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Acne Studios. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-jacquemus-underwear-2",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Pack Boxers Stretch Jacquemus",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Jacquemus. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-zimmermann-underwear-2",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Pack Boxers Stretch Zimmermann",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Zimmermann. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-common-projects-underwear-2",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Pack Boxers Stretch Common Projects",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Common Projects. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-burberry-underwear-2",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Pack Boxers Stretch Burberry",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Burberry. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-versace-underwear-2",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Pack Boxers Stretch Versace",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Versace. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-underwear-2",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Pack Boxers Stretch Prada",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Prada. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-underwear-2",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Pack Boxers Stretch Gucci",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Gucci. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-balenciaga-underwear-2",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Pack Boxers Stretch Balenciaga",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Balenciaga. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-underwear-2",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Pack Boxers Stretch Saint Laurent",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Saint Laurent. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-loewe-underwear-2",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "Pack Boxers Stretch LOEWE",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial LOEWE. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-louis-vuitton-underwear-2",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Pack Boxers Stretch Louis Vuitton",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-chanel-underwear-2",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Pack Boxers Stretch Chanel",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Chanel. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-hermes-underwear-2",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Pack Boxers Stretch Hermès",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "gender": "unissex",
    "occasion": "cidade",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  }
];

export const PRODUCTS = RAW_PRODUCTS.map((item) => {
  const finalPrice = item.price || item.fullPurchasePrice || 50;
  const rentalPricePerDay = Math.max(3, Math.round(finalPrice / 25));

  return {
    ...item,
    brand: item.brand || item.brandName,
    brandName: item.brandName || item.brand,
    price: finalPrice,
    fullPurchasePrice: finalPrice,
    rentalPricePerDay,
    images: [item.image],
    inStock: true,
    discontinued: false,
    merchantAttribution: `${item.brandName} Partner Network`,
    affiliateUrl: `https://partner.bagless.app/redirect?brand=${item.brandId}&id=${item.id}`,
    weatherTag: item.occasion === 'praia' ? 'Clima Quente' : item.occasion === 'desporto' ? 'Desporto & Aventura' : 'Urbano & Elegante'
  };
}).sort((a, b) => {
  const catComp = a.category.localeCompare(b.category);
  if (catComp !== 0) return catComp;
  return a.price - b.price;
});

export const DYNAMIC_CATALOG = PRODUCTS;

export const syncLiveProductFeeds = async () => {
  console.log(`[Bagless Feed Sync] Catálogo com ${PRODUCTS.length} produtos.`);
  return PRODUCTS;
};

export { importProductImages, FALLBACK_IMAGE };
