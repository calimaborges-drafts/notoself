import * as mailgun from "mailgun.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const noteEmail = process.env.NOTE_EMAIL;
    const key = process.env.MAILGUN_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const secretKey = process.env.SECRET_KEY;

    if (!noteEmail || !key || !domain || !secretKey) {
      throw new Error("Environment variables not defined");
    }

    let sent = false;
    const { secret, note } = JSON.parse(req.body);

    if (secret !== secretKey) {
      throw new Error("Secret key does not match");
    }

    const data = {
      from: `Notoself <noreply-notoself@${domain}>`,
      to: [noteEmail],
      subject: note,
      text: note,
    };

    if (key && domain) {
      const mg = mailgun.client({ username: "api", key });
      await mg.messages.create(domain, data);
      sent = true;
    }

    res.status(200).json({ sent, ...data });
  } else {
    res.status(405).json({ error: { message: "method not allowed" } });
  }
}
