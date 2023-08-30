import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
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
  jsp,
  typescript,
  styled,
  svn,
  inu,
  hrdk,
  optolane,
  smile,
  birthday,
  smartphone,
  location,
  email,
  graduation,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About me',
  },
  {
    id: 'skill',
    title: 'Skill',
  },
  {
    id: 'timeline',
    title: 'Timeline',
  },
  {
    id: 'project',
    title: 'Project',
  },
];

const services = [
  {
    title: '이름',
    text: '최혜진',
    icon: smile,
  },
  {
    title: '생년월일',
    text: '1994.05.29',
    icon: birthday,
  },
  {
    title: '연락처',
    text: '010-5050-7624',
    icon: smartphone,
  },
  {
    title: '주소지',
    text: '인천광역시 부평구',
    icon: location,
  },
  {
    title: '이메일',
    text: 'sorate_@naver.com',
    icon: email,
  },
  {
    title: '학력',
    text: '인천대학교 (컴퓨터공학부)',
    icon: graduation,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    rating: 5,
  },
  {
    name: 'CSS 3',
    icon: css,
    rating: 5,
  },
  {
    name: 'Javascript',
    icon: javascript,
    rating: 4,
  },
  {
    name: 'Jquery',
    icon: jquery,
    rating: 4.5,
  },
  {
    name: 'SVN',
    icon: svn,
    rating: 4,
  },
  {
    name: 'React',
    icon: reactjs,
    rating: 3.5,
  },
  {
    name: 'Typescript',
    icon: typescript,
    rating: 3,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    rating: 3.5,
  },
  {
    name: 'Styled component',
    icon: styled,
    rating: 3,
  },
  {
    name: 'Github',
    icon: github,
    rating: 3.5,
  },
];

