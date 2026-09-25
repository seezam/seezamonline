# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 18 + Vite 5 + TypeScript + Tailwind CSS + shadcn/ui + React Router 6 + HashRouter for GitHub Pages, with Framer Motion and Lucide React for UI polish. The project is a static SPA deployed via GitHub Pages and GitHub Actions.

## Users

Primary users are potential clients, partners, and hiring managers evaluating Alex Efimychev’s services. They are typically deciding whether to engage someone for a web product, automation workflow, or digital presence, and they need a clear, trustworthy snapshot of capabilities and a straightforward path to contact the owner.

Secondary audiences include people who arrive via a personal contact card, QR code, social profile, or direct referral. They are often mobile-first and want an immediate understanding of the offer and a quick route to message or call.

## Product Purpose

The product is a personal portfolio and conversion site for Alex Efimychev. It presents his technical services, communicates the value of working with him, and directs visitors toward real contact actions: call, WhatsApp, Telegram, email, or a project inquiry.

Success means a visitor quickly understands what the business offers, trusts the quality of the work, and reaches out without friction.

## Positioning

This is a founder-led digital services portfolio rather than a generic SaaS template or agency brand. The mechanism is direct expertise and personal accountability: a single specialist/consultant offering design, development, automation, hosting, and operational digital products with a clear owner-facing contact path.

## Operating Context

The site is used in a static web environment with GitHub Pages and a HashRouter because there is no server-side routing support. Visitors arrive from the main domain, service pages, a contact card at /me/, or a QR code. The site is optimized for quick evaluation on mobile and desktop, and the product is expected to support a small set of revenue-driving flows rather than a broad app ecosystem.

The public contact card is a separate static page under /me/ with owner and visitor modes. The owner mode exposes QR and copy-link utilities; the visitor mode is a cleaner personal card without admin tooling.

## Capabilities and Constraints

Confirmed capabilities and constraints:

- Service categories include Telegram bots, mini apps, web apps, AI automation, cloud hosting, and VPS hosting.
- The site is implemented as a static SPA with no backend or login flow.
- The main site and the /me/ card both emphasize direct communication, not account creation.
- The project must remain compatible with GitHub Pages hosting and static deployment constraints.
- The contact information is personal and fixed; it is not a placeholder or mock data set.
- A pilot localization layer exists for the home page using URL-based language selection via ?lang=ru or ?lang=en.
- The product is designed for straightforward conversion, not feature-heavy product management.

## Brand Commitments

Brand and identity facts already established in the project:

- Name: Alex Efimychev
- Brand handle: seezam
- Role/title: WEB-РАЗРАБОТКА И ДИЗАЙН
- Direct contact details are already fixed in the product:
  - Phone: +7 916 023-76-77
  - WhatsApp: +79160237677
  - Telegram: @seezam
  - Site: https://seezam.online/
- The visual tone is professional, premium, minimal, and founder-led rather than noisy or mass-market.
- The brand is factual and service-oriented; future work should preserve the real identity and avoid inflated startup-style claims.

## Evidence on Hand

Real project evidence that future work should preserve:

- Main site: https://seezam.online/
- VCard/contact page: https://seezam.online/me/
- Source code in src/ and public/
- Contact metadata in public/me/index.html and public/me/efimychev.vcf
- Existing route structure: home, Telegram Bots, Mini Apps, Web Apps, VPS Hosting, Cloud Hosting, AI Automation, and NotFound
- Current product implementation and content in the repository itself

No testimonials, benchmarks, customer logos, pricing claims, or fabricated proof points should be invented for future design or product work.

## Product Principles

1. Keep the offer easy to understand in under a few seconds.
2. Prioritize direct conversion to real contact over decorative complexity.
3. Treat the founder’s expertise as the core trust signal.
4. Favor a reliable static architecture over unnecessary product complexity.
5. Maintain a premium, focused, and credible personal brand.

## Accessibility & Inclusion

The project should remain readable, touch-friendly, and usable on mobile-first devices. Accessibility considerations should include clear hierarchy, readable contrast, and a simple path to contact without friction. The product should work for users who may arrive from a QR code, a social share, or a browser on a slower phone, and it should not rely on flashy or inaccessible UI patterns to communicate value.
