import React, { Component } from 'react';
import axios from 'axios';
import './perritoForm.css'; // Importa el archivo CSS

class PerritoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      raza: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, raza } = this.state;

    axios.post('http://localhost:5000/perritos', { nombre, raza })
      .then(() => alert('Perrito insertada correctamente'))
      .catch(() => alert('Error insertando perrito'));
  };

  render() {
    return (
      <div>
        <h1>Formulario de Perrito</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="raza">Raza:</label>
            <input
              type="text"
              id="raza"
              name="raza"
              value={this.state.raza}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default PerritoForm;