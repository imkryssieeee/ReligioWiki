const religions = [
  {
    name: "Christianity",
    origin: "1st century CE · Levant",
    family: "Abrahamic",
    believers: "~2.3 billion",
    overview: "Centered on the life and teachings of Jesus of Nazareth; diverse expressions include Catholicism, Orthodoxy, and Protestant traditions.",
    texts: "Bible (Old and New Testaments)",
    practices: "Prayer, sacraments, liturgy, service",
    regions: "Global with centers in the Americas, Europe, Africa",
    accent: "linear-gradient(135deg, #8fb5ff, #6c7bff)",
    founded: "c. 30 CE",
    notes: "Largest religious community globally; major role in art, philosophy, and social movements."
  },
  {
    name: "Islam",
    origin: "7th century CE · Arabia",
    family: "Abrahamic",
    believers: "~1.9 billion",
    overview: "Monotheistic faith revealed to the Prophet Muhammad, emphasizing submission to God (Allah) and community life (ummah).",
    texts: "Qur'an; Hadith collections",
    practices: "Five Pillars: shahada, prayer, almsgiving, fasting, pilgrimage",
    regions: "Middle East, North Africa, South Asia, growing globally",
    accent: "linear-gradient(135deg, #6ae0c1, #5fb0ff)",
    founded: "610 CE",
    notes: "Includes Sunni and Shia branches with rich legal, philosophical, and mystical schools."
  },
  {
    name: "Hinduism",
    origin: "2nd millennium BCE · Indian subcontinent",
    family: "Dharmic",
    believers: "~1.2 billion",
    overview: "Pluralistic set of traditions rooted in Vedic culture, encompassing diverse philosophies, rituals, and devotional paths (bhakti).",
    texts: "Vedas, Upanishads, Bhagavad Gita, epics",
    practices: "Puja, yoga, festivals, pilgrimage, rites of passage",
    regions: "India, Nepal, diaspora communities",
    accent: "linear-gradient(135deg, #f8b27a, #ff7f9f)",
    founded: "c. 1500–500 BCE",
    notes: "No single founder; concept of dharma shapes ethics, social life, and cosmology."
  },
  {
    name: "Buddhism",
    origin: "5th century BCE · Northern India",
    family: "Dharmic",
    believers: "~520 million",
    overview: "Based on the teachings of Siddhartha Gautama (the Buddha) focusing on the path to enlightenment and liberation from suffering.",
    texts: "Pali Canon, Mahayana sutras, Tibetan canon",
    practices: "Meditation, ethical precepts, monastic life, chanting",
    regions: "East Asia, Southeast Asia, Himalayan regions, global sanghas",
    accent: "linear-gradient(135deg, #ffc778, #ff9bb3)",
    founded: "c. 5th century BCE",
    notes: "Major branches: Theravada, Mahayana, Vajrayana; influential in mindfulness culture."
  },
  {
    name: "Sikhism",
    origin: "15th century CE · Punjab",
    family: "Dharmic",
    believers: "~26 million",
    overview: "Monotheistic tradition founded by Guru Nanak, emphasizing devotion, equality, and community service.",
    texts: "Guru Granth Sahib",
    practices: "Naam simran, kirtan, seva (service), langar",
    regions: "Punjab, South Asian diaspora",
    accent: "linear-gradient(135deg, #ff9bb3, #8fb5ff)",
    founded: "c. 1500 CE",
    notes: "Known for the Khalsa community and the Five Ks as symbols of commitment."
  },
  {
    name: "Judaism",
    origin: "2nd millennium BCE · Levant",
    family: "Abrahamic",
    believers: "~15 million",
    overview: "Covenantal tradition of the Jewish people centered on Torah, law (halakha), and communal life in Israel and the diaspora.",
    texts: "Tanakh (Hebrew Bible), Talmud, rabbinic writings",
    practices: "Sabbath, prayer, festivals, lifecycle rituals",
    regions: "Israel, North America, Europe, global diaspora",
    accent: "linear-gradient(135deg, #8fb5ff, #4fd1c5)",
    founded: "c. 1800–1200 BCE",
    notes: "Key branches include Orthodox, Conservative, Reform, and Reconstructionist movements."
  },
  {
    name: "Bahá'í Faith",
    origin: "19th century CE · Persia",
    family: "Abrahamic / New religious movement",
    believers: "~7 million",
    overview: "Teaches the unity of God, religion, and humanity; founded by Bahá'u'lláh with emphasis on global harmony and justice.",
    texts: "Kitáb-i-Aqdas, Hidden Words, writings of Bahá'u'lláh",
    practices: "Daily prayer, fasting, consultation, community service",
    regions: "Global",
    accent: "linear-gradient(135deg, #6ae0c1, #ffc778)",
    founded: "1863 CE",
    notes: "Advocates for equality, education, and international cooperation."
  },
  {
    name: "Jainism",
    origin: "1st millennium BCE · India",
    family: "Dharmic",
    believers: "~4.5 million",
    overview: "Ancient path centered on non-violence (ahimsa), non-attachment, and ascetic discipline toward liberation (moksha).",
    texts: "Agamas, Tattvartha Sutra",
    practices: "Meditation, vegetarianism, fasting, vows",
    regions: "India, diaspora communities",
    accent: "linear-gradient(135deg, #ffb86c, #ffd3a5)",
    founded: "c. 8th–2nd century BCE",
    notes: "Influential on Indian ethics; emphasizes compassion for all living beings."
  },
  {
    name: "Shinto",
    origin: "1st millennium CE · Japan",
    family: "East Asian",
    believers: "~100 million (often alongside Buddhism)",
    overview: "Indigenous spirituality of Japan focused on kami (spirits) and harmony with nature and community.",
    texts: "Kojiki, Nihon Shoki",
    practices: "Shrine rites, festivals (matsuri), purification",
    regions: "Japan, diaspora shrines",
    accent: "linear-gradient(135deg, #8fd3f4, #84fab0)",
    founded: "Ancient roots; codified 8th century",
    notes: "Often practiced in tandem with Buddhism; deeply entwined with Japanese cultural heritage."
  },
  {
    name: "Taoism",
    origin: "4th century BCE · China",
    family: "East Asian",
    believers: "Tens of millions",
    overview: "Philosophical and religious tradition seeking harmony with the Tao (the Way), blending metaphysics, ritual, and health practices.",
    texts: "Tao Te Ching, Zhuangzi, Daozang canon",
    practices: "Meditation, qi cultivation, ritual, feng shui, internal alchemy",
    regions: "China, Taiwan, Southeast Asia, global communities",
    accent: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    founded: "c. 4th century BCE",
    notes: "Influential on East Asian aesthetics, medicine, and governance ideals."
  },
  {
    name: "Confucianism",
    origin: "5th century BCE · China",
    family: "East Asian philosophy / civil tradition",
    believers: "Cultural influence on billions",
    overview: "Ethical and social philosophy grounded in the teachings of Confucius, emphasizing virtue, ritual propriety, and family harmony.",
    texts: "Analects, Five Classics",
    practices: "Rites, moral cultivation, education, civil service ideals",
    regions: "China, Korea, Japan, Vietnam, diaspora",
    accent: "linear-gradient(135deg, #f6d365, #fda085)",
    founded: "5th century BCE",
    notes: "Shaped East Asian governance and education for centuries; continues as cultural ethos."
  },
  {
    name: "Indigenous traditions",
    origin: "Varied · Worldwide",
    family: "Indigenous",
    believers: "Hundreds of millions",
    overview: "Earth-honoring spiritualities rooted in specific lands and peoples, featuring ancestral veneration, oral teachings, and ritual arts.",
    texts: "Primarily oral, with localized myths and songs",
    practices: "Rites tied to seasons, land, and community; healing ceremonies",
    regions: "Americas, Africa, Oceania, Asia, Arctic",
    accent: "linear-gradient(135deg, #6ae0c1, #ffc778)",
    founded: "Ancient",
    notes: "Vast diversity—each community holds distinct cosmologies and ceremonial life."
  },
  {
    name: "Zoroastrianism",
    origin: "2nd millennium BCE · Persia",
    family: "Iranian / Abrahamic-adjacent",
    believers: "~120,000",
    overview: "Monotheistic faith founded by Zarathustra, highlighting the cosmic struggle between truth (asha) and falsehood (druj).",
    texts: "Avesta, Gathas",
    practices: "Fire temple worship, ethical dualism, festivals like Nowruz",
    regions: "Iran, India (Parsi), global diaspora",
    accent: "linear-gradient(135deg, #ffd1ff, #8fd3f4)",
    founded: "c. 1500–500 BCE",
    notes: "Influenced later Abrahamic thought through concepts like heaven, hell, and final judgment."
  }
];

