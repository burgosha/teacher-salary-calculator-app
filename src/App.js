import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="container-sm p-3 mb-2 bg-light">
          <select className="form-select" aria-label="Default select example">
            <option selected>Seleccione Nivel y/o Modalidad</option>
            <option value="1">Incial</option>
            <option value="2">Primaria</option>
            <option value="3">Secundaria</option>
            <option value="4">Adultos</option>
            <option value="5">Especial</option>
            <option value="6">Superior</option>
            <option value="7">Psicología</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
