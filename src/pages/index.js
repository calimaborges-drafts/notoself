import localForage from "localforage";

export default function Index({ mailTo }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const noteEl = event.target.elements.namedItem("note");
    const { key, domain } = await localForage.getItem("notoself-config");

    if (!key || !domain) {
      throw new Error("key and domain must be set at /register");
    }

    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify({
        note: noteEl.value,
        key,
        domain,
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
