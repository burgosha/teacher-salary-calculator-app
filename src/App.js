import React, {useState} from 'react';
import './App.css';

function App() {
  const [nivel, setNivel] = useState('');

  const niveles = {
      Inicial: [
        "Inicial - Asesor Docente",
        "Inicial - Bibliotecario",
        "Inicial - Cargo Educación Física y Artística",
        "Inicial - D1-Director de 1ra categoría - 20 Secciones 4hs",
        "Inicial - D2-Director de 2da categoría - 4hs",
        "Inicial - D3-Director de 3ra categoría - 4hs",
        "Inicial - Director de Repartición Docente (DR)",
        "Inicial - Inspector",
        "Inicial - Inspector Jefe (IZ-ID-I1)",
        "Inicial - K5",
        "Inicial - Maestro de Grado Transferido",
        "Inicial - Maestro de Sala (MI-JM)",
        "Inicial - Preceptor",
        "Inicial - Representante Docente En El Tribunal",
        "Inicial - Secretario",
        "Inicial - Secretario de Inspección de 1ra (S1)",
        "Inicial - Secretario de Inspección de 2da (S2)",
        "Inicial - Secretario de Inspección de 3ra (S3)",
        "Inicial - Secretario de Jefatura (SJ)",
        "Inicial - Subdirector de Rep. Docente (SD-IR)",
        "Inicial - V1-Vicedirector de 1ra categoría - 20 Secciones 4hs",
        "Inicial - V2-Vicedirector de 2da categoría - 4hs",
        "Inicial - X2 o Z3",
        "Inicial - Profesor Ed. Física (Hs Cátedra)",
      ],
      Primaria: [
        "Primaria - Maestro de Grado",
        "Primaria - Maestro de Grado Transferido",
        "Primaria - Asesor Docente",
        "Primaria - Bibliotecario",
        "Primaria - Cargo Educación Física y Artística",
        "Primaria - Coordinador De Centros o Distritos",
        "Primaria - D1-Director de 1ra categoría - 20 Secciones 4 1/2hs",
        "Primaria - D1-Director de 1ra categoría - 20 Secciones 4hs",
        "Primaria - D2-Director de 2da categoría - 4 1/2hs",
        "Primaria - D2-Director de 2da categoría - 4hs",
        "Primaria - D3-Director de 3ra categoría - 4 1/2hs",
        "Primaria - D3-Director de 3ra categoría - 4hs",
        "Primaria - D4-Director de 1ra categoría - 20/29 Secciones 4 1/2hs",
        "Primaria - D4-Director de 1ra categoría - 20/29 Secciones 4hs",
        "Primaria - D5-Director de 1ra categoría - 30/39 Secciones 4 1/2hs",
        "Primaria - D5-Director de 1ra categoría - 30/39 Secciones 4hs",
        "Primaria - D6-Director de 1ra categoría - Más de 40 Secciones 4 1/2hs",
        "Primaria - D6-Director de 1ra categoría - Más de 40 Secciones 4hs",
        "Primaria - Director de CIE con 1 Turno",
        "Primaria - Director de CIE con más de 1 Turno",
        "Primaria - Director de Repartición Docente (DR)",
        "Primaria - Director Institucional",
        "Primaria - Encargado De Medios De Apoyo Tec. Pedag.",
        "Primaria - Inspector",
        "Primaria - Inspector Jefe (IZ-ID-I1)",
        "Primaria - Jefe de Medios de Apoyo Tec. Pedag.",
        "Primaria - MJ-Maestro de 7mo c/Doble Escolaridad",
        "Primaria - Preceptor",
        "Primaria - Prosecretario",
        "Primaria - Representante Docente En El Tribunal",
        "Primaria - Secretario (MS)",
        "Primaria - Secretario de Inspección de 1ra (S1)",
        "Primaria - Secretario de Inspección de 2da (S2)",
        "Primaria - Secretario de Inspección de 3ra (S3)",
        "Primaria - Secretario de Jefatura (SJ)",
        "Primaria - Subdirector de Rep. Docente (SD-IR)",
        "Primaria - V1-Vicedirector de 1ra categoría - 20 Secciones 4hs",
        "Primaria - V1-Vicedirector de 1ra categoría - 20 Secciones 4 1/2hs",
        "Primaria - V2-Vicedirector de 2da categoría - 4hs",
        "Primaria - V2-Vicedirector de 2da categoría - 4 1/2hs",
        "Primaria - V4-Vicedirector de 1ra categoría - 20/29 Secciones 4 1/2hs",
        "Primaria - V4-Vicedirector de 1ra categoría - 20/29 Secciones 4hs",
        "Primaria - V5-Vicedirector de 1ra categoría - 30/39 Secciones 4 1/2hs",
        "Primaria - V5-Vicedirector de 1ra categoría - 30/39 Secciones 4hs",
        "Primaria - V5-Vicedirector de 1ra categoría - 30/39 Secciones 4 1/2hs",
        "Primaria - V6-Vicedirector de 1ra categoría - Más de 40 Secciones 4 1/2hs",
        "Primaria - V6-Vicedirector de 1ra categoría - Más de 40 Secciones 4hs",
        "Primaria - X0",
        "Primaria - X1"
      ],
      Secundaria: 'Secundaria',
      Adultos: 'Adultos',
      Especial: 'Especial',
      Superior: 'Superior',
      Psicologia: 'Psicología'
  }

  const handleNivelChange = (e) => {
    setNivel(e.target.value);
  }

  console.log(nivel);

  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="container-sm p-3 bg-light">
          <select id="nivel" className="nivel form-select mb-3" value={nivel} onChange={handleNivelChange}>
            <option value="">Seleccione Nivel y/o Modalidad</option>
            {Object.keys(niveles).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          { nivel && (
          <select className="cargo form-select mb-3" aria-label="Default select example">
            <option value="">Seleccione el Cargo</option>
            {niveles[nivel].map((cargo) => (
              <option key={cargo} value={cargo}>
                {cargo}
              </option>
            ))
            }
          </select>
          )
          }
          <select className="nivel form-select mb-3" aria-label="Default select example">
            <option selected>Seleccione la Carga Horaria</option>
            <option value="1">Jornada Simple</option>
            <option value="2">Jornada Extendida (6hs)</option>
            <option value="3">Jornada Completa (8hs)</option>
          </select>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Antigüedad</span>
            <input type="number" className="form-control" placeholder="Antigüedad en años" aria-label="Antiguedad" aria-describedby="basic-addon1" min = {0} />
          </div>
          <select className="ruralidad form-select mb-3" aria-label="Default select example">
            <option selected>Seleccione la Ruralidad</option>
            <option value="1">Sin Ruralidad</option>
            <option value="2">Ruralidad I (30%)</option>
            <option value="3">Ruralidad II (60%)</option>
            <option value="3">Ruralidad III (90%)</option>
            <option value="3">Ruralidad IV (100%)</option>
            <option value="3">Ruralidad V (120%)</option>
          </select>
          <div className="input-group mb-3">
            <span className="input-group-text" id="mod-ruralidad">Módulos con Ruralidad</span>
            <input type="number" className="form-control" placeholder="Módulos con Ruralidad" aria-label="Modulos con Ruralidad" aria-describedby="mod-ruralidad" min = {0} />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" type="button">Calcular</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
