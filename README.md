# OrderAI Landing Page

A modern, conversion-optimized landing page for your fast food AI phone ordering assistant.

## 🎯 Features

- **Hero Section** with compelling value proposition and dual CTAs
- **Problem/Solution** section that emotionally connects with restaurant owners
- **Feature Showcase** highlighting 24/7 availability, POS integration, and accuracy
- **How It Works** - Simple 3-step process
- **Social Proof** with testimonials and real statistics
- **ROI Calculator** showing cost comparison and savings
- **FAQ Section** addressing common concerns
- **Multiple CTAs** strategically placed throughout the page
- **Responsive Design** - looks great on all devices
- **Demo Request Modal** for lead capture

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the web directory:
```powershell
cd web
```

2. Install dependencies:
```powershell
npm install
```

3. Start the development server:
```powershell
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```powershell
npm run build
```

This creates an optimized build in `../static/app` directory.

## 📁 Project Structure

```
web/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Navbar.jsx          # Sticky navigation bar
│   │   └── DemoRequestModal.jsx # Lead capture modal
│   ├── pages/
│   │   └── LandingPage.jsx     # Main landing page
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
└── postcss.config.js           # PostCSS config
```

## 🎨 Design Philosophy

- **Clean & Minimal** - Airbnb/Notion-inspired aesthetic
- **Conversion-Focused** - CTAs always visible, clear value proposition
- **Professional yet Friendly** - Tone tailored for restaurant owners/managers
- **Mobile-First** - Fully responsive on all screen sizes

## 📝 Content Strategy

The landing page addresses:
- Pain points restaurant owners face daily
- How AI solves these specific problems
- Trust building through social proof
- Clear ROI demonstration
- Removal of objections via FAQ
- Multiple conversion opportunities

## 🎯 Key Copy Elements

1. **Headline**: "Never miss a phone order again" - addresses primary pain point
2. **Subheadline**: Explains the solution clearly without jargon
3. **Social Proof**: Stats, testimonials from real restaurant owners
4. **ROI Focus**: Shows concrete savings ($3,701/month)
5. **Trust Signals**: 14-day free trial, no credit card, cancel anytime
6. **Simple Setup**: "48 hours" and "3 simple steps"

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the primary color scheme:
```js
primary: {
  600: '#dc2626', // Main brand color
  700: '#b91c1c', // Darker shade
}
```

### Content
All content is in `src/pages/LandingPage.jsx` - easily editable sections:
- Hero text
- Features list
- Testimonials
- Pricing details
- FAQ questions

### Lead Capture
The `DemoRequestModal` component handles form submissions. Connect it to your backend by updating the `handleSubmit` function.

## 📊 Conversion Elements

- **Primary CTA**: "Start Free Trial" / "Request Demo"
- **Secondary CTA**: "Watch Demo" / "Schedule a Demo"
- **Strategic Placement**: Hero, after each section, footer
- **Urgency**: "500+ restaurants", "14-day trial", "$3,701/mo savings"
- **Trust**: Testimonials, no credit card required, cancel anytime

## 🔌 Integration Points

Ready to connect:
- Demo request form → Your CRM/Email
- POS system logos/badges
- Live chat widget
- Analytics tracking (Google Analytics, etc.)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All sections adapt beautifully to different screen sizes.

## 🎬 Next Steps

1. **Add Real Content**: Replace placeholder testimonials with real customer quotes
2. **Connect Form**: Wire up the demo request modal to your backend
3. **Add Analytics**: Install Google Analytics or similar
4. **A/B Testing**: Test different headlines and CTA copy
5. **Add Demo Video**: Embed a real demo video in the hero section
6. **Connect Backend**: Link to your actual agent API for live demos

## 📄 License

Proprietary - Part of your OrderAI product

---

Built with ❤️ using React, Vite, and Tailwind CSS
