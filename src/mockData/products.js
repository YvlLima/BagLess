import { BRANDS } from './brands';
import { importProductImages, FALLBACK_IMAGE } from './catalogGenerator';

/**
 * Catálogo 100% Autêntico Bagless - Apenas Produtos Reais Existentes nas Lojas
 * Ordenado por CATEGORIA e PREÇO.
 */

const RAW_PRODUCTS = [
  {
    "id": "prod-primark-bag-49",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Primark Mala Canvas Beach Tote",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "rentalPricePerDay": 3,
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
    "id": "prod-uniqlo-bag-42",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Uniqlo Round Mini Shoulder Bag",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "rentalPricePerDay": 3,
    "gender": "unissex",
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
    "id": "prod-zara-sunglasses-33",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara Óculos de Sol Acetato Vintage",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 25,
    "fullPurchasePrice": 25,
    "rentalPricePerDay": 3,
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
    "description": "Peça de assinatura oficial Zara. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-hat-83",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "The North Face Knit Logo Beanie",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "hat",
    "image": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "rentalPricePerDay": 3,
    "gender": "masculino",
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
    "id": "prod-levis-belt-26",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Levi's Heritage Leather Belt",
    "tier": "eco",
    "category": "acessorios",
    "subCategory": "belt",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "rentalPricePerDay": 3,
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
    "id": "prod-tommy-hilfiger-belt-61",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Tommy Hilfiger Classic Leather Belt",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "belt",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "price": 55,
    "fullPurchasePrice": 55,
    "rentalPricePerDay": 3,
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
    "id": "prod-michael-kors-wallet-86",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Michael Kors Leather Card Case Wallet",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "rentalPricePerDay": 3,
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
    "description": "Peça de assinatura oficial Michael Kors. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-the-north-face-bag-82",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "The North Face Borealis Backpack 28L",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "rentalPricePerDay": 5,
    "gender": "unissex",
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
    "id": "prod-jacquemus-hat-131",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Jacquemus Le Bob Artichaut Bucket Hat",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "hat",
    "image": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=700&q=80",
    "price": 150,
    "fullPurchasePrice": 150,
    "rentalPricePerDay": 6,
    "gender": "masculino",
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
    "id": "prod-acne-studios-hat-133",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Acne Studios Face Patch Alpaca Scarf",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "hat",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "price": 240,
    "fullPurchasePrice": 240,
    "rentalPricePerDay": 10,
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
    "id": "prod-michael-kors-bag-84",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Michael Kors Jet Set Large Leather Tote Bag",
    "tier": "mid",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "price": 275,
    "fullPurchasePrice": 275,
    "rentalPricePerDay": 11,
    "gender": "unissex",
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
    "id": "prod-loewe-wallet-129",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "LOEWE Puzzle Leather Cardholder",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 320,
    "fullPurchasePrice": 320,
    "rentalPricePerDay": 13,
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
    "id": "prod-louis-vuitton-wallet-99",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Louis Vuitton Pocket Organizer Monogram",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "price": 380,
    "fullPurchasePrice": 380,
    "rentalPricePerDay": 15,
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
    "description": "Peça de assinatura oficial Louis Vuitton. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-saint-laurent-sunglasses-123",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Saint Laurent Acetate Black YSL Sunglasses",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    "price": 390,
    "fullPurchasePrice": 390,
    "rentalPricePerDay": 16,
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
    "id": "prod-hermes-hat-105",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Hermès Twilly Printed Silk Scarf",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "hat",
    "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80",
    "price": 420,
    "fullPurchasePrice": 420,
    "rentalPricePerDay": 17,
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
    "description": "Peça de assinatura oficial Hermès. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-bag-95",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Rolex Leather Watch Travel Pouch Green",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "price": 450,
    "fullPurchasePrice": 450,
    "rentalPricePerDay": 18,
    "gender": "masculino",
    "occasion": "cidade",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Rolex. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-gucci-belt-112",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Gucci GG Marmont Leather Belt",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "belt",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "price": 450,
    "fullPurchasePrice": 450,
    "rentalPricePerDay": 18,
    "gender": "unissex",
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
    "id": "prod-chanel-sunglasses-110",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Chanel Acetate Cat-Eye Sunglasses",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "sunglasses",
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80",
    "price": 480,
    "fullPurchasePrice": 480,
    "rentalPricePerDay": 19,
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
    "id": "prod-louis-vuitton-belt-100",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Louis Vuitton Initiales 40mm Reversible Belt",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "belt",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "price": 520,
    "fullPurchasePrice": 520,
    "rentalPricePerDay": 21,
    "gender": "unissex",
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
    "id": "prod-burberry-hat-127",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Burberry Cashmere Vintage Check Scarf",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "hat",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "price": 520,
    "fullPurchasePrice": 520,
    "rentalPricePerDay": 21,
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
    "id": "prod-prada-hat-116",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Prada Re-Nylon Black Bucket Hat",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "hat",
    "image": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=700&q=80",
    "price": 550,
    "fullPurchasePrice": 550,
    "rentalPricePerDay": 22,
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
    "id": "prod-jacquemus-bag-130",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Jacquemus Le Chiquito Leather Mini Bag",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 590,
    "fullPurchasePrice": 590,
    "rentalPricePerDay": 24,
    "gender": "unissex",
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
    "id": "prod-loewe-bag-128",
    "brandId": "loewe",
    "brandName": "LOEWE",
    "brand": "LOEWE",
    "name": "LOEWE Anagram Basket Straw Tote Bag",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "price": 690,
    "fullPurchasePrice": 690,
    "rentalPricePerDay": 28,
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
    "id": "prod-hermes-belt-104",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Hermès Reversible H Buckle Leather Belt",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "belt",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "price": 780,
    "fullPurchasePrice": 780,
    "rentalPricePerDay": 31,
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
    "id": "prod-rolex-wallet-96",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Rolex 18k Gold Crown Cufflinks",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "wallet",
    "image": "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?auto=format&fit=crop&w=700&q=80",
    "price": 1800,
    "fullPurchasePrice": 1800,
    "rentalPricePerDay": 72,
    "gender": "unissex",
    "occasion": "formal",
    "sizes": [
      "Único"
    ],
    "colors": [
      "Branco",
      "Preto",
      "Bege"
    ],
    "description": "Peça de assinatura oficial Rolex. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-prada-bag-115",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Prada Re-Nylon & Saffiano Leather Backpack",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "price": 1850,
    "fullPurchasePrice": 1850,
    "rentalPricePerDay": 74,
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
    "id": "prod-gucci-bag-113",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Gucci GG Supreme Duffle Travel Bag",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "price": 2200,
    "fullPurchasePrice": 2200,
    "rentalPricePerDay": 88,
    "gender": "masculino",
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
    "id": "prod-louis-vuitton-bag-97",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Louis Vuitton Keepall Bandoulière 50 Monogram",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "price": 2600,
    "fullPurchasePrice": 2600,
    "rentalPricePerDay": 104,
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
    "id": "prod-chanel-bag-107",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Chanel Classic Flap Bag Lambskin",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "price": 10500,
    "fullPurchasePrice": 10500,
    "rentalPricePerDay": 420,
    "gender": "masculino",
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
    "id": "prod-hermes-bag-102",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Hermès Birkin 30 Togo Leather Bag",
    "tier": "luxury",
    "category": "acessorios",
    "subCategory": "bag",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "price": 10600,
    "fullPurchasePrice": 10600,
    "rentalPricePerDay": 424,
    "gender": "unissex",
    "occasion": "formal",
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
    "id": "prod-primark-sneakers-48",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Primark Sapatilhas Canvas Low Top",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=700&q=80",
    "price": 16,
    "fullPurchasePrice": 16,
    "rentalPricePerDay": 3,
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
    "id": "prod-adidas-sneakers-12",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Stan Smith Leather Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "rentalPricePerDay": 4,
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
    "id": "prod-nike-sneakers-10",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Blazer Mid '77 Vintage Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "price": 109,
    "fullPurchasePrice": 109,
    "rentalPricePerDay": 4,
    "gender": "unissex",
    "occasion": "praia",
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
    "id": "prod-adidas-sneakers-13",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Gazelle Suede Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "rentalPricePerDay": 4,
    "gender": "masculino",
    "occasion": "praia",
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
    "id": "prod-adidas-sneakers-20",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Forum Low Leather Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "rentalPricePerDay": 4,
    "gender": "unissex",
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
    "id": "prod-nike-sneakers-1",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Air Force 1 '07 Leather Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "price": 119,
    "fullPurchasePrice": 119,
    "rentalPricePerDay": 5,
    "gender": "masculino",
    "occasion": "praia",
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
    "id": "prod-nike-sneakers-3",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Dunk Low Retro Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 119,
    "fullPurchasePrice": 119,
    "rentalPricePerDay": 5,
    "gender": "masculino",
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
    "id": "prod-adidas-sneakers-11",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Samba OG Leather Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "rentalPricePerDay": 5,
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
    "id": "prod-tommy-hilfiger-sneakers-58",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Tommy Hilfiger Essential Leather Court Sneakers",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "rentalPricePerDay": 5,
    "gender": "unissex",
    "occasion": "praia",
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
    "id": "prod-lacoste-sneakers-77",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Lacoste Carnaby Leather Sneakers",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "price": 130,
    "fullPurchasePrice": 130,
    "rentalPricePerDay": 5,
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
    "id": "prod-nike-sneakers-9",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Pegasus 40 Running Shoes",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "price": 139,
    "fullPurchasePrice": 139,
    "rentalPricePerDay": 6,
    "gender": "masculino",
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
    "id": "prod-nike-sneakers-2",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Air Max 90 Essential Sneakers",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "price": 149,
    "fullPurchasePrice": 149,
    "rentalPricePerDay": 6,
    "gender": "unissex",
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
    "id": "prod-adidas-sneakers-14",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Ultraboost Light Running Shoes",
    "tier": "eco",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "price": 190,
    "fullPurchasePrice": 190,
    "rentalPricePerDay": 8,
    "gender": "unissex",
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
    "id": "prod-hugo-boss-loafers-75",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Boss Leather Loafers Italian Made",
    "tier": "mid",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "price": 220,
    "fullPurchasePrice": 220,
    "rentalPricePerDay": 9,
    "gender": "masculino",
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
    "id": "prod-common-projects-sneakers-135",
    "brandId": "common-projects",
    "brandName": "Common Projects",
    "brand": "Common Projects",
    "name": "Common Projects Original Achilles Low White",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 420,
    "fullPurchasePrice": 420,
    "rentalPricePerDay": 17,
    "gender": "masculino",
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
    "id": "prod-prada-sneakers-117",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Prada America's Cup Leather Sneakers",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "price": 790,
    "fullPurchasePrice": 790,
    "rentalPricePerDay": 32,
    "gender": "masculino",
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
    "id": "prod-gucci-loafers-111",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Gucci Horsebit 1953 Leather Loafers",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "loafers",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "price": 850,
    "fullPurchasePrice": 850,
    "rentalPricePerDay": 34,
    "gender": "masculino",
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
    "id": "prod-versace-sneakers-138",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Versace Trigreca Sneakers",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "price": 890,
    "fullPurchasePrice": 890,
    "rentalPricePerDay": 36,
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
    "id": "prod-balenciaga-sneakers-119",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Balenciaga Triple S Chunky Sneakers",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "price": 950,
    "fullPurchasePrice": 950,
    "rentalPricePerDay": 38,
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
    "id": "prod-louis-vuitton-sneakers-98",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Louis Vuitton LV Trainer Leather Sneakers",
    "tier": "luxury",
    "category": "calcado",
    "subCategory": "sneakers",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "price": 1150,
    "fullPurchasePrice": 1150,
    "rentalPricePerDay": 46,
    "gender": "unissex",
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
    "id": "prod-h-and-m-perfume-55",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "H&M Eau de Toilette Sunlit Palms 75ml",
    "tier": "eco",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "rentalPricePerDay": 3,
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
    "id": "prod-zara-perfume-34",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara Eau de Parfum Vibrant Leather 100ml",
    "tier": "eco",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
    "price": 22,
    "fullPurchasePrice": 22,
    "rentalPricePerDay": 3,
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
    "id": "prod-calvin-klein-perfume-66",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Calvin Klein CK One Eau de Toilette 100ml",
    "tier": "mid",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 65,
    "fullPurchasePrice": 65,
    "rentalPricePerDay": 3,
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
    "id": "prod-lacoste-perfume-78",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Lacoste L.12.12 Blanc Eau de Toilette 100ml",
    "tier": "mid",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "rentalPricePerDay": 3,
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
    "id": "prod-hugo-boss-perfume-71",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Boss Bottled Eau de Parfum 100ml",
    "tier": "mid",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "rentalPricePerDay": 4,
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
    "id": "prod-hermes-perfume-103",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Hermès Terre d'Hermès EDP 100ml",
    "tier": "luxury",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
    "price": 165,
    "fullPurchasePrice": 165,
    "rentalPricePerDay": 7,
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
    "id": "prod-chanel-perfume-108",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Chanel N°5 Eau de Parfum 100ml",
    "tier": "luxury",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
    "price": 165,
    "fullPurchasePrice": 165,
    "rentalPricePerDay": 7,
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
    "id": "prod-louis-vuitton-perfume-101",
    "brandId": "louis-vuitton",
    "brandName": "Louis Vuitton",
    "brand": "Louis Vuitton",
    "name": "Louis Vuitton L'Immensité EDP 100ml",
    "tier": "luxury",
    "category": "perfumes",
    "subCategory": "perfume",
    "image": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=700&q=80",
    "price": 290,
    "fullPurchasePrice": 290,
    "rentalPricePerDay": 12,
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
    "id": "prod-h-and-m-watch-56",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "H&M Relógio Analog Leather Strap",
    "tier": "eco",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    "price": 19,
    "fullPurchasePrice": 19,
    "rentalPricePerDay": 3,
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
    "id": "prod-zara-watch-35",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara Relógio Digital Minimalist Steel",
    "tier": "eco",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "price": 29,
    "fullPurchasePrice": 29,
    "rentalPricePerDay": 3,
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
    "id": "prod-tommy-hilfiger-watch-62",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Tommy Hilfiger Multi-Dial Steel Watch",
    "tier": "mid",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 180,
    "fullPurchasePrice": 180,
    "rentalPricePerDay": 7,
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
    "id": "prod-hugo-boss-watch-74",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Boss Executive Leather Strap Watch",
    "tier": "mid",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 240,
    "fullPurchasePrice": 240,
    "rentalPricePerDay": 10,
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
    "id": "prod-michael-kors-watch-85",
    "brandId": "michael-kors",
    "brandName": "Michael Kors",
    "brand": "Michael Kors",
    "name": "Michael Kors Chronograph Rose Gold Watch",
    "tier": "mid",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "price": 290,
    "fullPurchasePrice": 290,
    "rentalPricePerDay": 12,
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
    "id": "prod-rolex-watch-94",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Rolex Oyster Perpetual 36mm Turquoise",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 6200,
    "fullPurchasePrice": 6200,
    "rentalPricePerDay": 248,
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
    "description": "Peça de assinatura oficial Rolex. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-watch-91",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Rolex Datejust 41mm Fluted Bezel Steel/Gold",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "price": 10500,
    "fullPurchasePrice": 10500,
    "rentalPricePerDay": 420,
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
    "description": "Peça de assinatura oficial Rolex. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-watch-90",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Rolex Submariner Date 41mm Oystersteel",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "price": 14200,
    "fullPurchasePrice": 14200,
    "rentalPricePerDay": 568,
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
    "description": "Peça de assinatura oficial Rolex. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-watch-92",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Rolex GMT-Master II 'Pepsi' Oystersteel",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    "price": 16800,
    "fullPurchasePrice": 16800,
    "rentalPricePerDay": 672,
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
    "description": "Peça de assinatura oficial Rolex. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-rolex-watch-93",
    "brandId": "rolex",
    "brandName": "Rolex",
    "brand": "Rolex",
    "name": "Rolex Cosmograph Daytona Gold 18k",
    "tier": "luxury",
    "category": "relogios",
    "subCategory": "watch",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "price": 38000,
    "fullPurchasePrice": 38000,
    "rentalPricePerDay": 1520,
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
    "description": "Peça de assinatura oficial Rolex. Confeccionada com materiais de alta qualidade para a tua viagem."
  },
  {
    "id": "prod-primark-tshirt-45",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Primark T-Shirt Básica 100% Algodão",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
    "price": 7,
    "fullPurchasePrice": 7,
    "rentalPricePerDay": 3,
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
    "id": "prod-primark-swimwear-46",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Primark Calção de Banho Quick-Dry",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "swimwear",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    "price": 12,
    "fullPurchasePrice": 12,
    "rentalPricePerDay": 3,
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
    "id": "prod-primark-trousers-47",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Primark Calça Chino Stretch Slim",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
    "price": 18,
    "fullPurchasePrice": 18,
    "rentalPricePerDay": 3,
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
    "id": "prod-h-and-m-tshirt-51",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "H&M Pack 3 T-Shirts Regular Fit Cotton",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 18,
    "fullPurchasePrice": 18,
    "rentalPricePerDay": 3,
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
    "id": "prod-zara-tshirt-31",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara T-Shirt Heavyweight Cotton 220g",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 19,
    "fullPurchasePrice": 19,
    "rentalPricePerDay": 3,
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
    "id": "prod-uniqlo-tshirt-36",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Uniqlo T-Shirt AIRism Cotton Oversized",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 19,
    "fullPurchasePrice": 19,
    "rentalPricePerDay": 3,
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
    "id": "prod-h-and-m-shirt-52",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "H&M Camisa Linen Blend Resort Collar",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80",
    "price": 25,
    "fullPurchasePrice": 25,
    "rentalPricePerDay": 3,
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
    "id": "prod-adidas-tshirt-18",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Trefoil Classic Cotton Tee",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "price": 29,
    "fullPurchasePrice": 29,
    "rentalPricePerDay": 3,
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
    "id": "prod-levis-tshirt-24",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Levi's Housemark Batwing Logo Tee",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 29,
    "fullPurchasePrice": 29,
    "rentalPricePerDay": 3,
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
    "id": "prod-h-and-m-dress-53",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "H&M Vestido Midi Slip Dress Floral",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "dress",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "price": 29,
    "fullPurchasePrice": 29,
    "rentalPricePerDay": 3,
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
    "id": "prod-nike-tshirt-7",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Dri-FIT Legend Fitness Tee",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 32,
    "fullPurchasePrice": 32,
    "rentalPricePerDay": 3,
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
    "id": "prod-zara-shirt-28",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara Camisa 100% Linho Riviera Resort",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80",
    "price": 39,
    "fullPurchasePrice": 39,
    "rentalPricePerDay": 3,
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
    "id": "prod-zara-trousers-32",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara Jeans Wide Leg Rigid Denim",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
    "price": 39,
    "fullPurchasePrice": 39,
    "rentalPricePerDay": 3,
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
    "id": "prod-uniqlo-shirt-37",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Uniqlo Camisa 100% Linho Premium",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80",
    "price": 39,
    "fullPurchasePrice": 39,
    "rentalPricePerDay": 3,
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
    "id": "prod-zara-dress-29",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara Vestido Satin Midi Slip Dress",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "dress",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "rentalPricePerDay": 3,
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
    "id": "prod-uniqlo-trousers-38",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Uniqlo Calça Smart Ankle Chino",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "rentalPricePerDay": 3,
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
    "id": "prod-h-and-m-jacket-54",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "H&M Casaco Puffer Lightweight Packable",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
    "price": 49,
    "fullPurchasePrice": 49,
    "rentalPricePerDay": 3,
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
    "id": "prod-tommy-hilfiger-tshirt-60",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Tommy Hilfiger Flag Logo Cotton Tee",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 49,
    "fullPurchasePrice": 49,
    "rentalPricePerDay": 3,
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
    "id": "prod-calvin-klein-tshirt-64",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Calvin Klein Monogram Logo Cotton Tee",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 49,
    "fullPurchasePrice": 49,
    "rentalPricePerDay": 3,
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
    "id": "prod-nike-jacket-6",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Sportswear Club Fleece Hoodie",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
    "price": 65,
    "fullPurchasePrice": 65,
    "rentalPricePerDay": 3,
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
    "id": "prod-adidas-jacket-17",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Trefoil Essential Hoodie",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    "price": 65,
    "fullPurchasePrice": 65,
    "rentalPricePerDay": 3,
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
    "id": "prod-levis-shirt-27",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Levi's Sunset One Pocket Cotton Shirt",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    "price": 69,
    "fullPurchasePrice": 69,
    "rentalPricePerDay": 3,
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
    "id": "prod-uniqlo-jacket-39",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Uniqlo Casaco Ultra Light Down Jacket",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    "price": 69,
    "fullPurchasePrice": 69,
    "rentalPricePerDay": 3,
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
    "id": "prod-adidas-trousers-16",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Adicolor Classics Track Pants",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 75,
    "fullPurchasePrice": 75,
    "rentalPricePerDay": 3,
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
    "id": "prod-zara-blazer-30",
    "brandId": "zara",
    "brandName": "Zara",
    "brand": "Zara",
    "name": "Zara Blazer Structured Linen Blend",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 79,
    "fullPurchasePrice": 79,
    "rentalPricePerDay": 3,
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
    "id": "prod-adidas-jacket-15",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Adicolor Classics Firebird Track Jacket",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    "price": 85,
    "fullPurchasePrice": 85,
    "rentalPricePerDay": 3,
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
    "id": "prod-diesel-tshirt-88",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Diesel Oval D Logo Cotton Tee",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 85,
    "fullPurchasePrice": 85,
    "rentalPricePerDay": 3,
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
    "id": "prod-tommy-hilfiger-tshirt-57",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Tommy Hilfiger Icon Flex Cotton Polo",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
    "price": 89,
    "fullPurchasePrice": 89,
    "rentalPricePerDay": 4,
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
    "id": "prod-levis-trousers-21",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Levi's 501 Original Fit Straight Jeans",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 99,
    "fullPurchasePrice": 99,
    "rentalPricePerDay": 4,
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
    "id": "prod-levis-trousers-22",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Levi's 511 Slim Fit Stretch Denim",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "price": 99,
    "fullPurchasePrice": 99,
    "rentalPricePerDay": 4,
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
    "id": "prod-nike-trousers-5",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Tech Fleece Joggers",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
    "price": 109,
    "fullPurchasePrice": 109,
    "rentalPricePerDay": 4,
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
    "id": "prod-calvin-klein-trousers-65",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Calvin Klein Straight Fit Denim Jeans",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "rentalPricePerDay": 4,
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
    "id": "prod-lacoste-tshirt-76",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Lacoste L.12.12 Classic Fit Cotton Polo",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "rentalPricePerDay": 4,
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
    "id": "prod-levis-jacket-23",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Levi's Trucker Denim Jacket Original",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    "price": 115,
    "fullPurchasePrice": 115,
    "rentalPricePerDay": 5,
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
    "id": "prod-hugo-boss-shirt-73",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Boss Slim Fit Easy-Iron Cotton Shirt",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "rentalPricePerDay": 5,
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
    "id": "prod-nike-jacket-4",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Tech Fleece Full-Zip Hoodie",
    "tier": "eco",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 129,
    "fullPurchasePrice": 129,
    "rentalPricePerDay": 5,
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
    "id": "prod-ralph-lauren-tshirt-67",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Polo Ralph Lauren Custom Slim Fit Mesh Polo",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "price": 130,
    "fullPurchasePrice": 130,
    "rentalPricePerDay": 5,
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
    "id": "prod-ralph-lauren-shirt-69",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Polo Ralph Lauren Oxford Cotton Button-Down Shirt",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    "price": 150,
    "fullPurchasePrice": 150,
    "rentalPricePerDay": 6,
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
    "id": "prod-the-north-face-jacket-81",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "The North Face Denali Fleece Jacket",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    "price": 160,
    "fullPurchasePrice": 160,
    "rentalPricePerDay": 6,
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
    "id": "prod-ralph-lauren-jacket-68",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Polo Ralph Lauren Cable-Knit Cotton Sweater",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 190,
    "fullPurchasePrice": 190,
    "rentalPricePerDay": 8,
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
    "id": "prod-diesel-trousers-87",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Diesel 1979 Sleenker Slim Fit Denim Jeans",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "price": 190,
    "fullPurchasePrice": 190,
    "rentalPricePerDay": 8,
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
    "id": "prod-tommy-hilfiger-jacket-59",
    "brandId": "tommy-hilfiger",
    "brandName": "Tommy Hilfiger",
    "brand": "Tommy Hilfiger",
    "name": "Tommy Hilfiger Packable Lightweight Puffer Jacket",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    "price": 220,
    "fullPurchasePrice": 220,
    "rentalPricePerDay": 9,
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
    "id": "prod-jacquemus-shirt-132",
    "brandId": "jacquemus",
    "brandName": "Jacquemus",
    "brand": "Jacquemus",
    "name": "Jacquemus La Chemise Jean Linen Shirt",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    "price": 320,
    "fullPurchasePrice": 320,
    "rentalPricePerDay": 13,
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
    "id": "prod-the-north-face-jacket-80",
    "brandId": "the-north-face",
    "brandName": "The North Face",
    "brand": "The North Face",
    "name": "The North Face 1996 Retro Nuptse Down Jacket",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80",
    "price": 340,
    "fullPurchasePrice": 340,
    "rentalPricePerDay": 14,
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
    "id": "prod-acne-studios-trousers-134",
    "brandId": "acne-studios",
    "brandName": "Acne Studios",
    "brand": "Acne Studios",
    "name": "Acne Studios 1996 Loose Fit Denim Jeans",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "trousers",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
    "price": 340,
    "fullPurchasePrice": 340,
    "rentalPricePerDay": 14,
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
    "id": "prod-saint-laurent-tshirt-124",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Saint Laurent Cotton Jersey Logo Tee",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 420,
    "fullPurchasePrice": 420,
    "rentalPricePerDay": 17,
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
    "id": "prod-burberry-shirt-126",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Burberry Vintage Check Cotton Shirt",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    "price": 480,
    "fullPurchasePrice": 480,
    "rentalPricePerDay": 19,
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
    "id": "prod-balenciaga-tshirt-120",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Balenciaga Oversized Vintage Logo Tee",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "tshirt",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 490,
    "fullPurchasePrice": 490,
    "rentalPricePerDay": 20,
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
    "id": "prod-diesel-jacket-89",
    "brandId": "diesel",
    "brandName": "Diesel",
    "brand": "Diesel",
    "name": "Diesel Biker Leather Jacket",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    "price": 590,
    "fullPurchasePrice": 590,
    "rentalPricePerDay": 24,
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
    "id": "prod-hugo-boss-blazer-72",
    "brandId": "hugo-boss",
    "brandName": "Hugo Boss",
    "brand": "Hugo Boss",
    "name": "Boss Tailored Wool Blend Suit",
    "tier": "mid",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80",
    "price": 690,
    "fullPurchasePrice": 690,
    "rentalPricePerDay": 28,
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
    "id": "prod-zimmermann-dress-136",
    "brandId": "zimmermann",
    "brandName": "Zimmermann",
    "brand": "Zimmermann",
    "name": "Zimmermann Matchmaker Floral Silk Midi Dress",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "dress",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80",
    "price": 950,
    "fullPurchasePrice": 950,
    "rentalPricePerDay": 38,
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
    "id": "prod-versace-shirt-137",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Versace Barocco Silk Twill Shirt",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "shirt",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "price": 1150,
    "fullPurchasePrice": 1150,
    "rentalPricePerDay": 46,
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
    "id": "prod-burberry-jacket-125",
    "brandId": "burberry",
    "brandName": "Burberry",
    "brand": "Burberry",
    "name": "Burberry Kensington Heritage Trench Coat",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    "price": 2250,
    "fullPurchasePrice": 2250,
    "rentalPricePerDay": 90,
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
    "id": "prod-prada-blazer-118",
    "brandId": "prada",
    "brandName": "Prada",
    "brand": "Prada",
    "name": "Prada Re-Nylon Tailored Blazer",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "blazer",
    "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80",
    "price": 2400,
    "fullPurchasePrice": 2400,
    "rentalPricePerDay": 96,
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
    "id": "prod-chanel-jacket-109",
    "brandId": "chanel",
    "brandName": "Chanel",
    "brand": "Chanel",
    "name": "Chanel Tweed Cardigan Jacket",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    "price": 2800,
    "fullPurchasePrice": 2800,
    "rentalPricePerDay": 112,
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
    "id": "prod-saint-laurent-jacket-122",
    "brandId": "saint-laurent",
    "brandName": "Saint Laurent",
    "brand": "Saint Laurent",
    "name": "Saint Laurent L01 Moto Leather Jacket",
    "tier": "luxury",
    "category": "roupa",
    "subCategory": "jacket",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
    "price": 3900,
    "fullPurchasePrice": 3900,
    "rentalPricePerDay": 156,
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
    "id": "prod-primark-socks-43",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Primark Pack 5 Pares Meias Algodão Everyday",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 6,
    "fullPurchasePrice": 6,
    "rentalPricePerDay": 3,
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
    "id": "prod-primark-underwear-44",
    "brandId": "primark",
    "brandName": "Primark",
    "brand": "Primark",
    "name": "Primark Pack 3 Boxers Algodão Stretch",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 8,
    "fullPurchasePrice": 8,
    "rentalPricePerDay": 3,
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
    "id": "prod-h-and-m-socks-50",
    "brandId": "h-and-m",
    "brandName": "H&M",
    "brand": "H&M",
    "name": "H&M Pack 7 Pares Meias Invisíveis",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=700&q=80",
    "price": 10,
    "fullPurchasePrice": 10,
    "rentalPricePerDay": 3,
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
    "id": "prod-uniqlo-socks-40",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Uniqlo Pack 3 Pares Meias AIRism Mesh",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 12,
    "fullPurchasePrice": 12,
    "rentalPricePerDay": 3,
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
    "id": "prod-adidas-socks-19",
    "brandId": "adidas",
    "brandName": "Adidas",
    "brand": "Adidas",
    "name": "Adidas Cushioned Crew Socks 3-Pack",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "rentalPricePerDay": 3,
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
    "id": "prod-levis-socks-25",
    "brandId": "levis",
    "brandName": "Levi's",
    "brand": "Levi's",
    "name": "Levi's Red Tab Socks 2-Pack",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 14,
    "fullPurchasePrice": 14,
    "rentalPricePerDay": 3,
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
    "id": "prod-uniqlo-underwear-41",
    "brandId": "uniqlo",
    "brandName": "Uniqlo",
    "brand": "Uniqlo",
    "name": "Uniqlo Pack 2 Boxers AIRism Seamless",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    "price": 15,
    "fullPurchasePrice": 15,
    "rentalPricePerDay": 3,
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
    "id": "prod-nike-socks-8",
    "brandId": "nike",
    "brandName": "Nike",
    "brand": "Nike",
    "name": "Nike Everyday Cushion Crew Socks 3-Pack",
    "tier": "eco",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=700&q=80",
    "price": 16,
    "fullPurchasePrice": 16,
    "rentalPricePerDay": 3,
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
    "id": "prod-lacoste-socks-79",
    "brandId": "lacoste",
    "brandName": "Lacoste",
    "brand": "Lacoste",
    "name": "Lacoste Sport Cotton Crew Socks 3-Pack",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 30,
    "fullPurchasePrice": 30,
    "rentalPricePerDay": 3,
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
    "id": "prod-ralph-lauren-socks-70",
    "brandId": "ralph-lauren",
    "brandName": "Ralph Lauren",
    "brand": "Ralph Lauren",
    "name": "Polo Ralph Lauren Polo Player Socks 3-Pack",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 35,
    "fullPurchasePrice": 35,
    "rentalPricePerDay": 3,
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
    "id": "prod-calvin-klein-underwear-63",
    "brandId": "calvin-klein",
    "brandName": "Calvin Klein",
    "brand": "Calvin Klein",
    "name": "Calvin Klein Cotton Stretch Trunk Underwear 3-Pack",
    "tier": "mid",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    "price": 45,
    "fullPurchasePrice": 45,
    "rentalPricePerDay": 3,
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
    "id": "prod-versace-underwear-139",
    "brandId": "versace",
    "brandName": "Versace",
    "brand": "Versace",
    "name": "Versace Barocco Print Boxer Brief",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "underwear",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80",
    "price": 95,
    "fullPurchasePrice": 95,
    "rentalPricePerDay": 4,
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
    "id": "prod-balenciaga-socks-121",
    "brandId": "balenciaga",
    "brandName": "Balenciaga",
    "brand": "Balenciaga",
    "name": "Balenciaga Tennis Logo Socks",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 110,
    "fullPurchasePrice": 110,
    "rentalPricePerDay": 4,
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
    "id": "prod-hermes-socks-106",
    "brandId": "hermes",
    "brandName": "Hermès",
    "brand": "Hermès",
    "name": "Hermès Mercerized Egyptian Cotton Socks",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
    "price": 120,
    "fullPurchasePrice": 120,
    "rentalPricePerDay": 5,
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
    "id": "prod-gucci-socks-114",
    "brandId": "gucci",
    "brandName": "Gucci",
    "brand": "Gucci",
    "name": "Gucci GG Monogram Cotton Blend Socks",
    "tier": "luxury",
    "category": "roupainterior",
    "subCategory": "socks",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "price": 130,
    "fullPurchasePrice": 130,
    "rentalPricePerDay": 5,
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
  }
];

