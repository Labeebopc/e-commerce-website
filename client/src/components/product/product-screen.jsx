import React from 'react'
import { useParams } from 'react-router-dom'
import './product-screen.css'


const ProductScreen = () => {
    //To use the params from url
    const params=useParams();
    const {url} = params;
    return (
        <>
        <h2>{url}</h2>
        </>
    )
}

export default ProductScreen;