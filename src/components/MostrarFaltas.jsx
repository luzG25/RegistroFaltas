import Falta from "./Falta"

const MostrarFaltas = ( {dadosFaltas} ) => {
    return (
        <div>
            <h2>Lista de Faltas</h2>
            <ul>
            {
                dadosFaltas.map((dado) => (
                   <li>
                    <Falta
                        Nome={dado.nome}
                        NumFaltas={dado.faltas}
                    />
                   </li>
                ))
            }
            </ul>      
        </div>
    )
}


export default MostrarFaltas