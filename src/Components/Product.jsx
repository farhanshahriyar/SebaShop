import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, Button } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' height={300} />
        </Link>
    
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <h3>{product.name}</h3>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}> 
                </Rating>
            </Card.Text>

            <Card.Text as='h4'>
               IMDB {product.IMDB} 
               <br></br>
                {product.quality}
            </Card.Text>

            <Card>
            <Button className='btn btn-primary' href={product.downloadLink}>Direct Download</Button>
            </Card>

        </Card.Body>
    </Card>
  )
}

export default Product
