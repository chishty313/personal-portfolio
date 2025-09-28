# Chishty Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and shadcn/ui, showcasing expertise in backend development, AI/ML, automation, cloud computing, system administration, and computer networks.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Beautiful UI**: Uses shadcn/ui components for a polished, professional look
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Proper meta tags and structured data
- **Performance Focused**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 🌐 Deployment

### Quick Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/chishty-portfolio)

1. **Fork this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your forked repository
3. **Deploy**: Vercel will automatically deploy your site
4. **Custom Domain**: Add your domain in Vercel project settings

### Other Deployment Options
- **Netlify**: Connect GitHub repo, build command: `npm run build`
- **GitHub Pages**: Use GitHub Actions workflow
- **Railway**: Connect GitHub repo for automatic deployment

📖 **Detailed deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── progress.tsx
│   │   └── tabs.tsx
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills showcase
│   ├── Projects.tsx         # Projects portfolio
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Sections

### 1. Hero Section

- Professional introduction
- Animated skill tags
- Call-to-action buttons
- Social media links

### 2. About Section

- Personal story and expertise
- Statistics and achievements
- Detailed skill categories
- Professional background

### 3. Skills Section

- Comprehensive skill showcase
- Progress bars for proficiency levels
- Categorized by technology domains
- Certifications and achievements

### 4. Projects Section

- Featured project showcase
- Filterable by category
- Detailed project information
- Live demo and source code links

### 5. Contact Section

- Interactive contact form
- Contact information
- Social media links
- Availability status

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chishty-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Personal Information

Update the following files with your personal information:

- **Header.tsx**: Update social media links
- **Hero.tsx**: Update name, title, and description
- **About.tsx**: Update personal story and statistics
- **Skills.tsx**: Update skills and certifications
- **Projects.tsx**: Update project information
- **Contact.tsx**: Update contact details

### Styling

- **Colors**: Modify CSS variables in `globals.css`
- **Fonts**: Update font imports in `layout.tsx`
- **Components**: Customize shadcn/ui components as needed

### Content

- **Projects**: Add your actual projects with real links
- **Skills**: Update with your actual skill levels
- **Contact**: Update with your real contact information
- **Social Links**: Update with your actual social media profiles

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Lazy Loading**: Components load as needed
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant components

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please contact:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using Next.js and shadcn/ui
