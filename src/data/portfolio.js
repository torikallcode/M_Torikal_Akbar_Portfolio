// ---------------------------------------------------------------------------
// Semua konten website ada di sini. Desain mengikuti portfolio versi lama
// (refrensi-portfolio), dipindahkan ke React.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'M. Torikal Akbar',
  firstName: 'Torikal',
  greeting: 'Hi👋, iam Torikal',
  role: 'Web Developer',
  headlineTop: 'Web designer',
  headlineBottom: 'Web developer',
  tagline: 'Coding itu menyenangkan bukan? :)',
  aboutTitle: 'M. TORIKAL AKBAR',
  aboutText:
    'Hello everyone, my name is M. Torikal Akbar. I work with people from all over the world to create websites and design websites.',
  email: 'torikalcontent@gmail.com',
  photo: '/img/1654315110022.jpg',
  heroBackground: '/img/bckh2.jpg',
  logo: '/img/Logo.png',
  availability: 'Available for freelance work',
}

export const socials = {
  github: 'https://github.com/torikallcode',
  linkedin: 'https://www.linkedin.com/in/m-torikal-akbar-23859a29b',
  instagram: 'https://www.instagram.com/torikallcode/?hl=id',
  facebook:
    'https://www.facebook.com/profile.php/?id=100016778295782&name=xhp_nt__fb__action__open_user',
}

export const socialLinks = [
  { label: 'LinkedIn', href: socials.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: socials.github, icon: 'github' },
  { label: 'Instagram', href: socials.instagram, icon: 'instagram' },
  { label: 'Facebook', href: socials.facebook, icon: 'facebook' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#project' },
  { label: 'Contact', href: '#contact' },
]

export const experience = {
  role: 'Freelance Web Developer',
  period: '2024 — Present',
  summary:
    'Saya membantu klien membangun website yang cepat, responsif, dan mudah digunakan — mulai dari landing page, company profile, hingga undangan digital dan eksperimen antarmuka.',
  highlights: [
    {
      title: 'Website company profile & landing page',
      description:
        'Membangun website untuk kebutuhan bisnis dan personal brand, mulai dari menyusun struktur halaman, menerjemahkan desain menjadi kode, hingga memastikan tampilannya tetap rapi di berbagai ukuran layar.',
      tags: ['Responsive', 'Tailwind CSS', 'Frontend'],
    },
    {
      title: 'Torikal.ui — komponen Tailwind CSS',
      description:
        'Mengembangkan koleksi komponen Tailwind CSS gratis yang siap dipakai, lengkap dengan contoh penggunaan agar mudah diadaptasi oleh developer lain.',
      tags: ['Tailwind CSS', 'UI Library'],
    },
    {
      title: 'Undangan pernikahan digital',
      description:
        'Membuat website undangan pernikahan yang ringan dan mudah dibagikan, berisi informasi acara, galeri, serta detail yang dibutuhkan tamu undangan.',
      tags: ['Web Design', 'Frontend'],
    },
    {
      title: 'GameSuit Pro — game web interaktif',
      description:
        'Mengembangkan permainan suit di browser dengan aturan yang lebih menantang, sebagai eksplorasi logika JavaScript dan animasi antarmuka.',
      tags: ['JavaScript', 'Interactive'],
    },
  ],
}

export const projects = [
  {
    title: 'Torikal.ui',
    description:
      'Website yang menyediakan component Tailwind CSS gratis yang siap untuk digunakan.',
    image: '/img/projext1.jpg',
    demoUrl: null,
    demoNote: 'Project ini sedang dalam pengembangan',
  },
  {
    title: 'Wedding invitation',
    description:
      'Website undangan pernikahan yang memudahkan tamu mendapatkan informasi terkait pernikahan.',
    image: '/img/projext21.jpg',
    demoUrl: 'https://torikallcode.github.io/MyWedding_Amerta/',
  },
  {
    title: 'GameSuit Pro',
    description:
      'Website game suit yang lebih menantang dari game suit biasanya.',
    image: '/img/projext31.jpg',
    demoUrl: 'https://torikallcode.github.io/MyGameSuit_v.2/',
  },
]

export const skills = [
  { name: 'HTML', icon: 'html', color: '#E34F26' },
  { name: 'CSS', icon: 'css', color: '#1572B6' },
  { name: 'JavaScript', icon: 'javascript', color: '#E8D44D' },
  { name: 'Tailwind CSS', icon: 'tailwind', color: '#36B7F0' },
  { name: 'React JS', icon: 'react', color: '#00D1F7' },
  { name: 'Go', icon: 'go', color: '#00ADD8' },
  { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
  { name: 'Git', icon: 'git', color: '#F03C2E' },
]

export const contact = {
  title: 'LET’S TALK ABOUT DESIGN, PROJECTS AND WORK',
  description:
    "Are you looking for a freelance web designer or graphic designer? Do you have a project or idea to realize? Feel free to send me an email to discuss it, I've got you covered!",
  mailtoSubject: 'Project collaboration',
}

export const footer = {
  heading: 'Thanks for visiting my portfolio',
  quote:
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  bigText: 'Improve Your Skills to Exceed Your Limit',
  leftTop: 'Web designer & web developer',
  leftBottom: 'Portfolio 2026',
  rightTop: 'Available for freelance work',
  rightBottom: 'Open for projects',
}
