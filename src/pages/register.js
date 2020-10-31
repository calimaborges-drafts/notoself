import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const { key, domain } = router.query;

  return (
    <p>
      Registered: {key} for {domain}
      <br />
      <Link href="/">
        <a>Right note!</a>
      </Link>
    </p>
  );
}
