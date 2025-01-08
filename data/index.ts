export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Blog', link: '#blogs' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Adventure Gear Nepal',
    des: 'Embark on a seamless shopping journey with our fully immersive e-commerce platform, where clients, buyers, and admins interact in a dynamic environment.',
    img: '/p1.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://main--adventuregearnepal.netlify.app/',
  },
  {
    id: 2,
    title: 'Ehome E-commerce',
    des: 'eHome is a versatile online e-commerce platform that offers a seamless shopping experience for customers, a robust order management system for buyers.',
    img: '/p2.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://ehomemanish.netlify.app/',
  },
  {
    id: 3,
    title: 'DoctorHub demo',
    des: 'DoctorHub is a web platform for easy doctor search, booking, telemedicine, and health management. It features patient and doctor dashboards, appointment management, and secure video consultations..',
    img: '/p3.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://doctorhubmanish.netlify.app/',
  },
  {
    id: 4,
    title: 'Erp',
    des: 'ERP (Enterprise Resource Planning) is a comprehensive system that integrates various business processes, including finance, HR, inventory, and sales, streamlining operations and enhancing decision-making efficiency.',
    img: '/p4.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://erpmanish.netlify.app/',
  },
  {
    id: 5,
    title: 'Zentry Gaming Agency',
    des: 'Immerse yourself in reach and ever-expanding universe where a vibrant array of products converse into an interconnected overlay experience on your world..',
    img: '/p5.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://zentry-rho.vercel.app/',
  },
  {
    id: 6,
    title: 'Jewellery',
    des: 'Explore our handcrafted jewelry collection, blending timeless classics and modern designs. Crafted with precision and the finest materials, our pieces celebrate elegance and individuality for every occasion.',
    img: '/p6.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://jewellery-manish.netlify.app/',
  },
  {
    id: 7,
    title: 'College',
    des: 'A hub of academic excellence and innovation, offering diverse programs, world-class faculty, and vibrant campus life. Explore admissions, resources, and opportunities to shape your future with us.',
    img: '/p7.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://college-webmanish.netlify.app/',
  },
];

export const blogs = [
  {
    quote:
      'JavaScript, a versatile and powerful programming language, has become the backbone of web development. With its ability to handle both frontend and backend tasks, JavaScript enables developers to create dynamic, interactive websites and applications. The rise of modern frameworks like React, Angular, and Vue has further strengthened its dominance in the web ecosystem.',
    name: 'JavaScript in Web Development',
    title: 'The Backbone of Modern Web Apps',
  },
  {
    quote:
      'Asynchronous JavaScript allows developers to handle tasks like API requests and data fetching without blocking the main thread. With the introduction of Promises and async/await, managing asynchronous code has become more intuitive, making it easier to write cleaner, more readable code.',
    name: 'Asynchronous JavaScript',
    title: 'A Modern Approach to Non-blocking Code',
  },
  {
    quote:
      'Node.js, built on the V8 JavaScript engine, has revolutionized server-side development. It allows developers to use JavaScript for backend services, fostering seamless communication between frontend and backend. Its event-driven, non-blocking architecture makes it ideal for building scalable, real-time applications.',
    name: 'Node.js',
    title: 'JavaScript on the Server Side',
  },
  {
    quote:
      'ES6 introduced several game-changing features to JavaScript, such as arrow functions, template literals, destructuring, and modules. These new features have improved code readability and maintainability, empowering developers to write more efficient and concise code.',
    name: 'ES6 Features',
    title: 'The Evolution of JavaScript',
  },
  {
    quote:
      "JavaScript frameworks like React and Vue have transformed how we build user interfaces. React’s component-based architecture encourages reusability, while Vue's simplicity offers a gentle learning curve. Both frameworks empower developers to create responsive, interactive user experiences with minimal effort.",
    name: 'JavaScript Frameworks',
    title: 'Building Interactive UIs',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/manishpun08',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://x.com/',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/manish-pun-magar-b3ba83245/',
  },
];
