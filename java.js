// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }, 1500);
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
        header.classList.add('hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('hidden')) {
        header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Sidebar Toggle
hamburger.addEventListener('click', () => {
    sidebarOverlay.classList.add('active');
    sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebarOverlay.classList.remove('active');
    sidebar.classList.remove('active');
});

sidebarOverlay.addEventListener('click', () => {
    sidebarOverlay.classList.remove('active');
    sidebar.classList.remove('active');
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const sidebarThemeToggle = document.querySelector('.sidebar-theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', toggleTheme);
sidebarThemeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        sidebarThemeToggle.innerHTML = '<i class="fas fa-moon"></i> <span data-translate="dark_mode">Dark Mode</span>';
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        sidebarThemeToggle.innerHTML = '<i class="fas fa-sun"></i> <span data-translate="light_mode">Light Mode</span>';
    }
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

// Skill Animation
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        bar.classList.add('animate');
    });
}

// Intersection Observer for Animations
const sections = document.querySelectorAll('.section');
const educationCards = document.querySelectorAll('.education-card');
const certificationCards = document.querySelectorAll('.certification-card');
const projectCards = document.querySelectorAll('.project-card');
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (entry.target.id === 'about') {
                animateSkills();
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

educationCards.forEach(card => {
    sectionObserver.observe(card);
});

certificationCards.forEach(card => {
    sectionObserver.observe(card);
});

projectCards.forEach(card => {
    sectionObserver.observe(card);
});

timelineItems.forEach(item => {
    sectionObserver.observe(item);
});

// Experience Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and panels
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Language Switcher
const langBtns = document.querySelectorAll('.lang-btn');
const elementsToTranslate = document.querySelectorAll('[data-translate]');

// Translation data
const translations = {
    'en': {
        'home': 'Home',
        'about': 'About',
        'experience': 'Experience',
        'education': 'Education',
        'certifications': 'Certifications',
        'projects': 'Projects',
        'contact': 'Contact',
        'quick_links': 'Quick Links',
        'navigation': 'Navigation',
        'contact_info': 'Contact Info',
        'settings': 'Settings',
        'dark_mode': 'Dark Mode',
        'hero_title': 'Mechanical Design & Simulation Engineer',
        'hero_desc': 'Specializing in CAD design, numerical simulation, and mechanical systems optimization with a passion for innovation and smart systems.',
        'view_work': 'View My Work',
        'contact_me': 'Contact Me',
        'about_me': 'About Me',
        'about_sub': 'Get to know more about my professional background and skills',
        'about_title': 'Mechanical Engineering Specialist',
        'about_desc1': 'Motivated and detail-oriented Mechanical Engineering master\'s student with hands-on experience in electromechanical systems, 3D design (CATIA V5, SolidWorks), and numerical simulation using Abaqus.',
        'about_desc2': 'Passionate about innovation, robotics, and smart systems design, with strong analytical and problem-solving skills. Known for adaptability, teamwork, and a proactive mindset in technical environments.',
        'experience_title': 'Professional Experience',
        'experience_sub': 'My journey through various technical roles and responsibilities',
        'exp1_title': 'Technical Conceptor – Internship',
        'exp1_company': 'Commune of Oulad Ali Toualaa, Casablanca',
        'exp1_desc1': 'Updated technical schematics and ensured consistency in technical documentation',
        'exp1_desc2': 'Conducted mechanical design training sessions (CAD) for technical staff',
        'exp1_desc3': 'Recognized for technical proficiency, autonomy, and effective knowledge transfer',
        'exp2_title': 'Volunteer – Humanitarian Operations',
        'exp2_company': 'Association Lueur d\'Espoir, Tangier',
        'exp2_desc1': 'Organized and distributed aid to families in need during Ramadan',
        'exp2_desc2': 'Engaged in community support and awareness campaigns on social responsibility',
        'exp3_title': 'Electromechanical Technician – Internship',
        'exp3_company': 'SAHARA PLOMB, Casablanca',
        'exp3_desc1': 'Conducted preventive and corrective maintenance on heavy industrial equipment',
        'exp3_desc2': 'Assisted in diagnostics and repair of electrical and mechanical systems',
        'exp3_desc3': 'Participated in technical documentation and reporting processes',
        'education_title': 'Education',
        'education_sub': 'My academic journey and qualifications',
        'edu1_title': 'Master\'s in Numerical Design & Simulation in Mechanics',
        'edu1_school': 'FSAC – Centre d\'Excellence Mécatronique, Casablanca',
        'edu1_desc1': 'Advanced training in computer-aided design (CAD) and numerical simulation (FEM, FEA)',
        'edu1_desc2': 'In-depth application of tools such as CATIA V5, SolidWorks, and Abaqus',
        'edu1_desc3': 'Focus on mechatronic systems, intelligent automation, and vibration analysis (NVH)',
        'edu2_title': 'Bachelor\'s in Numerical Design & Simulation in Mechanics',
        'edu2_school': 'FSAC – Centre d\'Excellence Mécatronique, Casablanca',
        'edu2_desc1': 'Solid foundation in 3D modeling, finite element analysis, and dynamic simulation',
        'edu2_desc2': 'Applied theoretical concepts to real-world simulations and virtual prototyping',
        'edu2_desc3': 'Use of Matlab, Python, and Arduino for technical and control system simulations',
        'edu3_title': 'BTS in Electromechanics & Automated Systems',
        'edu3_school': 'Lycée Technique de Settat',
        'edu3_desc1': 'Practical training in electrical and mechanical system design, installation, and maintenance',
        'edu3_desc2': 'Hands-on experience with automated production lines, control systems, and CNC machines',
        'edu3_desc3': 'Learning modules included preventive maintenance, technical diagnostics, and system integration',
        'edu4_title': 'High School Diploma in Electrical Science & Technology',
        'edu4_school': 'Lycée Charif El Idrissi, Benslimane',
        'edu4_desc1': 'Focused on core engineering principles in physics, electrical circuits, and technical drawing',
        'edu4_desc2': 'Developed logical thinking and solid mathematical foundation for engineering studies',
        'certifications_title': 'Certifications',
        'certifications_sub': 'Professional certifications and specialized training',
        'cert1_title': 'Modelling & Simulation of Mechanical Systems',
        'cert1_desc': 'Comprehensive training in mechanical system modeling and simulation techniques.',
        'cert2_title': 'Automotive Industrial Engineering',
        'cert2_desc': 'Specialized training in automotive manufacturing processes and industrial engineering.',
        'cert3_title': 'Digital Fabrication & Design',
        'cert3_desc': 'Hands-on training in digital fabrication techniques and design principles.',
        'cert4_title': 'Finite Element Analysis with Abaqus',
        'cert4_desc': 'Advanced training in FEA techniques using Abaqus software.',
        'cert5_title': 'CATIA V5 from Beginner to Advanced Level',
        'cert5_desc': 'Comprehensive CATIA V5 training covering all skill levels.',
        'view_cert': 'View Certificate',
        'projects_title': 'Projects',
        'projects_sub': 'Selected engineering projects and achievements',
        'proj1_title': 'Automotive Shock Absorber Simulation',
        'proj1_desc': 'Numerical Modeling & Dynamic Analysis using Python to simulate vehicle shock absorber behavior under various conditions.',
        'proj1_tag1': 'Numerical Methods',
        'proj1_tag2': 'Dynamics',
        'proj2_title': 'Mechanical Bracket FEA',
        'proj2_desc': 'Design and Finite Element Analysis of a Mechanical Bracket using SolidWorks & Abaqus for industrial applications.',
        'proj3_title': '4-Cylinder Engine Simulation',
        'proj3_desc': '3D Modeling & Kinematic Analysis of a four-cylinder engine using CATIA V5, simulating internal component motion.',
        'proj3_tag1': 'Kinematics',
        'proj3_tag2': 'Simulation',
        'proj4_title': 'Smart Irrigation System',
        'proj4_desc': 'Automated agricultural irrigation system with soil moisture sensors and remote monitoring capabilities.',
        'view_project': 'View Project',
        'contact_title': 'Get In Touch',
        'contact_sub': 'Feel free to reach out for collaborations or just a friendly hello',
        'contact_info_title': 'Contact Information',
        'email': 'Email',
        'phone': 'Phone',
        'location': 'Location',
        'address': 'Casablanca, Morocco',
        'follow_me': 'Follow Me',
        'send_message': 'Send Message',
        'rights': 'All rights reserved',
        'light_mode': 'Light Mode'
    },
    'fr': {
        'home': 'Accueil',
        'about': 'À Propos',
        'experience': 'Expérience',
        'education': 'Formation',
        'certifications': 'Certifications',
        'projects': 'Projets',
        'contact': 'Contact',
        'quick_links': 'Liens Rapides',
        'navigation': 'Navigation',
        'contact_info': 'Informations de Contact',
        'settings': 'Paramètres',
        'dark_mode': 'Mode Sombre',
        'hero_title': 'Ingénieur en Conception Mécanique & Simulation',
        'hero_desc': 'Spécialisé en conception CAO, simulation numérique et optimisation des systèmes mécaniques avec une passion pour l\'innovation et les systèmes intelligents.',
        'view_work': 'Voir Mon Travail',
        'contact_me': 'Me Contacter',
        'about_me': 'À Propos de Moi',
        'about_sub': 'En savoir plus sur mon parcours professionnel et mes compétences',
        'about_title': 'Spécialiste en Ingénierie Mécanique',
        'about_desc1': 'Étudiant motivé et minutieux en master d\'ingénierie mécanique avec une expérience pratique dans les systèmes électromécaniques, la conception 3D (CATIA V5, SolidWorks) et la simulation numérique avec Abaqus.',
        'about_desc2': 'Passionné par l\'innovation, la robotique et la conception de systèmes intelligents, avec de solides compétences analytiques et de résolution de problèmes. Connu pour mon adaptabilité, mon esprit d\'équipe et mon état d\'esprit proactif dans les environnements techniques.',
        'experience_title': 'Expérience Professionnelle',
        'experience_sub': 'Mon parcours à travers divers rôles et responsabilités techniques',
        'exp1_title': 'Concepteur Technique – Stage',
        'exp1_company': 'Commune de Oulad Ali Toualaa, Casablanca',
        'exp1_desc1': 'Mise à jour des schémas techniques et assurance de la cohérence de la documentation technique',
        'exp1_desc2': 'Animation de sessions de formation en conception mécanique (CAO) pour le personnel technique',
        'exp1_desc3': 'Reconnu pour ma compétence technique, mon autonomie et mon transfert efficace de connaissances',
        'exp2_title': 'Bénévole – Opérations Humanitaires',
        'exp2_company': 'Association Lueur d\'Espoir, Tanger',
        'exp2_desc1': 'Organisation et distribution d\'aide aux familles dans le besoin pendant le Ramadan',
        'exp2_desc2': 'Engagement dans le soutien communautaire et les campagnes de sensibilisation à la responsabilité sociale',
        'exp3_title': 'Technicien Électromécanique – Stage',
        'exp3_company': 'SAHARA PLOMB, Casablanca',
        'exp3_desc1': 'Réalisation de maintenance préventive et corrective sur des équipements industriels lourds',
        'exp3_desc2': 'Assistance dans le diagnostic et la réparation des systèmes électriques et mécaniques',
        'exp3_desc3': 'Participation aux processus de documentation technique et de reporting',
        'education_title': 'Formation',
        'education_sub': 'Mon parcours académique et qualifications',
        'edu1_title': 'Master en Conception Numérique & Simulation en Mécanique',
        'edu1_school': 'FSAC – Centre d\'Excellence Mécatronique, Casablanca',
        'edu1_desc1': 'Formation avancée en conception assistée par ordinateur (CAO) et simulation numérique (EFM, MEF)',
        'edu1_desc2': 'Application approfondie d\'outils tels que CATIA V5, SolidWorks et Abaqus',
        'edu1_desc3': 'Accent sur les systèmes mécatroniques, l\'automatisation intelligente et l\'analyse des vibrations (NVH)',
        'edu2_title': 'Licence en Conception Numérique & Simulation en Mécanique',
        'edu2_school': 'FSAC – Centre d\'Excellence Mécatronique, Casablanca',
        'edu2_desc1': 'Base solide en modélisation 3D, analyse par éléments finis et simulation dynamique',
        'edu2_desc2': 'Application des concepts théoriques à des simulations réelles et au prototypage virtuel',
        'edu2_desc3': 'Utilisation de Matlab, Python et Arduino pour les simulations techniques et les systèmes de contrôle',
        'edu3_title': 'BTS en Électromécanique & Systèmes Automatisés',
        'edu3_school': 'Lycée Technique de Settat',
        'edu3_desc1': 'Formation pratique en conception, installation et maintenance des systèmes électriques et mécaniques',
        'edu3_desc2': 'Expérience pratique avec les lignes de production automatisées, les systèmes de contrôle et les machines CNC',
        'edu3_desc3': 'Modules d\'apprentissage incluant la maintenance préventive, les diagnostics techniques et l\'intégration de systèmes',
        'edu4_title': 'Baccalauréat en Sciences Électriques & Technologie',
        'edu4_school': 'Lycée Charif El Idrissi, Benslimane',
        'edu4_desc1': 'Axé sur les principes fondamentaux de l\'ingénierie en physique, circuits électriques et dessin technique',
        'edu4_desc2': 'Développement de la pensée logique et de solides bases mathématiques pour les études d\'ingénierie',
        'certifications_title': 'Certifications',
        'certifications_sub': 'Certifications professionnelles et formations spécialisées',
        'cert1_title': 'Modélisation & Simulation des Systèmes Mécaniques',
        'cert1_desc': 'Formation complète en techniques de modélisation et simulation des systèmes mécaniques.',
        'cert2_title': 'Ingénierie Industrielle Automobile',
        'cert2_desc': 'Formation spécialisée dans les processus de fabrication automobile et l\'ingénierie industrielle.',
        'cert3_title': 'Fabrication Numérique & Conception',
        'cert3_desc': 'Formation pratique aux techniques de fabrication numérique et aux principes de conception.',
        'cert4_title': 'Analyse par Éléments Finis avec Abaqus',
        'cert4_desc': 'Formation avancée aux techniques MEF utilisant le logiciel Abaqus.',
        'cert5_title': 'CATIA V5 du Niveau Débutant à Avancé',
        'cert5_desc': 'Formation complète CATIA V5 couvrant tous les niveaux de compétence.',
        'view_cert': 'Voir le Certificat',
        'projects_title': 'Projets',
        'projects_sub': 'Projets d\'ingénierie sélectionnés et réalisations',
        'proj1_title': 'Simulation d\'Amortisseur Automobile',
        'proj1_desc': 'Modélisation numérique et analyse dynamique utilisant Python pour simuler le comportement des amortisseurs de véhicules dans diverses conditions.',
        'proj1_tag1': 'Méthodes Numériques',
        'proj1_tag2': 'Dynamique',
        'proj2_title': 'Analyse MEF d\'un Support Mécanique',
        'proj2_desc': 'Conception et analyse par éléments finis d\'un support mécanique utilisant SolidWorks & Abaqus pour des applications industrielles.',
        'proj3_title': 'Simulation d\'un Moteur 4 Cylindres',
        'proj3_desc': 'Modélisation 3D et analyse cinématique d\'un moteur à quatre cylindres utilisant CATIA V5, simulant le mouvement des composants internes.',
        'proj3_tag1': 'Cinématique',
        'proj3_tag2': 'Simulation',
        'proj4_title': 'Système d\'Irrigation Intelligent',
        'proj4_desc': 'Système d\'irrigation agricole automatisé avec capteurs d\'humidité du sol et capacités de surveillance à distance.',
        'view_project': 'Voir le Projet',
        'contact_title': 'Me Contacter',
        'contact_sub': 'N\'hésitez pas à me contacter pour des collaborations ou simplement pour dire bonjour',
        'contact_info_title': 'Informations de Contact',
        'email': 'Email',
        'phone': 'Téléphone',
        'location': 'Localisation',
        'address': 'Casablanca, Maroc',
        'follow_me': 'Suivez-moi',
        'send_message': 'Envoyer un Message',
        'rights': 'Tous droits réservés',
        'light_mode': 'Mode Clair'
    }
};

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        
        // Remove active class from all buttons
        langBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Translate all elements
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For demonstration, we'll just log it and show an alert
    console.log({name, email, subject, message});
    
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();