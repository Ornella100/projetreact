
import im1 from './images/im1.jpg'
import im2 from './images/img2.jpg'
 import im6 from './images/img6.jpg'
 import im4 from './images/img4.jpg'
 import im5 from './images/img5.jpg'
 import im7 from './images/img7.jpg'

 export const restaurants = [
  {
    id: 'ctn1',
    city: 'Cotonou',
    name: 'Le Jardin Bio',
    description: 'Cuisine locale bio.FF',
    category: 'Restaurant Bio',
    lat: 6.370, 
    lng: 2.420, 
    address: 'Rue XYZ, Cotonou',
    rating: 4.8,
    image: im1, 
    kilo:'0.8 km',
    deliveryTime: '25-35 min',
  },
  {
    id: 'ctn2',
    city: 'Cotonou',
    name: 'Saveurs Naturelles',
    description: 'Végétarien & Bio.FFF',
    category: 'Restaurant Bio',
    lat: 6.380,
    lng: 2.430,
    address: 'Avenue ABC, Cotonou',
    rating: 4.6,
    kilo:'1.2 km',
    image: im2,
    deliveryTime: '30-40 min'
  },
  {
    id: 'ctn3',
    city: 'Cotonou',
    name: 'Terra Verde',
    description: 'Farm to table.FFFF',
    category: 'Restaurant Bio',
    lat: 6.390,
    lng: 2.400,
    kilo:'2.1 km ',
    address: 'Quartier XYZ, Cotonou',
    rating: 4.9,
    image:im6,
    deliveryTime: '35-45 min',
  },
  {
    id: 'pn1',
    city: 'Porto-Novo',
    name: 'Bio Capital',
    description: 'Gastronomie bio.FF',
    category: 'Restaurant Bio',
    lat: 6.500,
    lng: 2.600,
    address: 'Centre-ville, Porto-Novo',
    rating: 4.5,
    kilo:'0.7 km',
    image:im4,
    deliveryTime: '20-30 min',
  },
  {
    id: 'lk1',
    city: 'Lokossa',
    name: 'Bio Lokossa',
    description: 'Cuisine traditionnelle.FF',
    category: 'Restaurant Bio',
    lat: 6.630,
    lng: 1.720,
    address: 'Rue du Marché, Lokossa',
    rating: 4.3,
    kilo:'0.5 km',
    image:im5,
    deliveryTime: '20-30 min'
  },
  {
    id: 'lk2',
    city: 'Lokossa',
    name: 'Vert Lokossa',
    description: ' Bio moderne.FF',
    category: 'Restaurant Bio',
    lat: 6.530,
    lng: 1.220,
    address: 'Rue du Marché, Lokossa',
    rating: 4.3,
    kilo:'1.0 km',
    image:im5,
    deliveryTime: '25-35 min',
  },
  {
    id: 'pk1',
    city: 'Parakou',
    name: 'Nord bio',
    description: 'Spécialité Nord.FFF',
    category: 'Restaurant Bio',
    lat: 9.340,
    lng: 2.620,
    kilo:'1.5 km',
    address: 'Avenue des Ministères, Parakou',
    rating: 4.4,
    image:im7,
    deliveryTime: '20-30 min',
  }
]

export default restaurants
