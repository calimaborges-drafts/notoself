# notoself

Simple project to send note to your own email with a simple PWA app. Other goal of the project is to participate on hacktoberfest and try to be helpful at the same time.

## Libs

- React 17
- Next.js 10
- Tailwind CSS 1.9.0

## Dependencies

- Vercel account
- Mailgun account

## How does it work?

To make it work you will have to:

- Set the following environment variables:
  - `NOTE_EMAIL`
- Deploy it to Vercel
- Access http://yourdomain.com/MAIL_GUN_KEY (something like `key-213n123n132n123n123j12...`)
- You have to run with the key just the first time. It will be stored at your browser for future use.
