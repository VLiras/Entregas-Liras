const Text = ({ condition = false }) => {
    const estiloText = { color: condition ? 'green' : 'red', fontSize: '10vw' };
    return <h3 style={estiloText}>Estilo</h3>;
  };
  const atribute = ({ stock = 0 }) => {
    return <h3 className={stock != 0 ? 'alerta' : 'alertaPeligrosa'}>Stock</h3>;
  };

  const multiClass = ({ condition = true, otro }) => {
    return (
      <h3 className={`${condition ? 'green' : 'red'} ${otro || ''}`}>
        Multiples Clases
      </h3>
    );
  };