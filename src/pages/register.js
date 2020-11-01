import { useRouter } from "next/router";
import Link from "next/link";
import * as localForage from "localforage";
import { css, container, button, input, label } from "../libs/tailwind-classes";

export default function Register() {
  const router = useRouter();

  async function register(event) {
    event.preventDefault();
    const key = event.target.elements.namedItem("key").value;

    await localForage.setItem("notoself-secret", key);
    router.push("/");
  }

  return (
    <form onSubmit={register} className={container}>
      <h1 className="text-xl">📋 Notoself</h1>

      <label className={css(label, "mt-4")} htmlFor="key">
        Secret key:
      </label>
      <input className={input} id="key" name="key" type="password" required />

      <button
        className={css(button, "mt-4 bg-blue-800 text-white shadow-lg")}
        type="submit"
      >
        Register
      </button>
      <Link href="/">
        <a className={css(button, "mt-4 bg-gray-300 text-gray-700")}>Back</a>
      </Link>
    </form>
  );
}
