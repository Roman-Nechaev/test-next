import Head from "next/head";

import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"studying next" + keywords} />
        <title>Главная</title>
      </Head>
      <div>
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