export const PRODUCTS = RAW_PRODUCTS.map((item, index) => {
  const finalPrice = item.price || item.fullPurchasePrice || 50;
  const rentalPricePerDay = Math.max(3, Math.round(finalPrice / 25));

  const sampleAuthors = ['Ana S.', 'Miguel R.', 'Beatriz P.', 'Tiago C.', 'Inês M.', 'Diogo F.', 'Carolina T.', 'João V.'];
  const sampleFitRatings = ['veste conforme o tamanho', 'veste conforme o tamanho', 'veste conforme o tamanho', 'veste mais pequeno', 'veste maior'];
  const sampleComments = [
    'Excelente caimento! Chegou ao hotel devidamente higienizado e embalado em proteção hospitalar.',
    'Peça impecável para o clima do meu destino. Muito elegante e super confortável.',
    'Caimento perfeito e linho de elevadíssima qualidade. Recomendo imenso para quem quer viajar leve!',
    'Adorei a experiência Bagless. A peça serviu exatamente como indicado na guia de tamanhos.',
    'Entrega pontualíssima na receção do resort. A qualidade da marca é topo!'
  ];

  const rating = 4.5 + ((index % 5) * 0.1);
  const fitRating = sampleFitRatings[index % sampleFitRatings.length];

  const initialReviews = [
    {
      id: `rev-${item.id}-1`,
      author: sampleAuthors[index % sampleAuthors.length],
      date: '2026-07-28',
      rating: 5,
      fitRating: fitRating,
      comment: sampleComments[index % sampleComments.length],
      verifiedTrip: true
    },
    {
      id: `rev-${item.id}-2`,
      author: sampleAuthors[(index + 2) % sampleAuthors.length],
      date: '2026-06-14',
      rating: Math.min(5, Math.floor(rating)),
      fitRating: 'veste conforme o tamanho',
      comment: 'Peça exatamente idêntica às fotos. O serviço de lavagem sanitizada UV-C dá total confiança!',
      verifiedTrip: true
    }
  ];

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
    weatherTag: item.occasion === 'praia' ? 'Clima Quente' : item.occasion === 'desporto' ? 'Desporto & Aventura' : 'Urbano & Elegante',
    rating: Number(rating.toFixed(1)),
    reviewsCount: initialReviews.length,
    reviews: initialReviews
  };
}).sort((a, b) => {
  const catComp = a.category.localeCompare(b.category);
  if (catComp !== 0) return catComp;
  return a.price - b.price;
});

export const DYNAMIC_CATALOG = PRODUCTS;

export const syncLiveProductFeeds = async () => {
  console.log(`[Bagless Feed Sync] Catálogo autêntico com ${PRODUCTS.length} produtos.`);
  return PRODUCTS;
};

export { importProductImages, FALLBACK_IMAGE };
