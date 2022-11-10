import './styles.css'
import{ReactComponent as Java} from'assets/img/java.svg'


function Principal() {
    return (
        <main >
            <picture>
               
            </picture>

            <article>
                <h4>
                    Sobre Mim
                </h4>
                <aside>
                    <p>
                        Bom meu nome é Axel tenho 26 anos, conclui no início do ano de 2022 minha faculdade de análise e desenvolvimento de sistemas.
                        Já venho de uma caminhada longa em busca da minha primeira oportunidade, como eu estava em dúvidas no começo sobre por onde começar, na faculdade começamos com js, html, css, scrum já perto da conclusão do curso aprendemos POO, JSP e acabei me afeiçoando a backend, porem minha meta sempre foi o fullstack com foco no backend, sou muito comunicativo e auto de data, resiliente, gosto de ter algo que me motiva e a tecnologia está em constante evolução sempre pronta para inovar.
                        A meta é aprender muito me tornar um programador com boas práticas e participar de projetos que possam fazer a diferença.
                        Na parte superior você pode acessar alguns projetos que fiz seguindo as diretrizes da devsuperior com professor Nelio Álves
                    </p>
                </aside>
            </article>


            <h2>
                Formação Academica
            </h2>
            <article>
                <h4>
                    Faculdade
                </h4>
                <aside>
                    Facauldade Cruzeiro do Sul
                    Campus Paulista
                    <p>
                        Durante a faculdade aprendemos desde requisitos de sistema e regras de negócio ate codificação de mini projetos ao decorrer do curso, sempre aprendendo de tudo um pouco tive matérias como, Modelagem de negócios, Engenharia de requisitos, Organização e arquitetura de computadores até, Banco de dados, Sistema cliente/servidor, Programação para dispositivos móveis.
                    </p>
                </aside>
            </article>
            <div className="teste4">
                <h2>Algumas das tecnologias que ja trabalhei</h2>
            </div>
            
                
                  
                            <Java/>
              

                
                            <div className='miniatura'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        
                    </div>
                </div>


                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                    
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        
                    </div>

                </div>
            </div>
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <p className="text-light">Desenvolvido por Axel Felipe</p>
                </div>
            </footer>
        </main>

    );
}

export default Principal;