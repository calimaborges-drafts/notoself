import localForage from "localforage";
import Link from "next/link";
import { css, container, button, input } from "../libs/tailwind-classes";

export default function Index() {
  async function handleSubmit(event) {
    event.preventDefault();

    const noteEl = event.target.elements.namedItem("note");
    const config = await localForage.getItem("notoself-config");

    if (!config || !config.key || !config.domain) {
      throw new Error("key and domain must be set at /register");
    }

    await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify({
        note: noteEl.value,
        key: config.key,
        domain: config.domain,
      }),
    });
    noteEl.value = "";
  }

  return (
    <div className={container}>
      <h1 className="text-xl">📋 Notoself</h1>
      <form className="mt-6 flex flex-col flex-grow" onSubmit={handleSubmit}>
        <textarea
          className={css(input, "flex-grow text-lg")}
          name="note"
          required
        />
        <button
          className={css(button, "mt-4 bg-blue-800 text-white shadow-lg")}
          type="submit"
        >
          Send note
        </button>
        <Link href="/register">
          <a className={css(button, "mt-4 bg-gray-300 text-gray-700")}>Register</a>
        </Link>
      </form>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      mailTo: process.env.NOTE_EMAIL || null,
    },
  };
}
