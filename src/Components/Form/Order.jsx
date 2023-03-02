import { Form,Button } from "react-bootstrap"

const Order = () => {
     

    return(
      <div style={{fontSize:'2vw'}} className="order border rounded-4 bg-dark p-3 w-50 center">
        <Form className="">
          <div className="row">
          <Form.Group className="mb-3 col-6" controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3 col-6" controlId="formLastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
          <Form.Text className="text-muted col-12">
          We'll never share your email with anyone else.
          </Form.Text>
          </div>
          
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="tel" className="w-75 center" placeholder="11-1234-5678" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" className="w-75 center" placeholder="nombre@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmEmail">
            <Form.Label>Confimar Email</Form.Label>
            <Form.Control type="email" className="w-75 center" />
          </Form.Group><hr/>
          <div className="formFooter row">
          <div className="col-6 p-1">
          <Button style={{fontSize:'1rem',width:'6rem'}} variant="danger" type="submit" className="rounded-pill">
            Cancelar
          </Button>
          </div>
          <div className="col-6 p-1">
          <Button style={{fontSize:'1rem',width:'6rem'}} variant="primary" type="submit" className="rounded-pill">
            Enviar
          </Button>
          </div>
          </div>
        </Form>
      </div>
    )
}
export default Order