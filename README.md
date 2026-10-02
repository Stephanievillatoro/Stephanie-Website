# Stephanie Villatoro | Accounting & ISA Portfolio | LSU

My personal portfolio website, built for the ISDS 3100 AI Lab (Fall 2026) at Louisiana State University by vibe coding with the agent in Google Antigravity IDE. It uses a hybrid layout: `index.html` is a single-page hub with my Profile, Skills, Experience, and Contact sections, and two separate pages expand on it: `resume.html` (my full resume, with a print/PDF option) and `project.html` (a featured project describing how I built this site and learned to vibe code). All pages share one stylesheet, `css/styles.css`, so the design stays consistent.

**Live site:** https://stephanievillatoro.github.io/Stephanie-Website/

## Reflection

When the agent linked my stylesheet and images, it wrote paths like `css/styles.css` and `images/stephanie_portrait.jpg` instead of full paths from my computer, such as `C:/Users/steph/.../styles.css`. I didn't understand why at first, so I asked the agent why it didn't use the exact location of the files. It explained that these are relative paths: the browser looks for the file starting from the folder the current page is in. A full path from my computer only works on my laptop, so once the site is on GitHub Pages, every page would lose its styling and photos. I learned that relative paths let the same code work both in my local preview and on the live site, as long as the folder structure stays the same.
