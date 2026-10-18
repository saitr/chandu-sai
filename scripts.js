// Engagement: Sunday, 15 November 2026 (IST)
const EVENT = new Date('2026-11-15T10:00:00+05:30');

/* ------------------------------------------------------------------
   WHO IS INVITING?
   Use:  ?invited_by=groom_parents
         ?invited_by=bride_parents
         ?invited_by=groom
         ?invited_by=bride
         ?invited_by=varsha
         ?invited_by=anu_swetha
         ?invited_by=ajay_reddy
------------------------------------------------------------------- */
const INVITERS = {
  default: {
    pill: 'With love from both families',
    heroLine: 'With the blessings of the Almighty and our elders, we joyfully invite you to the engagement of',
    sign: 'With love, both our families',
    theme: { bg:'#24150C', bg2:'#5A3820', glow:'#E8891C', p:'#4A2A14', ps:'#8A5A2B', a:'#C96F0A', g:'#F2B632', paper:'#FFF8EA', ink:'#2A1A10', pet:['#F2B632','#E8891C','#F6D88A'] }
  },

  groomparents: {
    pill: "From the Groom's Parents",
    heroLine: 'With the blessings of the Almighty and our elders, we joyfully invite you to the engagement of our son',
    sign: 'With love, Parents of the Groom',
    theme: { bg:'#1E0F26', bg2:'#5B2A6B', glow:'#F2B632', p:'#4A1F58', ps:'#7E4A92', a:'#C46A12', g:'#F2B632', paper:'#FFF8F2', ink:'#26152B', pet:['#F2B632','#E39AD0','#C46A12'] }
  },

  brideparents: {
    pill: "From the Bride's Parents",
    heroLine: 'With the blessings of the Almighty and our elders, we joyfully invite you to the engagement of our daughter',
    sign: 'With love, Parents of the Bride',
    theme: { bg:'#1A2A1A', bg2:'#3D5C3D', glow:'#E8C547', p:'#2E4A2E', ps:'#5A7A5A', a:'#C4A035', g:'#E8C547', paper:'#F8FFF8', ink:'#1A2A1A', pet:['#E8C547','#A8D5A2','#C4A035'] }
  },

  sai: {
    pill: 'From Sai',
    heroLine: "I'm getting engaged, and I would love for you to be there",
    sign: 'Warmly, Sai',
    theme: { bg:'#17181C', bg2:'#3A3D46', glow:'#C8793A', p:'#2B2D34', ps:'#5C606C', a:'#B8692E', g:'#E0B56A', paper:'#FAF6EF', ink:'#1C1D22', pet:['#E0B56A','#C8793A','#B9BCC6'] }
  },

  chandana: {
    pill: 'From Chandana',
    heroLine: "I'm so happy to share that I'm getting engaged",
    sign: 'With love, Chandana',
    theme: { bg:'#2B0F25', bg2:'#7A2A66', glow:'#F6B94A', p:'#8E2B6F', ps:'#B5539A', a:'#C23A82', g:'#F6B94A', paper:'#FFF7FB', ink:'#2B1224', pet:['#F6B94A','#F28DB9','#D6458F'] }
  },

  varsha: {
    pill: "From Varsha",
    heroLine: "Our Chandana is getting engaged, and we can't wait to celebrate with you",
    sign: 'With love, Varsha and family',
    theme: { bg:'#1C1433', bg2:'#5A3D99', glow:'#F0A8D8', p:'#54308A', ps:'#8666C4', a:'#9B3FC0', g:'#F0C46A', paper:'#FBF8FF', ink:'#231A38', pet:['#F0C46A','#C9A8F0','#F0A8D8'] }
  },

  anuswetha: {
    pill: "From Anu Swetha",
    heroLine: 'Our dear Sai is getting engaged, and you are invited to celebrate',
    sign: 'With love, Anu Swetha and family',
    theme: { bg:'#2A1A02', bg2:'#8A5A00', glow:'#FFC247', p:'#7A4A00', ps:'#B07A12', a:'#C9700A', g:'#FFC247', paper:'#FFF9E8', ink:'#2A1D05', pet:['#FFC247','#F08A24','#FFE08A'] }
  },

  ajayreddy: {
    pill: 'From Ajay Reddy',
    heroLine: 'Our Sai is getting engaged, and we would love for you to join us',
    sign: 'With warm regards, Ajay Reddy and family',
    theme: { bg:'#1A252F', bg2:'#2E4A5E', glow:'#5BA3D9', p:'#2A4055', ps:'#4A6A82', a:'#3A8BC2', g:'#E8C547', paper:'#F5FAFF', ink:'#15202A', pet:['#E8C547','#5BA3D9','#A8D4F0'] }
  },
  shivaprakashreddy: {
  pill: "From Shiva Prakash Reddy",
  heroLine: "With love and blessings, I invite you to the engagement of my nephew Sai",
  sign: "With love, Shiva Prakash Reddy",
  theme: {
    bg: '#0F1F1A',
    bg2: '#1E3A30',
    glow: '#C9A227',
    p: '#1A3329',
    ps: '#3D5C4E',
    a: '#B8941F',
    g: '#E8C547',
    paper: '#F7FBF8',
    ink: '#12201A',
    pet: ['#E8C547', '#7A9E8A', '#C9A227']
  }
}
};

