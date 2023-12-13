import style from "./Home.module.css";
export default function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the homepage of our website. Explore and enjoy!</p>
      <div className={style.home}>123</div>
    </div>
  );
}
