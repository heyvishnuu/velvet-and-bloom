/**
 * VELVET & BLOOM — BESPOKE FLORAL ATELIER & BOUQUET BUILDER
 * Pure Client-Side Interactive Experience & Dynamic Visualizer
 */

(function () {
  'use strict';

  // --- 1. DATA CONFIGURATIONS ---

  const FLOWERS = {
    roses: {
      id: 'roses',
      name: 'Red Velvet Roses',
      price: 4.50,
      meaning: 'Deep love, admiration & passionate grace',
      primaryColor: '#A81C2E',
      secondaryColor: '#D3384D',
      stemColor: '#3B6834',
      badge: 'Bestseller'
    },
    lilies: {
      id: 'lilies',
      name: 'Imperial White Lilies',
      price: 5.00,
      meaning: 'Purity, rebirth & refined devotion',
      primaryColor: '#FCFBF8',
      secondaryColor: '#E6E1D5',
      stemColor: '#457338',
      badge: 'Fragrant'
    },
    carnations: {
      id: 'carnations',
      name: 'Blush Pink Carnations',
      price: 3.25,
      meaning: 'Enduring affection & sweet gratitude',
      primaryColor: '#F2A4B0',
      secondaryColor: '#E57D8E',
      stemColor: '#476F39',
      badge: 'Long-lasting'
    },
    orchids: {
      id: 'orchids',
      name: 'Exotic Royal Orchids',
      price: 6.00,
      meaning: 'Rare luxury, strength & ethereal beauty',
      primaryColor: '#8E388A',
      secondaryColor: '#C068BC',
      stemColor: '#365D2C',
      badge: 'Exotic'
    },
    sunflowers: {
      id: 'sunflowers',
      name: 'Golden Meadow Sunflowers',
      price: 3.75,
      meaning: 'Radiant optimism, warmth & celebration',
      primaryColor: '#F5B01D',
      secondaryColor: '#D9910D',
      centerColor: '#4A2A14',
      stemColor: '#497435',
      badge: 'Joyful'
    }
  };

  const WRAPPINGS = {
    kraft: {
      id: 'kraft',
      name: 'Rustic Kraft Paper',
      price: 4.00,
      desc: 'Eco-friendly textured organic kraft paper bound with natural braided jute twine.',
      color: '#D4B38C'
    },
    black: {
      id: 'black',
      name: 'Luxury Matte Black Wrap',
      price: 7.00,
      desc: 'Heavyweight matte noir presentation wrap adorned with champagne gold silk ribbon.',
      color: '#242022'
    },
    vase: {
      id: 'vase',
      name: 'Crystal Glass Vase',
      price: 12.00,
      desc: 'Heavy-base artisanal florist glass cylinder, pre-filled with floral food water.',
      color: '#A8D2D9'
    },
    basket: {
      id: 'basket',
      name: 'Woven Wicker Basket',
      price: 10.00,
      desc: 'Handwoven natural willow basket lined with lush moisture-retaining moss.',
      color: '#BC9065'
    }
  };

  const OCCASION_PRESETS = {
    birthday: {
      name: 'Birthday Sunshine',
      title: 'Happy Birthday',
      flowers: { sunflowers: 5, carnations: 3, lilies: 2, roses: 0, orchids: 0 },
      wrapping: 'kraft',
      message: 'Wishing you another radiant year blooming with laughter, wonder, and endless golden moments!',
      recipient: 'Dear Friend'
    },
    anniversary: {
      name: 'Romantic Anniversary',
      title: 'Happy Anniversary',
      flowers: { roses: 12, orchids: 3, lilies: 0, carnations: 0, sunflowers: 0 },
      wrapping: 'black',
      message: 'Every petal carries another reason I fall deeper in love with you each day. Forever yours.',
      recipient: 'My Beloved'
    },
    congratulations: {
      name: 'Radiant Congratulations',
      title: 'Warmest Congratulations',
      flowers: { orchids: 4, carnations: 6, lilies: 4, roses: 0, sunflowers: 0 },
      wrapping: 'basket',
      message: 'Bravo on your brilliant milestone! Wishing you continued triumph and joy as your journey blossoms.',
      recipient: 'To a Star'
    },
    getwell: {
      name: 'Gentle Recovery',
      title: 'Thinking of You & Get Well Soon',
      flowers: { lilies: 4, carnations: 6, sunflowers: 2, roses: 0, orchids: 0 },
      wrapping: 'vase',
      message: 'Sending you sunshine, gentle comfort, and fragrant blossoms for a restful and speedy recovery.',
      recipient: 'Get Well Soon'
    },
    graduation: {
      name: 'Graduation Triumph',
      title: 'Happy Graduation',
      flowers: { sunflowers: 6, roses: 4, lilies: 4, carnations: 0, orchids: 0 },
      wrapping: 'vase',
      message: 'Caps off to your hard work, brilliance, and perseverance! May your future bloom beyond your wildest dreams.',
      recipient: 'Our Graduate'
    }
  };

  const QUICK_QUOTES = {
    birthday: [
      "Wishing you a year as bright and breathtaking as this bouquet!",
      "Happy Birthday! May your day be sprinkled with sweetness and smiles.",
      "Cheers to another gorgeous chapter of your story. Bloom on!"
    ],
    anniversary: [
      "Here's to a lifetime of love that grows more beautiful with time.",
      "You are my favourite love story. Happy Anniversary my love.",
      "All that you are is all that I'll ever need. Happy Anniversary!"
    ],
    congratulations: [
      "So thrilled for your success! Your hard work has truly blossomed.",
      "Cheers to this huge milestone and the bright tomorrow ahead!",
      "You did it! Keep shining and inspiring everyone around you."
    ],
    getwell: [
      "Wrapping you in gentle hugs and prayers for renewed strength.",
      "May these blossoms bring sunshine and speedy healing to your days.",
      "Thinking of you warmly and hoping you feel much better each day."
    ],
    graduation: [
      "The world is yours to shape. Go out there and conquer your dreams!",
      "Proud is an understatement. Congratulations on your graduation!",
      "Your hard work has bloomed into pure brilliance. Hats off!"
    ]
  };

  // --- 2. APPLICATION STATE ---

  const state = {
    builder: {
      stems: {
        roses: 3,
        lilies: 2,
        carnations: 4,
        orchids: 1,
        sunflowers: 2
      },
      wrapping: 'kraft',
      card: {
        occasion: 'birthday',
        recipient: 'Sarah',
        message: 'Wishing you another radiant year blooming with laughter, wonder, and endless golden moments!',
        sender: 'With Love, Alex'
      }
    },
    delivery: {
      method: 'delivery', // 'delivery' or 'pickup'
      date: '',
      slot: 'afternoon', // 'morning', 'afternoon', 'twilight'
      recipientName: 'Sarah Jenkins',
      phone: '(555) 392-8140',
      address: '742 Evergreen Terrace, Apt 4B',
      instructions: 'Please ring bell and leave on the porch if unavailable.'
    },
    cart: [],
    discountCode: null,
    discountAmount: 0
  };

  // --- 3. DOM ELEMENT REFERENCES ---

  const el = {
    // Header & Navigation
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    cartBtn: document.getElementById('cart-toggle-btn'),
    cartCountBadges: document.querySelectorAll('.cart-count-badge'),
    cartDrawerBackdrop: document.getElementById('cart-drawer-backdrop'),
    cartCloseBtn: document.getElementById('cart-close-btn'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartEmptyState: document.getElementById('cart-empty-state'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    cartDiscountVal: document.getElementById('cart-discount-val'),
    cartDeliveryFee: document.getElementById('cart-delivery-fee'),
    cartGrandTotal: document.getElementById('cart-grand-total'),
    promoInput: document.getElementById('promo-input'),
    promoApplyBtn: document.getElementById('promo-apply-btn'),
    checkoutDrawerBtn: document.getElementById('checkout-drawer-btn'),

    // Visualizer Elements
    bouquetSvg: document.getElementById('live-bouquet-svg'),
    bouquetEmptyNotice: document.getElementById('bouquet-empty-notice'),
    totalStemsCount: document.getElementById('total-stems-count'),
    fullnessTier: document.getElementById('fullness-tier'),
    fullnessFill: document.getElementById('fullness-fill'),
    stemsSummaryChips: document.getElementById('stems-summary-chips'),
    builderPriceDisplay: document.getElementById('builder-price-display'),
    addCartBuilderBtn: document.getElementById('add-cart-builder-btn'),
    resetBuilderBtn: document.getElementById('reset-builder-btn'),

    // Steppers Container
    flowersGrid: document.getElementById('flowers-selector-grid'),

    // Wrapping
    wrappingGrid: document.getElementById('wrapping-options-grid'),

    // Card Composer
    occasionPills: document.getElementById('occasion-pills-container'),
    cardRecipientInput: document.getElementById('card-recipient-input'),
    cardMessageInput: document.getElementById('card-message-input'),
    cardSenderInput: document.getElementById('card-sender-input'),
    cardCharCounter: document.getElementById('card-char-counter'),
    quickQuotesBox: document.getElementById('quick-quotes-list'),

    // Physical Card Preview
    previewOccasion: document.getElementById('card-preview-occasion'),
    previewRecipient: document.getElementById('card-preview-recipient'),
    previewMessage: document.getElementById('card-preview-message'),
    previewSender: document.getElementById('card-preview-sender'),

    // Delivery Section
    deliveryDateInput: document.getElementById('delivery-date-input'),
    deliveryMethodPills: document.querySelectorAll('.delivery-method-pill'),
    timeSlotPills: document.querySelectorAll('.time-slot-pill'),
    deliveryForm: document.getElementById('delivery-form'),
    recipientNameInput: document.getElementById('recipient-name-input'),
    recipientPhoneInput: document.getElementById('recipient-phone-input'),
    recipientAddressInput: document.getElementById('recipient-address-input'),
    recipientInstructionsInput: document.getElementById('recipient-instructions-input'),
    saveDeliveryBtn: document.getElementById('save-delivery-btn'),

    // Checkout Modal
    checkoutModal: document.getElementById('checkout-modal'),
    checkoutCloseBtn: document.getElementById('checkout-close-btn'),
    checkoutSummaryDetails: document.getElementById('checkout-summary-details'),
    placeOrderBtn: document.getElementById('place-order-btn'),

    // Confirmation Modal
    confirmationModal: document.getElementById('confirmation-modal'),
    confirmationCloseBtn: document.getElementById('confirmation-close-btn'),
    confirmationOrderNum: document.getElementById('confirmation-order-num'),
    confirmationReceiptDetails: document.getElementById('confirmation-receipt-details'),
    confirmationNewBouquetBtn: document.getElementById('confirmation-new-bouquet-btn'),

    // Toast Container
    toastContainer: document.getElementById('toast-container'),

    // Presets Ribbon
    presetsGrid: document.getElementById('presets-grid')
  };

  // --- 4. PETAL CANVAS BACKGROUND ANIMATION ---

  function initPetalsCanvas() {
    const canvas = document.getElementById('petals-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const petals = [];
    const PETAL_COUNT = window.innerWidth < 768 ? 16 : 28;
    const petalColors = ['#F9D6D2', '#F7B7AB', '#F2ECE4', '#E8A598', '#FAEAE6'];

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 8 + 6,
        d: Math.random() * 1.5 + 0.5,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        tilt: Math.random() * 10 - 10,
        tiltAngleIncremental: Math.random() * 0.05 + 0.01,
        tiltAngle: 0,
        opacity: Math.random() * 0.45 + 0.25
      });
    }

    let animationFrameId;

    function renderPetals() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 1 + p.r / 8) * 0.45;
        p.x += Math.sin(p.d) * 0.6;
        p.tilt = Math.sin(p.tiltAngle) * 12;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;

        // Draw soft petal curve
        ctx.ellipse(p.x, p.y, p.r, p.r * 0.5, (p.tilt * Math.PI) / 180, 0, Math.PI * 2);
        ctx.fill();

        // Wrap around screen
        if (p.y > height + 20) {
          p.x = Math.random() * width;
          p.y = -20;
          p.tiltAngle = 0;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(renderPetals);
    }

    // Check prefers-reduced-motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      renderPetals();
    }
  }

  // --- 5. CONFETTI ANIMATION ENGINE ---

  function triggerCelebrationConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const particles = [];
    const colors = ['#C2934D', '#591925', '#E5A89B', '#7B9070', '#F7E5E1', '#F5B01D'];
    const COUNT = 120;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 200,
        y: height / 2 - 50,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.9) * 16 - 4,
        size: Math.random() * 9 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.35,
        opacity: 1
      });
    }

    let frames = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.007;

        if (p.opacity > 0 && p.y < height + 50) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.3);
          ctx.restore();
        }
      }

      frames++;
      if (alive && frames < 240) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    renderConfetti();
  }

  // --- 6. LIVE SVG BOUQUET VISUALIZER ENGINE ---

  function renderBouquetSvg() {
    const stems = state.builder.stems;
    const wrappingKey = state.builder.wrapping;
    const totalStems = getTotalStemsCount();

    if (totalStems === 0) {
      if (el.bouquetEmptyNotice) el.bouquetEmptyNotice.style.display = 'block';
    } else {
      if (el.bouquetEmptyNotice) el.bouquetEmptyNotice.style.display = 'none';
    }

    // Build SVG elements dynamically
    let svgContent = `
      <defs>
        <!-- Gradients for realistic botanical depth -->
        <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#DE314D" />
          <stop offset="50%" stop-color="#A81C2E" />
          <stop offset="100%" stop-color="#5E0B18" />
        </linearGradient>
        <linearGradient id="roseHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stop-color="#FF637D" />
          <stop offset="100%" stop-color="#B51C31" />
        </linearGradient>
        <linearGradient id="lilyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="70%" stop-color="#F7F5EE" />
          <stop offset="100%" stop-color="#DFD8C7" />
        </linearGradient>
        <linearGradient id="carnationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FED1DA" />
          <stop offset="60%" stop-color="#F28DA0" />
          <stop offset="100%" stop-color="#CC526B" />
        </linearGradient>
        <linearGradient id="orchidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#D97CD5" />
          <stop offset="50%" stop-color="#8E388A" />
          <stop offset="100%" stop-color="#551B53" />
        </linearGradient>
        <linearGradient id="sunflowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFD13B" />
          <stop offset="70%" stop-color="#F5A316" />
          <stop offset="100%" stop-color="#C26E05" />
        </linearGradient>
        <radialGradient id="sunflowerCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3A1C08" />
          <stop offset="75%" stop-color="#542B0D" />
          <stop offset="100%" stop-color="#73411E" />
        </radialGradient>
        <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#355828" />
          <stop offset="50%" stop-color="#4F7C3E" />
          <stop offset="100%" stop-color="#28421E" />
        </linearGradient>
        <linearGradient id="eucalyptusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#B2C5B0" />
          <stop offset="60%" stop-color="#829B7F" />
          <stop offset="100%" stop-color="#4E674C" />
        </linearGradient>

        <!-- Wraps -->
        <linearGradient id="kraftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E5C7A2" />
          <stop offset="45%" stop-color="#CCA375" />
          <stop offset="100%" stop-color="#AB8253" />
        </linearGradient>
        <linearGradient id="blackWrapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#363234" />
          <stop offset="50%" stop-color="#211D1F" />
          <stop offset="100%" stop-color="#141112" />
        </linearGradient>
        <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE8B5" />
          <stop offset="50%" stop-color="#D4A757" />
          <stop offset="100%" stop-color="#996E24" />
        </linearGradient>
        <linearGradient id="glassVaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.7)" />
          <stop offset="20%" stop-color="rgba(195,225,235,0.3)" />
          <stop offset="80%" stop-color="rgba(170,210,225,0.4)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.8)" />
        </linearGradient>
        <linearGradient id="basketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CBB18B" />
          <stop offset="50%" stop-color="#A58356" />
          <stop offset="100%" stop-color="#7B5C35" />
        </linearGradient>
      </defs>
    `;

    // 1. Decorative background greenery & baby's breath fillers
    svgContent += `
      <g id="foliage-background">
        <!-- Eucalyptus leaves -->
        <path d="M 120,280 C 90,230 70,170 95,130 C 115,160 125,210 135,260 Z" fill="url(#eucalyptusGrad)" opacity="0.8" />
        <path d="M 280,280 C 310,230 330,170 305,130 C 285,160 275,210 265,260 Z" fill="url(#eucalyptusGrad)" opacity="0.8" />
        <path d="M 160,270 C 130,200 120,130 145,85 C 160,130 170,195 170,260 Z" fill="url(#eucalyptusGrad)" opacity="0.75" />
        <path d="M 240,270 C 270,200 280,130 255,85 C 240,130 230,195 230,260 Z" fill="url(#eucalyptusGrad)" opacity="0.75" />
        
        <!-- Delicate filler sprigs -->
        <circle cx="110" cy="115" r="3.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="125" cy="105" r="4" fill="#FFFFFF" opacity="0.85" />
        <circle cx="290" cy="115" r="3.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="275" cy="105" r="4" fill="#FFFFFF" opacity="0.85" />
        <circle cx="140" cy="75" r="3.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="260" cy="75" r="3.5" fill="#FFFFFF" opacity="0.9" />
      </g>
    `;

    // 2. Visible flower stems converging into the bouquet focal core
    svgContent += `<g id="bouquet-stems">`;
    const stemLines = [
      { x1: 200, y1: 340, x2: 120, y2: 180, w: 5 },
      { x1: 195, y1: 345, x2: 150, y2: 150, w: 4.5 },
      { x1: 200, y1: 350, x2: 190, y2: 130, w: 5 },
      { x1: 202, y1: 350, x2: 215, y2: 130, w: 5 },
      { x1: 205, y1: 345, x2: 250, y2: 150, w: 4.5 },
      { x1: 200, y1: 340, x2: 280, y2: 180, w: 5 },
      { x1: 198, y1: 355, x2: 170, y2: 110, w: 4.5 },
      { x1: 203, y1: 355, x2: 230, y2: 110, w: 4.5 }
    ];
    stemLines.forEach(s => {
      svgContent += `<line x1="${s.x1}" y1="${s.y1}" x2="${s.x2}" y2="${s.y2}" stroke="url(#stemGrad)" stroke-width="${s.w}" stroke-linecap="round" />`;
    });
    svgContent += `</g>`;

    // 3. Flower blooms placement algorithm
    // We create a pool of flower heads based on state quantities and lay them out in organic tiers
    const flowerPool = [];
    Object.keys(stems).forEach(key => {
      const count = stems[key];
      for (let i = 0; i < count; i++) {
        flowerPool.push(key);
      }
    });

    // Preset natural coordinate slots arranged from top dome down to wide flank
    const slots = [
      // Central crown
      { x: 200, y: 115, scale: 1.05 },
      { x: 165, y: 135, scale: 0.98 },
      { x: 235, y: 135, scale: 0.98 },
      { x: 200, y: 165, scale: 1.1 },
      // Mid flanks
      { x: 130, y: 160, scale: 0.95 },
      { x: 270, y: 160, scale: 0.95 },
      { x: 160, y: 195, scale: 1.02 },
      { x: 240, y: 195, scale: 1.02 },
      { x: 200, y: 220, scale: 1.0 },
      // Outer lower tier
      { x: 105, y: 195, scale: 0.88 },
      { x: 295, y: 195, scale: 0.88 },
      { x: 130, y: 235, scale: 0.92 },
      { x: 270, y: 235, scale: 0.92 },
      { x: 170, y: 245, scale: 0.9 },
      { x: 230, y: 245, scale: 0.9 },
      // Extended clusters for large bouquets
      { x: 80, y: 215, scale: 0.82 },
      { x: 320, y: 215, scale: 0.82 },
      { x: 145, y: 100, scale: 0.85 },
      { x: 255, y: 100, scale: 0.85 },
      { x: 200, y: 75, scale: 0.85 },
      { x: 110, y: 135, scale: 0.85 },
      { x: 290, y: 135, scale: 0.85 },
      { x: 100, y: 255, scale: 0.8 },
      { x: 300, y: 255, scale: 0.8 }
    ];

    svgContent += `<g id="bouquet-blooms">`;

    flowerPool.forEach((type, idx) => {
      const slot = slots[idx % slots.length];
      const offsetX = slot.x + (idx >= slots.length ? (idx % 2 === 0 ? 8 : -8) : 0);
      const offsetY = slot.y + (idx >= slots.length ? (idx % 3 === 0 ? -6 : 6) : 0);
      const scale = slot.scale;

      svgContent += `<g transform="translate(${offsetX}, ${offsetY}) scale(${scale})">`;

      if (type === 'roses') {
        // Red Velvet Rose SVG bloom
        svgContent += `
          <!-- Rose Bloom -->
          <circle cx="0" cy="0" r="22" fill="url(#roseGrad)" />
          <path d="M -14,-4 C -16,-14 -6,-20 4,-19 C 14,-18 20,-10 17,2 C 14,14 4,19 -6,17 C -15,15 -19,4 -14,-4 Z" fill="url(#roseHighlight)" opacity="0.9" />
          <path d="M -8,-2 C -9,-8 -4,-12 2,-11 C 7,-10 10,-5 8,1 C 6,7 1,10 -4,9 C -9,8 -11,2 -8,-2 Z" fill="#690919" />
          <path d="M -3,-1 C -4,-4 -1,-6 2,-5 C 5,-4 6,-1 5,2 C 4,5 1,6 -2,5 C -4,4 -5,1 -3,-1 Z" fill="#DE314D" />
          <!-- Rose sepal leaves -->
          <path d="M -18,10 C -26,14 -24,20 -18,22 C -13,20 -12,14 -18,10 Z" fill="#3B6834" />
          <path d="M 18,10 C 26,14 24,20 18,22 C 13,20 12,14 18,10 Z" fill="#3B6834" />
        `;
      } else if (type === 'lilies') {
        // White Lily SVG bloom
        svgContent += `
          <!-- White Lily -->
          <g transform="scale(1.1)">
            <!-- 6 Petals -->
            <path d="M 0,0 C -8,-14 -10,-28 0,-34 C 10,-28 8,-14 0,0 Z" fill="url(#lilyGrad)" stroke="#E4DCCD" stroke-width="0.8" />
            <path d="M 0,0 C 14,-8 28,-10 34,0 C 28,10 14,8 0,0 Z" fill="url(#lilyGrad)" stroke="#E4DCCD" stroke-width="0.8" />
            <path d="M 0,0 C 8,14 10,28 0,34 C -10,28 -8,14 0,0 Z" fill="url(#lilyGrad)" stroke="#E4DCCD" stroke-width="0.8" />
            <path d="M 0,0 C -14,8 -28,10 -34,0 C -28,-10 -14,-8 0,0 Z" fill="url(#lilyGrad)" stroke="#E4DCCD" stroke-width="0.8" />
            <path d="M 0,0 C 8,-12 22,-22 25,-16 C 22,-6 12,0 0,0 Z" fill="url(#lilyGrad)" stroke="#E4DCCD" stroke-width="0.8" />
            <path d="M 0,0 C -8,12 -22,22 -25,16 C -22,6 -12,0 0,0 Z" fill="url(#lilyGrad)" stroke="#E4DCCD" stroke-width="0.8" />
            <!-- Golden pistil/anthers -->
            <circle cx="0" cy="0" r="4" fill="#C2934D" />
            <line x1="0" y1="0" x2="-8" y2="-12" stroke="#8C6721" stroke-width="1.2" />
            <circle cx="-8" cy="-12" r="2" fill="#D99E30" />
            <line x1="0" y1="0" x2="8" y2="-12" stroke="#8C6721" stroke-width="1.2" />
            <circle cx="8" cy="-12" r="2" fill="#D99E30" />
            <line x1="0" y1="0" x2="0" y2="14" stroke="#8C6721" stroke-width="1.2" />
            <circle cx="0" cy="14" r="2" fill="#D99E30" />
          </g>
        `;
      } else if (type === 'carnations') {
        // Pink Carnation ruffled bloom
        svgContent += `
          <!-- Carnation Ruffled Bloom -->
          <circle cx="0" cy="0" r="21" fill="url(#carnationGrad)" />
          <path d="M -16,-10 Q -10,-18 0,-16 Q 10,-18 16,-10 Q 22,0 16,10 Q 8,18 0,16 Q -8,18 -16,10 Q -22,0 -16,-10 Z" fill="#F49EAF" />
          <path d="M -11,-6 Q -7,-12 0,-10 Q 7,-12 11,-6 Q 14,0 11,6 Q 5,12 0,10 Q -5,12 -11,6 Q -14,0 -11,-6 Z" fill="#E86882" />
          <path d="M -6,-3 Q -3,-6 0,-5 Q 3,-6 6,-3 Q 7,0 6,3 Q 2,6 0,5 Q -2,6 -6,3 Q -7,0 -6,-3 Z" fill="#BA314E" />
        `;
      } else if (type === 'orchids') {
        // Exotic Phalaenopsis Orchid
        svgContent += `
          <!-- Royal Orchid -->
          <g transform="scale(1.15)">
            <!-- Top Sepal -->
            <ellipse cx="0" cy="-16" rx="9" ry="14" fill="url(#orchidGrad)" />
            <!-- Lateral Sepals -->
            <ellipse cx="-16" cy="10" rx="10" ry="14" transform="rotate(-30, -16, 10)" fill="url(#orchidGrad)" />
            <ellipse cx="16" cy="10" rx="10" ry="14" transform="rotate(30, 16, 10)" fill="url(#orchidGrad)" />
            <!-- Broad Petals -->
            <ellipse cx="-16" cy="-6" rx="15" ry="12" fill="#B35AB0" opacity="0.95" />
            <ellipse cx="16" cy="-6" rx="15" ry="12" fill="#B35AB0" opacity="0.95" />
            <!-- Center Lip with Gold & Magenta Dots -->
            <path d="M -7,4 C -10,14 0,20 0,20 C 0,20 10,14 7,4 C 4,1 0,0 -7,4 Z" fill="#5E165C" />
            <circle cx="0" cy="4" r="3" fill="#FDE875" />
            <circle cx="-2" cy="8" r="1.2" fill="#FDE875" />
            <circle cx="2" cy="8" r="1.2" fill="#FDE875" />
          </g>
        `;
      } else if (type === 'sunflowers') {
        // Golden Sunflower
        svgContent += `
          <!-- Golden Sunflower -->
          <g transform="scale(1.05)">
            <!-- Ray Petals Ring -->
            <g fill="url(#sunflowerGrad)">
              <ellipse cx="0" cy="-22" rx="5" ry="11" />
              <ellipse cx="16" cy="-16" rx="5" ry="11" transform="rotate(45, 16, -16)" />
              <ellipse cx="22" cy="0" rx="5" ry="11" transform="rotate(90, 22, 0)" />
              <ellipse cx="16" cy="16" rx="5" ry="11" transform="rotate(135, 16, 16)" />
              <ellipse cx="0" cy="22" rx="5" ry="11" transform="rotate(180, 0, 22)" />
              <ellipse cx="-16" cy="16" rx="5" ry="11" transform="rotate(225, -16, 16)" />
              <ellipse cx="-22" cy="0" rx="5" ry="11" transform="rotate(270, -22, 0)" />
              <ellipse cx="-16" cy="-16" rx="5" ry="11" transform="rotate(315, -16, -16)" />
              <!-- Inner Petal Layer -->
              <ellipse cx="8" cy="-19" rx="4" ry="9" transform="rotate(22.5, 8, -19)" opacity="0.95" />
              <ellipse cx="19" cy="-8" rx="4" ry="9" transform="rotate(67.5, 19, -8)" opacity="0.95" />
              <ellipse cx="19" cy="8" rx="4" ry="9" transform="rotate(112.5, 19, 8)" opacity="0.95" />
              <ellipse cx="8" cy="19" rx="4" ry="9" transform="rotate(157.5, 8, 19)" opacity="0.95" />
              <ellipse cx="-8" cy="19" rx="4" ry="9" transform="rotate(202.5, -8, 19)" opacity="0.95" />
              <ellipse cx="-19" cy="8" rx="4" ry="9" transform="rotate(247.5, -19, 8)" opacity="0.95" />
              <ellipse cx="-19" cy="-8" rx="4" ry="9" transform="rotate(292.5, -19, -8)" opacity="0.95" />
              <ellipse cx="-8" cy="-19" rx="4" ry="9" transform="rotate(337.5, -8, -19)" opacity="0.95" />
            </g>
            <!-- Textured Chocolate Center Seed Disk -->
            <circle cx="0" cy="0" r="14" fill="url(#sunflowerCore)" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#683D1B" stroke-width="1.5" stroke-dasharray="2,2" />
            <circle cx="0" cy="0" r="7" fill="none" stroke="#8E5428" stroke-width="1.2" stroke-dasharray="1.5,1.5" />
          </g>
        `;
      }

      svgContent += `</g>`;
    });

    svgContent += `</g>`;

    // 4. Forefront Wrapping / Presentation Layer
    svgContent += `<g id="bouquet-wrapping">`;

    if (wrappingKey === 'kraft') {
      // Rustic Kraft Paper Cone & Jute Bow
      svgContent += `
        <!-- Kraft Wrap Cone -->
        <polygon points="120,240 280,240 235,395 165,395" fill="url(#kraftGrad)" stroke="#9E7648" stroke-width="1" />
        <!-- Fold Over Flaps -->
        <polygon points="105,230 190,265 130,240" fill="#E0BC93" opacity="0.9" />
        <polygon points="295,230 210,265 270,240" fill="#BA8D59" opacity="0.95" />
        <!-- Jute Twine & Ribbon Bow -->
        <line x1="150" y1="285" x2="250" y2="285" stroke="#7A562D" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="200" cy="285" r="5" fill="#7A562D" />
        <path d="M 200,285 C 180,270 170,295 200,287 Z" fill="#8A6335" />
        <path d="M 200,285 C 220,270 230,295 200,287 Z" fill="#8A6335" />
        <path d="M 200,285 C 190,310 185,325 180,335" stroke="#7A562D" stroke-width="2.5" fill="none" />
        <path d="M 200,285 C 210,310 215,325 220,335" stroke="#7A562D" stroke-width="2.5" fill="none" />
      `;
    } else if (wrappingKey === 'black') {
      // Luxury Matte Black Wrap with Gold Silk Bow
      svgContent += `
        <!-- Matte Black Heavyweight Wrap -->
        <polygon points="115,235 285,235 240,400 160,400" fill="url(#blackWrapGrad)" stroke="#110E10" stroke-width="1.5" />
        <!-- Architectural Angled Geometric Folds -->
        <polygon points="98,225 185,270 120,235" fill="#3D3739" />
        <polygon points="302,225 215,270 280,235" fill="#1A1718" />
        <!-- Gold Silk Satin Ribbon & Bow -->
        <line x1="145" y1="285" x2="255" y2="285" stroke="url(#goldRibbon)" stroke-width="6" stroke-linecap="round" />
        <circle cx="200" cy="285" r="7" fill="url(#goldRibbon)" />
        <path d="M 200,285 C 175,265 160,300 200,288 Z" fill="url(#goldRibbon)" />
        <path d="M 200,285 C 225,265 240,300 200,288 Z" fill="url(#goldRibbon)" />
        <path d="M 200,285 C 185,315 178,335 170,350" stroke="url(#goldRibbon)" stroke-width="3.5" fill="none" />
        <path d="M 200,285 C 215,315 222,335 230,350" stroke="url(#goldRibbon)" stroke-width="3.5" fill="none" />
      `;
    } else if (wrappingKey === 'vase') {
      // Crystal Glass Florist Cylinder Vase
      svgContent += `
        <!-- Water Level Submerged Inside Glass -->
        <rect x="140" y="270" width="120" height="120" rx="6" fill="#A8DCE6" opacity="0.45" />
        <ellipse cx="200" cy="270" rx="60" ry="10" fill="#93CFDC" opacity="0.6" />
        <!-- Submerged Stems Visibility -->
        <line x1="180" y1="270" x2="175" y2="380" stroke="#2D4F23" stroke-width="3.5" stroke-linecap="round" opacity="0.6" />
        <line x1="200" y1="270" x2="202" y2="385" stroke="#2D4F23" stroke-width="4" stroke-linecap="round" opacity="0.6" />
        <line x1="220" y1="270" x2="228" y2="380" stroke="#2D4F23" stroke-width="3.5" stroke-linecap="round" opacity="0.6" />
        <!-- Outer Glass Vase Walls & Specular Reflections -->
        <rect x="138" y="235" width="124" height="162" rx="10" fill="url(#glassVaseGrad)" stroke="#BCE3EB" stroke-width="2" opacity="0.85" />
        <ellipse cx="200" cy="236" rx="62" ry="12" fill="none" stroke="#DFF2F6" stroke-width="2.5" />
        <!-- Vertical Glare Stripe for 3D Shine -->
        <path d="M 150,250 L 150,385" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5" />
        <path d="M 158,255 L 158,375" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.4" />
      `;
    } else if (wrappingKey === 'basket') {
      // Woven Willow Basket with Moss Rim
      svgContent += `
        <!-- Lush Green Moss Bed Lining -->
        <ellipse cx="200" cy="255" rx="85" ry="24" fill="#58784B" />
        <ellipse cx="200" cy="253" rx="80" ry="20" fill="#759966" />
        <!-- Handwoven Willow Basket Body -->
        <path d="M 118,255 Q 200,265 282,255 L 260,385 Q 200,395 140,385 Z" fill="url(#basketGrad)" stroke="#684C27" stroke-width="1.5" />
        <!-- Woven Basket Weave Texture Lines -->
        <path d="M 125,285 Q 200,295 275,285" stroke="#5E4320" stroke-width="2" fill="none" />
        <path d="M 132,315 Q 200,325 268,315" stroke="#5E4320" stroke-width="2" fill="none" />
        <path d="M 137,345 Q 200,355 263,345" stroke="#5E4320" stroke-width="2" fill="none" />
        <path d="M 142,375 Q 200,385 258,375" stroke="#5E4320" stroke-width="2" fill="none" />
        <!-- Basket Crossweave Accent Verticals -->
        <line x1="160" y1="258" x2="160" y2="385" stroke="#5E4320" stroke-width="1.5" opacity="0.6" />
        <line x1="180" y1="262" x2="180" y2="388" stroke="#5E4320" stroke-width="1.5" opacity="0.6" />
        <line x1="200" y1="265" x2="200" y2="390" stroke="#5E4320" stroke-width="1.5" opacity="0.6" />
        <line x1="220" y1="262" x2="220" y2="388" stroke="#5E4320" stroke-width="1.5" opacity="0.6" />
        <line x1="240" y1="258" x2="240" y2="385" stroke="#5E4320" stroke-width="1.5" opacity="0.6" />
        <!-- Braided Wicker Rim -->
        <ellipse cx="200" cy="255" rx="84" ry="12" fill="none" stroke="#D1B894" stroke-width="4.5" />
      `;
    }

    svgContent += `</g>`;

    if (el.bouquetSvg) {
      el.bouquetSvg.innerHTML = svgContent;
    }
  }

  // --- 7. DYNAMIC PRICE & FULLNESS CALCULATIONS ---

  function getTotalStemsCount() {
    return Object.values(state.builder.stems).reduce((acc, qty) => acc + qty, 0);
  }

  function calculateBuilderPrice() {
    let stemsTotal = 0;
    Object.keys(state.builder.stems).forEach(key => {
      stemsTotal += state.builder.stems[key] * FLOWERS[key].price;
    });

    const wrappingCost = WRAPPINGS[state.builder.wrapping].price;
    return stemsTotal + wrappingCost;
  }

  function updateFullnessAndSummary() {
    const total = getTotalStemsCount();
    if (el.totalStemsCount) el.totalStemsCount.textContent = total;

    // Fullness Tier definition
    let tier = 'Delicate Accent';
    let pct = 25;
    if (total === 0) {
      tier = 'Empty Bouquet';
      pct = 5;
    } else if (total <= 6) {
      tier = 'Delicate Bloom (1-6 stems)';
      pct = Math.min(35, (total / 6) * 35);
    } else if (total <= 12) {
      tier = 'Classic Bouquet (7-12 stems)';
      pct = 35 + ((total - 6) / 6) * 35;
    } else if (total <= 18) {
      tier = 'Lush Grandeur (13-18 stems)';
      pct = 70 + ((total - 12) / 6) * 20;
    } else {
      tier = 'Opulent Masterpiece (19+ stems)';
      pct = 100;
    }

    if (el.fullnessTier) el.fullnessTier.textContent = tier;
    if (el.fullnessFill) el.fullnessFill.style.width = `${pct}%`;

    // Render summary stem chips in preview
    if (el.stemsSummaryChips) {
      let chipsHtml = '';
      Object.keys(state.builder.stems).forEach(key => {
        const count = state.builder.stems[key];
        if (count > 0) {
          chipsHtml += `
            <span class="stem-chip">
              <span class="stem-chip-dot" style="background-color: ${FLOWERS[key].primaryColor}"></span>
              ${count}× ${FLOWERS[key].name}
            </span>
          `;
        }
      });
      // Add wrap chip
      chipsHtml += `
        <span class="stem-chip stem-chip-wrap">
          🎁 ${WRAPPINGS[state.builder.wrapping].name}
        </span>
      `;
      el.stemsSummaryChips.innerHTML = chipsHtml;
    }

    // Update Price with subtle pulse
    const price = calculateBuilderPrice();
    if (el.builderPriceDisplay) {
      el.builderPriceDisplay.textContent = `$${price.toFixed(2)}`;
      el.builderPriceDisplay.classList.remove('pulse');
      void el.builderPriceDisplay.offsetWidth; // trigger reflow
      el.builderPriceDisplay.classList.add('pulse');
    }

    // Disable Add to Cart button if empty
    if (el.addCartBuilderBtn) {
      el.addCartBuilderBtn.disabled = total === 0;
      el.addCartBuilderBtn.style.opacity = total === 0 ? '0.6' : '1';
    }
  }

  // --- 8. STEPPERS & WRAPPING UI RENDERING ---

  function renderFlowersSelector() {
    if (!el.flowersGrid) return;

    let html = '';
    Object.keys(FLOWERS).forEach(key => {
      const flower = FLOWERS[key];
      const count = state.builder.stems[key] || 0;
      const subtotal = (count * flower.price).toFixed(2);

      html += `
        <div class="flower-card ${count > 0 ? 'has-stems' : ''}" id="flower-card-${key}">
          <div class="flower-header">
            <div class="flower-thumbnail">
              <svg viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="14" fill="${flower.primaryColor}" />
                <circle cx="20" cy="20" r="8" fill="${flower.secondaryColor || '#fff'}" opacity="0.8" />
              </svg>
            </div>
            <div class="flower-info">
              <h4 class="flower-name">${flower.name}</h4>
              <span class="flower-meaning">${flower.meaning}</span>
              <div class="flower-price">$${flower.price.toFixed(2)} <span style="font-size:0.75rem; font-weight:400; color:var(--color-charcoal-muted)">/ stem</span></div>
            </div>
          </div>
          <div class="flower-counter-row">
            <span class="stem-subtotal">Subtotal: <strong>$${subtotal}</strong></span>
            <div class="stepper-control" role="group" aria-label="Quantity for ${flower.name}">
              <button type="button" class="stepper-btn" data-action="dec" data-flower="${key}" aria-label="Decrease ${flower.name}" ${count === 0 ? 'disabled' : ''}>−</button>
              <span class="stepper-val" id="val-${key}">${count}</span>
              <button type="button" class="stepper-btn" data-action="inc" data-flower="${key}" aria-label="Increase ${flower.name}">+</button>
            </div>
          </div>
        </div>
      `;
    });

    el.flowersGrid.innerHTML = html;

    // Attach event listeners to stepper buttons
    el.flowersGrid.querySelectorAll('.stepper-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const action = btn.getAttribute('data-action');
        const flower = btn.getAttribute('data-flower');
        if (action === 'inc') {
          state.builder.stems[flower] = (state.builder.stems[flower] || 0) + 1;
        } else if (action === 'dec') {
          if (state.builder.stems[flower] > 0) {
            state.builder.stems[flower] -= 1;
          }
        }
        updateFlowerCardState(flower);
        updateFullnessAndSummary();
        renderBouquetSvg();
      });
    });
  }

  function updateFlowerCardState(key) {
    const count = state.builder.stems[key];
    const card = document.getElementById(`flower-card-${key}`);
    const valElem = document.getElementById(`val-${key}`);
    const decBtn = card?.querySelector('[data-action="dec"]');
    const subtotalElem = card?.querySelector('.stem-subtotal strong');

    if (valElem) valElem.textContent = count;
    if (subtotalElem) subtotalElem.textContent = `$${(count * FLOWERS[key].price).toFixed(2)}`;

    if (card) {
      if (count > 0) {
        card.classList.add('has-stems');
      } else {
        card.classList.remove('has-stems');
      }
    }
    if (decBtn) {
      decBtn.disabled = count === 0;
    }
  }

  function renderWrappingOptions() {
    if (!el.wrappingGrid) return;

    let html = '';
    Object.keys(WRAPPINGS).forEach(key => {
      const wrap = WRAPPINGS[key];
      const isSelected = state.builder.wrapping === key;

      html += `
        <div class="wrap-option-card ${isSelected ? 'selected' : ''}" data-wrap="${key}" role="button" tabindex="0" aria-pressed="${isSelected}">
          <div class="wrap-visual-box">
            ${getWrapIconSvg(key)}
          </div>
          <div class="wrap-info">
            <h4>${wrap.name}</h4>
            <p>${wrap.desc}</p>
          </div>
          <div class="wrap-price">+ $${wrap.price.toFixed(2)}</div>
        </div>
      `;
    });

    el.wrappingGrid.innerHTML = html;

    el.wrappingGrid.querySelectorAll('.wrap-option-card').forEach(card => {
      const selectWrap = () => {
        const wrapKey = card.getAttribute('data-wrap');
        state.builder.wrapping = wrapKey;

        el.wrappingGrid.querySelectorAll('.wrap-option-card').forEach(c => {
          c.classList.remove('selected');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('selected');
        card.setAttribute('aria-pressed', 'true');

        updateFullnessAndSummary();
        renderBouquetSvg();
      };

      card.addEventListener('click', selectWrap);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectWrap();
        }
      });
    });
  }

  function getWrapIconSvg(key) {
    if (key === 'kraft') {
      return `
        <svg viewBox="0 0 80 60" width="80" height="60">
          <polygon points="20,10 60,10 48,55 32,55" fill="#D4B38C" stroke="#9E7648" stroke-width="1.5" />
          <line x1="30" y1="28" x2="50" y2="28" stroke="#7A562D" stroke-width="2.5" />
          <circle cx="40" cy="28" r="3" fill="#7A562D" />
        </svg>
      `;
    } else if (key === 'black') {
      return `
        <svg viewBox="0 0 80 60" width="80" height="60">
          <polygon points="18,10 62,10 50,55 30,55" fill="#242022" stroke="#110E10" stroke-width="1.5" />
          <line x1="28" y1="28" x2="52" y2="28" stroke="#C2934D" stroke-width="3" />
          <circle cx="40" cy="28" r="3.5" fill="#C2934D" />
        </svg>
      `;
    } else if (key === 'vase') {
      return `
        <svg viewBox="0 0 80 60" width="80" height="60">
          <rect x="26" y="10" width="28" height="44" rx="4" fill="rgba(168,210,217,0.4)" stroke="#74A7B1" stroke-width="1.5" />
          <line x1="26" y1="22" x2="54" y2="22" stroke="#74A7B1" stroke-width="1" stroke-dasharray="2,2" />
          <line x1="32" y1="14" x2="32" y2="48" stroke="#ffffff" stroke-width="2" opacity="0.6" stroke-linecap="round" />
        </svg>
      `;
    } else if (key === 'basket') {
      return `
        <svg viewBox="0 0 80 60" width="80" height="60">
          <path d="M 22,22 Q 40,25 58,22 L 52,52 Q 40,55 28,52 Z" fill="#BC9065" stroke="#684C27" stroke-width="1.5" />
          <ellipse cx="40" cy="22" rx="18" ry="4" fill="#759966" />
          <path d="M 24,32 Q 40,36 56,32" stroke="#5E4320" stroke-width="1.5" fill="none" />
          <path d="M 26,42 Q 40,46 54,42" stroke="#5E4320" stroke-width="1.5" fill="none" />
        </svg>
      `;
    }
    return '';
  }

  // --- 9. GREETING CARD COMPOSER LOGIC ---

  function initCardComposer() {
    // Occasion presets pill clicks
    if (el.occasionPills) {
      el.occasionPills.querySelectorAll('.occasion-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const occ = pill.getAttribute('data-occasion');
          state.builder.card.occasion = occ;

          el.occasionPills.querySelectorAll('.occasion-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');

          // Preload template quote if preset exists
          if (OCCASION_PRESETS[occ]) {
            state.builder.card.message = OCCASION_PRESETS[occ].message;
            if (el.cardMessageInput) el.cardMessageInput.value = state.builder.card.message;
          }

          updateCardPreview();
          renderQuickQuotes(occ);
        });
      });
    }

    // Input handlers
    if (el.cardRecipientInput) {
      el.cardRecipientInput.value = state.builder.card.recipient;
      el.cardRecipientInput.addEventListener('input', e => {
        state.builder.card.recipient = e.target.value;
        updateCardPreview();
      });
    }

    if (el.cardMessageInput) {
      el.cardMessageInput.value = state.builder.card.message;
      el.cardMessageInput.addEventListener('input', e => {
        state.builder.card.message = e.target.value;
        updateCardPreview();
      });
    }

    if (el.cardSenderInput) {
      el.cardSenderInput.value = state.builder.card.sender;
      el.cardSenderInput.addEventListener('input', e => {
        state.builder.card.sender = e.target.value;
        updateCardPreview();
      });
    }

    renderQuickQuotes(state.builder.card.occasion);
    updateCardPreview();
  }

  function renderQuickQuotes(occasion) {
    if (!el.quickQuotesBox) return;
    const quotes = QUICK_QUOTES[occasion] || QUICK_QUOTES.birthday;

    let html = '';
    quotes.forEach(quote => {
      html += `
        <button type="button" class="template-btn" title="${quote}">
          "${quote}"
        </button>
      `;
    });

    el.quickQuotesBox.innerHTML = html;

    el.quickQuotesBox.querySelectorAll('.template-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('title');
        state.builder.card.message = text;
        if (el.cardMessageInput) el.cardMessageInput.value = text;
        updateCardPreview();
        showToast('Template message applied to card');
      });
    });
  }

  function updateCardPreview() {
    const card = state.builder.card;
    const occConfig = OCCASION_PRESETS[card.occasion];

    if (el.previewOccasion) {
      el.previewOccasion.textContent = occConfig ? occConfig.title : 'Warmest Wishes';
    }
    if (el.previewRecipient) {
      el.previewRecipient.textContent = card.recipient ? `To ${card.recipient},` : 'To Someone Special,';
    }
    if (el.previewMessage) {
      el.previewMessage.textContent = card.message || 'May your days bloom with beauty, joy, and peace.';
    }
    if (el.previewSender) {
      el.previewSender.textContent = card.sender || 'Warm regards';
    }
    if (el.cardCharCounter && el.cardMessageInput) {
      el.cardCharCounter.textContent = `${el.cardMessageInput.value.length} / 250`;
    }
  }

  // --- 10. OCCASION PRESETS FAST-START ---

  function initOccasionPresets() {
    if (!el.presetsGrid) return;

    el.presetsGrid.querySelectorAll('.preset-card').forEach(card => {
      card.addEventListener('click', () => {
        const occKey = card.getAttribute('data-preset');
        applyPreset(occKey);

        el.presetsGrid.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Scroll gracefully to builder
        const builderSection = document.getElementById('bouquet-builder');
        if (builderSection) {
          builderSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  function applyPreset(occKey) {
    const preset = OCCASION_PRESETS[occKey];
    if (!preset) return;

    // Apply stems
    Object.keys(preset.flowers).forEach(fKey => {
      state.builder.stems[fKey] = preset.flowers[fKey];
      updateFlowerCardState(fKey);
    });

    // Apply wrap
    state.builder.wrapping = preset.wrapping;
    if (el.wrappingGrid) {
      el.wrappingGrid.querySelectorAll('.wrap-option-card').forEach(c => {
        const isMatch = c.getAttribute('data-wrap') === preset.wrapping;
        c.classList.toggle('selected', isMatch);
        c.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
      });
    }

    // Apply Card
    state.builder.card.occasion = occKey;
    state.builder.card.message = preset.message;
    state.builder.card.recipient = preset.recipient || 'Dear One';

    if (el.occasionPills) {
      el.occasionPills.querySelectorAll('.occasion-pill').forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-occasion') === occKey);
      });
    }
    if (el.cardMessageInput) el.cardMessageInput.value = preset.message;
    if (el.cardRecipientInput) el.cardRecipientInput.value = preset.recipient || 'Dear One';

    updateCardPreview();
    renderQuickQuotes(occKey);
    updateFullnessAndSummary();
    renderBouquetSvg();

    showToast(`Loaded "${preset.name}" preset`);
  }

  // --- 11. DELIVERY SCHEDULING INTERACTIONS ---

  function initDeliverySection() {
    // Set min date to today
    if (el.deliveryDateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      el.deliveryDateInput.min = `${yyyy}-${mm}-${dd}`;
      el.deliveryDateInput.value = `${yyyy}-${mm}-${dd}`;
      state.delivery.date = el.deliveryDateInput.value;

      el.deliveryDateInput.addEventListener('change', e => {
        state.delivery.date = e.target.value;
      });
    }

    // Method selection (Courier vs Pickup)
    el.deliveryMethodPills.forEach(pill => {
      pill.addEventListener('click', () => {
        el.deliveryMethodPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.delivery.method = pill.getAttribute('data-method');
        updateCartTotals();
      });
    });

    // Time Slot selection
    el.timeSlotPills.forEach(pill => {
      pill.addEventListener('click', () => {
        el.timeSlotPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.delivery.slot = pill.getAttribute('data-slot');
      });
    });

    // Recipient inputs
    if (el.recipientNameInput) {
      el.recipientNameInput.value = state.delivery.recipientName;
      el.recipientNameInput.addEventListener('input', e => {
        state.delivery.recipientName = e.target.value;
      });
    }
    if (el.recipientPhoneInput) {
      el.recipientPhoneInput.value = state.delivery.phone;
      el.recipientPhoneInput.addEventListener('input', e => {
        state.delivery.phone = e.target.value;
      });
    }
    if (el.recipientAddressInput) {
      el.recipientAddressInput.value = state.delivery.address;
      el.recipientAddressInput.addEventListener('input', e => {
        state.delivery.address = e.target.value;
      });
    }
    if (el.recipientInstructionsInput) {
      el.recipientInstructionsInput.value = state.delivery.instructions;
      el.recipientInstructionsInput.addEventListener('input', e => {
        state.delivery.instructions = e.target.value;
      });
    }

    // Save Delivery Details Button
    if (el.saveDeliveryBtn) {
      el.saveDeliveryBtn.addEventListener('click', e => {
        e.preventDefault();
        if (!state.delivery.recipientName.trim()) {
          showToast('Please enter the recipient full name', true);
          el.recipientNameInput?.focus();
          return;
        }
        if (state.delivery.method === 'delivery' && !state.delivery.address.trim()) {
          showToast('Please enter a delivery address', true);
          el.recipientAddressInput?.focus();
          return;
        }
        showToast('Delivery preferences saved successfully! 🌿');
      });
    }
  }

  // --- 12. CART MANAGEMENT & SLIDE-OVER DRAWER ---

  function initCart() {
    // Open Cart Drawer
    if (el.cartBtn) {
      el.cartBtn.addEventListener('click', () => {
        openCartDrawer();
      });
    }

    // Close Cart Drawer
    if (el.cartCloseBtn) {
      el.cartCloseBtn.addEventListener('click', () => {
        closeCartDrawer();
      });
    }

    if (el.cartDrawerBackdrop) {
      el.cartDrawerBackdrop.addEventListener('click', e => {
        if (e.target === el.cartDrawerBackdrop) {
          closeCartDrawer();
        }
      });
    }

    // Add Bouquet from Builder to Cart
    if (el.addCartBuilderBtn) {
      el.addCartBuilderBtn.addEventListener('click', () => {
        addCurrentBouquetToCart();
      });
    }

    // Reset Builder
    if (el.resetBuilderBtn) {
      el.resetBuilderBtn.addEventListener('click', () => {
        Object.keys(state.builder.stems).forEach(k => {
          state.builder.stems[k] = 0;
          updateFlowerCardState(k);
        });
        updateFullnessAndSummary();
        renderBouquetSvg();
        showToast('Bouquet stem counts reset');
      });
    }

    // Promo Code Application
    if (el.promoApplyBtn && el.promoInput) {
      el.promoApplyBtn.addEventListener('click', () => {
        const code = el.promoInput.value.trim().toUpperCase();
        if (code === 'BLOOM10') {
          state.discountCode = 'BLOOM10';
          showToast('Coupon "BLOOM10" applied: 10% off entire order! 🌸');
        } else if (code === 'FREESHIP') {
          state.discountCode = 'FREESHIP';
          showToast('Coupon "FREESHIP" applied: Free doorstep delivery! 🚚');
        } else if (code === '') {
          showToast('Please enter a promo code', true);
        } else {
          showToast(`Invalid promo code "${code}". Try BLOOM10`, true);
        }
        updateCartTotals();
      });
    }

    // Drawer Proceed to Checkout
    if (el.checkoutDrawerBtn) {
      el.checkoutDrawerBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
          showToast('Your cart is empty. Please customize a bouquet first!', true);
          return;
        }
        closeCartDrawer();
        openCheckoutModal();
      });
    }

    // Checkout Modal buttons
    if (el.checkoutCloseBtn) {
      el.checkoutCloseBtn.addEventListener('click', () => {
        closeCheckoutModal();
      });
    }
    if (el.checkoutModal) {
      el.checkoutModal.addEventListener('click', e => {
        if (e.target === el.checkoutModal) closeCheckoutModal();
      });
    }

    if (el.placeOrderBtn) {
      el.placeOrderBtn.addEventListener('click', () => {
        completeSimulatedOrder();
      });
    }

    // Confirmation Modal buttons
    if (el.confirmationCloseBtn) {
      el.confirmationCloseBtn.addEventListener('click', () => {
        closeConfirmationModal();
      });
    }
    if (el.confirmationModal) {
      el.confirmationModal.addEventListener('click', e => {
        if (e.target === el.confirmationModal) closeConfirmationModal();
      });
    }
    if (el.confirmationNewBouquetBtn) {
      el.confirmationNewBouquetBtn.addEventListener('click', () => {
        closeConfirmationModal();
        const builderSection = document.getElementById('bouquet-builder');
        if (builderSection) builderSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Escape key to dismiss modals & drawer
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeCheckoutModal();
        closeConfirmationModal();
      }
    });

    renderCartItems();
    updateCartTotals();
  }

  function openCartDrawer() {
    if (el.cartDrawerBackdrop) {
      el.cartDrawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (el.cartDrawerBackdrop) {
      el.cartDrawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function openCheckoutModal() {
    if (!el.checkoutModal) return;
    renderCheckoutSummary();
    el.checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    if (!el.checkoutModal) return;
    el.checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openConfirmationModal() {
    if (!el.confirmationModal) return;
    el.confirmationModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    triggerCelebrationConfetti();
  }

  function closeConfirmationModal() {
    if (!el.confirmationModal) return;
    el.confirmationModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function addCurrentBouquetToCart() {
    const totalStems = getTotalStemsCount();
    if (totalStems === 0) {
      showToast('Please add at least one flower stem to your bouquet!', true);
      return;
    }

    const price = calculateBuilderPrice();
    const itemStems = { ...state.builder.stems };
    const wrapKey = state.builder.wrapping;
    const cardData = { ...state.builder.card };

    // Format item title based on flowers
    const occConfig = OCCASION_PRESETS[cardData.occasion];
    const bouquetTitle = occConfig ? `Custom ${occConfig.name} Bouquet` : 'Artisan Custom Bouquet';

    const cartItem = {
      id: 'item_' + Date.now(),
      title: bouquetTitle,
      stems: itemStems,
      wrapping: wrapKey,
      card: cardData,
      unitPrice: price,
      quantity: 1
    };

    state.cart.push(cartItem);
    renderCartItems();
    updateCartTotals();
    showToast(`Added "${bouquetTitle}" to your cart! 💐`);
    openCartDrawer();
  }

  function renderCartItems() {
    if (!el.cartItemsList || !el.cartEmptyState) return;

    // Update cart count badge
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    el.cartCountBadges.forEach(b => (b.textContent = totalItems));

    if (state.cart.length === 0) {
      el.cartEmptyState.style.display = 'flex';
      el.cartItemsList.innerHTML = '';
      if (el.checkoutDrawerBtn) el.checkoutDrawerBtn.disabled = true;
      return;
    }

    el.cartEmptyState.style.display = 'none';
    if (el.checkoutDrawerBtn) el.checkoutDrawerBtn.disabled = false;

    let html = '';
    state.cart.forEach((item, index) => {
      // Build stems breakdown
      const stemsBreakdown = Object.keys(item.stems)
        .filter(k => item.stems[k] > 0)
        .map(k => `${item.stems[k]}× ${FLOWERS[k].name}`)
        .join(', ');

      const wrapName = WRAPPINGS[item.wrapping]?.name || 'Standard Wrap';
      const itemTotal = (item.unitPrice * item.quantity).toFixed(2);

      html += `
        <div class="cart-item-card" data-index="${index}">
          <div class="cart-item-header">
            <h4 class="cart-item-name">${item.title}</h4>
            <button type="button" class="cart-item-remove-btn" data-remove="${item.id}" aria-label="Remove item">
              ✕ Remove
            </button>
          </div>
          <div class="cart-item-details-list">
            <div><strong>Flowers:</strong> ${stemsBreakdown}</div>
            <div><strong>Wrapping:</strong> ${wrapName}</div>
            <div><strong>Recipient:</strong> ${item.card.recipient || 'Special Someone'}</div>
          </div>
          ${
            item.card.message
              ? `<div class="cart-item-card-snippet">"${item.card.message}"</div>`
              : ''
          }
          <div class="cart-item-footer">
            <span class="cart-item-price">$${itemTotal}</span>
            <div class="stepper-control" role="group" aria-label="Item quantity">
              <button type="button" class="stepper-btn" data-cart-qty="dec" data-id="${item.id}">−</button>
              <span class="stepper-val">${item.quantity}</span>
              <button type="button" class="stepper-btn" data-cart-qty="inc" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      `;
    });

    el.cartItemsList.innerHTML = html;

    // Attach event listeners
    el.cartItemsList.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove');
        state.cart = state.cart.filter(item => item.id !== id);
        renderCartItems();
        updateCartTotals();
        showToast('Bouquet removed from cart');
      });
    });

    el.cartItemsList.querySelectorAll('[data-cart-qty]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-cart-qty');
        const id = btn.getAttribute('data-id');
        const item = state.cart.find(it => it.id === id);
        if (item) {
          if (action === 'inc') {
            item.quantity += 1;
          } else if (action === 'dec') {
            item.quantity -= 1;
            if (item.quantity <= 0) {
              state.cart = state.cart.filter(it => it.id !== id);
            }
          }
          renderCartItems();
          updateCartTotals();
        }
      });
    });
  }

  function updateCartTotals() {
    let subtotal = 0;
    state.cart.forEach(item => {
      subtotal += item.unitPrice * item.quantity;
    });

    // Discount calculations
    let discount = 0;
    if (state.discountCode === 'BLOOM10') {
      discount = subtotal * 0.10;
    }

    // Delivery fee ($8.99 for delivery, or free over $65 or pickup or FREESHIP)
    let deliveryFee = 0;
    if (state.delivery.method === 'delivery') {
      if (subtotal >= 65 || state.discountCode === 'FREESHIP') {
        deliveryFee = 0;
      } else {
        deliveryFee = subtotal > 0 ? 8.99 : 0;
      }
    } else {
      deliveryFee = 0;
    }

    const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

    if (el.cartSubtotal) el.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

    if (el.cartDiscountRow && el.cartDiscountVal) {
      if (discount > 0) {
        el.cartDiscountRow.style.display = 'flex';
        el.cartDiscountVal.textContent = `-$${discount.toFixed(2)} (${state.discountCode})`;
      } else {
        el.cartDiscountRow.style.display = 'none';
      }
    }

    if (el.cartDeliveryFee) {
      if (deliveryFee === 0) {
        el.cartDeliveryFee.innerHTML = '<span style="color:#2e7d32; font-weight:700">FREE</span>';
      } else {
        el.cartDeliveryFee.textContent = `$${deliveryFee.toFixed(2)}`;
      }
    }

    if (el.cartGrandTotal) {
      el.cartGrandTotal.textContent = `$${grandTotal.toFixed(2)}`;
    }

    return { subtotal, discount, deliveryFee, grandTotal };
  }

  // --- 13. CHECKOUT & ORDER CONFIRMATION WORKFLOW ---

  function renderCheckoutSummary() {
    if (!el.checkoutSummaryDetails) return;
    const totals = updateCartTotals();

    let itemsHtml = '';
    state.cart.forEach(item => {
      const stemsBreakdown = Object.keys(item.stems)
        .filter(k => item.stems[k] > 0)
        .map(k => `${item.stems[k]}× ${FLOWERS[k].name}`)
        .join(', ');

      itemsHtml += `
        <div style="padding: 10px 0; border-bottom: 1px dashed var(--color-border);">
          <div style="display:flex; justify-content:space-between; font-weight:600; color:var(--color-burgundy);">
            <span>${item.quantity}× ${item.title}</span>
            <span>$${(item.unitPrice * item.quantity).toFixed(2)}</span>
          </div>
          <div style="font-size:0.8rem; color:var(--color-charcoal-muted); margin-top:2px;">
            ${stemsBreakdown} • ${WRAPPINGS[item.wrapping]?.name}
          </div>
          <div style="font-size:0.78rem; font-style:italic; color:#6B2E3C; margin-top:4px;">
            Card to ${item.card.recipient}: "${item.card.message}"
          </div>
        </div>
      `;
    });

    const deliveryMethodLabel =
      state.delivery.method === 'delivery'
        ? `Doorstep Courier Delivery ($${totals.deliveryFee === 0 ? 'FREE' : totals.deliveryFee.toFixed(2)})`
        : 'Florist Atelier Pickup (FREE)';

    const slotLabel =
      state.delivery.slot === 'morning'
        ? 'Morning (9:00 AM - 12:00 PM)'
        : state.delivery.slot === 'afternoon'
        ? 'Afternoon (12:00 PM - 4:00 PM)'
        : 'Twilight (4:00 PM - 7:00 PM)';

    el.checkoutSummaryDetails.innerHTML = `
      <div style="margin-bottom: 18px;">
        <h4 style="font-family:var(--font-display); color:var(--color-burgundy); margin-bottom:10px;">Bouquet Selections (${state.cart.length})</h4>
        ${itemsHtml}
      </div>

      <div style="background:var(--color-cream-subtle); padding:16px; border-radius:var(--radius-sm); margin-bottom:18px;">
        <h5 style="font-weight:700; color:var(--color-burgundy); margin-bottom:8px;">Scheduled Delivery Info</h5>
        <div style="font-size:0.85rem; line-height:1.6; color:var(--color-charcoal);">
          <div><strong>Recipient:</strong> ${state.delivery.recipientName} (${state.delivery.phone})</div>
          <div><strong>Delivery Address:</strong> ${state.delivery.address}</div>
          <div><strong>Delivery Date & Window:</strong> ${state.delivery.date} • ${slotLabel}</div>
          <div><strong>Method:</strong> ${deliveryMethodLabel}</div>
          ${state.delivery.instructions ? `<div><strong>Instructions:</strong> "${state.delivery.instructions}"</div>` : ''}
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:6px; font-size:0.9rem;">
        <div style="display:flex; justify-content:space-between;">
          <span>Subtotal:</span>
          <strong>$${totals.subtotal.toFixed(2)}</strong>
        </div>
        ${
          totals.discount > 0
            ? `<div style="display:flex; justify-content:space-between; color:#2e7d32;">
                <span>Discount (${state.discountCode}):</span>
                <strong>-$${totals.discount.toFixed(2)}</strong>
              </div>`
            : ''
        }
        <div style="display:flex; justify-content:space-between;">
          <span>Delivery Fee:</span>
          <strong>${totals.deliveryFee === 0 ? 'FREE' : '$' + totals.deliveryFee.toFixed(2)}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-family:var(--font-display); font-size:1.35rem; font-weight:700; color:var(--color-burgundy); margin-top:8px; padding-top:8px; border-top:1px solid var(--color-border);">
          <span>Total Payable:</span>
          <span>$${totals.grandTotal.toFixed(2)}</span>
        </div>
      </div>
    `;
  }

  function completeSimulatedOrder() {
    const totals = updateCartTotals();
    const orderNumber = `VB-${Math.floor(10000 + Math.random() * 90000)}`;

    closeCheckoutModal();

    if (el.confirmationOrderNum) {
      el.confirmationOrderNum.textContent = `Order Reference: #${orderNumber}`;
    }

    if (el.confirmationReceiptDetails) {
      let receiptItems = '';
      state.cart.forEach(item => {
        receiptItems += `
          <div class="receipt-row">
            <span>${item.quantity}× ${item.title}</span>
            <span>$${(item.unitPrice * item.quantity).toFixed(2)}</span>
          </div>
        `;
      });

      el.confirmationReceiptDetails.innerHTML = `
        <div style="margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid #E8DFD5;">
          ${receiptItems}
        </div>
        <div class="receipt-row">
          <span>Delivery Date:</span>
          <strong>${state.delivery.date}</strong>
        </div>
        <div class="receipt-row">
          <span>Recipient:</span>
          <strong>${state.delivery.recipientName}</strong>
        </div>
        <div class="receipt-row">
          <span>Delivery Address:</span>
          <span>${state.delivery.address}</span>
        </div>
        <div class="receipt-row" style="margin-top:10px; padding-top:8px; border-top:1px solid #E8DFD5; font-size:1.05rem;">
          <strong>Total Paid (Simulated):</strong>
          <strong>$${totals.grandTotal.toFixed(2)}</strong>
        </div>
      `;
    }

    // Reset Cart
    state.cart = [];
    renderCartItems();
    updateCartTotals();

    openConfirmationModal();
    showToast('Order confirmed! Our florists are preparing your stems. 🌸');
  }

  // --- 14. TOAST NOTIFICATION SYSTEM ---

  function showToast(message, isError = false) {
    if (!el.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    if (isError) {
      toast.style.backgroundColor = '#8C2131';
    }
    toast.innerHTML = `
      <span>${isError ? '⚠️' : '🌿'}</span>
      <span>${message}</span>
    `;

    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3500);
  }

  // --- 15. THEME TOGGLE & PERSISTENCE SYSTEM ---

  const THEME_STORAGE_KEY = 'velvet_bloom_theme';

  function getSystemThemePreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getCurrentTheme() {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    } catch (e) {}
    return getSystemThemePreference();
  }

  function applyTheme(theme, isUserAction = false) {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.setAttribute('data-theme', theme);

    if (el.themeToggleBtn) {
      el.themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      const actionText = isDark ? 'Switch to light theme' : 'Switch to dark theme';
      el.themeToggleBtn.setAttribute('aria-label', actionText);
      el.themeToggleBtn.setAttribute('title', actionText);
    }

    if (isUserAction) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (err) {
        console.warn('Unable to persist theme to localStorage', err);
      }
      showToast(isDark ? 'Switched to Midnight Noir mode 🌙' : 'Switched to Sunlight Atelier mode ☀️');
    }
  }

  function initTheme() {
    const initialTheme = getCurrentTheme();
    applyTheme(initialTheme, false);

    if (el.themeToggleBtn) {
      el.themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = current === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
      });
    }

    // Listen for device system preference changes if user hasn't explicitly set a preference
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        try {
          const saved = localStorage.getItem(THEME_STORAGE_KEY);
          // Only react to system preference if user hasn't manually overridden it
          if (!saved) {
            applyTheme(e.matches ? 'dark' : 'light', false);
          }
        } catch (err) {}
      });
    }
  }

  // --- 16. INITIALIZATION ON DOM READY ---

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initPetalsCanvas();
    renderFlowersSelector();
    renderWrappingOptions();
    initCardComposer();
    initOccasionPresets();
    initDeliverySection();
    initCart();
    updateFullnessAndSummary();
    renderBouquetSvg();

    // Mobile nav toggle
    // Mobile nav toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('open');
      });
      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
          navMenu.classList.remove('open');
        }
      });
    }

    // Smooth scroll anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          if (navMenu) {
            navMenu.classList.remove('open');
          }
        }
      });
    });
  });

})();
