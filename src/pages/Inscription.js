import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

function Inscription() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation,setPasswordConfirmation] = useState("")
  const [validationError,setValidationError] = useState({})

  

const inscription = async (e) => {
  e.preventDefault();
  const formData = new FormData()

    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('password_confirmation', password_confirmation)


  await axios.post(`http://localhost:8000/api/users/inscription`, formData).then(({data})=>{
    Swal.fire({
      icon:"success",
      text:data.message
    })
    navigate("/Produit")
  }).catch(({response})=>{
    if(response.status===422){
      setValidationError(response.data.errors)
    }else{
      Swal.fire({
        text:response.data.message,
        icon:"error"
      })
    }
  })
}
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-12 col-md-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Create Product</h4>
            <hr />
            <div className="form-wrapper">
              {
                Object.keys(validationError).length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-danger">
                        <ul className="mb-0">
                          {
                            Object.entries(validationError).map(([key, value])=>(
                              <li key={key}>{value}</li>   
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              }
     
    <Form  onSubmit={inscription}>
  
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(event)=>{
                              setName(event.target.value)
                            }}  placeholder="Entrez nom"/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Email" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={email} onChange={(event)=>{
                              setEmail(event.target.value)
                            }}  placeholder="Entrez Email"/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Password" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(event)=>{
                              setPassword(event.target.value)
                            }}  placeholder="Entrez password"/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Password_confirmation" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password_confirmation} onChange={(event)=>{
                              setPasswordConfirmation(event.target.value)
                            }}  placeholder="Entrez Password_confirmation"/>
                        </Form.Group>
                      </Col>  
                  </Row>
  
   
    <Button variant="primary" type="submit">
      Submit
      </Button>
  </Form>

             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
            }

export default Inscription;