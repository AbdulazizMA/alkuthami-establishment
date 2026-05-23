var translations = {
    en: {
        businessName: "Alkuthami Est.",
        navAbout: "About",
        navServices: "Services",
        navCredentials: "Credentials",
        navContact: "Contact",
        heroBadge: "Licensed Saudi establishment",
        heroFullName: "Abdulaziz Mofleh<br>Alkuthami",
        heroTagline: "A licensed Saudi establishment in Jeddah providing retail and general services with clear business details, verified records, and direct communication.",
        heroCTA: "Chat on WhatsApp",
        heroStatus: "Verified details for commercial inquiries",
        aboutLabel: "Who we are",
        aboutTitle: "A clear business presence with details you can verify.",
        aboutText1: "Abdulaziz Mofleh Alkuthami Establishment is a licensed business based in Jeddah, operating in retail and general services through direct channels for clients and partners.",
        aboutText2: "The site presents the essential business information clearly: commercial registration, activity type, official certificate, and approved contact channels.",
        servicesLabel: "Services",
        servicesTitle: "What we provide",
        service1Title: "Retail services",
        service1Desc: "Structured retail services tailored to client needs, with clear requests and responsive follow-up.",
        service2Title: "General services",
        service2Desc: "General services for individuals and businesses, delivered through a practical process from request to completion.",
        service3Title: "Commercial cooperation",
        service3Desc: "Reliable working relationships with clients, suppliers, and partners across the Kingdom.",
        credentialsLabel: "Verification",
        credentialsTitle: "Business details",
        crLabel: "Commercial registration",
        estLabel: "Established",
        estValue: "28 February 2025",
        locLabel: "Location",
        locValue: "Jeddah, Saudi Arabia",
        typeLabel: "Activity",
        typeValue: "Retail and general services",
        certTitle: "Commercial registration certificate",
        certDesc: "The official document issued by the Ministry of Commerce in the Kingdom of Saudi Arabia.",
        certView: "View certificate",
        certDownload: "Download PDF",
        contactLabel: "Contact",
        contactTitle: "We welcome your inquiry.",
        contactIntro: "For questions or cooperation requests, contact us by phone, email, or WhatsApp.",
        phoneLabel: "Phone",
        whatsappLabel: "WhatsApp",
        emailLabel: "Email",
        locationLabel: "Location",
        locationValue: "Jeddah, Saudi Arabia",
        footerBrand: "Alkuthami Establishment",
        footerCopy: "© 2025 Abdulaziz Mofleh Alkuthami Establishment. All rights reserved.",
        footerCR: "Commercial registration",
        imageCredit: "Photo",
        langToggle: "العربية"
    },
    ar: {
        businessName: "مؤسسة القثامي",
        navAbout: "عنا",
        navServices: "خدماتنا",
        navCredentials: "بياناتنا",
        navContact: "تواصل معنا",
        heroBadge: "منشأة سعودية مرخصة",
        heroFullName: "عبدالعزيز مفلح<br>القثامي",
        heroTagline: "مؤسسة سعودية في جدة تقدم خدمات تجزئة وخدمات عامة بمعايير واضحة، وتواصل مباشر، وبيانات موثقة.",
        heroCTA: "تواصل عبر واتساب",
        heroStatus: "بيانات موثقة للتعاملات التجارية",
        aboutLabel: "من نحن",
        aboutTitle: "حضور تجاري واضح، وبيانات يسهل التحقق منها.",
        aboutText1: "مؤسسة عبدالعزيز مفلح القثامي منشأة مرخصة مقرها جدة، تعمل في مجال التجزئة والخدمات العامة، وتخدم العملاء والشركاء من خلال قنوات تواصل مباشرة.",
        aboutText2: "تعرض الصفحة بيانات المؤسسة الأساسية بوضوح: السجل التجاري، نوع النشاط، الشهادة الرسمية، ووسائل التواصل المعتمدة.",
        servicesLabel: "الخدمات",
        servicesTitle: "ما نقدمه",
        service1Title: "خدمات التجزئة",
        service1Desc: "تقديم خدمات تجزئة منظمة تلائم احتياج العميل وتراعي وضوح الطلبات وسرعة المتابعة.",
        service2Title: "الخدمات العامة",
        service2Desc: "تنفيذ خدمات عامة للأفراد والمنشآت بأسلوب عملي، وتواصل واضح من بداية الطلب حتى إنجازه.",
        service3Title: "التعاون التجاري",
        service3Desc: "بناء علاقات عمل موثوقة مع العملاء والموردين والشركاء داخل المملكة.",
        credentialsLabel: "التوثيق",
        credentialsTitle: "بيانات المؤسسة",
        crLabel: "السجل التجاري",
        estLabel: "تاريخ التأسيس",
        estValue: "٢٨ فبراير ٢٠٢٥",
        locLabel: "الموقع",
        locValue: "جدة، المملكة العربية السعودية",
        typeLabel: "نوع النشاط",
        typeValue: "تجزئة وخدمات عامة",
        certTitle: "شهادة السجل التجاري",
        certDesc: "الوثيقة الرسمية الصادرة من وزارة التجارة في المملكة العربية السعودية.",
        certView: "عرض الشهادة",
        certDownload: "تحميل PDF",
        contactLabel: "تواصل",
        contactTitle: "نرحب بتواصلكم.",
        contactIntro: "للاستفسارات أو طلبات التعاون، يمكنكم التواصل عبر الهاتف أو البريد أو واتساب.",
        phoneLabel: "الهاتف",
        whatsappLabel: "واتساب",
        emailLabel: "البريد الإلكتروني",
        locationLabel: "الموقع",
        locationValue: "جدة، المملكة العربية السعودية",
        footerBrand: "مؤسسة القثامي",
        footerCopy: "© ٢٠٢٥ مؤسسة عبدالعزيز مفلح القثامي. جميع الحقوق محفوظة.",
        footerCR: "السجل التجاري",
        imageCredit: "الصورة",
        langToggle: "English"
    }
};

