import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Button from "antd";
import ribbon from "./assets/ribbons.svg";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style["background-container"]}>
        <img className={style["background-ribbon"]} src={ribbon} alt="Ribbon" />
        <div className={style["background-rect-container"]}>
          {new Array(22).fill(0).map((_item, index) => (
            <div className={style["background-rect"]} key={index} />
          ))}
        </div>
      </div>
      <div className={style["text"]}>
        <h1 className={style.welcome}>欢迎使用</h1>
        <h1 className={style.welcome}>南京工业大学</h1>
        <div className={style["frame"]}>
          <div className={style.title}>正版化平台</div>
        </div>
        <Link to="software" className={style["start-button"]}>
          <Button />
        </Link>
        <div className={style.introduce}>
          本站由信息管理中心提供服务器及存储支持，Mars工作室开发并维护，提供开源软件镜像服务，希望能为国内的开源贡献一份力量！
        </div>
      </div>
    </div>
  );
}
