const translations = {
    hy: {
        nav_home: "Գլխավոր",
        nav_about: "Մեր մասին",
        nav_services: "Ծառայություններ",
        nav_contact: "Կապ",

        hero_title: "Բարի գալուստ թվային ապագա",
        hero_text: "HayCode.am — ժամանակակից վեբ լուծումներ",
        hero_btn: "Գրանցվել",

        about_title: "Մեր մասին",
        about_text: "HayCode.am-ը վեբ զարգացման ժամանակակից ստուդիա է, որը մասնագիտացած է արագ, անվտանգ և բարձրորակ կայքերի ստեղծման մեջ։ Մենք համատեղում ենք նորագույն տեխնոլոգիաները և ստեղծագործական մոտեցումը՝ ապահովելու համար հուսալի, գեղեցիկ և արդյունավետ թվային լուծումներ ձեր բիզնեսի համար։",
        about_box: "Կոդ․ Դիզայն․ Արդյունք",

        services_title: "Ծառայություններ և դասընթացներ",
        service_1: "Վեբ կայքերի մշակում",
        // service_2: "E-Commerce կայքեր",
        service_3: "UI/UX Դիզայն",
        service_4: "Կայքերի սպասարկում",
        service_5: "HTML / CSS Դասեր",
        service_6: "JavaScript / React / PHP Դասեր",

        contact_title: "Կապ մեզ հետ",
        send_btn: "Ուղարկել",

        name: "Անուն",
        email: "Էլ․ հասցե",
        message: "Հաղորդագրություն",
        select_purpose: "Ընտրեք նպատակ",
        purpose_course: "Դասերի համար",
        purpose_website: "Կայքի ստեղծման համար",

        success: "Շնորհակալություն, ձեր հայտը ուղարկված է"
    },

    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_contact: "Контакты",

        hero_title: "Добро пожаловать в цифровое будущее",
        hero_text: "HayCode.am — современные веб-решения",
        hero_btn: "Записаться",

        about_title: "О нас",
        about_text: "HayCode.am — современная студия веб-разработки, специализирующаяся на создании быстрых, безопасных и качественных сайтов. Мы объединяем новейшие технологии и креативный подход, чтобы создавать надёжные, стильные и эффективные цифровые решения для вашего бизнеса.",
        about_box: "Код. Дизайн. Результат",

        services_title: "Услуги и курсы",
        service_1: "Разработка сайтов",
        // service_2: "E-Commerce сайты",
        service_3: "UI/UX Дизайн",
        service_4: "Поддержка сайтов",
        service_5: "Уроки HTML / CSS",
        service_6: "JavaScript / React / PHP",

        contact_title: "Связаться с нами",
        send_btn: "Отправить",

        name: "Имя",
        email: "Email",
        message: "Сообщение",
        select_purpose: "Выберите цель",
        purpose_course: "Для уроков",
        purpose_website: "Для создания сайта",

        success: "Спасибо, ваша заявка отправлена"
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",

        hero_title: "Welcome to the digital future",
        hero_text: "HayCode.am — modern web solutions",
        hero_btn: "Join Now",

        about_title: "About us",
        about_text: "HayCode.am is a modern web development studio specializing in creating fast, secure, and high-quality websites. We combine the latest technologies with a creative approach to deliver reliable, stylish, and effective digital solutions for your business.",
        about_box: "Code. Design. Impact",

        services_title: "Services & Courses",
        service_1: "Website Development",
        // service_2: "E-Commerce Solutions",
        service_3: "UI/UX Design",
        service_4: "Website Maintenance",
        service_5: "HTML / CSS  Lessons",
        service_6: "JavaScript / React / PHP Lessons",

        contact_title: "Contact Us",
        send_btn: "Send",

        name: "Name",
        email: "Email",
        message: "Message",
        select_purpose: "Select purpose",
        purpose_course: "For courses",
        purpose_website: "For website creation",

        success: "Thank you, your request has been sent"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[lang][el.dataset.key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
        el.placeholder = translations[lang][el.dataset.keyPlaceholder];
    });

    document.querySelectorAll("select option[data-key]").forEach(opt => {
        opt.textContent = translations[lang][opt.dataset.key];
    });

    localStorage.setItem("language", lang);
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

const savedLang = localStorage.getItem("language") || "hy";
setLanguage(savedLang);

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert(translations[savedLang].success);
    e.target.reset();
});

document.querySelectorAll("select[data-key-placeholder]").forEach(select => {
    const placeholderKey = select.dataset.keyPlaceholder;
    const placeholderOption = select.querySelector("option[value='']");
    placeholderOption.textContent = translations[savedLang][placeholderKey];
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});