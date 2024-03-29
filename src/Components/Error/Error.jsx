import React from 'react'
import { Link } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'

const Error = () => {
  return (
    <div>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">DeepAudio</strong>
          </Toast.Header>
          <Toast.Body>
            <div>
              <i className="fa-solid fa-circle-exclamation"/>
            </div>
            <div>
              <h2 style={{color:'crimson',fontSize:'3rem'}}>Error! Sus direcciones de correo son diferentes</h2>
              <p>Verifique su direccion y asegurese que sea la misma</p>
            </div>
            <Link to='/cart'><button type='button' className="btn btn-danger rounded-pill mt-3">Reintentar</button></Link>
          </Toast.Body>
        </Toast>
    </div>
  )
}

