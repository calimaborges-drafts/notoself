import { useRouter } from "next/router";

export default function Index({ mailTo }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const noteEl = event.target.elements.namedItem("note");
    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify({
        note: noteEl.value,
        key: null, // FIXME: Register should store and this should get it
        domain: null // FIXME: Register should store and this should get it
      }),
    });
    noteEl.value = "";
    const json = await response.json();
  }

  return (
    <div>
      <h1>Hello, {mailTo}!</h1>
      <form onSubmit={handleSubmit}>
        <textarea name="note" />
        <button type="submit">Send note</button>
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
