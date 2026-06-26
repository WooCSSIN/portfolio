
import {
  Github, Linkedin, Mail, Download, ArrowUpRight,
  MapPin
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ['About Me', 'Skills', 'Project', 'Contact Me'];

const SKILLS = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Machine Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Apache Spark', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Hadoop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
];

const EXPERIENCES = [
  {
    logo: 'MB',
    company: 'MB Bank',
    role: 'Data Analyst Intern',
    type: 'Internship · Full-time',
    period: 'Jun 2025 – Sep 2025',
    location: 'Ho Chi Minh City, Vietnam',
    bullets: [
      'Extracted, cleaned, and analyzed customer and financial data to identify trends and support business decision-making',
      'Developed reports and dashboards using Excel and SQL to monitor client performance and business metrics',
      'Conducted market and competitor research through quantitative analysis to support strategic planning',
    ],
    tech: ['SQL', 'Excel', 'Data Analysis', 'Reporting'],
  },
  {
    logo: 'Lava',
    company: 'Lava Network',
    role: 'Business Development Intern',
    type: 'Internship · Full-time',
    period: 'Jan 2025 – May 2025',
    location: 'Ho Chi Minh City, Vietnam',
    bullets: [
      'Assisted in market/competitor analysis, identifying potential customer segments and business expansion opportunities',
      'Collaborated with marketing to implement lead generation campaigns and optimized landing page content',
      'Synthesized knowledge about blockchain/web3 ecosystem and supported presentations of technical content',
    ],
    tech: ['Market Research', 'CRM', 'Lead Generation', 'Web3'],
  },
  {
    logo: 'Zalo',
    company: 'Zalo',
    role: 'Data Labeling Project Collaborator',
    type: 'Part-time',
    period: 'Dec 2024 – Mar 2025',
    location: 'Ho Chi Minh City, Vietnam',
    bullets: [
      'Performed speech data processing and normalization for speech-to-text verification and transcript editing',
      'Standardized text spelling and capitalization according to Vietnamese grammar',
      'Classified and labeled images (good/bad, real/fake) adhering to AI training data standards',
    ],
    tech: ['Data Labeling', 'Speech Processing', 'Data Quality'],
  },
];

const AWARDS = [
  {
    title: 'Sinh Viên 5 Tốt cấp Trường',
    issuer: 'Trường Đại học Giao thông vận tải TP.HCM',
    date: 'Thg 5 2026'
  },
  {
    title: 'Sinh Viên 5 Tốt cấp Viện',
    issuer: 'Đoàn Viện Đào tạo Chất lượng cao - UTH',
    date: 'Thg 5 2026'
  }
];

const PROJECTS = [
  {
    num: '01',
    title: 'Local-RAG Chatbot',
    tagline: 'Hỏi đáp tài liệu với RAG & trích dẫn nguồn',
    highlights: [
      'Upload PDF, Word, TXT và chat theo ngữ cảnh',
      'Trích dẫn đoạn văn nguồn chính xác',
      'Pipeline embedding + retrieval tối ưu cho tiếng Việt',
    ],
    tech: ['Python', 'RAG', 'FastAPI', 'Vector DB'],
    link: 'https://github.com/WooCSSIN/Local-RAG',
    label: 'NLP · RAG',
    accent: '#1a1a2e',
    featured: true,
  },
  {
    num: '02',
    title: 'Speech-Translate AI',
    tagline: 'Phiên dịch realtime, offline & bảo mật',
    highlights: [
      'Dịch đa ngôn ngữ trong 1–3 giây',
      'Nhận diện xưng hô văn hóa Việt Nam',
      'Chạy local, không phụ thuộc cloud',
    ],
    tech: ['Python', 'Whisper', 'NLP', 'Offline AI'],
    link: 'https://github.com/WooCSSIN/Speech-Translate',
    label: 'Speech · AI',
    accent: '#0f3460',
  },
  {
    num: '03',
    title: 'Project ITS',
    tagline: 'Giám sát giao thông thông minh với YOLOv8',
    highlights: [
      'Đếm phương tiện & ước lượng tốc độ real-time',
      'Pipeline xử lý video stream tối ưu',
      'Triển khai container hóa với Docker',
    ],
    tech: ['YOLOv8', 'OpenCV', 'Docker', 'Python'],
    link: 'https://github.com/WooCSSIN/Project-ITS',
    label: 'CV · IoT',
    accent: '#1b4332',
  },
  {
    num: '04',
    title: 'Badminton Ranking AI',
    tagline: 'Dự đoán xếp hạng BWF bằng hybrid ML',
    highlights: [
      'Kết hợp LSTM + Random Forest',
      'Độ chính xác dự đoán đạt 87%',
      'Phân tích chuỗi thời gian ranking series',
    ],
    tech: ['PyTorch', 'LSTM', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/WooCSSIN/HYBRID-BADMINTON-RANKING-SERIES-PREDICTION-MODEL',
    label: 'ML · Sports',
    accent: '#3d1c02',
  },
];

// ─── HEADER ──────────────────────────────────────────────────────────────────

const Header = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-left">
        <span className="logo-serif">VN</span>
        <span className="logo-label">Nguyen's Portfolio</span>
      </div>
      <nav className="header-nav">
        {NAV_LINKS.map(l => (
          <button key={l} className="nav-btn" onClick={() => scrollTo(l.toLowerCase().replace(' ', '-'))}>
            {l}
          </button>
        ))}
      </nav>
      <a href="mailto:vuhnn6145@gmail.com" className="resume-btn">
        <Download size={14} /> Resume
      </a>
    </header>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="hero-section">
    <div className="hero-left">
      <h1 className="hero-heading">
        <span className="hero-light">Hello I'm</span><br />
        <span className="hero-bold">Hà Nhật Nguyên Vũ.</span><br />
        <span className="hero-outline">AI Engineer.</span><br />
        <span className="hero-light-sm">Based in Vietnam.</span>
      </h1>
      <p className="hero-desc">
        Focusing on building <strong>data-driven</strong> and <strong>intelligent systems</strong> for real-world applications. Specializing in <strong>Machine Learning</strong>, <strong>NLP</strong>, and <strong>RAG</strong> to turn complex data into scalable, production-ready AI solutions.
      </p>
      <div className="hero-socials">
        <a href="https://github.com/WooCSSIN" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/vũ-hà-nhật-nguyên-a34845320/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="mailto:hnnv.forwork@gmail.com" className="social-icon-btn" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
    </div>
    <div className="hero-right">
      <img
        src={`${import.meta.env.BASE_URL}avatar.png`}
        alt="Vũ Hà Nhật Nguyên"
        className="hero-photo"
      />
    </div>
  </section>
);

