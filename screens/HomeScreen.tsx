import HomeShader from "@/shaders/HomeShader";
import styles from "@/styles/Home.module.css";
import { shaderContainerStyle } from "@/styles/constants";

export const HomeScreen = () => {
  return (
    <>
      <main className={styles.main}>
        <div className="font-serif minion-3 text-white justify-center items-center">
          <div className="text-center">
            <span className="opacity-0 animate-fade-in [--fade-delay:1000ms]">
              S
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:1500ms]">
              c
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:700ms]">
              h
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:2000ms]">
              u
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:500ms]">
              y
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:2500ms]">
              l
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:3000ms]">
              e
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:650ms]">
              r
            </span>
          </div>
          <div className="text-center">
            <span className="opacity-0 animate-fade-in [--fade-delay:300ms]">
              d
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:1500ms]">
              e
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:1000ms]">
              V
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:2700ms]">
              o
            </span>
            <span className="opacity-0 animate-fade-in [--fade-delay:1700ms]">
              s
            </span>
          </div>
        </div>
      </main>

      <div className={shaderContainerStyle}>
        <HomeShader />
      </div>
    </>
  );
};
