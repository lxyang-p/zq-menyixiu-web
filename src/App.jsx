import { useState, useEffect } from 'react'
import './index.css'

/* ============================================
   Data
   ============================================ */
const PHONE = '13784884521'
const PHONE_DISPLAY = '137-8488-4521'

const services = [
  {
    icon: '⚙️',
    title: '电机维修',
    desc: '各种品牌卷帘门电机故障诊断与维修，电容更换、电机核心部件修复',
  },
  {
    icon: '📡',
    title: '遥控器匹配',
    desc: '遥控器对码、更换电池、接收器维修，支持各类品牌型号适配',
  },
  {
    icon: '🔧',
    title: '门体修复',
    desc: '帘片脱槽、导轨变形、弹簧断裂、门体卡住等各类结构性故障修复',
  },
  {
    icon: '🛡️',
    title: '安装保养',
    desc: '卷帘门、伸缩门、道闸杆全新安装，定期保养延长使用寿命',
  },
]

const articles = [
  {
    tag: '故障排查',
    title: '卷帘门卡住下不来怎么自己初步排查？',
    summary:
      '先检查导轨是否有异物卡住，再看帘片是否有变形脱槽。如果电机嗡嗡响但门不动，可能是电机齿轮磨损或限位器故障。不要强行操作，避免更大损坏……',
    date: '2024-12-15',
    readTime: '3分钟',
  },
  {
    tag: '遥控器',
    title: '遥控器失灵的几种原因及解决方法',
    summary:
      '电池没电是最常见的原因，换块电池试试。如果换了电池还不行，可能是配对丢失需要重新对码，或者接收器模块烧了需要更换……',
    date: '2024-12-10',
    readTime: '2分钟',
  },
  {
    tag: '电机故障',
    title: '卷帘门电机嗡嗡响但不转是什么问题？',
    summary:
      '这种情况十有八九是电容坏了。电容是帮助电机启动的关键部件，损坏后电机能通电但无法正常旋转，更换一个同规格电容几十块钱就能搞定……',
    date: '2024-11-28',
    readTime: '3分钟',
  },
  {
    tag: '安全提醒',
    title: '卷帘门弹簧断了可以自己换吗？',
    summary:
      '强烈不建议自己更换！卷帘门弹簧承受的拉力非常大，弹簧断裂瞬间的冲击力可能造成严重伤害。必须由专业师傅使用专用工具进行更换……',
    date: '2024-11-20',
    readTime: '2分钟',
  },
  {
    tag: '故障排查',
    title: '电动卷帘门下降时自动回弹怎么处理？',
    summary:
      '自动回弹通常是限位器设置不对或限位器故障。有的是导轨里有障碍物触发了安全保护。可以先清理导轨，如果还是回弹就需要调整或更换限位器……',
    date: '2024-11-15',
    readTime: '3分钟',
  },
  {
    tag: '日常维护',
    title: '卷帘门轨道生锈变形怎么修复？',
    summary:
      '轨道生锈会导致门体运行不顺畅甚至卡住。轻微锈蚀可以打磨除锈后涂润滑油；如果轨道已经变形，就需要矫正或更换整段导轨……',
    date: '2024-11-08',
    readTime: '4分钟',
  },
]

const serviceAreas = [
  '枣强县城',
  '大营镇',
  '恩察镇',
  '加会镇',
  '马屯镇',
  '肖张镇',
  '张秀屯镇',
  '新屯镇',
  '王均乡',
  '唐林镇',
  '王常乡',
]

