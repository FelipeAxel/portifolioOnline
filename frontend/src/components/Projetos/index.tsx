import './style.css'
import dsmovie from 'assets/img/dsmovie.png'
import dsvendas from 'assets/img/dsvendas.png'


function Projetos() {
    return (
        <div className="teste5" >
            <div className="retirado">
                <div className="primeiro">
                    <div className="col" >
                        <div className="card shadow-sm">
                            <img className="teste7" src={dsmovie}></img>
                        </div>
                        <a href="https://axelnovais-dsmovie8.netlify.app">dsmovie8</a>
                    </div>
                    <div className="card-body">
                        <p>sadasd</p>
                    </div>
                </div>

                <div className="qwe">
                    <div className="col" >
                        <div className="card shadow-sm">
                            <img className="teste7" src={dsvendas}></img>
                        </div>
                        <a href="https://axel-dsvendas.netlify.app">dsvendas</a>
                    </div>
                    <div className="card-body">
                        <p>sadasd</p>
                    </div>
                </div>


                <div className="zxc">
                    <div className="col" >
                        <div className="card shadow-sm">
                            <img className="teste7" src={dsvendas}>
                            
                            </img>
                        </div>
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