function getInviter() {
  const q = new URLSearchParams(location.search);
  const raw = q.get('invited_by') || q.get('invitedby') || q.get('by') || q.get('from') || '';
  const key = raw.toLowerCase().replace(/[^a-z]/g, '');

  const aliases = {
    // parents
    groomparent: 'groomparents',
    groomsparents: 'groomparents',
    groomfamily: 'groomparents',
    brideparent: 'brideparents',
    bridesparents: 'brideparents',
    bridefamily: 'brideparents',

    // sisters
    varsha: 'varsha',
    varshaa: 'varsha',
    anu: 'anuswetha',
    anu_swetha: 'anuswetha',

    // brother-in-law
    ajay: 'ajayreddy',
    brotherinlaw: 'ajayreddy',

    // Mama
    shivaprakash: 'shivaprakashreddy',
    mama: 'shivaprakashreddy',
    shivaprakashreddy: 'shivaprakashreddy',
    prakashreddy: 'shivaprakashreddy',

    // groom / bride short names
    groom: 'sai',
    bride: 'chandana'
  };

  // If it matches a predefined person
  if (INVITERS[aliases[key] || key]) {
    return INVITERS[aliases[key] || key];
  }

  // ---------- DYNAMIC NAME SUPPORT ----------
  // If someone puts any other name, create a personalized version
  if (raw.trim()) {
    // Clean the name nicely (capitalize each word)
    const niceName = raw
      .replace(/[_+-]/g, ' ')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    return {
  pill: `From ${niceName}`,
  heroLine: `With love and warm wishes, ${niceName} invites you to the engagement of`,
  sign: `With love, ${niceName}`,
  theme: {
    bg: '#2A1518',
    bg2: '#5C2E35',
    glow: '#E8A0A8',
    p: '#4A2530',
    ps: '#8A4A5A',
    a: '#D46A7A',
    g: '#F0C8A0',
    paper: '#FFF8F6',
    ink: '#2A1518',
    pet: ['#F0C8A0', '#E8A0A8', '#F5D0C8']
  }
};
  }

  // Fallback
  return INVITERS.default;
}

const inv = getInviter();

/* Apply colour theme immediately (no flash) */
Object.entries(inv.theme).forEach(([k, v]) => {
  if (k !== 'pet') document.documentElement.style.setProperty('--' + k, v);
});

document.addEventListener('DOMContentLoaded', () => {
  // Wording
  const setText = (id, t) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t;
  };
  setText('invPill', inv.pill);
  setText('heroLine', inv.heroLine);
  setText('invSign', inv.sign);

  // Theme color for mobile browser bar
  const tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', inv.theme.bg);

  // Countdown
  const pad = n => String(n).padStart(2, '0');
  const cdLine = document.getElementById('cdLine');
  function tick() {
    const diff = EVENT - new Date();
    if (diff <= 0) {
      cdLine.textContent = 'Celebrating today';
      return;
    }
    const d = Math.floor(diff / 864e5);
    const h = Math.floor(diff / 36e5) % 24;
    const m = Math.floor(diff / 6e4) % 60;
    const s = Math.floor(diff / 1e3) % 60;
    cdLine.innerHTML = `<b>${pad(d)}</b> days <b>${pad(h)}</b> hrs <b>${pad(m)}</b> min <b>${pad(s)}</b> sec to go`;
  }
  tick();
  setInterval(tick, 1000);

  // Mandala
  function mandala() {
    let s = '<svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" stroke-width=".7">';
    s += '<circle r="97"/><circle r="92" stroke-dasharray="1.5 3"/><circle r="30"/><circle r="12"/>';
    [[16, 90, 62], [24, 70, 44], [12, 52, 30]].forEach(([n, outer, inner]) => {
      for (let i = 0; i < n; i++) {
        const a = (360 / n) * i, w = outer * 0.11, mid = (outer + inner) / 2;
        s += `<path transform="rotate(${a})" d="M0 -${outer} Q${w} -${mid} 0 -${inner} Q-${w} -${mid} 0 -${outer}Z"/>`;
      }
    });
    return s + '</svg>';
  }
  document.querySelectorAll('.mandala').forEach(el => (el.innerHTML = mandala()));

  // Falling petals
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const box = document.getElementById('petals');
    const colors = inv.theme.pet;
    for (let i = 0; i < 16; i++) {
      const p = document.createElement('span');
      const size = 8 + Math.random() * 10;
      p.className = 'petal';
      p.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;background:${colors[i % 3]};` +
        `animation-duration:${12 + Math.random() * 14}s;animation-delay:${-Math.random() * 20}s;--sway:${(Math.random() - .5) * 160}px`;
      box.appendChild(p);
    }
  }

  // Add to calendar
  document.getElementById('addCal').addEventListener('click', () => {
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT',
      'DTSTART;VALUE=DATE:20261115', 'DTEND;VALUE=DATE:20261116',
      'SUMMARY:Engagement of Sai & Chandana',
      'LOCATION:Hotel Durgada Siri\\, Maniyur\\, Chitradurga\\, Karnataka 577501',
      'DESCRIPTION:Join us for the engagement of Sai Thimma Reddy D and Chandana K B.',
      'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'sai-chandana-engagement.ics';
    a.click();
  });
});