if (!localStorage.getItem("lang_v3")) {
    localStorage.removeItem("lang");
    localStorage.setItem("lang_v3", "1");
}

var currentLang = localStorage.getItem("lang") || "ar";

document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(currentLang);
    initScrollHeader();
    initSmoothScroll();
    initMobileMenu();
    initScrollReveal();

    document.getElementById("langToggle").addEventListener("click", function () {
        currentLang = currentLang === "en" ? "ar" : "en";
        localStorage.setItem("lang", currentLang);
        applyLanguage(currentLang);
        closeMenu();
    });
});

function applyLanguage(lang) {
    var html = document.documentElement;
    var t = translations[lang];
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    document.getElementById("langToggle").querySelector("span").textContent = t.langToggle;
    document.querySelectorAll(".brand-mark").forEach(function (el) {
        el.textContent = lang === "ar" ? "ع" : "A";
    });
}

function initScrollHeader() {
    var header = document.getElementById("header");
    var update = function () {
        header.classList.toggle("scrolled", window.scrollY > 12);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            var target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            closeMenu();
        });
    });
}

function initMobileMenu() {
    document.getElementById("menuToggle").addEventListener("click", function () {
        var navList = document.getElementById("navList");
        var isOpen = navList.classList.toggle("open");
        this.classList.toggle("active", isOpen);
        this.setAttribute("aria-expanded", String(isOpen));
    });
}

function closeMenu() {
    var navList = document.getElementById("navList");
    var menuToggle = document.getElementById("menuToggle");
    navList.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
}

function initScrollReveal() {
    var elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
        elements.forEach(function (el) {
            el.classList.add("revealed");
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    elements.forEach(function (el) {
        observer.observe(el);
    });
}
