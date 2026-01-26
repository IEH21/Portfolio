// Traductions complètes anglais/français pour navigation + hero + about + projects + education + contact
type TranslationShape = {
  nav: {
    home: string
    about: string
    projects: string
    education: string
    contact: string
  }
  hero: {
    greeting: string
    title1: string
    title2: string
    title3: string
    description: string
    availability: string
    viewProjects: string
    contact: string
    downloadCV: string
  }
  footer: {
    rights: string
  }
  about: {
    title: string
    p1: string
    p2: string
    p3: string
  }
  projects: {
    title: string
    items: {
      [key: string]: {
        title: string
        description: string
    }
  }
}  
  education: {
    title: string
    items: {
      school: string
      location: string
      diploma: string
    }[]
  }
  aboutSkills: {
    title: string
    tabs: {
      frontend: string
      backend: string
      frameworks: string
      others: string
    }
  }
  contact: {
    title: string
    message: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    error: string
  }
}

export const translations = {
  // =====================
  // 🇬🇧 ENGLISH
  // =====================
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },

    hero: {
      greeting: "Hello 👋, I’m Imane",
      title1: "Motivated",
      title2: "Web & Mobile Developer",
      title3: "seeking an internship.",
      description:
        "Driven by a passion for building modern applications, I am seeking an internship where I can contribute to diverse projects and continue to grow as a developer.",
      availability: "Looking for an internship – Winter 2026",
      viewProjects: "View projects",
      contact: "Contact me →",
      downloadCV: "Download CV",
    },

    footer: {
      rights: "All rights reserved",
    },

    about: {
      title: "About me",
      p1: "Hi! I'm Imane EL Harch, a soon-to-graduate web and mobile development student with a strong passion for building clean, modern, and user-friendly digital experiences. I enjoy working on both front-end and back-end technologies and love creating well-structured, efficient applications.",
      p2: "I am currently looking for an internship focused on Kotlin development, ideally in a setting where I can deepen my skills in mobile or backend development. That said, I’m also open to other opportunities in the development field, as I enjoy learning and taking on new challenges.",
      p3: "Alongside my technical background, I have experience in customer service, where I strengthened my communication, leadership, and problem-solving abilities. These experiences help me collaborate effectively in team environments and interact confidently with a wide range of users.",
    },

    aboutSkills: {
      title: "Technical skills",
      tabs: {
        frontend: "Frontend",
        backend: "Backend",
        frameworks: "Frameworks",
        others: "Others",
      },
    },  

    projects: {
  title: "Projects",
  items: {
    mastermind: {
      title: "Mastermind (Java)",
      description:
        "Console-based Java game where the player guesses a color combination using logical comparisons.",
    },
    kaypic: {
      title: "Kaypic Communication",
      description:
        "A web platform designed for sports and community organizations, featuring secure user authentication, role-based access, and real-time interactions. The application supports file sharing and live updates to enhance collaboration between members.",
    },
    memotag: {
      title: "MemoTag",
      description:
        "Android note-taking app allowing users to create, tag, organize and search notes efficiently.",
    },
    tictactoe: {
      title: "Tic-Tac-Toe",
      description:
        "A classical game where you play against a robot that blocks moves strategically. The app supports English, French and Spanish.",
    },
    raspberry: {
      title: "Raspberry Pi Touch Display",
      description:
        "IoT project detecting touch input and displaying dynamic messages on an LCD screen.",
    },
    stageconnect: {
      title: "StageConnect",
      description:
        "Kotlin Android application designed to help students search and manage internships.",
    },
  },
},

    education: {
      title: "Education",
      items: [
    {
      school: "Rosemont CEGEP",
      location: "Montreal, Quebec",
      diploma:
        "Diploma of College Studies in Computer Science – Web and Mobile Application Development",
    },
    {
      school: "Léonard-De Vinci Vocational Training Center",
      location: "Montreal, Quebec",
      diploma:
        "Diploma of Vocational Studies in Computer Science",
    },
    {
      school: "Saint-Laurent High School",
      location: "Montreal, Quebec",
      diploma:
        "High School Diploma",
    },
  ],
},

    contact: {
      title: "Contact",
      message: "Interested in working together or just want to say hi?",
      nameLabel: "Name :",
      namePlaceholder: "Your name..",
      emailLabel: "Email :",
      emailPlaceholder: "your@example.com",
      messageLabel: "Message :",
      messagePlaceholder: "Tell me your idea..",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Something went wrong. Please try again.",
    },
  },

  // =====================
  // 🇫🇷 FRANÇAIS
  // =====================
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },

    hero: {
      greeting: "Bonjour 👋, je suis Imane",
      title1: "Développeuse Web & Mobile",
      title2: "motivée",
      title3: "en recherche d’un stage.",
      description:
        "Motivée par la création d’applications modernes, je recherche un stage en développement où je pourrai contribuer à des projets variés et continuer à évoluer.",
      availability: "À la recherche d'un stage – Hiver 2026",
      viewProjects: "Voir les projets",
      contact: "Me contacter →",
      downloadCV: "Télécharger mon CV",
    },

    footer: {
      rights: "Tous droits réservés",
    },

    about: {
      title: "À propos de moi",
      p1: "Bonjour ! Je m’appelle Imane EL Harch, étudiante en développement web et mobile bientôt diplômée, passionnée par la création d’expériences numériques claires, modernes et agréables à utiliser. J’aime autant le front-end que le back-end, et je prends plaisir à concevoir des applications bien structurées, performantes et pensées pour l’utilisateur.",
      p2: "Je suis actuellement à la recherche d’un stage axé sur le développement Kotlin, idéalement dans un environnement où je pourrais approfondir mes compétences en développement mobile ou backend. Je reste toutefois ouverte à d’autres propositions dans le domaine du développement, car j’aime apprendre et relever de nouveaux défis.",
      p3: "En parallèle de mon parcours technique, j’ai travaillé dans le service à la clientèle, ce qui m’a permis de développer d’excellentes compétences en communication, en leadership et en gestion de situations variées. Ces expériences me permettent aujourd’hui de collaborer efficacement en équipe et d’interagir avec confiance avec différents types d’utilisateurs.",
    },

    projects: {
  title: "Projets",
  items: {
    mastermind: {
      title: "Mastermind (Java)",
      description:
        "Jeu Java en console où le joueur doit deviner une combinaison de couleurs à l’aide de comparaisons logiques.",
    },
    kaypic: {
      title: "Kaypic Communication",
      description:
        "Une plateforme web conçue pour les organisations sportives et communautaires, offrant une authentification sécurisée des utilisateurs, un accès basé sur les rôles et des interactions en temps réel. L'application prend en charge le partage de fichiers et les mises à jour en direct pour améliorer la collaboration entre les membres.",
    },
    memotag: {
      title: "MemoTag",
      description:
        "Application Android de prise de notes permettant de créer, taguer, classer et rechercher des notes.",
    },
    tictactoe: {
      title: "Tic-Tac-Toe",
      description:
        "Un jeu classique où vous affrontez un robot qui bloque stratégiquement vos mouvements. L'application est disponible en anglais, français et espagnol.",
    },
    raspberry: {
      title: "Écran tactile Raspberry Pi",
      description:
        "Projet IoT détectant les interactions tactiles et affichant des messages dynamiques sur écran LCD.",
    },
    stageconnect: {
      title: "StageConnect",
      description:
        "Application Android en Kotlin facilitant la recherche et la gestion de stages pour les étudiants.",
    },
  },
},

    aboutSkills: {
      title: "Compétences techniques",
      tabs: {
        frontend: "Frontend",
        backend: "Backend",
        frameworks: "Frameworks",
        others: "Autres",
      },
    },  

    education: {
      title: "Formation",
      items: [
    {
      school: "CÉGEP de Rosemont",
      location: "Montréal, Québec",
      diploma:
        "Diplôme d’études collégiales en Techniques de l’informatique – Profil Développement d’applications Web et mobiles",
    },
    {
      school: "CFP Léonard-De Vinci",
      location: "Montréal, Québec",
      diploma:
        "Diplôme d’études professionnelles (DEP) en Soutien informatique",
    },
    {
      school: "École secondaire Saint-Laurent",
      location: "Montréal, Québec",
      diploma:
        "Diplôme d’études secondaires",
    },
  ],
},

    contact: {
      title: "Contact",
      message: "Intéressée par une collaboration ou simplement envie de dire bonjour ?",
      nameLabel: "Nom :",
      namePlaceholder: "Votre nom..",
      emailLabel: "Courriel :",
      emailPlaceholder: "votre@exemple.com",
      messageLabel: "Message :",
      messagePlaceholder: "Parlez-moi de votre idée..",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
    },
  },
} satisfies Record<"en" | "fr", TranslationShape>
