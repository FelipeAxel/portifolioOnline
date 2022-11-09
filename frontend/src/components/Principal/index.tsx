import './styles.css'
import me from 'assets/img/me.jpeg'
function Principal() {
    return (
        <main >
            <picture>
                <img className="teste" src={me}></img>
            </picture>
            <h2>
                Formação Academica
            </h2>
            <article>
                <h4>
                    Faculdade
                </h4>
                <aside>
                    Facauldade Cruzeiro do Sul<br />
                    Campus Paulista
                    <p>
                        interessantis.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis
                        nisl.Paisis, filhis, espiritis santis.Si num tem leite então bota uma pinga aí cumpadi!
                    </p>
                </aside>
                <p>
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Não sou faixa
                    preta cumpadi, sou preto inteiris, inteiris.Quem num gosta di mim que vai caçá sua turmis!Viva
                    Forevis aptent taciti sociosqu ad litora torquent.
                </p>
            </article>
            <article>
                <h4>
                    Sobre Mim
                </h4>
                <aside>
                    <p>
                        Bom meu nome é axel tenho 26 anos, conclui no inicio do ano de 2022 minha faculdade de Analise e desenvolvimento de sistemas.
                        ja venho de uma caminhada longa em busca da minha primeira oportunidade, como eu estava em duvidas no começo sobre por onde começar porque na faculdade começamos com js, html, css, scrum indo para o final aprendemos OO, JSP e acabei me afeiçoando a backend, porem minha meta sempre foi o fullstack com foco no backend, sou muito comunicativo e auto de data, resiliente, gosto de ter algo que me motiva e a tecnologia esta em constante evolução sempre pronta para inovar.
                        A meta é aprender muito me tornar um programador com boas praticas e participar de projetos que possam fazer a diferença.
                    </p>
                </aside>
            </article>
            <div className='miniatura'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <div className="card shadow-sm">
                            
                                <img src={me}></img>
                            
                        </div>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <div className="card shadow-sm">
                            
                                <img src={me}></img>
                           
                        </div>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <div className="card shadow-sm">
                            
                                <img src={me}></img>
                           
                        </div>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <div className="card shadow-sm">
                            
                                <img src={me}></img>
                           
                        </div>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <div className="card shadow-sm">
                            
                                <img src={me}></img>
                           
                        </div>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <div className="card shadow-sm">
                          
                                <img src={me}></img>
                     
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Principal;