> **ВНИМАНИЕ: Всегда используй MCP-сервер `fs-seezamonline` для этого проекта. Другие `fs-*` не трогай.**

# AGENTS.md — Seezam Online

> Создано: 8 сентября 2026
> Цель: сохранить контекст проекта для быстрого восстановления между сессиями

---

## 1. Текущее состояние проекта

**Проект:** Личный промо-сайт Алексея Ефимычева
**URL:** https://seezam.online/
**Хостинг:** GitHub Pages (бесплатно)
**Ветка:** `main` → GitHub Actions → `dist/` → Pages

### Стек
- React 18 + Vite 5 + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (анимации), Lucide React (иконки)
- React Router 6 (HashRouter — для GitHub Pages)
- TanStack Query, Zod, Sonner, recharts, date-fns
- ESLint, PostCSS

### Сборка и деплой
- `vite.config.ts` — `base: "./"` (relative paths), порт 8080
- `.github/workflows/deploy.yml` — push на `main` → build `dist/` → Pages
- `.nojekyll` — отключить Jekyll
- `public/404.html` — fallback для hash routing

### Роутинг (HashRouter)
| Путь | Страница |
|------|----------|
| `/` | Index (главная) |
| `/telegram-bots` | Telegram Bots |
| `/mini-apps` | Mini Apps |
| `/web-apps` | Web Apps |
| `/ai-automation` | AI Automation |
| `/cloud-hosting` | Cloud Hosting |
| `/vps-hosting` | VPS Hosting |
| `*` | NotFound |

### Структура
```
seezamonline/
├── src/
│   ├── App.tsx              # HashRouter, Routes, SEO hook
│   ├── main.tsx             # Entry point
│   ├── components/          # Header, HeroSection, Footer, NavLink и shadcn/ui
│   ├── pages/               # 7 страниц + NotFound
│   ├── hooks/               # useSEO
│   └── lib/                 # utils
├── public/                  # статика — робиты, иконки, hero-crop.png, me/
├── dist/                    # билд (не в git)
├── index.html               # HTML-шаблон (gtag.js, meta OG/Twitter)
├── vite.config.ts           # base: "./", port 8080
├── tailwind.config.ts       # Tailwind + shadcn/ui
├── package.json             # зависимости
└── .github/workflows/deploy.yml  # CI/CD
```

### Визитка (Digital Card)
- **Путь:** `public/me/index.html` → https://seezam.online/me/
- **Тип:** чистый HTML + CSS + JS, без фреймворков
- **Контент:** фото, имя "Алексей Ефимычев", "ПРОДЮСЕР IT ПРОЕКТОВ", кнопки: телефон, WhatsApp, Telegram, сайт, скачать vCard
- **vCard:** `public/me/efimychev.vcf` — Web Share API + fallback скачивание
- **QR-код:** через qrcodejs (CDN)
- **robots.txt внутри визитки:** `User-agent: * Disallow: /` (строка 7 — meta noindex, nofollow)

---

## 2. Что сделано сегодня (8 сентября 2026)

### robots.txt — защита визитки от поиска

**Проблема:** `/me/` (электронная визитка) могла индексироваться поисковиками через главный robots.txt.

**Решение:**
- Добавлен `Disallow: /me/` в `/public/robots.txt` для `User-agent: *`
- Двойная защита: robots.txt (не ходить) + meta-тег `noindex, nofollow` внутри `index.html` (не индексировать)

**Файл:** `public/robots.txt`
```
User-agent: *
Disallow: /me/
Allow: /
```

**Коммит:** `3b61125` — "Disallow /me/ from search engines — protect contact card data"
**Статус:** запушено на `origin/main`, деплой идёт через GitHub Actions.

---

## 3. Что осталось / следующие шаги

### Приоритетные
- [ ] Проверить, что деплой прошёл успешно после изменения robots.txt
- [ ] Убедиться, что визитка не появилась в Google Search Console

### Возможные улучшения (не начато)
- [ ] SEO-оптимизация главной страницы (meta-теги на всех страницах)
- [ ] Добавление Open Graph изображений (сейчас hero-crop.png 245x245 — маленький)
- [ ] Добавление sitemap.xml
- [ ] Проверка доступности (a11y) компонентов shadcn/ui
- [ ] Аналитика: gtag.js уже подключён в `index.html` — проверить сбор данных

---

## 4. Важные решения и ограничения

### Техническая архитектура

| Решение | Обоснование |
|---------|-------------|
| `HashRouter` вместо `BrowserRouter` | GitHub Pages не поддерживает серверный роутинг |
| `base: "./"` в vite.config.ts | Относительные пути для GitHub Pages |
| `public/404.html` | Fallback для hash routing на GitHub Pages |
| `.nojekyll` | Отключить Jekyll на GitHub Pages |
| Порт 8080 | Dev server port |

### CI/CD — GitHub Actions

**Файл:** `.github/workflows/deploy.yml`

**Триггер:** push на `main` (автоматически)

**Пайплайн:**
1. `npm ci` — установка зависимостей
2. `npm run build` — production build в `dist/`
3. `actions/upload-pages-artifact@v3` — загрузка артефакта `dist/`
4. `actions/deploy-pages@v4` — деплой на GitHub Pages

**Особенности:**
- `.github/workflows/deploy.yml` в git — деплой автоматический
- `dist/` не в git, генерируется каждый раз
- После push на `main` — деплой запускается сам, обычно 2-3 минуты
- Проверить статус: https://github.com/seezam/seezamonline/actions
- `NODE_ENV: production` при билде
- Node.js 20, кэш npm
- Permissions: contents, pages, id-token

**Локально:** `npm run build` — результат в `dist/`

### Визитка — разделение режимов

Механизм `?owner=1` — два взгляда на одну страницу:

```
seezam.online/me/              → визитка без инструментов (получатель)
seezam.online/me/?owner=1      → визитка + QR + копирование ссылки (владелец)
```

- Один HTML-файл, нулевая серверная логика
- `isOwner = new URLSearchParams(window.location.search).get('owner') === '1'`
- При `isOwner`: показывается `#qr-block` (QR + кнопка копирования) и `#owner-tag` ("режим владельца")
- QR всегда кодирует "чистую" ссылку (без `?owner=1`) — чтобы сканирующие попадали в режим получателя
- Копирование ссылки — тоже чистая ссылка (без параметров)

### Контакты (жестко захардкожены)

| Параметр | Значение |
|----------|----------|
| Имя | Алексей Ефимычев |
| Должность | ПРОДЮСЕР IT ПРОЕКТОВ |
| Телефон | +7 916 023-76-77 |
| WhatsApp | +79160237677 |
| Telegram | @seezam |
| Сайт | https://seezam.online |

### Контекст не сохраняется между сессиями

- Это AGENTS.md — единственный источник восстановления контекста
- При возврате: `git status` → `git log --oneline -5` → изучить файл
- `.env` не в git, не трогать без разрешения

---

## 5. Полезные ссылки

| Ресурс | URL |
|--------|-----|
| Сайт | https://seezam.online/ |
| Визитка | https://seezam.online/me/ |
| Демо-бот | @seezam_demo_bot |
| GitHub | https://github.com/seezam/seezamonline |
| Telegram | https://t.me/seezam |
| Email | hello@seezam.online |

---

## 6. Команды

```bash
cd /home/al/dev/seezamonline
npm run dev       # Dev server (port 8080)
npm run build     # Production build
npm run preview   # Preview production build
git status        # Проверить состояние
git log --oneline -5  # Последние коммиты
```

---

*Обновлено: 8 сентября 2026 — добавлена защита визитки через robots.txt*