const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cards');
const timelineList = document.getElementById('timeline');
const comparisonTable = document.querySelector('#comparisonTable tbody');
const filterPills = document.getElementById('filterPills');

const families = Array.from(new Set(religions.map(r => r.family)));

function renderPills() {
  families.forEach(family => {
    const pill = document.createElement('button');
    pill.className = 'pill';
    pill.dataset.filter = family;
    pill.textContent = family;
    filterPills.appendChild(pill);
  });
}

function filteredReligions() {
  const query = searchInput.value.toLowerCase();
  const active = filterPills.querySelector('.pill.active').dataset.filter;

  return religions.filter(r => {
    const matchesFilter = active === 'all' || r.family === active;
    const haystack = `${r.name} ${r.origin} ${r.overview} ${r.family}`.toLowerCase();
    const matchesSearch = haystack.includes(query);
    return matchesFilter && matchesSearch;
  });
}

function createCard(entry) {
  const card = document.createElement('article');
  card.className = 'card';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.innerHTML = `<span class="swatch" style="background:${entry.accent}"></span>${entry.family}`;

  const title = document.createElement('h3');
  title.textContent = entry.name;

  const meta = document.createElement('p');
  meta.className = 'meta';
  meta.textContent = `${entry.origin} · ${entry.believers}`;

  const overview = document.createElement('p');
  overview.textContent = entry.overview;

  const badges = document.createElement('div');
  badges.className = 'badges';
  [entry.texts, entry.practices, entry.regions].forEach(text => {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = text;
    badges.appendChild(badge);
  });

  card.append(tag, title, meta, overview, badges);
  return card;
}

