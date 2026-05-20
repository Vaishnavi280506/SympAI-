
document.addEventListener('DOMContentLoaded', () => {

  /* DOCTORS PROFILE DATA  */
  const doctorsData = [
    {
      name: "Dr. Sarah Johnson",
      firstname: "Sarah",
      specialty: "Cardiologist",
      location: "New York, NY",
      avail: "2:30 PM Today",
      experience: "10+",
      rating: "4.9★",
      ratingNum: "4.9",
      starsVisual: "★★★★★",
      patients: "2K+",
      response: "98%",
      imgText: "SJ",
      imgColor: "245f37",
      languages: ["English", "Spanish"],
      about: "Dr. Sarah Johnson is a board-certified cardiologist with over 10 years of experience treating cardiovascular diseases. She specializes in preventive cardiology and has helped thousands of patients maintain healthy hearts through personalized treatment plans.",
      specializations: ["Heart Surgery", "Cardiac Care", "Preventive Cardiology", "Interventional Cardiology"],
      certifications: ["Board Certified Cardiologist", "American Heart Association", "American College of Cardiology"],
      articles: [
        { title: "10 Heart-Healthy Foods You Should Eat Daily", time: "2 days ago", read: "5 min read", tag: "Nutrition", desc: "Discover the top foods that can help maintain cardiovascular health and reduce your risk of heart disease." }
      ],
      reviews: [
        { name: "John D.", text: "Dr. Johnson is exceptional. She took the time to explain my condition clearly and made me feel completely at ease.", time: "3 days ago", stars: "★★★★★", helpful: 12 }
      ]
    },
    {
      name: "Dr. Emily Rodriguez",
      firstname: "Emily",
      specialty: "Dermatologist",
      location: "Los Angeles, CA",
      avail: "9:00 AM Tomorrow",
      experience: "7+",
      rating: "4.8★",
      ratingNum: "4.8",
      starsVisual: "★★★★☆",
      patients: "1.5K+",
      response: "95%",
      imgText: "ER",
      imgColor: "1b472a",
      languages: ["English", "French"],
      about: "Dr. Emily Rodriguez is a highly respected expert in clinical and cosmetic dermatology. She specializes in advanced skincare methodologies, acne prevention, skin cancer detection, and laser therapies.",
      specializations: ["Cosmetic Dermatology", "Acne Solutions", "Skin Cancer Screenings", "Laser Surgery"],
      certifications: ["Board Certified Dermatologist", "American Academy of Dermatology"],
      articles: [
        { title: "The Ultimate Guide to Seasonal Skincare Routines", time: "4 days ago", read: "6 min read", tag: "Skincare", desc: "How changing weather impacts your skin layer moisture barrier and the simple fixes you need to deploy." }
      ],
      reviews: [
        { name: "Maria S.", text: "Very knowledgeable and genuinely caring doctor. She helped me understand my acne causes much better.", time: "1 week ago", stars: "★★★★★", helpful: 8 }
      ]
    },
    {
      name: "Dr. Michael Chen",
      firstname: "Michael",
      specialty: "Neurologist",
      location: "Chicago, IL",
      avail: "4:15 PM Today",
      experience: "12+",
      rating: "4.9★",
      ratingNum: "4.9",
      starsVisual: "★★★★★",
      patients: "3K+",
      response: "99%",
      imgText: "MC",
      imgColor: "018553",
      languages: ["English", "Mandarin"],
      about: "Dr. Michael Chen treats acute and chronic central nervous system disorders. His specialized research highlights treatment patterns for persistent structural migraines, sleep apnea pathways, and neuro-degenerative profiling.",
      specializations: ["Migraine & Headache Therapy", "Neuromuscular Disorders", "Sleep Medicine", "EEG & EMG Testing"],
      certifications: ["Board Certified in Neurology", "American Academy of Neurology Fellow", "American Board of Psychiatry and Neurology"],
      articles: [
        { title: "Understanding Migraine Triggers and Modern Remedies", time: "1 week ago", read: "9 min read", tag: "Neurology", desc: "A structural breakdown of chemical anomalies triggering neural pain loops, alongside emerging therapeutics." }
      ],
      reviews: [
        { name: "Robert K.", text: "Professional, thorough and kind. Dr. Chen went above and beyond to pinpoint the root source of my chronic headaches.", time: "2 weeks ago", stars: "★★★★★", helpful: 14 }
      ]
    },
    {
      name: "Dr. Robert Kim",
      firstname: "Robert",
      specialty: "Orthopedic Surgeon",
      location: "Houston, TX",
      avail: "11:00 AM Thursday",
      experience: "9+",
      rating: "4.7★",
      ratingNum: "4.7",
      starsVisual: "★★★★☆",
      patients: "1.8K+",
      response: "92%",
      imgText: "RK",
      imgColor: "0f5132",
      languages: ["English", "Korean"],
      about: "Dr. Robert Kim focuses extensively on complex joint reconstruction, sports medicine repairs, and minimally invasive orthoscopic skeletal optimizations helping functional recoveries.",
      specializations: ["Joint Replacement", "Sports Medicine", "Arthroscopic Surgery", "Fracture Care"],
      certifications: ["Board Certified Orthopedic Surgeon", "American Academy of Orthopaedic Surgeons"],
      articles: [
        { title: "Preventing Joint Injuries During High-Impact Sports", time: "5 days ago", read: "7 min read", tag: "Fitness", desc: "Key stretching routines and muscle stabilization techniques to safeguard critical joint structures." }
      ],
      reviews: [
        { name: "Angela T.", text: "Excellent surgical care. My knee recovery path has been swift and much less painful than anticipated.", time: "1 month ago", stars: "★★★★☆", helpful: 3 }
      ]
    },
    {
      name: "Dr. Lisa Thompson",
      firstname: "Lisa",
      specialty: "Pediatrician",
      location: "Seattle, WA",
      avail: "1:00 PM Today",
      experience: "6+",
      rating: "4.8★",
      ratingNum: "4.8",
      starsVisual: "★★★★☆",
      patients: "2.5K+",
      response: "97%",
      imgText: "LT",
      imgColor: "166534",
      languages: ["English"],
      about: "Dr. Lisa Thompson offers compassionate health checks, developmental guidance, and immunizations for children from infancy through adolescence.",
      specializations: ["Newborn Care", "Child Development", "Pediatric Nutrition", "Asthma Management"],
      certifications: ["Board Certified Pediatrician", "American Academy of Pediatrics Member"],
      articles: [
        { title: "Boosting Toddler Immunity Safely: Best Practices", time: "2 weeks ago", read: "5 min read", tag: "Pediatrics", desc: "Practical strategies regarding balanced nutrition profiles and routine immunization schedules." }
      ],
      reviews: [
        { name: "Sarah M.", text: "Wonderful with young children. She turned what's usually a scary visit for my son into a fun, easy experience.", time: "3 days ago", stars: "★★★★★", helpful: 9 }
      ]
    },
    {
      name: "Dr. James Wilson",
      firstname: "James",
      specialty: "Psychiatrist",
      location: "Boston, MA",
      avail: "3:00 PM Friday",
      experience: "8+",
      rating: "4.6★",
      ratingNum: "4.6",
      starsVisual: "★★★★☆",
      patients: "1.2K+",
      response: "94%",
      imgText: "JW",
      imgColor: "14532d",
      languages: ["English", "German"],
      about: "Dr. James Wilson evaluates multi-layered physiological and psychological markers to offer structured cognitive therapy pathways and balanced medical management solutions.",
      specializations: ["Anxiety & Depression Therapy", "Cognitive Behavioral Therapy (CBT)", "Stress Management", "Adolescent Psychiatry"],
      certifications: ["Board Certified Psychiatrist", "American Psychiatric Association Member"],
      articles: [
        { title: "Stress and Your Heart: The Hidden Connection", time: "3 weeks ago", read: "7 min read", tag: "Mental Health", desc: "Chronic stress takes a serious toll on cardiovascular health. Explore simple mindfulness exercises to protect your well-being." }
      ],
      reviews: [
        { name: "David L.", text: "Incredibly patient and insightful listener. His therapy structure completely changed my daily routine management.", time: "2 weeks ago", stars: "★★★★★", helpful: 11 }
      ]
    }
  ];

  // Injects the profile values based on URL Param context
  if (document.getElementById('dynamicProfile')) {
    const urlParams = new URLSearchParams(window.location.search);
    let docId = parseInt(urlParams.get('id'));
    if (isNaN(docId) || docId < 0 || docId >= doctorsData.length) {
      docId = 0; // Default fallback to Sarah Johnson if parameter doesn't match
    }
    const doc = doctorsData[docId];

    // 1. Core Profile Header Links & Content Binding
    document.querySelectorAll('.dynamic-tab').forEach(el => el.href = `overview.html?id=${docId}`);
    document.querySelectorAll('.dynamic-tab-avail').forEach(el => el.href = `availability.html?id=${docId}`);
    document.querySelectorAll('.dynamic-tab-article').forEach(el => el.href = `article.html?id=${docId}`);
    document.querySelectorAll('.dynamic-tab-reviews').forEach(el => el.href = `reviews.html?id=${docId}`);

    const txtName = document.querySelector('.doc-name');
    if (txtName) txtName.textContent = doc.name;
    const txtNameTxt = document.querySelector('.doc-name-txt');
    if (txtNameTxt) txtNameTxt.textContent = doc.name;
    const txtSpecialty = document.querySelector('.doc-specialty');
    if (txtSpecialty) txtSpecialty.textContent = doc.specialty;
    const txtLoc = document.querySelector('.doc-location');
    if (txtLoc) txtLoc.textContent = doc.location;
    const txtAvail = document.querySelector('.doc-avail');
    if (txtAvail) txtAvail.textContent = doc.avail;
    
    const txtExp = document.querySelector('.doc-exp');
    if (txtExp) txtExp.textContent = doc.experience;
    const txtRating = document.querySelector('.doc-rating');
    if (txtRating) txtRating.textContent = doc.rating;
    const txtPatients = document.querySelector('.doc-patients');
    if (txtPatients) txtPatients.textContent = doc.patients;
    const txtResp = document.querySelector('.doc-response');
    if (txtResp) txtResp.textContent = doc.response;

    const imgEl = document.querySelector('.doc-img');
    if (imgEl) {
      imgEl.src = `https://via.placeholder.com/100/${doc.imgColor}/fff?text=${doc.imgText}`;
      imgEl.alt = doc.name;
    }

    const tagsContainer = document.querySelector('.doc-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = doc.languages.map(lang => `<span>${lang}</span>`).join('');
    }

    // 2. Overview Component Tab Setup
    const txtFirstname = document.querySelector('.doc-firstname');
    if (txtFirstname) txtFirstname.textContent = doc.firstname;
    const txtAbout = document.querySelector('.doc-about');
    if (txtAbout) txtAbout.textContent = doc.about;

    const specsContainer = document.querySelector('.doc-specs');
    if (specsContainer) {
      specsContainer.innerHTML = doc.specializations.map(s => `<div class="spec-item"><i class="fa-solid fa-stethoscope"></i> ${s}</div>`).join('');
    }
    const certsContainer = document.querySelector('.doc-certs');
    if (certsContainer) {
      certsContainer.innerHTML = doc.certifications.map(c => `<div class="cert-item"><i class="fa-solid fa-certificate"></i> ${c}</div>`).join('');
    }

    // 3. Articles Component Tab Setup
    const articlesList = document.querySelector('.doc-articles-list');
    if (articlesList) {
      articlesList.innerHTML = doc.articles.map(art => `
        <div class="article-card">
          <div class="article-title">${art.title}</div>
          <div class="article-meta"><i class="fa-solid fa-clock"></i> ${art.time} &nbsp;·&nbsp; <i class="fa-solid fa-book-open"></i> ${art.read} &nbsp;·&nbsp; <i class="fa-solid fa-tag"></i> ${art.tag}</div>
          <div class="article-description">${art.desc}</div>
          <a href="#" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      `).join('');
    }

    // 4. Reviews Component Tab Setup
    const txtRatingNum = document.querySelector('.doc-rating-num');
    if (txtRatingNum) txtRatingNum.textContent = doc.ratingNum;
    const visualStars = document.querySelector('.doc-stars-visual');
    if (visualStars) visualStars.textContent = doc.starsVisual;
    const txtReviewCount = document.querySelector('.doc-review-count');
    if (txtReviewCount) txtReviewCount.textContent = `based on ${doc.reviews.length * 45 + 12} reviews`;

    const reviewsList = document.querySelector('.doc-reviews-list');
    if (reviewsList) {
      reviewsList.innerHTML = doc.reviews.map(rev => `
        <div class="review-card">
          <div class="review-header">
            <div style="display:flex;align-items:center;">
              <div class="avatar">${rev.name.charAt(0)}</div>
              <div>
                <div class="review-name">${rev.name}</div>
                <span class="stars" style="color:#f5c518;">${rev.stars}</span>
              </div>
            </div>
            <div class="review-time">${rev.time}</div>
          </div>
          <div class="review-text">${rev.text}</div>
          <div class="helpful"><i class="fa-regular fa-thumbs-up"></i> Helpful (${rev.helpful})</div>
        </div>
      `).join('');
    }
  }

  /*  DOCTOR LISTING PAGE
        Skeleton loader, live search, filter, sort */
  if (document.getElementById('doctorList')) {
    const cards     = document.querySelectorAll('.doctor-box');
    const skel1     = document.getElementById('skel1');
    const skel2     = document.getElementById('skel2');
    const skels     = [skel1, skel2].filter(Boolean);
    const emptyState = document.getElementById('emptyState');
    const countEl   = document.getElementById('count');
    const searchEl  = document.getElementById('search');
    const specialtyEl = document.getElementById('specialty');
    const sortEl    = document.getElementById('sort');

    function filterAndSort() {
      const query    = searchEl.value.toLowerCase().trim();
      const specialty = specialtyEl.value;
      const sort     = sortEl.value;
      const list     = document.getElementById('doctorList');
      let visible    = [];

      cards.forEach(card => {
        const name = card.dataset.name;
        const sp   = card.dataset.specialty;
        const matchesQuery    = !query    || name.includes(query) || sp.toLowerCase().includes(query);
        const matchesSpecialty = !specialty || sp === specialty;

        if (matchesQuery && matchesSpecialty) {
          card.style.display = 'flex';
          visible.push(card);
        } else {
          card.style.display = 'none';
        }
      });

      // Sort visible cards
      visible.sort((a, b) => {
        if (sort === 'rating')     return parseFloat(b.dataset.rating)     - parseFloat(a.dataset.rating);
        if (sort === 'experience') return parseInt(b.dataset.experience)    - parseInt(a.dataset.experience);
        if (sort === 'fee')        return parseInt(a.dataset.fee)           - parseInt(b.dataset.fee);
        return 0;
      });
      visible.forEach(card => list.appendChild(card));

      emptyState.classList.toggle('visible', visible.length === 0);
      if (countEl) countEl.textContent = visible.length;
    }

    // Simulate loading skeleton → reveal cards after 800ms
    setTimeout(() => {
      skels.forEach(s => s && s.remove());
      cards.forEach(c => c.style.display = 'flex');
      filterAndSort();
    }, 800);

    searchEl  && searchEl.addEventListener('input',  filterAndSort);
    specialtyEl && specialtyEl.addEventListener('change', filterAndSort);
    sortEl    && sortEl.addEventListener('change',   filterAndSort);
  }


  /* --------------------------------------------------
     2. AVAILABILITY PAGE
        Date picker buttons + dynamic slot grid
     -------------------------------------------------- */
  if (document.getElementById('datePicker')) {
    const picker       = document.getElementById('datePicker');
    const slotHeading  = document.getElementById('selectedDayLabel');
    const slotGrid     = document.getElementById('slotGrid');
    const days         = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today        = new Date();

    const allSlots = [
      [
        { time: '9:00 AM',  type: 'Video Call',  price: '$50' },
        { time: '11:30 AM', type: 'In-Person',   price: '$70' },
        { time: '2:00 PM',  type: 'Phone Call',  price: '$40' },
        { time: '4:00 PM',  type: 'Video Call',  price: '$50' },
        { time: '6:00 PM',  type: 'In-Person',   price: '$70' },
      ],
      [
        { time: '10:00 AM', type: 'Video Call',  price: '$50' },
        { time: '1:00 PM',  type: 'Phone Call',  price: '$40' },
        { time: '3:30 PM',  type: 'In-Person',   price: '$70' },
      ],
      [
        { time: '9:30 AM',  type: 'In-Person',   price: '$70' },
        { time: '12:00 PM', type: 'Video Call',  price: '$50' },
        { time: '5:00 PM',  type: 'Phone Call',  price: '$40' },
      ],
      [], // Day 3 — fully booked
      [
        { time: '8:00 AM',  type: 'Video Call',  price: '$50' },
        { time: '11:00 AM', type: 'In-Person',   price: '$70' },
        { time: '2:00 PM',  type: 'Phone Call',  price: '$40' },
        { time: '4:30 PM',  type: 'Video Call',  price: '$50' },
      ],
      [
        { time: '9:00 AM',  type: 'In-Person',   price: '$70' },
        { time: '2:00 PM',  type: 'Video Call',  price: '$50' },
      ],
      [
        { time: '10:00 AM', type: 'Video Call',  price: '$50' },
        { time: '12:00 PM', type: 'Phone Call',  price: '$40' },
      ],
    ];

    function renderSlots(idx) {
      const slots = allSlots[idx];
      if (slots.length === 0) {
        slotGrid.innerHTML = `
          <div style="grid-column:1/-1;text-align:center;padding:32px;color:#555;">
            <i class="fa-solid fa-calendar-xmark" style="font-size:36px;margin-bottom:12px;display:block;opacity:0.3;"></i>
            No slots available this day
          </div>`;
      } else {
        slotGrid.innerHTML = slots.map(s => `
          <div class="slot-card" onclick="location.href='book-consultation.html'">
            <div class="slot-time">${s.time}</div>
            <div class="slot-type">${s.type}</div>
            <div class="slot-price">${s.price}</div>
          </div>
        `).join('');
      }
    }

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const btn = document.createElement('div');
      btn.className = 'date-btn' + (i === 0 ? ' active' : '');
      btn.dataset.idx = i;
      const slots = allSlots[i];
      btn.innerHTML = `
        <div class="day-name">${days[d.getDay()]}</div>
        <div class="day-num">${d.getDate()}</div>
        <div class="day-slots">${slots.length > 0 ? slots.length + ' slots' : 'Full'}</div>
      `;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const label = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : days[d.getDay()] + ' ' + d.getDate();
        if (slotHeading) slotHeading.textContent = label;
        renderSlots(i);
      });
      picker.appendChild(btn);
    }

    renderSlots(0);
  }


  /* 3. BOOK CONSULTATION PAGE */
  if (document.getElementById('continueBtn') && document.querySelector('.consult-option')) {
    let consultSelected = false;
    let timeSelected    = false;

    function updateContinueBtn() {
      const btn = document.getElementById('continueBtn');
      if (btn) btn.disabled = !(consultSelected && timeSelected);
    }

    document.querySelectorAll('.consult-option').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.consult-option').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        consultSelected = true;
        updateContinueBtn();
      });
    });

    document.querySelectorAll('.time-slot').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.time-slot').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        timeSelected = true;
        updateContinueBtn();
      });
    });

    updateContinueBtn(); // initialise as disabled
  }


  /* 4. PATIENT FORM PAGE*/
  if (document.getElementById('fname')) {
    const fields = [
      { id: 'fname', check: v => v.trim().length >= 2 },
      { id: 'lname', check: v => v.trim().length >= 2 },
      { id: 'email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'phone', check: v => v.replace(/\D/g, '').length >= 7 },
      { id: 'dob',   check: v => v !== '' },
    ];

    // Clear error on each keystroke
    fields.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', () => {
        el.classList.remove('error');
        const msg = el.nextElementSibling;
        if (msg && msg.classList.contains('error-msg')) msg.style.display = 'none';
      });
    });

    // Exposed globally so the inline onclick in form.html can call it
    window.validateAndContinue = function () {
      let valid = true;
      fields.forEach(({ id, check }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const msg = el.nextElementSibling;
        if (!check(el.value)) {
          el.classList.add('error');
          if (msg && msg.classList.contains('error-msg')) msg.style.display = 'block';
          valid = false;
        } else {
          el.classList.remove('error');
          if (msg && msg.classList.contains('error-msg')) msg.style.display = 'none';
        }
      });
      if (valid) location.href = 'booking.html';
    };
  }


  /* 5. BOOKING SUMMARY PAGE */
  if (document.getElementById('payBtn')) {
    window.handlePay = function () {
      const btn = document.getElementById('payBtn');
      btn.classList.add('loading');
      const textEl = btn.querySelector('.btn-text');
      if (textEl) textEl.textContent = 'Processing...';
      setTimeout(() => { location.href = 'confirmed.html'; }, 1800);
    };
  }


  /* 6. CONFIRMED PAGE */
  if (document.querySelector('.confirmed-card')) {
    const colors = ['#245f37', '#018553', '#4ade80', '#22c55e', '#86efac'];
    const style  = document.createElement('style');
    style.textContent = `@keyframes fall { to { top: 110vh; opacity: 0; } }`;
    document.head.appendChild(style);

    for (let i = 0; i < 30; i++) {
      const dot  = document.createElement('div');
      const size = Math.random() * 8 + 4;
      dot.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        top: -20px;
        opacity: ${Math.random() * 0.7 + 0.3};
        animation: fall ${Math.random() * 2 + 1.5}s ease-in ${Math.random()}s forwards;
        pointer-events: none;
        z-index: 999;
      `;
      document.body.appendChild(dot);
    }
  }

}); // end DOMContentLoaded