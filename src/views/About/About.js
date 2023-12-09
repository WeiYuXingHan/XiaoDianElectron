import style from "./About.module.css";

export default function About() {
  return (
    <div className="wrapper">
      <div className={style.about}>
        <h1>Study</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          euismod, libero eget egestas egestas, metus felis vulputate
          velit, eget facilisis erat erat non erat. Sed euismod, libero eget
          egestas egestas, metus felis vulputate velit, eget facilisis erat erat
        </p>
      </div>
    </div>
  );
}
