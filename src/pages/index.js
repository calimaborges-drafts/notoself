import localForage from "localforage";
import Link from "next/link";

export default function Index({ mailTo }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const noteEl = event.target.elements.namedItem("note");
    const config = await localForage.getItem("notoself-config");

    if (!config || !config.key || !config.domain) {
      throw new Error("key and domain must be set at /register");
    }

    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify({
        note: noteEl.value,
        key: config.key,
        domain: config.domain,
      }),
    });
    noteEl.value = "";
    const json = await response.json();
  }

  return (
    <div className="p-12 max-w-screen-lg m-auto antialiased h-screen flex flex-col">
      <h1 className="text-xl">📋 Notoself</h1>
      <form className="mt-8 flex flex-col flex-grow" onSubmit={handleSubmit}>
        <textarea
          className="p-2 border rounded flex-grow text-lg"
          name="note"
          required
        />
        <button
          className="mt-4 p-2 bg-blue-800 rounded text-lg text-white uppercase font-semibold shadow-lg tracking-wider"
          type="submit"
        >
          Send note
        </button>
        <Link href="/register">
          <a className="mt-4 p-2 bg-gray-300 rounded text-lg text-gray-700 uppercase font-semibold text-center  tracking-wider">
            Register
          </a>
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
