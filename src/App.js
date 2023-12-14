import style from './App.module.css';
import { Button } from 'antd'
import { Route, Router, Link } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About'
import Study from './views/Study/Study'
import Ours from './views/Ours/Ours'
import Carousel from './Carousel/Carousel';
function App() {
  const images = [
    'https://electron-2023-1322159997.cos.ap-nanjing.myqcloud.com/1702457087635.jpeg',
    'https://electron-2023-1322159997.cos.ap-nanjing.myqcloud.com/1702457087635.jpeg',
    'https://electron-2023-1322159997.cos.ap-nanjing.myqcloud.com/1702457087635.jpeg',
  ]
  return (
    <>
      <nav class={style.navbar}>
        <Link to="/">
          <span class={style["title-left"]}>不管，</span>
          <span class={style["title-right"]}>电智2301就是最强的</span>
        </Link>
        <ul class={style.links}>
          <li>站外链接</li>
          <Link to='/about'><li>关于本站</li></Link>
        </ul>
        <ul class={style.icons}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 38" fill="none">
            <path
              d="M26.1488 24.374L25.7521 14.3035C25.7406 14.1159 25.6923 13.9295 25.6098 13.7549C25.4517 13.4033 25.1659 13.1175 24.8143 12.9594C24.6398 12.877 24.4533 12.8286 24.2657 12.8172L14.1953 12.4204C14.0075 12.413 13.823 12.4427 13.6523 12.5077C13.4816 12.5727 13.3281 12.6719 13.2006 12.7994C12.943 13.057 12.8066 13.4148 12.8216 13.7941C12.8365 14.1733 13.0015 14.543 13.2803 14.8217C13.559 15.1005 13.9287 15.2655 14.3079 15.2804L20.944 15.5318L12.6342 23.8415C12.3777 24.0981 12.2419 24.4544 12.2568 24.8322C12.2717 25.2099 12.436 25.578 12.7136 25.8556C12.9912 26.1332 13.3594 26.2976 13.7371 26.3124C14.1148 26.3273 14.4711 26.1916 14.7277 25.935L23.0374 17.6253L23.2888 24.2613C23.2954 24.4493 23.3392 24.637 23.4177 24.8137C23.4961 24.9903 23.6077 25.1524 23.7458 25.2906C23.884 25.4288 24.0461 25.5403 24.2228 25.6188C24.3994 25.6972 24.5872 25.741 24.7752 25.7476C24.9632 25.7558 25.1481 25.7267 25.3191 25.662C25.4901 25.5972 25.6439 25.4981 25.7716 25.3704C25.8993 25.2427 25.9984 25.0889 26.0631 24.9179C26.1279 24.7469 26.157 24.562 26.1488 24.374Z"
              fill="#494C58"
            />
            <rect x="1" y="1.5" width="35" height="35" rx="17.5" stroke="#494C58" stroke-width="2" />
          </svg>
        </ul>
      </nav>
      <Carousel images={images} />
      <div class={style.wrapper}>
        <div class={style.text}>
          <h4 class={style.welcome}>欢迎使用 小电Electron</h4>
          <div class={style.frame}>
            <div class={style.title}>数字化班级管理平台</div>
          </div>
          <Button type='default' href='/home'>开始使用</Button>
          <div class={style.introduce}>
            本站由腾讯云提供服务器及存储支持，WeiYuXingHan开发并维护，提供数字化管理服务，希望能为电智2301班级的学习与成长贡献一份力量！
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{/*       <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/study" exact component={Study} />
        <Route path="/ours" exact component={Ours} />
      </Router> */}