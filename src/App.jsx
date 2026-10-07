import React, { useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Database, LayoutDashboard, Terminal } from 'lucide-react';
import './index.css';

function App() {
  // We can add a simple scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="container">
        <header>
          <div className="logo">João Vitor</div>
          <nav>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="about" className="hero">
            <h1>Criando Experiências<br/>Digitais Incríveis</h1>
            <p>
              Sou um desenvolvedor apaixonado por construir soluções inovadoras.
              Explorando tecnologias, arquitetura de software e criando interfaces modernas.
            </p>
            <a href="#projects" className="btn">
              Ver Projetos <ArrowRight size={20} />
            </a>
          </section>

          <section id="projects" className="projects">
            <h2 className="section-title">Meus Projetos</h2>
            
            <div className="projects-grid">
              
              {/* Featured Project: Raiuva */}
              <div className="project-card glass featured animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <div className="project-image-placeholder glass" style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', background: 'rgba(255,255,255,0.4)' }}>
                  <LayoutDashboard size={64} style={{ color: 'var(--pastel-purple)' }} />
                </div>
                <div className="project-content">
                  <div className="project-icon bg-purple">
                    <LayoutDashboard size={24} color="#fff" />
                  </div>
                  <h3>Raiuva</h3>
                  <p>
                    O projeto principal do meu portfólio. Uma aplicação inovadora, 
                    com foco em performance e uma experiência de usuário excepcional. 
                    (Descrição detalhada em breve).
                  </p>
                  <div className="project-tags">
                    <span className="tag">Em Destaque</span>
                    <span className="tag">Web</span>
                  </div>
                  <a href="#" className="project-link">
                    Acessar Projeto <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card glass animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="project-content">
                  <div className="project-icon bg-blue">
                    <Database size={24} color="#fff" />
                  </div>
                  <h3>Análise Gás Natural</h3>
                  <p>
                    Um projeto em Java focado em análise de dados, explorando os 
                    preços do gás natural no Brasil utilizando estruturas de dados.
                  </p>
                  <div className="project-tags">
                    <span className="tag">Java</span>
                    <span className="tag">Data Analysis</span>
                  </div>
                  <a href="https://github.com/JoaoVitor0106/Analise_GasNatural" target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card glass animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <div className="project-content">
                  <div className="project-icon bg-pink">
                    <Terminal size={24} color="#fff" />
                  </div>
                  <h3>Boieng737</h3>
                  <p>
                    Trabalho de Arquitetura de Software com documentação completa, 
                    diagramas e modelagem detalhada em Python.
                  </p>
                  <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Arquitetura</span>
                  </div>
                  <a href="https://github.com/JoaoVitor0106/Boieng737" target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="project-card glass animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <div className="project-content">
                  <div className="project-icon bg-green">
                    <Code2 size={24} color="#fff" />
                  </div>
                  <h3>Corrida Sensata</h3>
                  <p>
                    Um divertido jogo de corrida educacional desenvolvido inteiramente 
                    em Python utilizando a biblioteca Pygame.
                  </p>
                  <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Pygame</span>
                    <span className="tag">Game Dev</span>
                  </div>
                  <a href="https://github.com/JoaoVitor0106/Corrida-Sensata" target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub <Github size={16} />
                  </a>
                </div>
              </div>

            </div>
          </section>
        </main>

        <footer id="contact">
          <div className="social-links">
            <a href="https://github.com/JoaoVitor0106" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:joaovitor@example.com">
              <Mail size={24} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} João Vitor. Construído com Vite, React e muito café.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