function renderCards() {
  cardsContainer.innerHTML = '';
  filteredReligions().forEach(entry => cardsContainer.appendChild(createCard(entry)));
}

function renderTimeline() {
  timelineList.innerHTML = '';
  filteredReligions()
    .sort((a, b) => (a.founded > b.founded ? 1 : -1))
    .forEach(entry => {
      const item = document.createElement('li');
      const name = document.createElement('strong');
      name.textContent = entry.name;
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = `${entry.founded} · ${entry.origin}`;
      const notes = document.createElement('p');
      notes.textContent = entry.notes;
      item.append(name, label, notes);
      timelineList.appendChild(item);
    });
}

function renderComparison() {
  comparisonTable.innerHTML = '';
  filteredReligions().forEach(entry => {
    const row = document.createElement('tr');
    const cols = [entry.name, entry.texts, entry.practices, entry.regions];
    cols.forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });
    comparisonTable.appendChild(row);
  });
}

function setActivePill(target) {
  filterPills.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  target.classList.add('active');
}

function init() {
  renderPills();
  renderCards();
  renderTimeline();
  renderComparison();

  searchInput.addEventListener('input', () => {
    renderCards();
    renderTimeline();
    renderComparison();
  });

  filterPills.addEventListener('click', event => {
    if (event.target.matches('.pill')) {
      setActivePill(event.target);
      renderCards();
      renderTimeline();
      renderComparison();
    }
  });
}

init();
