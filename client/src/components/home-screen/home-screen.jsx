import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
//import { data } from '../../data/data';
import axios from 'axios'

import './home-screen.css'


const reducer = (state, action) => {

    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true }

        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false }

        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}


const HomeScreen = () => {
    //const [products, setProducts] = useState([])

    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        products: []
    })

    useEffect(() => {
        const getData = async () => {

            dispatch({ type: "FETCH_REQUEST" })
            try {
                let result = await axios.get('http://localhost:5000/api/v1/products')
                dispatch({ type: "FETCH_SUCCESS", payload: result.data.products })

            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message })
            }

            //console.log(result.data.products);
            // setProducts(result.data.products)
        }

        getData()
    }, [])

    return (
        <>
            <section className='product-container'>
                <h1>Featured Products</h1>
                <section className='products'>
                    {loading ?
                        <div>Loading...</div>
                        :


                        error ?
                            <div>{error}</div>

                            :

                            products.map((product) => {
                                return (
                                    <section key={product.id} className='product'>
                                        <img src={product.image} alt={product.name} />
                                        <article className='product-info'>
                                            <Link to={`product/${product.url}`}><p>{product.name}</p></Link>
                                            <p className='product-price'>$ {product.price}</p>
                                            <button>Add to cart</button>
                                        </article>

                                    </section>
                                )
                            })
                    }

                </section>
            </section>
        </>
    )
}

export default HomeScreen;