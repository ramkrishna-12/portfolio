# Ravan — Portfolio Site

A static portfolio built for GitHub Pages: plain HTML/CSS/JS, no build step, no
server required.

## What's in here

```
index.html    the page
style.css     theme / layout
script.js     project data, boot-terminal animation, the "ask" chat console,
              and the contact-form handler
README.md     this file
inquiries-sample.csv   header row showing the shape of exported inquiries
.nojekyll     tells GitHub Pages not to run this through Jekyll
```

## 1. Fill in your real details

Everything below is a placeholder — search for it and replace it before you
deploy:

| Placeholder | Where | Replace with |
|---|---|---|
| `your.email@example.com` | `index.html` (contact section) | your real email |
| `github.com/yourusername` | `index.html` | your GitHub profile URL |
| `linkedin.com/in/yourusername` | `index.html` | your LinkedIn URL |
| `YOUR_FORM_ID` | `script.js`, `FORMSPREE_ENDPOINT` | your Formspree form ID (step 2) |

Also worth adding once you have them: exact employment dates for Stylopay /
Digi Samurai LLP (left out because I didn't have them), a résumé link, and a
headshot if you want one in the hero.

Edit `PORTFOLIO` at the top of `script.js` any time you want to add, remove,
or reword a project — the project cards **and** the chat console both read
from that one object, so you only update it in one place.

## 2. Wire up the contact form so it actually collects inquiries

GitHub Pages only serves static files — there's no server to write a CSV to
when someone submits a form. This site uses **Formspree** to bridge that gap
for free:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form, name it whatever you like.
3. Copy the form endpoint it gives you — it looks like
   `https://formspree.io/f/abcdwxyz`.
4. In `script.js`, replace:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real endpoint.
5. Deploy. Submissions now land in your Formspree dashboard.
6. **To get a CSV:** in the Formspree dashboard, open your form → the
   submissions table has an **Export** / **Download CSV** option. That gives
   you name, email, message and timestamp as a spreadsheet you can open in
   Excel/Sheets. `inquiries-sample.csv` in this repo shows the column shape
   to expect.

Free tier is 50 submissions/month, which is plenty for a personal portfolio.
No backend code, no API keys exposed in your JS.

### Alternative: Google Forms + Sheets

If you'd rather not use Formspree, you can point the same form at a Google
Form instead and it'll log every submission straight into a Google Sheet
(File → Download → .csv any time):

1. Create a Google Form with **Name**, **Email**, **Message** fields.
2. Link a Google Sheet to it (Responses tab → the green Sheets icon).
3. Get the form's `formResponse` POST URL and each field's `entry.xxxxxxx`
   ID (view the form's page source, or use the "pre-filled link" feature to
   find them).
4. Swap the `fetch()` target and field `name` attributes in `script.js` /
   `index.html` accordingly, and set `mode: "no-cors"` on the fetch (Google
   Forms doesn't return a readable response, so you won't get a pass/fail
   status back — just show a generic "sent" message).

This avoids a third-party account beyond Google, at the cost of a bit more
setup and a less informative success/error state in the UI.

## 3. Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `yourusername.github.io` for a root
   domain, or any name for a project site).
2. Push these files to the repo's default branch:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/REPO_NAME.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`.
5. Save. GitHub gives you a URL a minute or two later — either
   `https://yourusername.github.io` (if you named the repo that way) or
   `https://yourusername.github.io/REPO_NAME`.

## Notes on the "ask" console

The chat widget on the page is **not** a live AI model — it's a small,
free, static keyword-matcher in `script.js` (`answerFor()`) that only
answers from the data in the `PORTFOLIO` object. That's deliberate: GitHub
Pages can't run a backend, so there's nowhere to safely call a paid AI API
from without exposing a key in client-side JS. If you later host this
somewhere with a backend (or add a serverless function), you could swap
`answerFor()` for a real API call — everything else on the page stays the
same.

## Accessibility & performance

- Keyboard-navigable, visible focus states, respects
  `prefers-reduced-motion` (the boot-terminal typing effect and the status
  dot's pulse both turn off).
- No build tooling, no frameworks — should load fast on its own. 
