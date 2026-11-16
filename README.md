# Vo Quoc Bao — personal website starter

A responsive personal website made with **HTML, CSS, and vanilla JavaScript**. There are no dependencies, paid services, build steps, or frameworks. It is ready for GitHub Pages after you personalize the example text.

## Preview locally

Open `index.html` in a browser. All assets are in the `assets/` directory.

## Make it yours before publishing

Open `index.html` in a text editor (for example Visual Studio Code) and edit:

1. **Identity:** Your name **Vo Quoc Bao** is already in the header, hero, page `<title>`, meta tags, footer, and `<h1>`. Edit these if you want to display accents or a shortened version of your name.
2. **Introduction:** replace the sample "About" text and the three interest pills.
3. **Projects:** replace the three example project titles/descriptions. Change each `<span class="project-link-hint">...` into an actual link, e.g. `<a class="project-link-hint" href="https://github.com/Minh-Toan/your-project">View project ↗</a>`.
4. **Publications:** replace the clearly marked example paper titles with genuine citations; optionally wrap the title in a link to a DOI, arXiv, PDF, or journal page.
5. **Teaching:** replace the example courses and resources. Only upload course files you want available publicly.
6. **Contact:** change or add email, institution, LinkedIn, ORCID, Google Scholar, etc. Do **not** publish personal email or other private information unless you want it publicly visible.
7. **Styling (optional):** edit colors near the start of `assets/styles.css`.

The site identifies you as **Vo Quoc Bao**, while the connected GitHub username is **Minh-Toan**. These can be different. The GitHub links currently point to `https://github.com/Minh-Toan`; change them if you prefer a different public account. The site address depends on the account username, not your name.

## Publish at https://minh-toan.github.io/

1. Sign in to GitHub as `Minh-Toan`.
2. Create a repository named **`Minh-Toan.github.io`**. On a free account, make it **Public**.
3. **Unzip** the website package first. Upload the **contents** of this folder (`index.html`, `assets/`, etc.), not the ZIP itself, to the root of your GitHub repository. In the GitHub web interface, choose **Add file → Upload files**, then **Commit changes**. You can also use Git from your computer.
4. In repository **Settings → Pages → Build and deployment**, choose **Source: Deploy from a branch**, then **Branch: main**, **Folder: /(root)**, and **Save**.
5. Open `https://minh-toan.github.io/` once deployment completes. GitHub says updates can take up to about 10 minutes to appear.

Official GitHub guide: https://docs.github.com/en/pages/quickstart

### Git option (after repository creation)

If you prefer terminal commands, copy the extracted files to a local folder, then run from that folder:

```bash
git init
git branch -M main
git add .
git commit -m "Launch personal website"
git remote add origin https://github.com/Minh-Toan/Minh-Toan.github.io.git
git push -u origin main
```

If your repository already has a README or other commits, clone it first rather than doing a new `git init` in a disconnected folder.

## Folder structure

```text
index.html                 Website content and section structure
assets/styles.css          Colors, layout, responsive design
assets/main.js             Dark mode, mobile navigation, copyright year
assets/favicon.svg         Browser tab icon
.nojekyll                  Serve this as a simple static site
README.md                  This guide
```

## Notes

- This is a **template**: placeholder publications, projects, teaching information, and biography are **not factual** and should be replaced.
- The GitHub Pages website is public. Review every file before uploading.
- Links and asset paths are relative, so this also works in a project Pages repository (`username.github.io/repo`).
- The website works on both desktop and mobile and includes a light/dark color toggle.
