import { ReactComponent as GithubIcon } from 'assets/img/githubsvg.svg';
import{ReactComponent as LinkedIn} from'assets/img/linkedin.svg'
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="portifolio-nav-content">
                    <h1>Meu Portifólio</h1>
                    <div className="btn projeto-btn">
                    <a href="meuportifolioaxel.netlify.app/projetos">Projetos</a>
                    </div>
                    <a href="https://github.com/FelipeAxel" target="_blank" rel="noreferrer">
                        <div className="portifolio-contact-container">
                            <GithubIcon />
                            <p className="portifolio-contact-link">/Meu Github</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/axel-novais-1533491a5/" target="_blank" rel="noreferrer">
                        <div className="portifolio-contact-container">
                            <LinkedIn />
                            <p className="portifolio-contact-link">/Meu LinkedIn</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;