const timelines = [
  {
    title: 'University',
    company_name: '인천대학교',
    icon: inu,
    iconBg: '#fff',
    date: '2013.03 - 2018.02',
    points: ['컴퓨터공학부 졸업'],
  },
  {
    title: 'Certificate',
    company_name: '자격증',
    icon: hrdk,
    iconBg: '#fff',
    date: '2018.04 - 2018.06',
    points: ['웹 디자인 기능사', '컴퓨터그래픽스운용기능사', '정보처리기사'],
  },
  {
    title: 'Career',
    company_name: '옵토레인',
    icon: optolane,
    iconBg: '#fff',
    date: '2018.11 - 2022.12',
    points: [
      '주요 업무: 사내 웹 어플리케이션 UI 개발 담당',
      '주요 업무 내용: 비동기 처리, 실시간 데이터 연동 처리, 그리드 커스텀 UI 개발, 웹 표준, 크로스 브라우징, 퍼블리싱, 모바일, 관리자 페이지, cyber security 컨설팅 내용 준수, 등',
      '문서 작성: User manual, Wireframe, Storyboard, Testcase, REST API',
      '유지보수: SVN 형상 관리, 코드 리뷰, 리뉴얼, 리팩토링 진행',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Network Web App',
    url: 'https://portal.optolane.com/welcome',
    description:
      '검사 장비와 웹을 연동하여 데이터를 확인하는 웹 어플리케이션 입니다. 검사 결과 데이터의 목록 보기, 카드 보기, 차트 보기를 템플릿 형태로 구현하였고 pdf 미리보기 및 다운로드 기능 등을 구현하였습니다.',
    tags: [
      {
        name: 'html',
        color: 'html-text',
      },
      {
        name: 'css',
        color: 'css-text',
      },
      {
        name: 'javascript',
        color: 'javascript-text',
      },
      {
        name: 'jquery',
        color: 'jquery-text',
      },
      {
        name: 'jsp',
        color: 'jsp-text',
      },
      {
        name: 'ajax',
        color: 'skyblue-color',
      },
      {
        name: 'highchart',
        color: 'skyblue-color',
      },
      {
        name: 'ftl',
        color: 'skyblue-color',
      },
      {
        name: 'fullPage',
        color: 'skyblue-color',
      },
      {
        name: 'jspdf',
        color: 'skyblue-color',
      },
    ],
    image: network,
    git: false,
  },
  {
    name: 'Closed Web App',
    url: 'https://portal.optolane.com',
    description:
      '인터넷이 되지 않는 환경에서 장비와 연동하여 데이터를 확인하는 웹 어플리케이션 입니다. 실시간 검사에 대한 결과를 다국어, 목록화, 필터링, 상세보기, pdf 다운로드 기능 등을 구현하였습니다.',
    tags: [
      {
        name: 'html',
        color: 'html-text',
      },
      {
        name: 'css',
        color: 'css-text',
      },
      {
        name: 'javascript',
        color: 'javascript-text',
      },
      {
        name: 'jquery',
        color: 'jquery-text',
      },
      {
        name: 'jsp',
        color: 'jsp-text',
      },
      {
        name: 'axios',
        color: 'skyblue-color',
      },
      {
        name: 'tui grid',
        color: 'skyblue-color',
      },
      {
        name: 'i18n',
        color: 'skyblue-color',
      },
      {
        name: 'cyber security',
        color: 'skyblue-color',
      },
      {
        name: 'xlsx',
        color: 'skyblue-color',
      },
    ],
    image: closed,
    git: false,
  },
  {
    name: 'Doctor Web App',
    url: 'https://portal.optolane.com/doctor/login',
    description:
      '의사 판정이 필요한 데이터에 대한 웹 어플리케이션 입니다. 검사 결과에 대한 목록화, 상세보기, 중복 선택 방지, 마이페이지, 모바일 UI  기능 등을 구현하였습니다.',
    tags: [
      {
        name: 'html',
        color: 'html-text',
      },
      {
        name: 'css',
        color: 'css-text',
      },
      {
        name: 'javascript',
        color: 'javascript-text',
      },
      {
        name: 'jquery',
        color: 'jquery-text',
      },
      {
        name: 'jsp',
        color: 'jsp-text',
      },
      {
        name: 'ajax',
        color: 'skyblue-color',
      },
      {
        name: 'handlebar',
        color: 'skyblue-color',
      },
      {
        name: 'mobile',
        color: 'skyblue-color',
      },
      {
        name: 'bootstrap',
        color: 'skyblue-color',
      },
    ],
    image: doctor,
    git: false,
  },
  {
    name: 'Random life quotes',
    url: 'https://github.com/sorate7624/life-quotes',
    description:
      '랜덤으로 명언을 제조하는 웹 사이트 입니다. 무료로 제공하는 api를 사용하여 비동기 호출을 사용하였습니다. 한국어로 번역하고 텍스트 타이핑 기능을 추가하였습니다.',
    tags: [
      {
        name: 'react',
        color: 'react-text',
      },
      {
        name: 'react hooks',
        color: 'react-text',
      },
      {
        name: 'typescript',
        color: 'typescript-text',
      },
      {
        name: 'tailwind css',
        color: 'tailwind-text',
      },
      {
        name: 'vite',
        color: 'vite-text',
      },
      {
        name: 'async/await',
        color: 'skyblue-color',
      },
      {
        name: 'translate',
        color: 'skyblue-color',
      },
      {
        name: 'react-type-animation',
        color: 'skyblue-color',
      },
    ],
    image: quotes,
    git: true,
  },
  {
    name: 'Korean food recipe',
    url: 'https://github.com/sorate7624/korean-food-recipe',
    description:
      '한식 레시피를 검색할 수 있는 웹 사이트 입니다. 무료 api의 렌더링 속도가 느려서 json파일로 저장하여 사용하였습니다. 검색 기능, 필터 기능, 상세보기 기능을 추가하였습니다.',
    tags: [
      {
        name: 'react',
        color: 'react-text',
      },
      {
        name: 'react hooks',
        color: 'react-text',
      },
      {
        name: 'tailwind css',
        color: 'tailwind-text',
      },
      {
        name: 'vite',
        color: 'vite-text',
      },
      {
        name: 'async/await',
        color: 'skyblue-color',
      },
      {
        name: 'lazy image',
        color: 'skyblue-color',
      },
      {
        name: 'carousel',
        color: 'skyblue-color',
      },
    ],
    image: recipe,
    git: true,
  },
  {
    name: 'City demographics',
    url: 'https://github.com/sorate7624/city-demographics',
    description:
      '도시별 인구 통계를 확인할 수 있는 웹 사이트 입니다. 무료 api를 사용하되, 주기적으로 변경되는 토큰 값을 호출하여 사용하였습니다. 셀렉트의 종류에 따라 그래프의 종류를 3가지로 다르게 표현해봤습니다.',
    tags: [
      {
        name: 'react',
        color: 'react-text',
      },
      {
        name: 'react hooks',
        color: 'react-text',
      },
      {
        name: 'styled-components',
        color: 'styled-text',
      },
      {
        name: 'vite',
        color: 'vite-text',
      },
      {
        name: 'axios',
        color: 'skyblue-color',
      },
      {
        name: 'react-chartjs-2',
        color: 'skyblue-color',
      },
    ],
    image: city,
    git: true,
  },
  {
    name: 'Pang board',
    url: 'https://github.com/sorate7624/pang-board',
    description:
      '게시글을 자유롭게 작성할 수 있는 웹 사이트입니다. 로그인 후 게시글을 작성하고, 목록화된 게시글을 확인할 수 있으며 본인의 글에 수정/삭제가 가능합니다. 백엔드 개발자와 협업하여 실제 데이터베이스에 있는 api를 호출하였습니다. 아마존의 ec2를 통해 배포를 하였습니다.',
    tags: [
      {
        name: 'react',
        color: 'react-text',
      },
      {
        name: 'react query',
        color: 'react-query-text',
      },
      {
        name: 'redux',
        color: 'redux-text',
      },
      {
        name: 'react data grid',
        color: 'skyblue-color',
      },
      {
        name: 'scss',
        color: 'scss-text',
      },
      {
        name: 'animate.css',
        color: 'animate-text',
      },
      {
        name: 'aws ec2',
        color: 'ec2-text',
      },
      {
        name: 'aws route53',
        color: 'route-text',
      },
      {
        name: 'docker',
        color: 'docker-text',
      },
    ],
    image: pangboard,
    git: true,
  },
  {
    name: 'Pang forum',
    url: 'https://github.com/sorate7624/pang-forum',
    description:
      '게시글을 자유롭게 작성할 수 있는 웹 사이트입니다. 로그인 후 게시글을 작성하고, 수정/삭제가 가능하며 다른 게시글에 댓글을 작성할 수 있습니다. 다크모드, jwt 사용, auth.js를 통한 소셜 로그인 기능을 추가하였습니다.',
    tags: [
      {
        name: 'react',
        color: 'react-text',
      },
      {
        name: 'next.js',
        color: 'black-color',
      },
      {
        name: 'react router',
        color: 'react-router-text',
      },
      {
        name: 'scss',
        color: 'scss-text',
      },
      {
        name: 'vercel',
        color: 'black-color',
      },
      {
        name: 'mongo db',
        color: 'mongodb-text',
      },
    ],
    image: pangforum,
    git: true,
  },
  {
    name: 'Country info',
    url: 'https://github.com/sorate7624/country-info',
    description:
      '국가별 정보를 확인할 수 있는 웹 사이트입니다. 지도에서 국가를 선택하여 국가별로 지역, 수도, 언어, 특징 등을 확인할 수 있습니다. 위험 정도에 따라 지도의 색상을 다르게 표현하였습니다.',
    tags: [
      {
        name: 'react',
        color: 'react-text',
      },
      {
        name: 'next.js',
        color: 'black-color',
      },
      {
        name: 'typescript',
        color: 'typescript-text',
      },
      {
        name: 'react custom hook',
        color: 'react-text',
      },
      {
        name: 'scss',
        color: 'scss-text',
      },
      {
        name: 'react svg worldmap',
        color: 'skyblue-color',
      },
      {
        name: 'vercel',
        color: 'black-color',
      },
      {
        name: 'mongo db',
        color: 'mongodb-text',
      },
    ],
    image: countryinfo,
    git: true,
  },
];

export { services, technologies, timelines, testimonials, projects };
