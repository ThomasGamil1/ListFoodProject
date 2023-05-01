import React from 'react'
import { Col, Row } from 'react-bootstrap';

const ListFood = ({filterCategory, allCategory}) => {
  const onFilter = (cat) =>{
    filterCategory(cat)
  }
  return (
    <Row className='my-2 mb-5'>
      <Col sm="12" className='d-flex justify-content-center'>
        {
         allCategory.length >=1 ?(
          allCategory.map((cat) =>{
            return (
              <div>
                <button onClick={() =>onFilter(cat)} className='btn-list p-2 mx-2'>{cat}</button>
              </div>
            )
            })
            ) : <h3>there is no category</h3> 
        }
      </Col>
    </Row>
  )
}

export default ListFood