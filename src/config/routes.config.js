import AsyncCompnent from '../components/common/AsyncComponent';

const ArticlePage = AsyncCompnent(() => import('../pages/Article/Article'));
const TestPage = AsyncCompnent(() => import('../pages/Test/Test'));

const ROUTES = [
  {
    key: 'home',
    path: '/home',
    name: 'home',
    title: '首页',
    component: ArticlePage,
  },
  {
    key: 'article',
    path: '/article',
    name: 'article',
    title: '文章',
    component: ArticlePage,
  },
  {
    key: 'test',
    path: '/test',
    name: 'test',
    title: '测试',
    component: TestPage,
  },
];

export default ROUTES;
