# Velvet & Bloom — Bespoke Floral Atelier

A responsive, interactive frontend website for an artisan florist atelier. Customers can design custom bouquets stem-by-stem with a live dynamic SVG visualizer, choose signature luxury wrappings, compose personalized greeting stationery with occasion presets, schedule doorstep deliveries, and complete orders with real-time price calculations and simulated checkout receipts.

Built purely with modern **HTML5**, **CSS3**, and **vanilla JavaScript (ES6+)**. Fully static and ready to deploy on **GitHub Pages** with zero build configuration or backend dependencies.

---

## Features

- **Live Dynamic Bouquet Visualizer:** Layered SVG rendering that organically positions stems, eucalyptus greenery, flower blooms, and container wrapping in real time.
- **5 Fresh Stem Varieties:** Red Velvet Roses ($4.50), Imperial White Lilies ($5.00), Blush Pink Carnations ($3.25), Exotic Royal Orchids ($6.00), and Golden Meadow Sunflowers ($3.75).
- **4 Signature Wrapping Styles:** Rustic Kraft Paper (+$4.00), Luxury Matte Black Wrap (+$7.00), Crystal Glass Vase (+$12.00), and Woven Wicker Basket (+$10.00).
- **Stationery Greeting Card Composer:** Live letterpress card preview with recipient, sign-off, character counter, and quick one-click poetic message templates.
- **5 Occasion Presets:** Instant 1-click presets for *Birthday*, *Anniversary*, *Congratulations*, *Get Well Soon*, and *Graduation*.
- **Dynamic Price Calculator:** Instant tally of stems, wrapping, delivery, and coupon discounts (`BLOOM10` for 10% off, `FREESHIP` for free delivery).
- **Doorstep Delivery Scheduler:** Date picker (validates against past dates), time slot selection (Morning, Afternoon, Twilight), and courier instructions.
- **Slide-Over Shopping Cart Drawer:** Manage multiple customized bouquets with item steppers and promo code engine.
- **Order Review & Celebration:** Simulated checkout flow producing a printable receipt (#VB-XXXXX) and animated celebration confetti burst.
- **Ambient Petal Animation:** HTML5 Canvas particle falling petals respecting `prefers-reduced-motion`.

---

## Repository Structure

```
├── .nojekyll       # Tells GitHub Pages to bypass Jekyll processing
├── index.html      # Main HTML document (located at repository root)
├── styles.css      # Luxury floral design system and responsive styles
├── app.js          # Bouquet rendering engine, cart state, and pricing logic
└── README.md       # Project documentation & GitHub Pages guide
```

All file paths are relative (`styles.css`, `app.js`), ensuring seamless hosting from both root domains and subpath repositories (e.g. `https://<username>.github.io/<repo-name>/`).

---

## Local Development Setup

No build step, Node packages, or external dependencies are required.

### Option 1: Direct in Browser
Double-click `index.html` or open it directly in any modern browser:
```bash
open index.html
```

### Option 2: Local HTTP Server (Recommended)
Using Python 3:
```bash
python3 -m http.server 3000
```
Then navigate to:
```
http://localhost:3000
```

---

## GitHub Pages Publishing Instructions

Follow these steps when you are ready to publish the repository to GitHub Pages:

### Step 1: Push Code to GitHub
Initialize git (if not already done), commit your files, and push to your GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit of Velvet & Bloom floral website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. On GitHub, navigate to your repository page.
2. Click on the **Settings** tab (gear icon) in the repository menu.
3. In the left-hand navigation sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select `main` from the dropdown.
   - **Folder**: Ensure `/ (root)` is selected.
5. Click **Save**.

### Step 3: View Your Live Website
- GitHub will automatically trigger a deployment workflow (typically takes 30–90 seconds).
- Once deployed, your site URL will appear at the top of the **Pages** settings screen:
  ```
  https://<your-username>.github.io/<your-repo-name>/
  ```

---

## Customizing Pricing & Presets

To tweak stem prices, wrapping options, or presets, edit the configuration objects at the top of [`app.js`](app.js):

- `FLOWERS`: Modify stem names, prices per stem, color palettes, and descriptions.
- `WRAPPINGS`: Adjust container styles and costs.
- `OCCASION_PRESETS`: Define default stem combinations and card messages for each occasion.
- `QUICK_QUOTES`: Add or change the suggested note templates.

---

## License & Credits

Artisan design and frontend codebase created for **Velvet & Bloom**. Free to use and customize for educational and commercial projects.
