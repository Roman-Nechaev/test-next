import Head from "next/head";
import { NavBar } from "../pages/index.styled";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"studying next" + keywords} />
        <title>Главная</title>
      </Head>
      <NavBar>
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </NavBar>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
