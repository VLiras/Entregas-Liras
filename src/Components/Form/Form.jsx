import React from 'react'

const Form = (props) => {
    console.log(props.data.name)
  return (
    <div className='order border rounded-4 bg-dark p-3 w-50 center'>
        <Form onSubmit={props.submit}>
                    <h2>Datos del Comprador</h2><hr />
                    <div className="row">
                        <Form.Group className="mb-3 col-6" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" onChange={props.change} value={props.data.name} placeholder="Nombre" required />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" name="lastName" onChange={props.change} value={props.data.lastName} placeholder="Apellido" required />
                        </Form.Group>
                        <Form.Text className="text-muted col-12">
                            La informacion contenida en este formulario no sera compartida bajo ningun criterio.
                        </Form.Text>
                    </div>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="tel" name="phone" onChange={props.change} value={props.data.phone} className="w-75 center" placeholder="11-1234-5678" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={props.change} value={props.data.email} className="w-75 center" placeholder="nombre@example.com" required/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="confirmEmail">
                        <Form.Label>Confimar Email</Form.Label>
                        <Form.Control type="text" name="confirmEmail" onChange={props.change.confirmEmail} className="w-75 center" value={props.data} required/>
                    </Form.Group><hr/>
                    <div className="formFooter row">
                        <div className="col-6 p-1">
                            <Button variant="danger" type="submit" className="formButton rounded-pill">
                            Cancelar
                            </Button>
                        </div>
                        <div className="col-6 p-1">
                            <Button variant="primary" onClick={(event) => createOrder(event)} type="submit" className="formButton rounded-pill">
                             Generar Orden
                            </Button>
                        </div>
                    </div>
        </Form>
    </div>
  )
}

export default Form