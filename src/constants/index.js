import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,

  network,
  closed,
  cruise,
  doctor,
  license,
  analyzer,

  jquery,
  jsp,
  bootstrap,
  scss,
  mariadb,
  tomcat,
  svn,

  inu,
  hrdk,
  optolane,

  smile,
  birthday,
  smartphone,
  location,
  email,
  graduation
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "career",
    title: "Career",
  },
];

const services = [
  {
    title: "이름",
    text: "최혜진",
    icon: smile,
  },
  {
    title: "생년월일",
    text: "1994.05.29",
    icon: birthday,
  },
  {
    title: "연락처",
    text: "010-5050-7624",
    icon: smartphone,
  },
  {
    title: "주소지",
    text: "인천광역시 부평구",
    icon: location,
  },
  {
    title: "이메일",
    text: "sorate_@naver.com",
    icon: email,
  },
  {
    title: "학력",
    text: "인천대학교 (컴퓨터공학부)",
    icon: graduation,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    skill: "excellent",
  },
  {
    name: "CSS 3",
    icon: css,
    skill: "excellent",
  },
  {
    name: "JavaScript",
    icon: javascript,
    skill: "good",
  },
  {
    name: "Jquery",
    icon: jquery,
    skill: "excellent",
  },
  {
    name: "JSP",
    icon: jsp,
    skill: "good",
  },
  {
    name: "React",
    icon: reactjs,
    skill: "normal",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    skill: "normal",
  },
  {
    name: "Node JS",
    icon: nodejs,
    skill: "normal",
  },
  {
    name: "MariaDB",
    icon: mariadb,
    skill: "normal",
  },
  {
    name: "SVN",
    icon: svn,
    skill: "good",
  },
];

const timelines = [
  {
    title: "University",
    company_name: "인천대학교",
    icon: inu,
    iconBg: "#fff",
    date: "2013.03 - 2018.02",
    points: [
      "컴퓨터공학부 졸업"
    ],
  },
  {
    title: "Certificate",
    company_name: "자격증",
    icon: hrdk,
    iconBg: "#fff",
    date: "2018.04 - 2018.06",
    points: [
      "웹 디자인 기능사",
      "컴퓨터그래픽스운용기능사",
      "정보처리기사"
    ],
  },
  {
    title: "Career",
    company_name: "옵토레인",
    icon: optolane,
    iconBg: "#fff",
    date: "2018.11 - 2022.12",
    points: [
      "주요 업무: 사내 웹 어플리케이션 UI 개발 담당",
      "주요 업무 내용: 비동기 처리, 실시간 데이터 연동 처리, 그리드 커스텀 UI 개발, 웹 표준, 크로스 브라우징, 퍼블리싱, 모바일, 관리자 페이지, cyber security 컨설팅 내용 준수, 등",
      "문서 작성: User manual, Wireframe, Storyboard, Testcase, REST API",
      "유지보수: SVN 형상 관리, 코드 리뷰, 리뉴얼, 리팩토링 진행",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Network Web App",
    description:
      "검사 장비와 웹을 연동하여 데이터를 확인하는 웹 어플리케이션 입니다. 비교적 디스플레이가 작은 검사 장비에 대한 데이터들을 웹을 통해 결과 확인 및 분석을 할 수 있습니다.",
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "css",
        color: "css-text",
      },
      {
        name: "javascript",
        color: "javascript-text",
      },
      {
        name: "jquery",
        color: "jquery-text",
      },
      {
        name: "jsp",
        color: "jsp-text",
      },
      {
        name: "ajax",
        color: "pink-text-gradient",
      },
      {
        name: "highchart",
        color: "pink-text-gradient",
      },
      {
        name: "ftl",
        color: "pink-text-gradient",
      },
      {
        name: "fullPage",
        color: "pink-text-gradient",
      },
      {
        name: "jspdf",
        color: "pink-text-gradient",
      },
    ],
    image: network,
  },
  {
    name: "Closed Web App",
    description:
      "인터넷이 되지 않는 환경에서 장비와 연동하여 데이터를 확인하는 웹 어플리케이션 입니다. 실시간 검사에 대한 결과를 목록화하고 필터링 기능을 통해 좀 더 편리하게 데이터를 분석할 수 있습니다.",
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "css",
        color: "css-text",
      },
      {
        name: "javascript",
        color: "javascript-text",
      },
      {
        name: "jquery",
        color: "jquery-text",
      },
      {
        name: "jsp",
        color: "jsp-text",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "tui grid",
        color: "pink-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "cyber security",
        color: "pink-text-gradient",
      },
      {
        name: "xlsx",
        color: "pink-text-gradient",
      },
    ],
    image: closed,
  },
  {
    name: "Cruise Web App",
    description:
      "크루즈 탑승객들의 데이터를 확인하는 웹 어플리케이션 입니다. 크루즈 탑승객들이 모바일 앱으로 스캔한 바코드를 통해 검사 준비, 진행, 완료 단계를 실시간으로 확인할 수 있습니다.",
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "css",
        color: "css-text",
      },
      {
        name: "javascript",
        color: "javascript-text",
      },
      {
        name: "jquery",
        color: "jquery-text",
      },
      {
        name: "jsp",
        color: "jsp-text",
      },
      {
        name: "ajax",
        color: "pink-text-gradient",
      },
      {
        name: "tabulator",
        color: "pink-text-gradient",
      },
      {
        name: "fcm web push",
        color: "pink-text-gradient",
      },
    ],
    image: cruise,
  },
  {
    name: "Doctor Web App",
    description:
      "의사 판정이 필요한 데이터에 대한 웹 어플리케이션 입니다. 의사가 검사가 완료된 데이터를 분석하여 결과를 판정할 수 있습니다.",
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "css",
        color: "css-text",
      },
      {
        name: "javascript",
        color: "javascript-text",
      },
      {
        name: "jquery",
        color: "jquery-text",
      },
      {
        name: "jsp",
        color: "jsp-text",
      },
      {
        name: "ajax",
        color: "pink-text-gradient",
      },
      {
        name: "handlebar",
        color: "pink-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: doctor,
  },
  {
    name: "License Web App",
    description:
      "제품의 라이선스에 대한 관리 웹 어플리케이션 입니다. 관리자가 제품에 대한 라이선스 발급, 관리, 로그를 관리합니다.",
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "css",
        color: "css-text",
      },
      {
        name: "javascript",
        color: "javascript-text",
      },
      {
        name: "jquery",
        color: "jquery-text",
      },
      {
        name: "ajax",
        color: "pink-text-gradient",
      },
      {
        name: "tabulator",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: license,
  },
  {
    name: "Analyzer Desktop App",
    description:
      "검사 장비와 웹을 연동하여 데이터를 확인하는 웹 어플리케이션 입니다. 실시간으로 검사 결과 확인, 분석, 제어를 할 수 있습니다.",
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "css",
        color: "css-text",
      },
      {
        name: "javascript",
        color: "javascript-text",
      },
      {
        name: "vue",
        color: "vue-text",
      },
      {
        name: "node",
        color: "node-text",
      },
      {
        name: "socketIO",
        color: "pink-text-gradient",
      },
      {
        name: "virtual keyboard",
        color: "pink-text-gradient"
      },
    ],
    image: analyzer,
  },
];

export { services, technologies, timelines, testimonials, projects };
