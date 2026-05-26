import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  vue,
  github,
  network,
  closed,
  doctor,
  quotes,
  recipe,
  pangboard,
  pangforum,
  countryinfo,
  city,
  jquery,
  typescript,
  styled,
  nextjs,
  scss,
  inu,
  hrdk,
  optolane,
  smile,
  birthday,
  smartphone,
  location,
  email,
  graduation,
  latale_main,
  latale_1q_main,
  latale_may_main,
  latale_1q_update,
  cls_main,
  sea_aug,
  actozsoft,
  chatbot,
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
    id: "project",
    title: "Project",
  },
  {
    id: "timeline",
    title: "Timeline",
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
    text: "서울특별시 영등포구",
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
    name: "React",
    icon: reactjs,
    rating: 3.5,
  },
  {
    name: "Vue",
    icon: vue,
    rating: 4,
  },
  {
    name: "Typescript",
    icon: typescript,
    rating: 3.5,
  },
  {
    name: "Next.js",
    icon: nextjs,
    rating: 3,
  },
  {
    name: "SCSS",
    icon: scss,
    rating: 4,
  },
  {
    name: "HTML 5",
    icon: html,
    rating: 5,
  },
  {
    name: "CSS 3",
    icon: css,
    rating: 5,
  },
  {
    name: "Javascript",
    icon: javascript,
    rating: 4,
  },
  {
    name: "Jquery",
    icon: jquery,
    rating: 4.5,
  },
  {
    name: "Github",
    icon: github,
    rating: 3.5,
  },
];

