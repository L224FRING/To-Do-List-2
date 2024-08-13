import Image from "next/image";
import { logOut } from "./logOut/actions";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <br></br>
      <form action={logOut}>
        <button type="submit">Log Out</button>
      </form>
    </>
  );
}
