const AddCart = () => {
  return (
    <div>
        {/* Va en ItemDetail */}
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">DeepAudio</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>
                <h3>Woohoo, you're reading this text in a Toast!</h3>
                <button type='button'>Ir al Cart</button>
            </Toast.Body>
        </Toast>
    </div>
  )
}

