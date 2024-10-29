import { useState } from "react";
import Erro from './Erro'

const FormAdicionarFalta = (props) => {

    const [nomeAluno, setNomeAluno] = useState('')
    const [faltas, setFaltas] = useState('')
    const [erro, setErro] = useState(null);

    const nomeChangeHandler = (event) => {
        setNomeAluno(event.target.value)
    }

    const faltaChangeHandler = (event) => {
        setFaltas(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (nomeAluno.trim() === '' || (isNaN(faltas) ||1 < faltas > 30)) {
            setErro({
              titulo: 'Todos os campos devem estar preenchidos',
              mensagem: 'Por favor, preencha o nome e insira um número de faltas entre 1 e 30.'
            });
            return;}
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

    const onCloseErro = () =>{
        setErro({titulo:'', mensagem:''});
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
            {
                erro && <Erro titulo={erro.titulo} mensagem={erro.mensagem} onClose={onCloseErro}/>
            }
        </>
    )
}

export default FormAdicionarFalta