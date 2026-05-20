import React from 'react';

const skills = [
  { icon: 'API', title: 'Backend на Go', text: 'REST/gRPC API, ConnectRPC, Protobuf, WebSocket, бизнес-логика без лишней магии.' },
  { icon: 'SQL', title: 'SQL-backed systems', text: 'PostgreSQL, индексы, аналитические запросы, EXPLAIN ANALYZE, нормальная работа с данными.' },
  { icon: 'OPS', title: 'Infra & delivery', text: 'Docker, Docker Compose, Kubernetes, Helm, GitHub Actions, production-oriented деплой.' },
  { icon: 'JWT', title: 'Auth & access', text: 'JWT, RBAC, базовый OIDC/OAuth 2.0, админские и операционные сценарии.' },
  { icon: 'OBS', title: 'Observability', text: 'Prometheus, health checks, readiness/liveness probes, минимум шума, максимум сигнала.' },
  { icon: 'TTY', title: 'Linux-first workflow', text: 'Linux, Git, CLI, сетевые сервисы, контейнеры и привычка дебажить до причины.' },
];

const projects = [
  {
    title: 'CRM для товаров, курьеров и payroll',
    tags: ['Go', 'PostgreSQL', 'REST', 'JWT', 'RBAC', 'Nuxt'],
    text: 'Backend для операционной CRM: товары, курьеры, расчёт зарплат, админская логика и SQL-запросы под реальные бизнес-сценарии.',
  },
  {
    title: 'Corporate messenger backend',
    tags: ['Go', 'RabbitMQ', 'gRPC', 'Kubernetes', 'Helm'],
    text: 'Сервисы для корпоративной messenger-style системы: асинхронная обработка сообщений, ConnectRPC/gRPC-коннектор и Kubernetes deployment.',
  },
  {
    title: 'spy-bot',
    tags: ['Open Source', 'Go', 'MongoDB', 'gRPC', 'Prometheus'],
    text: 'Telegram Business Bot из нескольких сервисов: обработка удалённых/изменённых сообщений, timer-based media, inline-команды и мониторинг.',
    href: 'https://github.com/sudora1n/spy-bot',
  },
];

const stack = ['Go', 'SQL', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'ConnectRPC', 'gRPC', 'Protobuf', 'Buf', 'Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Prometheus', 'Linux', 'NuxtJS', 'Vue 3'];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="project-title-row">
        <h3>{project.title}</h3>
        {project.href && <a className="open-link" href={project.href} target="_blank" rel="noreferrer">↗</a>}
      </div>
      <p>{project.text}</p>
      <div className="tags project-tags">
        {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <section className="container">
        <nav className="nav-card">
          <a href="/" className="brand" aria-label="sudora1n.dev home">
            <span className="brand-mark">s</span>
            <span>
              <span className="brand-title">sudora1n.dev</span>
              <span className="brand-subtitle">backend / infra / go</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </div>
        </nav>

        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Backend Developer · Go · Remote</p>
            <h1>Делаю backend, который не стыдно открыть через полгода.</h1>
            <p className="hero-text">
              Go-разработчик с фокусом на API, PostgreSQL, интеграции, контейнеризацию и нормальную production-логику. Без «мы просто накидаем сервисов».
            </p>

            <div className="actions">
              <a className="button button-primary" href="mailto:me@sudora1n.dev">✉ Написать</a>
              <a className="button button-ghost" href="https://github.com/sudora1n" target="_blank" rel="noreferrer">⌘ GitHub</a>
              <a className="button button-ghost" href="https://t.me/sudora1n" target="_blank" rel="noreferrer">↗ Telegram</a>
            </div>
          </div>

          <aside className="stack-card">
            <div className="stack-head">
              <span>current stack</span>
              <span className="status">available</span>
            </div>
            <div className="tags">
              {stack.map((item) => <Badge key={item}>{item}</Badge>)}
            </div>
          </aside>
        </header>

        <section id="skills" className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.title} className="card skill-card">
              <span className="skill-code">{skill.icon}</span>
              <h2>{skill.title}</h2>
              <p>{skill.text}</p>
            </article>
          ))}
        </section>

        <section id="projects" className="projects-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">selected work</p>
              <h2>Проекты и опыт</h2>
            </div>
            <p>Не портфолио ради портфолио, а короткая выжимка того, что имеет смысл показать работодателю.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section id="contact" className="contact-card">
          <div>
            <h2>Нужен Go/backend разработчик?</h2>
            <p>Пиши в Telegram или на почту. Лучше сразу с задачей, стеком и тем, что уже горит.</p>
          </div>
          <div className="actions contact-actions">
            <a className="button button-primary" href="https://t.me/sudora1n" target="_blank" rel="noreferrer">Telegram</a>
            <a className="button button-ghost" href="mailto:me@sudora1n.dev">Email</a>
          </div>
        </section>
      </section>
    </main>
  );
}
