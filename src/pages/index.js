export default function Index({ mailTo }) {
  return <h1>Hello, {mailTo}!</h1>;
}

export function getStaticProps() {
  return {
    props: {
      mailTo: process.env.NOTE_EMAIL || null
    },
    revalidate: 1,
  }
}
