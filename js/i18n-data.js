/* ==========================================================================
   NanoPod — translation dictionary (data only)

   Loaded on its own (before i18n.js) so admin.html can read these as
   the built-in defaults for the Texts tab, without pulling in the
   language-switcher logic that page doesn't need.
   ========================================================================== */

/* ==========================================================================
   NanoPod — language switcher (EN / FR / AR)

   Covers the site "chrome" that appears on every page: nav, footer, and
   each page's hero (title/lead) and primary buttons. Content typed into
   the admin dashboard (activities, members, project descriptions, etc.)
   is written by you in whichever language you choose and is NOT
   auto-translated — this only swaps the fixed interface text around it.

   Usage: any element that should change with the language gets
   data-i18n="key.path" (swaps textContent) or data-i18n-html="key.path"
   (swaps innerHTML, for the one case with an inline gradient span).
   ========================================================================== */

const I18N = {
  en: {
    dir: "ltr",
    nav: { home: "Home", episodes: "Episodes", team: "Our Team", crew: "Behind the Camera", links: "Links", upcoming: "Upcoming Eps", join: "Join Us" },
    footer: { fine: "NANOPOD · SCHOOL PODCAST · NSNN" },
    home: {
      eyebrow: "School Podcast · NSNN",
      title_html: "Every idea scales up<br>into <span class=\"gradient-text\">real discovery</span>.",
      lead: "NanoPod is a student-run community exploring nanoscience, robotics, code, and health — built by students, for students who want to build something real before graduation.",
      cta1: "Listen & join →", cta2: "See what we're building",
      labsEyebrow: "What we cover", labsTitle: "Four segments, one show",
      lab1Tag: "INTERVIEWS", lab2Tag: "KNOWLEDGE", lab3Tag: "STORIES",
      lab4Tag: "PRODUCTION", lab5Tag: "EPISODES", lab6Tag: "COMMUNITY",
      labsEyebrow: "What we do", labsTitle: "Behind every episode",
      labsDesc: "From first interview to final edit, here's what goes into the show — and what you get out of listening.",
      lab1Title: "We meet minds", lab1Desc: "We sit down with founders, researchers, and alumni who've built something worth talking about, and ask what everyone's actually curious about.",
      lab2Title: "We grow what we know", lab2Desc: "Deep-dive segments on science, tech, and ideas that matter — no background required, just curiosity.",
      lab3Title: "Real people, real stories", lab3Desc: "Every guest has a story worth telling. We let them tell it — unscripted, no filter.",
      lab4Title: "Behind the mic", lab4Desc: "Recording, editing, hosting, design — every episode is built by a student crew learning the craft as they go.",
      lab5Title: "New episodes, every season", lab5Desc: "Short conversations, long ones, solo segments — see what's coming up on the Upcoming Eps page.",
      lab6Title: "Open to every student", lab6Desc: "No experience needed to join the crew, suggest a guest, or just come watch a recording — just show up curious.",
      statsEyebrow: "By the numbers", statsTitle: "A young show, moving fast",
      statMembers: "Active members (crew + our team)", statCrew: "Active crew", statEpisodes: "Total episodes done",
      nextEyebrow: "Next up", nextTitle: "Upcoming event",
      whyEyebrow: "Why join us", whyTitle: "Straight from our members",
      whyDesc: "We'd rather let the people already here explain it than sell it to you ourselves.",
      quote1Text: "[Add a quote from a member — what they'd tell a friend thinking about joining]",
      quote1Name: "[Member name]", quote1Role: "[Role / lab]",
      quote2Text: "[Add a quote from a member — what they'd tell a friend thinking about joining]",
      quote2Name: "[Member name]", quote2Role: "[Role / lab]",
      quote3Text: "[Add a quote from a member — what they'd tell a friend thinking about joining]",
      quote3Name: "[Member name]", quote3Role: "[Role / lab]",
      ctaTitle: "Ready to build something?", ctaDesc: "Sessions are open to every student — bring an idea, or come find one.", ctaBtn: "Join NanoPod →"
    },
    common: {
      loading: "Loading…", noEvents: "No events posted yet — check back soon.", noProjects: "No projects posted yet.",
      noMembers: "No members listed yet.", noCrew: "No crew listed yet.", noOpportunities: "No opportunities posted yet.", noLinks: "No links added yet.",
      noMemories: "No memories posted yet — this page fills up as the show records episodes."
    },
    joinForm: {
      cta: "Join via Discord →", name: "Full name", email: "School email",
      track: "Do you have a talent?", note: "Tell us more",
      submit: "Submit", notSure: "Not sure yet"
    },
    eventsFormat: {
      eyebrow: "Format", title: "What a typical week looks like",
      talk: "Talk", talkTime: "20–30 min", talkDesc: "A member or guest walks through one concept, paper, or project — kept short on purpose so there's time for questions.",
      workshop: "Workshop", workshopTime: "Hands-on", workshopDesc: "Bring a laptop or show up to the studio — we work through a segment or exercise together, step by step.",
      openLab: "Open Lab", openLabTime: "Unstructured time", openLabDesc: "No agenda — just a room, equipment, and other members working on their own projects if you want feedback or company."
    },
    links: { eyebrow: "Links", title: "Everywhere to find us", scan: "Scan to follow" },
    events: { eyebrow: "Upcoming Episodes", title: "Recording days & release dates",
      lead: "Every upcoming recording session and episode drop, in one place — plus open tapings you're welcome to sit in on." },
    projects: { eyebrow: "Episodes", title: "Every episode, in one place",
      lead: "Full episodes and behind-the-scenes cuts — some solo interviews, some multi-part series carried across a season." },
    members: { eyebrow: "Our Team", title: "Who's behind the mic",
      lead: "Hosts, producers, editors, and crew — added and kept current from the admin dashboard." },
    crew: { eyebrow: "Behind the Camera", title: "The people you don't hear",
      lead: "Photography, editing, design, and everything visual — the crew that makes NanoPod look as good as it sounds." },
    opportunities: { eyebrow: "Opportunities", title: "Internships, competitions & grants",
      lead: "A running list of opportunities relevant to nanoscience, robotics, code, and health — curated by the show for its team." },
    memories: { eyebrow: "Memories", title: "Moments from the show",
      lead: "A running photo log of recordings, episodes, and hangouts — added by the team and by members." },
    join: { eyebrow: "Join", title: "Become a member",
      lead: "No prerequisite background needed — just fill this out, or jump straight into our Discord." }
  },

  fr: {
    dir: "ltr",
    nav: { home: "Accueil", episodes: "Épisodes", team: "Notre équipe", crew: "Derrière la caméra", links: "Liens", upcoming: "Prochains épisodes", join: "Rejoindre" },
    footer: { fine: "NANOPOD · PODCAST SCOLAIRE · NSNN" },
    home: {
      eyebrow: "Podcast scolaire · NSNN",
      title_html: "Chaque idée grandit<br>jusqu'à devenir une <span class=\"gradient-text\">vraie découverte</span>.",
      lead: "NanoPod est une communauté étudiante qui explore la nanoscience, la robotique, le code et la santé — créée par des étudiants, pour des étudiants qui veulent construire quelque chose de concret avant la fin de leurs études.",
      cta1: "Écouter et rejoindre →", cta2: "Voir ce que nous construisons",
      lab1Tag: "INTERVIEWS", lab2Tag: "KNOWLEDGE", lab3Tag: "STORIES",
      lab4Tag: "PRODUCTION", lab5Tag: "EPISODES", lab6Tag: "COMMUNITY",
      labsEyebrow: "Ce que nous couvrons", labsTitle: "Derrière chaque épisode",
      labsDesc: "Du premier entretien au montage final, voici ce qu'il y a derrière l'émission — et ce que vous en retirez en l'écoutant.",
      lab1Title: "On rencontre des esprits brillants", lab1Desc: "On s'assoit avec des fondateurs, chercheurs et anciens élèves qui ont construit quelque chose qui vaut la peine d'en parler, et on pose les questions que tout le monde se pose.",
      lab2Title: "On fait grandir nos connaissances", lab2Desc: "Des segments approfondis sur la science, la technologie et les idées qui comptent — aucune base requise, juste de la curiosité.",
      lab3Title: "Des gens vrais, des histoires vraies", lab3Desc: "Chaque invité a une histoire qui mérite d'être racontée. On la laisse se raconter — sans filtre, sans script.",
      lab4Title: "Derrière le micro", lab4Desc: "Enregistrement, montage, animation, design — chaque épisode est construit par une équipe d'étudiants qui apprend le métier en le faisant.",
      lab5Title: "De nouveaux épisodes, chaque saison", lab5Desc: "Des conversations courtes, d'autres longues, des segments solo — voir ce qui arrive sur la page Prochains épisodes.",
      lab6Title: "Ouvert à tous les élèves", lab6Desc: "Aucune expérience requise pour rejoindre l'équipe, proposer un invité, ou simplement venir voir un enregistrement — il suffit d'être curieux.",
      statsEyebrow: "En chiffres", statsTitle: "Une jeune émission qui avance vite",
      statMembers: "Membres actifs (équipe + technique)", statCrew: "Équipe technique active", statEpisodes: "Total des épisodes",
      nextEyebrow: "À venir", nextTitle: "Prochain événement",
      whyEyebrow: "Pourquoi nous rejoindre", whyTitle: "Directement par nos membres",
      whyDesc: "On préfère laisser ceux qui sont déjà là vous l'expliquer plutôt que de vous le vendre nous-mêmes.",
      quote1Text: "[Ajoutez une citation d'un membre — ce qu'il dirait à un ami hésitant à nous rejoindre]",
      quote1Name: "[Nom du membre]", quote1Role: "[Rôle / pôle]",
      quote2Text: "[Ajoutez une citation d'un membre — ce qu'il dirait à un ami hésitant à nous rejoindre]",
      quote2Name: "[Nom du membre]", quote2Role: "[Rôle / pôle]",
      quote3Text: "[Ajoutez une citation d'un membre — ce qu'il dirait à un ami hésitant à nous rejoindre]",
      quote3Name: "[Nom du membre]", quote3Role: "[Rôle / pôle]",
      ctaTitle: "Prêt à construire quelque chose ?", ctaDesc: "Les séances sont ouvertes à tous les étudiants — apportez une idée, ou venez en trouver une.", ctaBtn: "Rejoindre NanoPod →"
    },
    common: {
      loading: "Chargement…", noEvents: "Aucun événement publié pour l'instant — revenez bientôt.", noProjects: "Aucun projet publié pour l'instant.",
      noMembers: "Aucun membre listé pour l'instant.", noCrew: "Aucune personne listée pour l'instant.", noOpportunities: "Aucune opportunité publiée pour l'instant.", noLinks: "Aucun lien ajouté pour l'instant.",
      noMemories: "Aucun souvenir publié pour l'instant — cette page se remplit au fil des épisodes enregistrés."
    },
    joinForm: {
      cta: "Rejoindre via Discord →", name: "Nom complet", email: "Email scolaire",
      track: "Avez-vous un talent particulier ?", note: "Dites-nous en plus",
      submit: "Envoyer", notSure: "Pas encore sûr"
    },
    eventsFormat: {
      eyebrow: "Format", title: "À quoi ressemble une semaine type",
      talk: "Conférence", talkTime: "20–30 min", talkDesc: "Un membre ou un invité présente un concept, un article ou un projet — volontairement court pour laisser du temps aux questions.",
      workshop: "Atelier", workshopTime: "Pratique", workshopDesc: "Apportez un ordinateur ou venez au studio — on avance ensemble sur un segment ou un exercice, étape par étape.",
      openLab: "Labo ouvert", openLabTime: "Temps libre", openLabDesc: "Aucun programme — juste une salle, du matériel, et d'autres membres qui travaillent sur leurs projets si vous voulez des retours ou de la compagnie."
    },
    events: { eyebrow: "Épisodes à venir", title: "Jours d'enregistrement et sorties",
      lead: "Chaque prochaine session d'enregistrement et sortie d'épisode, au même endroit — plus des enregistrements ouverts que vous pouvez venir voir." },
    projects: { eyebrow: "Épisodes", title: "Tous les épisodes, au même endroit",
      lead: "Épisodes complets et extraits des coulisses — certains en interview solo, d'autres en série à plusieurs voix sur une saison." },
    members: { eyebrow: "Notre équipe", title: "Qui est derrière le micro",
      lead: "Animateurs, producteurs, monteurs et équipe — ajoutés et tenus à jour depuis le tableau de bord admin." },
    crew: { eyebrow: "Derrière la caméra", title: "Les personnes qu'on n'entend pas",
      lead: "Photographie, montage, design, et tout le visuel — l'équipe qui fait que NanoPod est aussi beau à voir qu'à écouter." },
    opportunities: { eyebrow: "Opportunités", title: "Stages, concours et bourses",
      lead: "Une liste continue d'opportunités liées à la nanoscience, la robotique, le code et la santé — sélectionnées par l'émission pour son équipe." },
    links: { eyebrow: "Liens", title: "Nous retrouver partout", scan: "Scannez pour nous suivre" },
    memories: { eyebrow: "Souvenirs", title: "Les moments de l'émission",
      lead: "Un fil de photos des enregistrements, épisodes et moments d'équipe — ajoutées par l'équipe et par les membres." },
    join: { eyebrow: "Rejoindre", title: "Devenir membre",
      lead: "Aucun prérequis nécessaire — remplissez ce formulaire, ou rejoignez directement notre Discord." }
  },

  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", episodes: "الحلقات", team: "فريقنا", crew: "خلف الكاميرا", links: "الروابط", upcoming: "الحلقات القادمة", join: "انضم إلينا" },
    footer: { fine: "نانوبود · بودكاست مدرسي · NSNN" },
    home: {
      eyebrow: "بودكاست مدرسي · NSNN",
      title_html: "كل فكرة تكبر<br>لتصبح <span class=\"gradient-text\">اكتشافًا حقيقيًا</span>.",
      lead: "سكيل أب نانو مجتمع طلابي يستكشف علم النانو والروبوتات والبرمجة والصحة — أسّسه طلاب من أجل طلاب يريدون بناء شيء حقيقي قبل التخرج.",
      cta1: "استمع وانضم ←", cta2: "شاهد ما نبنيه",
      lab1Tag: "INTERVIEWS", lab2Tag: "KNOWLEDGE", lab3Tag: "STORIES",
      lab4Tag: "PRODUCTION", lab5Tag: "EPISODES", lab6Tag: "COMMUNITY",
      labsEyebrow: "ماذا نغطي", labsTitle: "خلف كل حلقة",
      labsDesc: "من أول مقابلة إلى المونتاج النهائي، إليك ما يحدث خلف البرنامج — وما تحصل عليه من الاستماع إليه.",
      lab1Title: "نلتقي بعقول مميزة", lab1Desc: "نجلس مع مؤسسين وباحثين وخريجين حققوا شيئًا يستحق الحديث عنه، ونطرح الأسئلة التي يتساءل عنها الجميع.",
      lab2Title: "ننمّي معرفتنا", lab2Desc: "حلقات معمّقة عن العلم والتقنية والأفكار المهمة — لا حاجة لأي خلفية مسبقة، فقط الفضول.",
      lab3Title: "أشخاص حقيقيون، قصص حقيقية", lab3Desc: "لكل ضيف قصة تستحق أن تُروى. نتركه يرويها — بلا نص وبلا فلتر.",
      lab4Title: "خلف الميكروفون", lab4Desc: "التسجيل والمونتاج والتقديم والتصميم — كل حلقة يصنعها فريق من الطلاب يتعلمون الحرفة أثناء ممارستها.",
      lab5Title: "حلقات جديدة كل موسم", lab5Desc: "محادثات قصيرة وأخرى طويلة وحلقات فردية — شاهد ما هو قادم في صفحة الحلقات القادمة.",
      lab6Title: "مفتوح لكل طالب", lab6Desc: "لا حاجة لأي خبرة للانضمام إلى الفريق، أو اقتراح ضيف، أو حتى لحضور جلسة تسجيل — فقط كن فضوليًا.",
      statsEyebrow: "بالأرقام", statsTitle: "برنامج فتيّ يتحرك بسرعة",
      statMembers: "أعضاء نشطون (الفريق التقني وفريقنا)", statCrew: "الفريق التقني النشط", statEpisodes: "إجمالي الحلقات المنجزة",
      nextEyebrow: "قريبًا", nextTitle: "الفعالية القادمة",
      whyEyebrow: "لماذا تنضم إلينا", whyTitle: "بصوت أعضائنا مباشرة",
      whyDesc: "نفضّل أن يشرح لك ذلك من هم بالفعل هنا بدل أن نبيعك الفكرة بأنفسنا.",
      quote1Text: "[أضف اقتباسًا من أحد الأعضاء — ما قد يقوله لصديق يفكر في الانضمام]",
      quote1Name: "[اسم العضو]", quote1Role: "[الدور / المسار]",
      quote2Text: "[أضف اقتباسًا من أحد الأعضاء — ما قد يقوله لصديق يفكر في الانضمام]",
      quote2Name: "[اسم العضو]", quote2Role: "[الدور / المسار]",
      quote3Text: "[أضف اقتباسًا من أحد الأعضاء — ما قد يقوله لصديق يفكر في الانضمام]",
      quote3Name: "[اسم العضو]", quote3Role: "[الدور / المسار]",
      ctaTitle: "جاهز لبناء شيء ما؟", ctaDesc: "الجلسات مفتوحة لكل طالب — أحضر فكرة، أو تعال لتجد واحدة.", ctaBtn: "انضم إلى سكيل أب نانو ←"
    },
    common: {
      loading: "جارٍ التحميل…", noEvents: "لا توجد فعاليات منشورة بعد — عد لاحقًا.", noProjects: "لا توجد مشاريع منشورة بعد.",
      noMembers: "لا يوجد أعضاء مدرجون بعد.", noCrew: "لا يوجد أفراد مدرجون بعد.", noOpportunities: "لا توجد فرص منشورة بعد.", noLinks: "لا توجد روابط مضافة بعد.",
      noMemories: "لا توجد ذكريات منشورة بعد — تمتلئ هذه الصفحة مع حلقات البرنامج المسجّلة."
    },
    joinForm: {
      cta: "انضم عبر Discord ←", name: "الاسم الكامل", email: "البريد المدرسي",
      track: "هل لديك موهبة؟", note: "أخبرنا المزيد",
      submit: "إرسال", notSure: "لست متأكدًا بعد"
    },
    eventsFormat: {
      eyebrow: "الصيغة", title: "كيف يبدو أسبوع عادي",
      talk: "محاضرة", talkTime: "20-30 دقيقة", talkDesc: "يقدّم عضو أو ضيف مفهومًا أو ورقة بحثية أو مشروعًا — قصيرة عمدًا ليبقى وقت للأسئلة.",
      workshop: "ورشة عمل", workshopTime: "عملي", workshopDesc: "أحضر حاسوبًا أو تعال إلى الاستوديو — نعمل معًا على مقطع أو تمرين خطوة بخطوة.",
      openLab: "مختبر مفتوح", openLabTime: "وقت حر", openLabDesc: "لا جدول أعمال — فقط غرفة ومعدات وأعضاء آخرون يعملون على مشاريعهم الخاصة إن أردت رأيًا أو رفقة."
    },
    events: { eyebrow: "الحلقات القادمة", title: "أيام التسجيل ومواعيد الإصدار",
      lead: "كل جلسة تسجيل قادمة وإصدار حلقة، في مكان واحد — بالإضافة إلى جلسات تسجيل مفتوحة يمكنك حضورها." },
    projects: { eyebrow: "الحلقات", title: "كل الحلقات في مكان واحد",
      lead: "حلقات كاملة ولقطات من الكواليس — بعضها مقابلات فردية وبعضها سلاسل متعددة الأجزاء عبر الموسم." },
    members: { eyebrow: "فريقنا", title: "من خلف الميكروفون",
      lead: "المقدمون والمنتجون والمحررون والفريق — تتم إضافتهم وتحديثهم من لوحة التحكم." },
    crew: { eyebrow: "خلف الكاميرا", title: "الأشخاص الذين لا نسمعهم",
      lead: "التصوير والمونتاج والتصميم وكل ما هو مرئي — الفريق الذي يجعل نانوبود جميلًا بالصورة كما هو بالصوت." },
    opportunities: { eyebrow: "الفرص", title: "تدريبات ومسابقات ومنح",
      lead: "قائمة مستمرة بالفرص المتعلقة بعلم النانو والروبوتات والبرمجة والصحة — يختارها البرنامج لفريقه." },
    links: { eyebrow: "الروابط", title: "تجدنا في كل مكان", scan: "امسح للمتابعة" },
    memories: { eyebrow: "الذكريات", title: "لحظات من البرنامج",
      lead: "سجل صور مستمر للتسجيلات والحلقات ولحظات الفريق — يضيفه الفريق والأعضاء." },
    join: { eyebrow: "انضم", title: "كن عضوًا",
      lead: "لا حاجة لخبرة مسبقة — فقط املأ هذا النموذج، أو انضم مباشرة إلى Discord الخاص بنا." }
  }
};
