export default function Index({ mailTo }) {
  return <div><h1>Hello, {mailTo}!</h1></div>;
}

export function getStaticProps() {
  return {
    props: {
      mailTo: process.env.NOTE_EMAIL || null
    },
    revalidate: 1
  }
}
