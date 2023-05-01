import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Foods = ({itemData}) => {
  return (
    <Row>
      {
        itemData.length >= 1 ? (itemData.map((item) =>{
          return (<Col key={item.id} sm="12" className='mb-3'>
          <Card className='d-flex flex-row' style={{backgroundColor: '#f8f8f8'}}>
            <Card.Img style={{width : 250}}  className="img-item" variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'>
                <div className='item-title'>{item.title}</div>
                <div className='item-price'>{item.price}</div>
              </Card.Title>
              <Card.Text>
                <div className='item-description'>
                    {item.description}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>)
        })) : <h3>There Is No Items</h3>
      }
      
    </Row>
  )
}

export default Foods