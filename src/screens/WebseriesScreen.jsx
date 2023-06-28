import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'

const WebseriesScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () =>{
        const {data} = await axios.get('/api/MovieDB')
        setProducts(data)
      }
      fetchProducts()
    }, [])
  
  return (
    <div>
        <h1>Latest Series</h1>
      <Row>
        {products.filter(item => item.type=='Web-Series').map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default WebseriesScreen