// ─── SKILLS ───────────────────────────────────────────────────────────────────

const Skills = () => (
  <section id="skills" className="section-light">
    <div className="container">
      <h2 className="section-heading">
        <span className="heading-light">My </span>
        <span className="heading-bold">Skills</span>
      </h2>
      <div className="skills-grid">
        {SKILLS.map(s => (
          <div key={s.name} className="skill-card">
            <img src={s.logo} alt={s.name} className="skill-logo" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
            <span className="skill-name">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

const Experience = () => (
  <section id="experience" className="section-dark">
    <div className="container">
      <h2 className="section-heading light">
        <span className="heading-light-on-dark">My </span>
        <span className="heading-bold-on-dark">Experience</span>
      </h2>
      <div className="exp-list">
        {EXPERIENCES.map((e, i) => (
          <div key={i} className="exp-card">
            <div className="exp-top">
              <div className="exp-logo-wrap">
                <div className="exp-logo">{e.logo}</div>
                <div className="exp-title-block">
                  <span className="exp-role">{e.role}</span>
                  <span className="exp-company">{e.company} · {e.type}</span>
                </div>
              </div>
              <div className="exp-meta">
                <span>{e.period}</span>
                <span className="exp-loc"><MapPin size={12} /> {e.location}</span>
              </div>
            </div>
            <ul className="exp-bullets">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="exp-tags">
              {e.tech.map(t => <span key={t} className="exp-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── AWARDS ───────────────────────────────────────────────────────────────────

const Awards = () => (
  <section id="awards" className="section-light">
    <div className="container">
      <h2 className="section-heading">
        <span className="heading-light">Honors & </span>
        <span className="heading-bold">Awards</span>
      </h2>
      <div className="awards-list">
        {AWARDS.map((a, i) => (
          <div key={i} className="award-card">
            <div className="award-icon">🏆</div>
            <div className="award-info">
              <h3 className="award-title">{a.title}</h3>
              <p className="award-issuer">{a.issuer}</p>
            </div>
            <div className="award-date">{a.date}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── ABOUT ────────────────────────────────────────────────────────────────────

const About = () => (
  <section id="about-me" className="section-white">
    <div className="container about-grid">
      <div className="about-img-wrap">
        <img
          src={`${import.meta.env.BASE_URL}about-me.png`}
          alt="About Vũ Hà Nhật Nguyên"
          className="about-img"
        />
      </div>
      <div className="about-text">
        <h2 className="section-heading">
          <span className="heading-light">About </span>
          <span className="heading-bold">Me</span>
        </h2>
        <p className="about-body">
          Tôi là <strong>Hà Nhật Nguyên Vũ</strong>, sinh viên chuyên ngành{' '}
          <strong>Hệ thống thông tin quản lý</strong> tại Đại học Giao thông vận tải TP.HCM.
        </p>
        <p className="about-body">
          Với định hướng trở thành một <strong>AI Engineer</strong>, tôi tập trung vào việc áp dụng công nghệ AI để tối ưu hóa chuỗi cung ứng, dự báo, và ra quyết định. Tôi có kỹ năng mạnh mẽ về <strong>NLP, RAG, Vector Databases</strong> và ngôn ngữ <strong>Rust</strong>.
        </p>
        <ul className="about-list">
          <li> Sinh viên 5 tốt – UTH 2026</li>
          <li> Nhiều chứng chỉ chuyên môn từ IBM, Google Cloud, NVIDIA</li>
          <li> Phát triển AI Agent & Xử lý Dữ Liệu lớn</li>
          <li> Ho Chi Minh City, Vietnam</li>
        </ul>
        <a href="mailto:hnnv.forwork@gmail.com" className="about-cta">
          Liên hệ với tôi <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

const ProjectVisual = ({ num, label, accent }: { num: string; label: string; accent: string }) => (
  <div className="proj-visual" style={{ '--proj-accent': accent } as Record<string, string>}>
    <span className="proj-visual-watermark" aria-hidden="true">{num}</span>
    <span className="proj-visual-label">{label}</span>
    <div className="proj-visual-grid" aria-hidden="true" />
  </div>
);

const ProjectBody = ({ p }: { p: typeof PROJECTS[number] }) => (
  <div className="proj-body">
    <div className="proj-header">
      <span className="proj-num">{p.num}</span>
      <span className="proj-badge">Featured</span>
    </div>
    <h3 className="proj-title">{p.title}</h3>
    <p className="proj-tagline">{p.tagline}</p>
    <ul className="proj-highlights">
      {p.highlights.map((h) => <li key={h}>{h}</li>)}
    </ul>
    <div className="proj-tags">
      {p.tech.map((t) => <span key={t} className="proj-tag">{t}</span>)}
    </div>
    <a href={p.link} target="_blank" rel="noreferrer" className="proj-cta">
      <Github size={16} /> Xem trên GitHub <ArrowUpRight size={16} />
    </a>
  </div>
);

const Projects = () => {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="project" className="section-light proj-section">
      <div className="container">
        <div className="proj-intro">
          <h2 className="section-heading proj-heading">
            <span className="heading-light">My </span>
            <span className="heading-bold">Projects</span>
          </h2>
          <p className="proj-subtitle">
            Các dự án AI/ML tôi xây dựng — từ RAG, speech đến computer vision và dự báo dữ liệu.
          </p>
        </div>

        <article className="proj-featured">
          <ProjectVisual num={featured.num} label={featured.label} accent={featured.accent} />
          <ProjectBody p={featured} />
        </article>

        <div className="proj-stack">
          {rest.map((p, i) => (
            <article key={p.num} className={`proj-row${i % 2 === 1 ? ' proj-row-reverse' : ''}`}>
              <ProjectVisual num={p.num} label={p.label} accent={p.accent} />
              <div className="proj-body">
                <span className="proj-num">{p.num}</span>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-tagline">{p.tagline}</p>
                <ul className="proj-highlights">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <div className="proj-tags">
                  {p.tech.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="proj-cta">
                  <Github size={16} /> GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONTACT ─────────────────────────────────────────────────────────────────

const Contact = () => (
  <section id="contact-me" className="section-light">
    <div className="container">
      <h2 className="section-heading">
        <span className="heading-light">Contact </span>
        <span className="heading-bold">Me</span>
      </h2>
      <div className="contact-list">
        <a href="mailto:hnnv.forwork@gmail.com" className="contact-pill">
          <Mail size={22} />
          <span>hnnv.forwork@gmail.com</span>
          <ArrowUpRight size={18} className="contact-arrow" />
        </a>
        <a href="https://github.com/WooCSSIN" target="_blank" rel="noreferrer" className="contact-pill">
          <Github size={22} />
          <span>github.com/WooCSSIN</span>
          <ArrowUpRight size={18} className="contact-arrow" />
        </a>
        <a href="https://www.linkedin.com/in/vũ-hà-nhật-nguyên-a34845320/" target="_blank" rel="noreferrer" className="contact-pill">
          <Linkedin size={22} />
          <span>LinkedIn – Vũ Hà Nhật Nguyên</span>
          <ArrowUpRight size={18} className="contact-arrow" />
        </a>
      </div>
    </div>
  </section>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="footer">
    <p>Hope you are having a nice day ☀️</p>
    <p className="footer-credit">@Made by Nguyen</p>
  </footer>
);

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Awards />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
