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
                    <div className="card-body">
                        <p>sadasd</p>
                    </div>
                </div>

                <div className="qwe">
                    <div className="col" >
                        <img className="fff" src={dsvendas}></img>
                    </div>
                    <div className="gg" >
                        <a href="https://axel-dsvendas.netlify.app">dsvendas</a>
                    </div>
                    <div className="card-body">
                        <p>sadasd</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projetos;