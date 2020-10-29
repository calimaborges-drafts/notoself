export default function Index({ mailTo }) {
  return <div><h1>Hello, {mailTo}!</h1></div>;
}

export function getServerSideProps() {
  return {
    props: {
      mailTo: process.env.NOTE_EMAIL || null
    }
  }
}
