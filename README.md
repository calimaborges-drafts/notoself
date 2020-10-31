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

- Set the following environment variables:
  - `NOTE_EMAIL` (https://nextjs.org/docs/basic-features/environment-variables)
- Deploy it to Vercel 
- Access http://yourdomain.com/register?key=MAILGUN_KEY&domain=MAILGUN_DOMAIN to register mailgun data. 
  - **!!Your mailgun data will be stored in your browser!!**
  - Key can be obtained here: https://app.mailgun.com/app/account/security/api_keys
