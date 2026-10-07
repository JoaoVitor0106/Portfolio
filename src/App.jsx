import React, { useEffect } from 'react';
import { ArrowRight, Mail, ExternalLink, Code2, Database, LayoutDashboard, Terminal, Coffee, Car, Briefcase, GraduationCap, Award, Cpu, Globe, Server, Wrench, Sparkles, Code } from 'lucide-react';
import './index.css';

function App() {
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="container">
        <header>
          <div className="logo">João Vitor Teixeira.</div>
          <nav>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="#projects">Projetos</a></li>
            </ul>
          </nav>
        </header>

        <main>
          {/* Hero & About */}
          <section id="about" className="hero animate-on-scroll">
            <div className="hero-content">
              <h1>Estudante de<br />Engenharia de Software</h1>
              <p className="subtitle">Conectando código a soluções inovadoras para a web e além.</p>

              <div className="about-text glass">
                <p>
                  Olá! Sou o João Vitor, um desenvolvedor movido a <Coffee size={18} style={{ display: 'inline', verticalAlign: 'text-bottom' }} /> café e apaixonado por construir soluções inovadoras.
                  Tenho um forte interesse em arquitetura de software, bancos de dados, inteligência artificial e em criar interfaces modernas.
                </p>
                <p>
                  Fora do código, você provavelmente me encontrará admirando <Car size={18} style={{ display: 'inline', verticalAlign: 'text-middle' }} /> carros e motos, conversando com amigos ou jogando!
                </p>
              </div>

              <a href="#projects" className="btn mt-4">
                Ver Projetos <ArrowRight size={20} />
              </a>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="skills section-padding animate-on-scroll">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <div className="skills-grid">

              <div className="skill-card glass">
                <div className="skill-header">
                  <Globe className="text-purple" size={24} />
                  <h3>Frontend</h3>
                </div>
                <div className="project-tags">
                  <span className="tag">HTML / CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Vite</span>
                  <span className="tag">Tailwind CSS</span>
                </div>
              </div>

              <div className="skill-card glass">
                <div className="skill-header">
                  <Server className="text-purple" size={24} />
                  <h3>Backend</h3>
                </div>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Java</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Express</span>
                  <span className="tag">REST APIs</span>
                </div>
              </div>

              <div className="skill-card glass">
                <div className="skill-header">
                  <Database className="text-purple" size={24} />
                  <h3>Banco de Dados & BaaS</h3>
                </div>
                <div className="project-tags">
                  <span className="tag">SQL</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">NoSQL</span>
                  <span className="tag">Firebase</span>
                  <span className="tag">Supabase</span>
                </div>
              </div>

              <div className="skill-card glass">
                <div className="skill-header">
                  <Sparkles className="text-purple" size={24} />
                  <h3>Dados & IA</h3>
                </div>
                <div className="project-tags">
                  <span className="tag">ETL</span>
                  <span className="tag">Engenharia de Dados</span>
                  <span className="tag">IA Aplicada</span>
                  <span className="tag">Agentes Autônomos (Antigravity)</span>
                </div>
              </div>

              <div className="skill-card glass" style={{ gridColumn: '1 / -1' }}>
                <div className="skill-header">
                  <Wrench className="text-purple" size={24} />
                  <h3>Ferramentas & Metodologias</h3>
                </div>
                <div className="project-tags">
                  <span className="tag">Git / GitHub</span>
                  <span className="tag">Figma</span>
                  <span className="tag">Scrum</span>
                  <span className="tag">Arquitetura em Camadas</span>
                  <span className="tag">Capacitor</span>
                </div>
              </div>

            </div>
          </section>

          {/* Experience & Education */}
          <section id="experience" className="timeline-section section-padding">
            <h2 className="section-title">Experiência & Formação</h2>

            <div className="timeline-grid">
              {/* Experience */}
              <div className="timeline-column">
                <h3 className="column-title"><Briefcase size={24} /> Profissional</h3>

                <div className="timeline-item glass animate-on-scroll">
                  <div className="timeline-date">Setembro 2026 - Presente</div>
                  <h4 className="timeline-role">Desenvolvedor Full Stack & Criador</h4>
                  <h5 className="timeline-company">RaiUva (raiuva.com.br)</h5>
                  <ul className="timeline-list">
                    <li><strong>Arquitetura Monorepo:</strong> Separação em frontend (React + Vite) e microsserviço backend (Node.js/Express).</li>
                    <li><strong>Real-time:</strong> Sincronização de estoque e pedidos em tempo real usando Firebase Firestore.</li>
                    <li><strong>Mobile Nativo:</strong> Utilização do Capacitor para transformar o painel web em app Android.</li>
                    <li><strong>Notificações FCM:</strong> Sistema de alerta de alta prioridade com vibração em segundo plano.</li>
                    <li><strong>UX/UI:</strong> Interface moderna e responsiva (Mobile-First) criada com Tailwind CSS e Dark Mode.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="timeline-column">
                <h3 className="column-title"><GraduationCap size={24} /> Acadêmico</h3>

                <div className="timeline-item glass animate-on-scroll">
                  <div className="timeline-date">2024 - 2028</div>
                  <h4 className="timeline-role">Bacharelado em Engenharia de Software</h4>
                  <h5 className="timeline-company">Universidade Católica de Brasília (UCB)</h5>
                </div>

                <h3 className="column-title mt-8"><Award size={24} /> Certificações</h3>
                <div className="certifications-list">
                  <div className="cert-item glass animate-on-scroll">
                    <strong>Understanding Data Engineering</strong> - DataCamp (2026)
                  </div>
                  <div className="cert-item glass animate-on-scroll">
                    <strong>Web Scraping in Python</strong> - DataCamp (2026)
                  </div>
                  <div className="cert-item glass animate-on-scroll">
                    <strong>Fundamentos do SCRUM</strong> - TIC em Trilhas (2024)
                  </div>
                  <div className="cert-item glass animate-on-scroll">
                    <strong>GIT & GitHub</strong> - TIC em Trilhas (2024)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="projects section-padding">
            <h2 className="section-title">Meus Projetos</h2>

            <div className="projects-grid">
              {/* Featured Project: Raiuva */}
              <div className="project-card glass featured animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <div className="project-image-placeholder glass" style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyItems: 'center', borderRadius: '16px', background: 'rgba(216,180,226,0.2)', overflow: 'hidden' }}>
                  <img src="/raiuva-logo.png" alt="RaiUva Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '24px' }} />
                </div>
                <div className="project-content">
                  <div className="project-icon bg-purple">
                    <LayoutDashboard size={24} color="#fff" />
                  </div>
                  <h3>RaiUva</h3>
                  <p>
                    Plataforma de delivery sob demanda de bebidas, conectando clientes a lojistas para entregas em ambientes residenciais e universitários.
                    Inclui e-commerce para clientes e app de gestão (PDV) para vendedores.
                  </p>
                  <div className="project-tags">
                    <span className="tag">React + Vite</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Capacitor</span>
                    <span className="tag">Tailwind CSS</span>
                  </div>
                  <a href="https://raiuva.com.br" target="_blank" rel="noopener noreferrer" className="project-link">
                    Acessar Projeto <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* MyZone */}
              <div className="project-card glass animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="project-content">
                  <div className="project-icon bg-yellow">
                    <LayoutDashboard size={24} color="#333" />
                  </div>
                  <h3>MyZone</h3>
                  <p>
                    Um projeto construído em Java onde atuei como o principal desenvolvedor.
                    A aplicação envolve desafios complexos de estruturação e regras de negócio no backend.
                  </p>
                  <div className="project-tags">
                    <span className="tag">Java</span>
                    <span className="tag">Backend</span>
                  </div>
                  <a href="https://github.com/Lehtche/MyZone" target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub <Code size={16} />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card glass animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <div className="project-content">
                  <div className="project-icon bg-blue">
                    <Database size={24} color="#fff" />
                  </div>
                  <h3>Análise Gás Natural</h3>
                  <p>
                    Um projeto em Java focado em análise de dados, explorando os preços do gás natural no Brasil utilizando estruturas de dados.
                  </p>
                  <div className="project-tags">
                    <span className="tag">Java</span>
                    <span className="tag">Data Analysis</span>
                  </div>
                  <a href="https://github.com/JoaoVitor0106/Analise_GasNatural" target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub <Code size={16} />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card glass animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <div className="project-content">
                  <div className="project-icon bg-pink">
                    <Terminal size={24} color="#fff" />
                  </div>
                  <h3>Boieng737</h3>
                  <p>
                    Trabalho de Arquitetura de Software com documentação completa, diagramas e modelagem detalhada em Python.
                  </p>
                  <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Arquitetura</span>
                  </div>
                  <a href="https://github.com/JoaoVitor0106/Boieng737" target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub <Code size={16} />
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="project-card glass animate-on-scroll" style={{ animationDelay: '0.5s' }}>
                <div className="project-content">
                  <div className="project-icon bg-green">
                    <Code2 size={24} color="#fff" />
                  </div>
                  <h3>Corrida Sensata</h3>
                  <p>
                    Um divertido jogo de corrida educacional desenvolvido inteiramente em Python utilizando a biblioteca Pygame.
                  </p>
                  <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Pygame</span>
                    <span className="tag">Game Dev</span>
                  </div>
                  <a href="https://github.com/JoaoVitor0106/Corrida-Sensata" target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver no GitHub <Code size={16} />
                  </a>
                </div>
              </div>

            </div>
          </section>
        </main>

        <footer id="contact">
          <div className="social-links">
            <a href="https://github.com/JoaoVitor0106" target="_blank" rel="noopener noreferrer">
              <Code size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-160399261/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:joaovotort6@gmail.com">
              <Mail size={24} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} João Vitor Teixeira. Construído com Vite & React.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
