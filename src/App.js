import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="container-sm p-3 bg-light">
          <select className="nivel form-select mb-3" aria-label="Default select example">
            <option selected>Seleccione Nivel y/o Modalidad</option>
            <option value="1">Incial</option>
            <option value="2">Primaria</option>
            <option value="3">Secundaria</option>
            <option value="4">Adultos</option>
            <option value="5">Especial</option>
            <option value="6">Superior</option>
            <option value="7">Psicología</option>
          </select>
          <select className="cargo form-select mb-3" aria-label="Default select example">
            <option selected>Seleccione el Cargo</option>
            <option value="1">Inicial - Asesor Docente</option>
            <option value="2">Inicial - Bibliotecario</option>
            <option value="3">Inicial - Cargo Educación Física y Artística</option>
            <option value="4">Inicial - D1-Director de 1ra categoría - 20 Secciones 4hs</option>
            <option value="5">Inicial - D2-Director de 2da categoría - 4hs</option>
            <option value="6">Inicial - D3-Director de 3ra categoría - 4hs</option>
            <option value="7">Inicial - Director de Repartición Docente (DR)</option>
            <option value="8">Inicial - Inspector</option>
            <option value="9">Inicial - Inspector Jefe (IZ-ID-I1)</option>
            <option value="10">Inicial - K5</option>
            <option value="11">Inicial - Maestro de Grado Transferido</option>
            <option value="12">Inicial - Maestro de Sala (MI-JM)</option>
            <option value="13">Inicial - Preceptor</option>
            <option value="14">Inicial - Representante Docente En El Tribunal</option>
            <option value="15">Inicial - Secretario</option>
            <option value="16">Inicial - Secretario de Inspección de 1ra (S1)</option>
            <option value="17">Inicial - Secretario de Inspección de 2da (S2)</option>
            <option value="18">Inicial - Secretario de Inspección de 3ra (S3)</option>
            <option value="19">Inicial - Secretario de Jefatura (SJ)</option>
            <option value="20">Inicial - Subdirector de Rep. Docente (SD-IR)</option>
            <option value="21">Inicial - V1-Vicedirector de 1ra categoría - 20 Secciones 4hs</option>
            <option value="22">Inicial - V2-Vicedirector de 2da categoría - 4hs</option>
            <option value="23">Inicial - X2 o Z3</option>
            <option value="24">Inicial - Profesor Ed. Física (Hs Cátedra)</option>
          </select>

        </div>
      </div>
    </div>
  );
}

export default App;