const timelines = [
  {
    title: "Career",
    company_name: "액토즈소프트",
    icon: actozsoft,
    iconBg: "#fff",
    date: "2023.11 - ",
    points: [
      "주요 업무: 프론트엔드 개발 및 서비스 운영",
      "주요 업무 내용: 이벤트 프로모션 페이지 제작, 백오피스 운영, 데이터 분석 대시보드 개발, AI 챗봇 프로젝트 개발, R&D 등",
      "성과: 웹페이지 로딩 속도 최적화 및 성능 개선으로 사용자 접근성과 이용 경험 향상, 프로모션 및 이벤트 페이지 UI/UX 개선을 통해 사용자 체류 시간 및 재접속률 증가, 테스트 자동화 및 레거시 코드 개선으로 운영 효율성과 유지보수 생산성 향상",
      "앞으로의 계획: 프론트엔드 챕터 리드 경험 확대 및 개발 문화 개선 기여,주니어/미들 개발자 멘토링 및 협업 프로세스 고도화, 게임 및 웹 서비스 분야에서 전문성을 강화하여 시니어/테크 리드로 성장",
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
  },
  {
    title: "Certificate",
    company_name: "자격증",
    icon: hrdk,
    iconBg: "#fff",
    date: "2018.04 - 2018.06",
    points: ["웹 디자인 기능사", "컴퓨터그래픽스운용기능사", "정보처리기사"],
  },
  {
    title: "University",
    company_name: "인천대학교",
    icon: inu,
    iconBg: "#fff",
    date: "2013.03 - 2018.02",
    points: ["컴퓨터공학부 졸업"],
  },
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
    name: "라테일 홈페이지",
    url: "https://www.latale.com/Main",
    description: `내용: 레거시 프론트엔드 구조를 개선하며 스타일 및 빌드 환경 마이그레이션을 진행하는 중이고, Playwright 기반 자동화 테스트 및 시각적 회귀 테스트 환경을 구축해 대규모 페이지 QA 시간을 단축하고 품질 안정성을 향상
프로젝트 성과: 
  - 유튜브 iframe을 팝업 클릭 시, 로드하도록 변경하여 초기 렌더링 속도 개선
  - 웹팩 미들웨어 설정으로 로컬 개발 서버 구동 시간 약 200배 단축 (1분 45초에서 1초로 구동)`,
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "scss",
        color: "css-text",
      },
      {
        name: "javascript",
        color: "javascript-text",
      },
      {
        name: "pug",
        color: "jquery-text",
      },
      {
        name: "webpack",
        color: "jquery-text",
      },
    ],
    image: latale_main,
    act: true,
  },
  {
    name: "라테일 2026년 5월 메인 이벤트 페이지",
    url: "https://www.latale.com/event/2026/may-main/",
    description: `내용: Vue 기반 이벤트 페이지 구축, 사용자 참여형 인터랙션 UI 개발, API 연동, 상태 처리 및 애니메이션 구현을 수행했으며, 레거시 코드 개선과 공통 구조 정비를 통해 유지보수성과 개발 생산성을 향상
프로젝트 성과: 
  - 이미지 포맷(jpg/png)를 webP로 변환하여 페이지 로딩 성능 개선(약 10배 이상 빨라짐)`,
    tags: [
      {
        name: "vue",
        color: "html-text",
      },
      {
        name: "typescript",
        color: "javascript-text",
      },
      {
        name: "scss",
        color: "jquery-text",
      },
      {
        name: "webpack",
        color: "jquery-text",
      },
    ],
    image: latale_may_main,
    act: true,
  },
  {
    name: "라테일 2026년 1분기 업데이트 안내 페이지",
    url: "https://www.latale.com/event/2026/1q-update/",
    description: `내용: PC/모바일 환경에 맞춘 적응형 구조로 페이지를 구축했으며, 디바이스별 UI 최적화 및 인터랙션 구현을 수행. 또한 업데이트 콘텐츠를 효과적으로 전달할 수 있도록 애니메이션 효과와 시각적 요소를 적용하고, 운영 및 유지보수를 고려한 구조로 개발
프로젝트 성과: 
  - 유지보수 효율성을 높이기 위해 PC/모바일로 분리되었던 프로젝트 통합
  - 모바일 적응형 레이아웃 구현`,
    tags: [
      {
        name: "vue",
        color: "html-text",
      },
      {
        name: "typescript",
        color: "javascript-text",
      },
      {
        name: "scss",
        color: "jquery-text",
      },
      {
        name: "webpack",
        color: "jquery-text",
      },
    ],
    image: latale_1q_update,
    act: true,
  },
  {
    name: "업무요청게시판 AI 챗봇 페이지",
    url: "",
    description: `내용: 채팅 기반 인터페이스 UI 구현, 사용자 입력 및 응답 상태 처리, 비동기 데이터 연동 등을 수행했으며, 직관적인 사용자 경험과 유지보수성을 고려한 구조로 개발
프로젝트 성과: 
  - 직원들이 보다 직관적이고 편리하게 사용할 수 있는 환경을 제공
  - 반복적인 업무 요청 프로세스를 간소화해 업무 처리 효율성과 운영 생산성 향상에 기여`,
    tags: [
      {
        name: "vue",
        color: "html-text",
      },
      {
        name: "typescript",
        color: "javascript-text",
      },
      {
        name: "scss",
        color: "jquery-text",
      },
      {
        name: "ollama",
        color: "jquery-text",
      },
      {
        name: "websocket",
        color: "jquery-text",
      },
    ],
    image: chatbot,
    act: true,
  },
  {
    name: "드래곤네스트 클래식 홈페이지 및 이벤트·프로모션 페이지",
    url: "https://seaclassic.dragonnest.com",
    description: `내용: 다양한 시즌 이벤트 및 프로모션 페이지를 구축하고, 사용자 참여형 기능과 애니메이션 인터랙션을 구현.
프로젝트 성과: 
  - 사전예약 이벤트·프로모션 페이지 효과로 이용자 수 대폭 증가
  - 이벤트 페이지 성과로 일회성 프로모션에 정기 이벤트 운영으로 확대`,
    tags: [
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "scss",
        color: "css-text",
      },
      {
        name: "typescript",
        color: "javascript-text",
      },
      {
        name: "pug",
        color: "jquery-text",
      },
      {
        name: "webpack",
        color: "jquery-text",
      },
    ],
    image: cls_main,
    act: true,
  },
  {
    name: "드래곤네스트 랜딩 이벤트 페이지",
    url: "https://sea.dragonnest.com/news/pages/106",
    description: `내용: 동남아/북미 서비스 대상 드래곤네스트 이벤트 랜딩 페이지 개발 및 운영
프로젝트 성과: 
  - 회사에서의 첫 React 및 Vite 도입
  - Vite 기반 개발 환경 구축으로 개발속도 50배 이상 단축`,
    tags: [
      {
        name: "react",
        color: "html-text",
      },
      {
        name: "styled-component",
        color: "css-text",
      },
      {
        name: "typescript",
        color: "javascript-text",
      },
      {
        name: "vite",
        color: "jquery-text",
      },
    ],
    image: sea_aug,
    act: true,
  },
  {
    name: "Network Web App",
    url: "https://portal.optolane.com/welcome",
    description:
      "검사 장비와 웹을 연동하여 데이터를 확인하는 웹 어플리케이션 입니다. 검사 결과 데이터의 목록 보기, 카드 보기, 차트 보기를 템플릿 형태로 구현하였고 pdf 미리보기 및 다운로드 기능 등을 구현하였습니다.",
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
        color: "skyblue-color",
      },
      {
        name: "highchart",
        color: "skyblue-color",
      },
      {
        name: "ftl",
        color: "skyblue-color",
      },
      {
        name: "fullPage",
        color: "skyblue-color",
      },
      {
        name: "jspdf",
        color: "skyblue-color",
      },
    ],
    image: network,
    act: false,
  },
  {
    name: "Closed Web App",
    url: "https://portal.optolane.com",
    description:
      "인터넷이 되지 않는 환경에서 장비와 연동하여 데이터를 확인하는 웹 어플리케이션 입니다. 실시간 검사에 대한 결과를 다국어, 목록화, 필터링, 상세보기, pdf 다운로드 기능 등을 구현하였습니다.",
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
        color: "skyblue-color",
      },
      {
        name: "tui grid",
        color: "skyblue-color",
      },
      {
        name: "i18n",
        color: "skyblue-color",
      },
      {
        name: "cyber security",
        color: "skyblue-color",
      },
      {
        name: "xlsx",
        color: "skyblue-color",
      },
    ],
    image: closed,
    act: false,
  },
  {
    name: "Doctor Web App",
    url: "https://portal.optolane.com/doctor/login",
    description:
      "의사 판정이 필요한 데이터에 대한 웹 어플리케이션 입니다. 검사 결과에 대한 목록화, 상세보기, 중복 선택 방지, 마이페이지, 모바일 UI  기능 등을 구현하였습니다.",
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
        color: "skyblue-color",
      },
      {
        name: "handlebar",
        color: "skyblue-color",
      },
      {
        name: "mobile",
        color: "skyblue-color",
      },
      {
        name: "bootstrap",
        color: "skyblue-color",
      },
    ],
    image: doctor,
    act: false,
  },
];

export { services, technologies, timelines, testimonials, projects };
