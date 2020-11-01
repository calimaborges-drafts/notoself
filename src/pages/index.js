import { useEffect } from "react";
import { useRouter } from "next/router";

import localForage from "localforage";
import { css, container, button, input } from "../libs/tailwind-classes";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    localForage.getItem("notoself-secret").then((secretKey) => {
      if (!secretKey) {
        router.push("/register");
      }
    });
  }, [router]);

  async function handleSubmit(event) {
    event.preventDefault();

    const noteEl = event.target.elements.namedItem("note");
    const secret = await localForage.getItem("notoself-secret");

    if (!secret) {
      router.push("/register");
    }

    await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify({ note: noteEl.value, secret }),
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
