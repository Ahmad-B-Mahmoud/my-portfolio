// My projects details
const projects = [
  {
    title_en: "Al Meerath",
    title_ar: "الميراث",
    subTitle_en: "My Next js Web App",
    subTitle_ar: "تطبيق ويب باستخدام لغة الجافا سكريبت",
    releaseDate: "2024",
    description_en:
      "Solving inheritance issues according to Islamic law according to the Hanafi and Shafi'i schools.",
    description_ar:
      "حلّ مسائل المواريث حسب الشريعة الإسلامية على المذهبين الحنفي و الشافعي.",
    coverImages: [
      "/images/projects/almeerath/1.png",
      "/images/projects/almeerath/2.png",
      "/images/projects/almeerath/3.png",
      "/images/projects/almeerath/4.png",
    ],
    appIcon: "/images/projects/almeerath/al-meerath_icon.webp",
    githubLink: "https://github.com/Ahmad-B-Mahmoud/al-meerath",
    previewLink: "https://al-meerath.vercel.app/",
    techUsed: [
      {
        id: 1,
        name: "Next js",
        designation: "The React Framework for the Web.",
        designation_ar: "بيثة تطوير رياكت.",
        image: "/images/svg/nextjs.svg",
        techLink: "https://nextjs.org/",
      },
      {
        id: 2,
        name: "Material Ui",
        designation: "Ready to use Material Design React components.",
        designation_ar: "مكتبة واجهات وعناصر لتطبيقات جاهزة للإستخدام.",
        image: "/images/svg/materialUi.svg",
        techLink: "https://mui.com/material-ui/",
      },
      {
        id: 3,
        name: "Zustand",
        designation: "A React State Management solution.",
        designation_ar: "مكتبة لإدارة الحالات لتطبيقات رياكت.",
        image: "/images/svg/zustand.svg",
        techLink: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
    ],
  },
];

export default projects;
