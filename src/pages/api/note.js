import * as mailgun from "mailgun.js";

// TODO: use environment variables and secret key to validate
export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!process.env.NOTE_EMAIL) {
      throw new Error("NOTE_EMAIL environment variable not defined");
    }

    let sent = false;
    const { key, domain, note } = JSON.parse(req.body);
    const data = {
      from: `Notoself <noreply-notoself@${domain}>`,
      to: [process.env.NOTE_EMAIL],
      subject: note,
      text: note,
    };

    if (key && domain) {
      const mg = mailgun.client({ username: "api", key: key });
      await mg.messages.create(domain, data);
      sent = true;
    }

    res.status(200).json({ sent, ...data });
  } else {
    res.status(405).json({ error: { message: "method not allowed" } });
  }
}
