import neymarJpg from '../../assets/neymar.jpg'
import './index.css'

export default function Avaliacao() {
    return (
        <div className='divAvaliacao'>
            <div className='divIcone'>
                <img className='imgAvaliacao' src={neymarJpg} alt="Imagem do jogador Neymar Júnior" />
            </div>
            <div className='infoText'>
                <h4>Neymar Júnior</h4>
                <h5>"Eu recomendo a Leticia, pois o atendimento dele fez toda diferença</h5>
                <p>"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos."</p>
            </div>
        </div>
    )
}