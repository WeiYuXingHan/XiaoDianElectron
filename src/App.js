import style from './App.module.css';
import { Button } from 'antd'
import { Route } from 'react-router-dom'
import { Home } from './src/views/Home/Home'
function App() {
  return (
    <div class={style.wrapper}>
      <div class={style.text}>
        <h4 class={style.welcome}>欢迎使用 小电Electron</h4>
        <div class={style.frame}>
          <div class={style.title}>数字化班级管理 平台</div>
        </div>
         <Route path='/home' component={Home} >
          <Button type='default' href='/home'>开始使用</Button>
        </Route>
        <div class={style.introduce}>
          本站由腾讯云提供服务器及存储支持，WeiYuXingHan开发并维护，提供数字化管理服务，希望能为电智2301班级的学习与成长贡献一份力量！
        </div>
      </div>
    </div>
  );
}

export default App;
