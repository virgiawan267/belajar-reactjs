import React from 'react'
import Blog from './Blog'

const Home = () => {
    return <div>
        <Blog 
        tanggal="09 Juni 2020"
        judul="Teknologi Blockchain"
        summary="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."/>
        <Blog 
        tanggal="10 Juni 2020"
        judul="Teknologi Internet"
        summary="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."/>
        <Blog 
        tanggal="11 Juni 2020"
        judul="Teknologi Reactjs"
        summary="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."/>

    </div>
}

export default Home;