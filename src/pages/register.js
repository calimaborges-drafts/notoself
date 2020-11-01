import { useRouter } from "next/router";
import * as localForage from "localforage";

export default function Register() {
  const router = useRouter();

  async function register(event) {
    event.preventDefault();
    
    const key = event.target.elements.namedItem("key").value;
    const domain = event.target.elements.namedItem("domain").value;

    await localForage.setItem("notoself-config", { key, domain });
    router.push("/");
  }

  return (
    <form onSubmit={register} className="flex flex-col p-4">
      <label htmlFor="key">Mail gun key</label>
      <input id="key" name="key" type="password" required />

      <label htmlFor="domain">Mail gun domain</label>
      <input id="domain" name="domain" type="text" required />

      <button type="submit">Register</button>
    </form>
  );
}
