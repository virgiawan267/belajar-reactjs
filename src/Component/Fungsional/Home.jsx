import React from 'react'
import Produk from '../Class/Produk';
//import Blog from './Blog'

const Home = () => {
    return <div>
        <Produk nama="Dell XPS 15 Laptop" stock="12" harga="16000000" />
        <Produk nama="Dell XPS 16 Laptop" stock="10" harga="17000000" />
        <Produk nama="Dell XPS 17 Laptop" stock="19" harga="18000000" />
        <Produk nama="Dell XPS 18 Laptop" stock="25" harga="19000000" />
    </div>
}

export default Home;