/* ============================================
   Components
   ============================================ */

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <div className="logo">
          <div className="logo-icon">门</div>
          <span>枣强卷帘门维修</span>
        </div>
        <a href={`tel:${PHONE}`} className="btn-call" id="header-call-btn">
          <span className="phone-icon">📞</span>
          一键拨号
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img
          src="/images/hero-bg.png"
          alt="专业卷帘门维修服务"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">
          <span>🏆</span>
          从业20年 · 枣强本地老师傅
        </div>
        <h1>枣强专业卷帘门维修<br />解决各种疑难杂症</h1>
        <p className="hero-subtitle">
          快速上门，价格透明，不修不收费。<br />
          卷帘门 · 伸缩门 · 道闸杆 — 一站式服务。
        </p>
        <div className="hero-cta-group">
          <a href={`tel:${PHONE}`} className="btn-hero-primary" id="hero-call-btn">
            📞 立即拨打 {PHONE_DISPLAY}
          </a>
          <a href="#knowledge" className="btn-hero-secondary">
            ↓ 了解常见故障排查
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">20+</span>
            <span className="hero-stat-label">年从业经验</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">15</span>
            <span className="hero-stat-label">分钟上门</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">1400+</span>
            <span className="hero-stat-label">抖音粉丝</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">主营服务</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          家庭、企业、学校各类门一站式服务
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">
                <span>{s.icon}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Knowledge() {
  return (
    <section className="knowledge section" id="knowledge">
      <div className="container">
        <h2 className="section-title">故障知识库</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          来自20年一线维修经验的真实解答，帮您快速判断问题
        </p>
        <div className="articles-list">
          {articles.map((a, i) => (
            <article className="article-card" key={i}>
              <span className="article-tag">🔖 {a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.summary}</p>
              <div className="article-meta">
                <span>📅 {a.date}</span>
                <span>⏱ 阅读 {a.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="trust section" id="trust">
      <div className="container">
        <div className="trust-content">
          <div className="trust-info">
            <h2>抖音搜索「枣强门壹修」</h2>
            <div className="section-divider" style={{ margin: '16px 0 24px' }} />
            <p>
              刘金灿师傅持续在抖音分享专业维修知识和真实维修案例。
              安装各类卷帘门、自建房大门、防盗门、智能锁、磁吸锁——
              关注抖音账号，了解更多门类维修技巧。
            </p>
            <div className="trust-highlights">
              <span className="trust-highlight">✅ 从业20年</span>
              <span className="trust-highlight">✅ 3357获赞</span>
              <span className="trust-highlight">✅ 1400+粉丝</span>
              <span className="trust-highlight">✅ 免费上门</span>
              <span className="trust-highlight">✅ 不修不收费</span>
            </div>
            <a
              href="https://www.douyin.com/search/枣强门壹修"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-douyin"
            >
              🎵 抖音搜索「枣强门壹修」
            </a>
          </div>
          <div className="trust-image-wrapper">
            <div className="trust-image-frame">
              <img
                src="/images/douyin-profile.jpg"
                alt="枣强门壹修抖音主页 - 刘金灿师傅"
                loading="lazy"
              />
            </div>
            <div className="trust-phone-badge">
              抖音号：78035798381
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>枣强门壹修</h3>
            <p>
              衡水枣强本地卷帘门维修服务。从业20年，专注各类门的安装、维修与保养。
              家庭、企业、学校各类门一站式服务，县城内15分钟快速达。
            </p>
          </div>
          <div className="footer-section">
            <h4>联系方式</h4>
            <div className="footer-contact-item">
              <span className="icon">📞</span>
              <div>
                <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
                <br />
                <span style={{ fontSize: '12px', opacity: 0.6 }}>
                  刘金灿师傅
                </span>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="icon">💬</span>
              <div>微信同号：{PHONE}</div>
            </div>
            <div className="footer-contact-item">
              <span className="icon">🎵</span>
              <div>抖音：枣强门壹修</div>
            </div>
          </div>
          <div className="footer-section">
            <h4>服务覆盖</h4>
            <div className="footer-area-tags">
              {serviceAreas.map((area, i) => (
                <span className="footer-area-tag" key={i}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 枣强门壹修 · 刘金灿 · 版权所有</p>
          <p>河北省衡水市枣强县 | 卷帘门 · 伸缩门 · 道闸杆 · 安装维修</p>
        </div>
      </div>
    </footer>
  )
}

function MobileCallBar() {
  return (
    <div className="mobile-call-bar" id="mobile-call-bar">
      <a href={`tel:${PHONE}`}>
        📞 一键拨号 {PHONE_DISPLAY}
      </a>
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="回到顶部"
    >
      ↑
    </button>
  )
}

/* ============================================
   App
   ============================================ */
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Knowledge />
        <Trust />
      </main>
      <Footer />
      <MobileCallBar />
      <BackToTop />
    </>
  )
}

export default App
