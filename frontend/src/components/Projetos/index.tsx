/* eslint-disable jsx-a11y/alt-text */
import './style.css'
import dsvendas from 'assets/img/dsvendas.png'
import dsmovie from 'assets/img/dsmovie.png'

function Projetos() {
    return (
        <div className="teste5" >
            <div className="retirado">
                <div className="primeiro">
                    <div className="col" >
                        <img className="fff" src={dsmovie}></img>

                    </div>
                    <div className="gg" >
                        <a href="https://axelnovais-dsmovie8.netlify.app">dsmovie8</a>
                    </div>
                    <div className="container">
                        <p>Aplicativo desenvolvido na semana devsuperior com intuito de desenvolver a base de um programador fullstack, o dsmovie tem a funcionalidade de classificação do filme por estrelas.
                            Um forms para você poder por seu e-mail e fazer sua avaliação.
                            Uma semana repleta de conhecimento e muita prática.</p>
                    </div>
                </div>

                <div className="qwe">
                    <div className="col" >
                        <img className="fff" src={dsvendas}></img>
                    </div>
                    <div className="gg" >
                        <a href="https://axel-dsvendas.netlify.app">dsvendas</a>
                    </div>
                    <div className="container">
                        <p>Aplicativo desenvolvido na semana devsuperior com intuito de desenvolver a base de um programador fullstack, o dsvendas tem a funcionalidade de listagem de vendas com um dashboard bem interativo, gráficos e métricas, tudo sendo enviado por um banco de dados usando o postgresql.</p>
                    </div>
                </div>
            </div>
            <div className="gg" >
                        <a href="https://myapptask.netlify.app">dsmovie8</a>
                    </div>
        </div>
    );
}

export default Projetos;