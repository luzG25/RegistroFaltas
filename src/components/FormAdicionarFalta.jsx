import { useState } from "react";

const FormAdicionarFalta = (props) => {

    const [nomeAluno, setNomeAluno] = useState('')
    const [faltas, setFaltas] = useState('')

    const nomeChangeHandler = (event) => {
        setNomeAluno(event.target.value)
    }

    const faltaChangeHandler = (event) => {
        setFaltas(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (nomeAluno == "" || faltas == ""){
            alert("muff meriod")
        }
        else{
            let novaFalta = {
                'nome': nomeAluno,
                'faltas': faltas
            }
    
            props.addFalta(novaFalta)
        }

        setNomeAluno('')
        setFaltas('')
       
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label>Nome Completo</label>
                        <input type="text" name="nomeAluno" id="nome"  placeholder="Nome do Aluno" value={nomeAluno} onChange={nomeChangeHandler}/>
                    </div>

                    <div>
                        <label>Faltas</label>
                        <input type="number" name="faltas" id="faltas"  min="0" step="1" value={faltas} onChange={faltaChangeHandler}/>
                    </div>
                    
                    
                </div>
                <div>
                    <button>Adicionar</button>
                </div>
            </form>
        </>
    )
}

export default FormAdicionarFalta