/* eslint-disable jsx-a11y/alt-text */
import './styles.css'

import me from 'assets/img/me.jpeg'
import javalogo from 'assets/img/javalogo.png'
import postgresql from 'assets/img/postgresql.png'
import spring from 'assets/img/spring.png'
import html from 'assets/img/html.png'
import css from 'assets/img/css.png'
import javascript from 'assets/img/javascript.png'

function Principal() {
    return (
        <main >
            <picture>
                <img className="me" src={me}></img>
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
            <div className='miniatura'>
                <div className="car shadow-sm">
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                        <div className='col'>
                            <img className="teste2" src={javalogo}></img>
                        </div>
                    </div>

                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <img className="teste2" src={postgresql}></img>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <img className="teste2" src={spring}></img>
                    </div>
                </div>


                <div className='row row-cols-1 row-cols-sm-2'>
                    <div className='col'>
                        <img className="teste2" src={javascript}></img>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <img className="teste2" src={html}></img>
                    </div>
                </div>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g3'>
                    <div className='col'>
                        <img className="teste2" src={css}></img>
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