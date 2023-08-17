import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.id}>
      <h1>Пользователь c id {query.id}</h1>
      <p>Имя пользователя {user.name}</p>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return { props: { user } };
}
