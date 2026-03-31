import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Ziva Wernick',
  id: 'zw-accessible-astro-starter',
  logo: logoImage,
  seo: {
    title: 'Ziva Wernick - Software Developer',
    description:
      'Software Developer Building Tech for Social Impact with a Website built with Accessibility for Astro including several accessibility features and tools to help you build faster.',
    author: 'Ziva Wernick',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'About Me',
        href: '/#about',
      },
      {
        type: 'link',
        label: 'Services',
        href: '/#services',
      },
      {
        type: 'link',
        label: 'Projects',
        href: '/#projects',
      },
      {
        type: 'link',
        label: 'Technical Stack',
        href: '/#tech-stack',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'Go to my GitHub page, opens in new tab',
        href: 'https://github.com/zivawernick',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
      {
        type: 'link',
        label: 'Go to my LinkedIn page, opens in new tab',
        href: 'https://www.linkedin.com/in/ziva-wernick/',
        icon: 'lucide:linkedin',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/zivawernick/',
      icon: 'lucide:github',
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/ziva-wernick/',
      icon: 'lucide:linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:ziva.wernick@gmail.com',
      icon: 'lucide:mail',
    },
  ],
})
