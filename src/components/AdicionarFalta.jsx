import FormAdicionarFalta from "./FormAdicionarFalta"

function AdicionarFalta(props) {

    const addFaltaHandler = (dadosFalta) =>
    {
        props.adicionarFalta(dadosFalta)
    }

    return (
        <div>
            <h2>Adicionar Falta</h2>

            <FormAdicionarFalta
                addFalta={addFaltaHandler}
            />
        </div>
    )
}

export default AdicionarFalta