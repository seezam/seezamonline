import screenshotBg from '@/imports/tgbots-screen.png'

const TELEGRAM_IMG = 'https://images.unsplash.com/photo-1637592156979-95f44c286423?w=400&h=400&fit=crop&auto=format'
const ROBOT_IMG    = 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=400&h=400&fit=crop&auto=format'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Автоматическая поддержка',
    text: 'Мгновенные ответы на вопросы клиентов, обработка заявок и записей. Ваш бот работает 24/7, не устаёт и не делает ошибок. Клиенты получают ответы за секунды, а не часы ожидания.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Интеграции',
    text: 'Подключение к CRM, платёжным системам, базам данных и API. Бот становится частью вашей экосистемы — синхронизирует заказы, клиентов, уведомления и отчёты в реальном времени.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Безопасность',
    text: 'Защита данных, надёжная аутентификация и контроль доступа; настройка ролей пользователей, фильтры контента и защита от спама. Ваши данные и репутация под надёжной охраной.',
  },
]

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0e12] text-white font-sans">

      {/* ── BACKGROUND: screenshot with dark overlay ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={screenshotBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-[0.07] scale-110"
          style={{ filter: 'blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e12]/60 via-[#0d0e12]/80 to-[#0d0e12]" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">

        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2AABEE]/15 border border-[#2AABEE]/25 mb-8 mx-auto">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#2AABEE" opacity=".15"/>
            <path d="M17.5 8L10.5 15.5l-4-3.5" stroke="#2AABEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#2AABEE" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-5">
          Разработка{' '}
          <span className="text-[#2AABEE]">Telegram-ботов</span>
        </h1>

        <p className="text-center text-white/55 text-base leading-relaxed max-w-lg mx-auto mb-10">
          Умные боты для автоматизации бизнеса, поддержки клиентов и увеличения продаж 24/7. От простых команд до сложных многофункциональных систем — создаём решения, которые работают на вас.
        </p>

        {/* ── Thematic circles ── */}
        <div className="flex items-center justify-center gap-10 mb-14">
          {/* Telegram logo */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#2AABEE]/25 blur-2xl scale-125" />
              <div
                className="relative rounded-full overflow-hidden border-[3px] border-[#2AABEE]/50 shadow-[0_0_48px_rgba(42,171,238,0.3)]"
                style={{ width: 160, height: 160 }}
              >
                <img src={TELEGRAM_IMG} alt="Telegram" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#2AABEE]/10 mix-blend-multiply" />
              </div>
            </div>
            <span className="text-xs text-white/40 tracking-widest uppercase">Telegram</span>
          </div>

          {/* divider dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

          {/* AI / robot */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl scale-125" />
              <div
                className="relative rounded-full overflow-hidden border-[3px] border-violet-400/40 shadow-[0_0_48px_rgba(139,92,246,0.25)]"
                style={{ width: 160, height: 160 }}
              >
                <img src={ROBOT_IMG} alt="Автоматизация" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-violet-900/20 mix-blend-multiply" />
              </div>
            </div>
            <span className="text-xs text-white/40 tracking-widest uppercase">Автоматизация</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-6 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.12] transition-colors duration-200"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[#2AABEE]/12 text-[#2AABEE]">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 text-[15px]">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/60 text-base mb-2">Готовы начать?</p>
          <p className="text-white/40 text-sm mb-6">
            Опишите нам проект и задачи вашего бота. Напишите нам — ответим в течение нескольких часов.
          </p>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2AABEE] text-white font-semibold text-sm hover:bg-[#1d97d6] transition-colors duration-200 shadow-[0_0_30px_rgba(42,171,238,0.35)]"
          >
            Связаться в Telegram
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  )
}
