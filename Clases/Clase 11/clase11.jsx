const Text = ({ condition = false }) => {
    const estiloText = { color: condition ? 'green' : 'red', fontSize: '10vw' };
    return <h3 style={estiloText}>Estilo</h3>;
  };
  const atribute = ({ stock = 0 }) => {
    return <h3 className={stock != 0 ? 'alert alert-success' : 'alert alert-danger'}>Stock</h3>;
  };
  
  const multiClass = ({ condition = true, other }) => {
    return (
      <h3 className={`${condition ? 'green' : 'red'} ${other || ''}`}>
        Multiples Clases
      </h3>
    );
  };
  
  const pasandoObjetos = ({condition = false,other='mt-5'}) => {
    const props = condition ? 
      {
        className:`alert alert-success ${other || ''}`,
        style:{color:'red'},
        title:'Titulo de condicion verdadera'
      }
      :
      {
        className:`alert alert-warning ${other || ""}`,
        style:{color:'green'}
      }
      return <h3 {...props}>Ud esta logueado</h3>
  }