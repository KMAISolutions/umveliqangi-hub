import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        top: {
          home: "Home",
          about: "About",
          education: "Education",
          community: "Community",
          media: "Media",
          donate: "Donate",
        },
        topbar: {
          prayerTimes: "Prayer Times: Fajr 05:30 | Dhuhr 12:15 | Asr 15:45 | Maghrib 18:20 | Isha 19:45",
          location: "Winterveldt, South Africa",
        },
        searchPlaceholder: "Search mosque, academy, events...",
        menu: "Menu",
      },
      hero: {
        empowering: "Empowering",
        words: ["Excellence", "Community", "Innovation", "Leadership", "Growth"],
        description:
          "A beacon of faith, education, and community service in Winterveldt since 1983. Join us in building a stronger, more connected Islamic community through worship, learning, and service.",
        buttons: {
          join: "Join Our Community",
          donate: "Donate Now",
          academy: "Academy Programs",
          watchStory: "Watch Our Story",
        },
        quickLinks: {
          prayerTimes: "Prayer Times",
          donate: "Donate",
          academy: "Academy",
          eLearning: "E-Learning",
          events: "Events",
          community: "Community",
          contact: "Contact",
        },
      },
      stats: {
        title: "Our Impact in Numbers",
        description: "Four decades of dedicated service to the Winterveldt community through faith, education, and social development.",
        studentsTitle: "Students Taught",
        studentsDesc: "Qur'an and leadership education",
        mealsTitle: "Meals Served", 
        mealsDesc: "Community feeding programs",
        projectsTitle: "Projects Completed",
        projectsDesc: "Community development initiatives",
        yearsTitle: "Years of Service",
        yearsDesc: "Serving Winterveldt since 1983"
      },
      about: {
        mission: {
          title: "Our Mission",
          description: "To provide comprehensive Islamic education, community services, and spiritual guidance while fostering leadership, excellence, and social responsibility in the Winterveldt community."
        },
        vision: {
          title: "Our Vision",
          description: "To be a leading model of Islamic community development, producing confident leaders who contribute positively to society while maintaining strong spiritual foundations."
        }
      },
      prayerTimes: {
        title: "Prayer Times",
        nextPrayer: "Next Prayer"
      },
      index: {
        stayConnected: {
          title: "Stay Connected",
          description:
            "Join our vibrant community through prayer times, social updates, and community polls",
        },
      },
      footer: {
        newsletter: {
          title: "Stay Connected with Our Community",
          desc:
            "Get updates on prayer times, events, programs, and community news delivered to your inbox.",
          placeholder: "Enter your email address",
          subscribe: "Subscribe",
        },
        quickLinks: { title: "Quick Links" },
        services: { title: "Our Services" },
        contact: {
          title: "Contact Information",
          officeHours: "Office Hours:",
          weekdays: "Mon - Fri: 8:00 AM - 5:00 PM",
          saturday: "Sat: 8:00 AM - 2:00 PM",
          sunday: "Sun: Prayer times only",
        },
        bottom: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          accessibility: "Accessibility",
        },
      },
      notFound: {
        message: "Oops! Page not found",
        backHome: "Return to Home",
      },
      gallery: {
        title: "Media Gallery",
        description: "Explore highlights from our mosque, academy, and community life.",
      },
      community: {
        hero: {
          title: "Community Services",
          description:
            "Building stronger communities through compassionate service, healthcare initiatives, and sustainable development programs.",
        },
        blog: { title: "Community News & Impact Stories" },
        events: { upcoming: "Upcoming Community Events" },
      },
      actions: { viewAll: "View All" },
      facilities: {
        hero: {
          title: "Our Facilities",
          description:
            "Purpose-built spaces serving faith, education, health, and community growth",
          subtext:
            "Every space reflects the dedication of our founders, the generosity of our community, and the vision of an inclusive society.",
        },
        cta: {
          visit: "Visit Our Facilities",
          description:
            "Experience our community spaces firsthand. Schedule a guided tour to see how our facilities serve our mission of faith, education, and community empowerment.",
          schedule: "Schedule a Tour",
          sponsor: "Sponsor a Facility",
        },
      },
      media: {
        hero: {
          title: "Our Social Media",
          description: "Stay connected with our community through social media updates, prayer times, and community engagement"
        },
        stayConnected: {
          title: "Stay Connected With Our Community",
          description: "Follow our journey, participate in discussions, and stay updated with the latest news and events from our mosque and academy."
        }
      },
    },
  },
  ar: {
    translation: {
      nav: {
        top: {
          home: "الرئيسية",
          about: "من نحن",
          education: "التعليم",
          community: "المجتمع",
          media: "الإعلام",
          donate: "تبرع",
        },
        topbar: {
          prayerTimes:
            "مواقيت الصلاة: الفجر 05:30 | الظهر 12:15 | العصر 15:45 | المغرب 18:20 | العشاء 19:45",
        location: "ونترفيلدت، جنوب أفريقيا",
        },
        searchPlaceholder: "ابحث عن المسجد، الأكاديمية، الفعاليات...",
        menu: "القائمة",
      },
      hero: {
        empowering: "تمكين",
        words: ["التميز", "المجتمع", "الابتكار", "القيادة", "النمو"],
        description:
          "منارة للإيمان والتعليم وخدمة المجتمع في ونترفيلدت منذ عام 1983. انضم إلينا لبناء مجتمع إسلامي أقوى وأكثر ترابطًا عبر العبادة والتعلم والخدمة.",
        buttons: {
          join: "انضم إلى مجتمعنا",
          donate: "تبرع الآن",
          academy: "برامج الأكاديمية",
          watchStory: "شاهد قصتنا",
        },
        quickLinks: {
          prayerTimes: "مواقيت الصلاة",
          donate: "تبرع",
          academy: "الأكاديمية",
          eLearning: "التعلّم الإلكتروني",
          events: "الفعاليات",
          community: "المجتمع",
          contact: "تواصل",
        },
      },
      stats: {
        title: "تأثيرنا بالأرقام",
        description: "أربعة عقود من الخدمة المتفانية لمجتمع وينترفيلدت من خلال الإيمان والتعليم والتنمية الاجتماعية.",
        studentsTitle: "طلاب تم تعليمهم",
        studentsDesc: "تعليم القرآن والقيادة",
        mealsTitle: "وجبات تم تقديمها", 
        mealsDesc: "برامج إطعام المجتمع",
        projectsTitle: "مشاريع مكتملة",
        projectsDesc: "مبادرات التنمية المجتمعية",
        yearsTitle: "سنوات الخدمة",
        yearsDesc: "نخدم وينترفيلدت منذ 1983"
      },
      about: {
        mission: {
          title: "مهمتنا",
          description: "تقديم التعليم الإسلامي الشامل وخدمات المجتمع والإرشاد الروحي مع تعزيز القيادة والتميز والمسؤولية الاجتماعية في مجتمع وينترفيلدت."
        },
        vision: {
          title: "رؤيتنا",
          description: "أن نكون نموذجاً رائداً للتنمية المجتمعية الإسلامية، ننتج قادة واثقين يساهمون إيجابياً في المجتمع مع الحفاظ على أسس روحية قوية."
        }
      },
      prayerTimes: {
        title: "أوقات الصلاة",
        nextPrayer: "الصلاة التالية"
      },
      index: {
        stayConnected: {
          title: "ابق على تواصل",
          description:
            "انضم إلى مجتمعنا النابض بالحياة عبر مواقيت الصلاة والتحديثات الاجتماعية واستطلاعات المجتمع",
        },
      },
      footer: {
        newsletter: {
          title: "ابق على تواصل مع مجتمعنا",
          desc:
            "احصل على تحديثات حول مواقيت الصلاة والفعاليات والبرامج وأخبار المجتمع إلى بريدك.",
          placeholder: "أدخل بريدك الإلكتروني",
          subscribe: "اشتراك",
        },
        quickLinks: { title: "روابط سريعة" },
        services: { title: "خدماتنا" },
        contact: {
          title: "معلومات الاتصال",
          officeHours: "ساعات العمل:",
          weekdays: "الاثنين - الجمعة: 8:00 ص - 5:00 م",
          saturday: "السبت: 8:00 ص - 2:00 م",
          sunday: "الأحد: أوقات الصلاة فقط",
        },
        bottom: {
          privacy: "سياسة الخصوصية",
          terms: "شروط الخدمة",
          accessibility: "إمكانية الوصول",
        },
      },
      notFound: {
        message: "عذرًا! الصفحة غير موجودة",
        backHome: "العودة إلى الرئيسية",
      },
      gallery: {
        title: "معرض الوسائط",
        description: "استكشف أبرز ما في المسجد والأكاديمية وحياة المجتمع.",
      },
      community: {
        hero: {
          title: "خدمات المجتمع",
          description:
            "نبني مجتمعات أقوى من خلال الخدمة الرحيمة والمبادرات الصحية والتنمية المستدامة.",
        },
        blog: { title: "أخبار المجتمع وقصص الأثر" },
        events: { upcoming: "الفعاليات المجتمعية القادمة" },
      },
      actions: { viewAll: "عرض الكل" },
      facilities: {
        hero: {
          title: "مرافقنا",
          description:
            "مساحات مصممة لخدمة الإيمان والتعليم والصحة ونمو المجتمع",
          subtext:
            "كل مساحة تعكس تفاني مؤسسينا وكرم مجتمعنا ورؤية مجتمع شامل.",
        },
        cta: {
          visit: "زر مرافقنا",
          description:
            "اختبر مساحات مجتمعنا بنفسك. احجز جولة إرشادية لترى كيف تخدم مرافقنا رسالتنا في الإيمان والتعليم وتمكين المجتمع.",
          schedule: "احجز جولة",
          sponsor: "ادعم مرفقًا",
          },
          media: {
            hero: {
              title: "وسائل التواصل الاجتماعي",
              description: "ابق على تواصل مع مجتمعنا من خلال تحديثات وسائل التواصل الاجتماعي ومواقيت الصلاة والمشاركة المجتمعية"
            },
            stayConnected: {
              title: "ابق على تواصل مع مجتمعنا",
              description: "تابع رحلتنا وشارك في النقاشات وابق على اطلاع بأحدث الأخبار والفعاليات من مسجدنا وأكاديميتنا."
            }
          },
        },
    },
  },
  zu: {
    translation: {
      nav: {
        top: {
          home: "Ikhaya",
          about: "Mayelana",
          education: "Imfundo",
          community: "Umphakathi",
          media: "Izindaba",
          donate: "Nikeza",
        },
        topbar: {
          prayerTimes:
            "Izikhathi zomkhuleko: Fajr 05:30 | Dhuhr 12:15 | Asr 15:45 | Maghrib 18:20 | Isha 19:45",
          location: "I-Winterveldt, eNingizimu Afrika",
        },
        searchPlaceholder: "Sesha umasjid, ikhademi, nemicimbi...",
        menu: "Imenyu",
      },
      hero: {
        empowering: "Ukuqinisekisa",
        words: ["Ubuhle", "Umphakathi", "Ukuqamba", "Ubuholi", "Ukukhula"],
        description:
          "Inqaba yokholo, yemfundo, kanye nenkonzo yomphakathi e-Winterveldt kusukela ngo-1983. Hlanganyela nathi sakhe umphakathi wamaSulumane ohlangene futhi oqinile ngokukhulekela, ukufunda, nokukhonza.",
        buttons: {
          join: "Joyina Umphakathi Wethu",
          donate: "Nikela Manje",
          academy: "Izinhlelo Zekhemi",
          watchStory: "Buka Indaba Yethu",
        },
        quickLinks: {
          prayerTimes: "Izikhathi Zomkhuleko",
          donate: "Nikela",
          academy: "Ikhademi",
          eLearning: "Ukufunda Kwi-inthanethi",
          events: "Imicimbi",
          community: "Umphakathi",
          contact: "Xhumana",
        },
      },
      stats: {
        title: "Umthelela Wethu Ngezinombolo",
        description: "Amashumi amane eminyaka yomsebenzi ozinikele kumphakathi waseWinterveldt ngokusebenzisa ukholo, imfundo kanye nokuthuthukiswa kwezenhlalakahle.",
        studentsTitle: "Abafundi Abafundisiwe",
        studentsDesc: "IQur'an nemfundo yobuholi",
        mealsTitle: "Ukudla Okuphakiwe", 
        mealsDesc: "Izinhlelo zokudlisa umphakathi",
        projectsTitle: "Amaphrojekthi Aqediwe",
        projectsDesc: "Amasu okuthuthukisa umphakathi",
        yearsTitle: "Iminyaka Yomsebenzi",
        yearsDesc: "Sisebenzela iWinterveldt kusukela ngo-1983"
      },
      about: {
        mission: {
          title: "Umgomo Wethu",
          description: "Ukunikeza imfundo yobuIslam ephelele, izinsizakalo zomphakathi, nokuqondiswa okukhongolose kuyilapho sikhuthaza ubuholi, ukugqama, nomthwalo wemfanelo yenhlalo emphakathini waseWinterveldt."
        },
        vision: {
          title: "Umbono Wethu",  
          description: "Ukuba yisibonelo esiholayo sentuthuko yomphakathi wamaSulumane, sikhiqize abaholi abazithembayo abanikela kahle emphakathini kuyilapho begcina izisekelo zokholo eziqinile."
        }
      },
      prayerTimes: {
        title: "Izikhathi Zomkhuleko",
        nextPrayer: "Umkhuleko Olandelayo"
      },
      index: {
        stayConnected: {
          title: "Hlala Uxhumekile",
          description:
            "Joyina umphakathi wethu ngezimiso zomkhuleko, izibuyekezo zenhlalo, kanye nokhetho lomphakathi",
        },
      },
      footer: {
        newsletter: {
          title: "Hlala Uxhumene Nomphakathi Wethu",
          desc:
            "Thola izibuyekezo ngezikhathi zomkhuleko, imicimbi, izinhlelo, nezindaba zomphakathi ku-imeyili yakho.",
          placeholder: "Faka ikheli lakho le-imeyili",
          subscribe: "Bhalisa",
        },
        quickLinks: { title: "Izixhumanisi Ezisheshayo" },
        services: { title: "Izinsiza Zethu" },
        contact: {
          title: "Imininingwane Yokuxhumana",
          officeHours: "Amahora Okuhlinzeka:",
          weekdays: "Msombuluko - Lwesihlanu: 8:00 - 17:00",
          saturday: "UMgqibelo: 8:00 - 14:00",
          sunday: "ISonto: Izikhathi zomkhuleko kuphela",
        },
        bottom: {
          privacy: "Inqubomgomo yobumfihlo",
          terms: "Imigomo Yesevisi",
          accessibility: "Ukufinyeleleka",
        },
      },
      notFound: {
        message: "Hawu! Ikhasi alitholakali",
        backHome: "Buyela Ekhaya",
      },
      gallery: {
        title: "Igalari Yezindaba",
        description: "Hlola izigcawu ezivelele zemasjid, ikhademi, kanye nempilo yomphakathi.",
      },
      community: {
        hero: {
          title: "Izinsiza Zomphakathi",
          description:
            "Sakha imiphakathi eqinile ngokukhonza ngobubele, izinhlelo zezempilo, kanye nentuthuko esimeme.",
        },
        blog: { title: "Izindaba Zomphakathi Nezindaba Zomthelela" },
        events: { upcoming: "Imicimbi Yomphakathi Ezayo" },
      },
      actions: { viewAll: "Buka Konke" },
      facilities: {
        hero: {
          title: "Izikhungo Zethu",
          description:
            "Izikhala ezakhelwe ukukhonza ukholo, imfundo, impilo, nokukhula komphakathi",
          subtext:
            "Isikhala ngasinye sibonisa ukuzinikela kwabasunguli bethu, umusa womphakathi wethu, nombono womphakathi ofinyeleleka kubo bonke.",
        },
        cta: {
          visit: "Vakashela Izikhungo Zethu",
          description:
            "Zizwele izikhala zomphakathi wethu ngokwakho. Hlela uhambo oluqondisiwe ukuze ubone ukuthi izikhungo zethu zikhonza kanjani umgomo wethu wokholo, imfundo, nokunikeza amandla emphakathini.",
          schedule: "Hlela Uhambo",
          sponsor: "Xhasa Isikhungo",
          },
          media: {
            hero: {
              title: "Izindaba Zethu Zenhlalo",
              description: "Hlala uxhumene nomphakathi wethu ngezibuyekezo zezindaba zenhlalo, izikhathi zomkhuleko, nokubandakanyeka komphakathi"
            },
            stayConnected: {
              title: "Hlala Uxhumene Nomphakathi Wethu",
              description: "Landela uhambo lwethu, hlanganyela ezingxoxweni, futhi uhlale uxhumeke nezindaba zakamuva nemicimbi evela emasjidini nakakhademi yethu."
            }
          },
        },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lng") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

const applyDirLang = (lng: string) => {
  const html = document.documentElement;
  html.lang = lng;
  html.dir = lng === "ar" ? "rtl" : "ltr";
};

applyDirLang(i18n.language);

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lng", lng);
  applyDirLang(lng);
});

export default i18n;
