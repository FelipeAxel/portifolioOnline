import { ReactComponent as GithubIcon } from 'assets/img/githubsvg.svg';
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="portifolio-nav-content">
                    <h1>Meu Portifólio</h1>
                    <div className="btn btn-info projeto-btn">
                    <a href="http://localhost:3000/projetos">Projetos</a>
                    </div>
                    <a href="https://github.com/FelipeAxel" target="_blank" rel="noreferrer">
                        <div className="portifolio-contact-container">
                            <GithubIcon />
                            <p className="portifolio-contact-link">/Meu Github</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/axel-novais-1533491a5/" target="_blank" rel="noreferrer">
                        <div className="portifolio-contact-container">
                            <GithubIcon />
                            <p className="portifolio-contact-link">/Meu LinkedIn</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;