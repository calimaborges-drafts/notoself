# notoself

Project to send note to your own email with a simple PWA app.

## Libs

- React 17
- Next.js 10
- Tailwind CSS 1.9.0

## Dependencies

- Vercel account
- Mailgun account

## How does it work?

To make it work you will have to:

- Set the following environment variables (https://nextjs.org/docs/basic-features/environment-variables):
  - `NOTE_EMAIL`: Email which will receive note
  - `MAILGUN_KEY`: Mailgun API key (https://app.mailgun.com/app/account/security/api_keys)
  - `MAILGUN_DOMAIN`: Mailgun domain
  - `SECRET_KEY`: Secret key that will be needed to use the app
- Deploy it to Vercel 
- Access http://yourdomain.com/register to register secret key.
