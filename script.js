const religions = [
  {
    slug: "christianity",
    name: "Christianity",
    origin: "1st century CE · Levant",
    family: "Abrahamic",
    believers: "~2.3 billion",
    overview: "Centered on the life and teachings of Jesus of Nazareth; major streams include Catholic, Orthodox, and Protestant traditions.",
    texts: "Bible (Old and New Testaments)",
    practices: "Prayer, sacraments, liturgy, service",
    regions: "Global with centers in the Americas, Europe, Africa",
    accent: "linear-gradient(135deg, #8fb5ff, #6c7bff)",
    founded: "c. 30 CE",
    notes: "Largest religious community globally; major role in art, philosophy, and social movements.",
    history: "Emerging from Jewish contexts in the Roman Empire, Christianity spread through apostolic missions, imperial adoption under Constantine, medieval Christendom, Reformation-era diversification, and modern ecumenical and evangelical movements.",
    beliefsDetail: "Core beliefs center on one God, the Trinity, the incarnation of Jesus as Christ, salvation through grace, and hope in resurrection and the kingdom of God. Ethical life is shaped by love of God and neighbor, forgiveness, and care for the marginalized.",
    practiceDetail: "Common rhythms include communal worship, Scripture reading, baptism and Eucharist, daily prayer, liturgical seasons like Advent and Lent, and service ministries in education, healthcare, and relief.",
    modern: "Christianity is globally diverse, with vibrant growth in Africa, Latin America, and parts of Asia, alongside secularization in parts of Europe. Contemporary debates address social justice, interfaith cooperation, and digital ministry." 
  },
  {
    slug: "islam",
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
    notes: "Includes Sunni and Shia branches with rich legal, philosophical, and mystical schools.",
    history: "Beginning with revelations to Muhammad in Mecca and Medina, Islam rapidly expanded across empires, developing classical jurisprudence, theology, and arts, later adapting through Ottoman, Safavid, Mughal periods and modern nation-state contexts.",
    beliefsDetail: "Affirms one God, prophecy from Adam through Muhammad as final prophet, sacred law (sharia), angels, revealed books, and accountability in an afterlife. Tawhid (divine unity) grounds ethics of justice and mercy.",
    practiceDetail: "Muslims observe the Five Pillars, study fiqh and theology, gather weekly for Jumu'ah prayer, and celebrate festivals like Ramadan and Eid. Sufism adds devotional poetry, dhikr (remembrance), and tariqa learning circles.",
    modern: "Islamic thought engages democracy, human rights, finance, and ecology. Diaspora communities grow across the West, while global networks link scholars, artists, and social movements." 
  },
  {
    slug: "hinduism",
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
    notes: "No single founder; concept of dharma shapes ethics, social life, and cosmology.",
    history: "Developed from Vedic ritual culture, evolving through classical philosophical schools (Vedanta, Samkhya, Yoga), temple traditions, medieval bhakti movements, and modern reformers engaging colonial and global contexts.",
    beliefsDetail: "Common threads include belief in Brahman (ultimate reality), atman (self), karma and rebirth, paths of knowledge, devotion, and action, and reverence for deities such as Vishnu, Shiva, and Devi.",
    practiceDetail: "Ritual worship (puja), meditation, yoga disciplines, sacred festivals like Diwali and Holi, pilgrimage to rivers and temples, and samskara rites mark life stages. Ethics emphasize ahimsa, hospitality, and community duty (dharma).",
    modern: "Hindu thought influences global yoga and mindfulness, diaspora temples sustain community life, and contemporary voices address caste reform, gender equity, environmental stewardship, and interfaith dialogue." 
  },
  {
    slug: "buddhism",
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
    notes: "Major branches: Theravada, Mahayana, Vajrayana; influential in mindfulness culture.",
    history: "Spread from India across Asia through monastic missions and royal patronage, adapting to Chinese, Japanese, Tibetan, and Southeast Asian cultures. Modern revivals emphasize social engagement and global mindfulness movements.",
    beliefsDetail: "Teaches the Four Noble Truths about suffering and its cessation, the Eightfold Path, impermanence, non-self, and compassion. Bodhisattva ideals and Buddha-nature shape Mahayana traditions; tantra informs Vajrayana lineages.",
    practiceDetail: "Meditation styles range from vipassana insight to Zen zazen and Tibetan visualization. Lay ethics emphasize generosity and non-harming, while monastics follow vinaya discipline. Festivals honor Vesak, enlightenment stories, and regional saints.",
    modern: "Global sanghas integrate neuroscience, psychotherapy, and activism. Theravada thrives in Southeast Asia, Zen and Tibetan lineages grow worldwide, and secular mindfulness adapts Buddhist techniques in clinical and workplace settings." 
  },
  {
    slug: "sikhism",
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
    notes: "Known for the Khalsa community and the Five Ks as symbols of commitment.",
    history: "Led by ten Gurus from Nanak to Gobind Singh, Sikhism codified scripture in the Guru Granth Sahib and formed the Khalsa for spiritual and communal resilience amid Mughal and regional conflicts.",
    beliefsDetail: "Teaches one formless God, remembrance through Naam, rejection of caste hierarchy, and living truthfully. The Guru Granth Sahib is considered the living Guru guiding doctrine and devotion.",
    practiceDetail: "Daily prayers, singing hymns (kirtan), community kitchens (langar), and service (seva) anchor Sikh life. Initiated Sikhs may keep the Five Ks as identity markers of discipline and solidarity.",
    modern: "Diaspora gurdwaras thrive across the globe, Sikh scholars and activists engage human rights and disaster relief, and digital platforms share kirtan and teachings widely." 
  },
  {
    slug: "judaism",
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
    notes: "Key branches include Orthodox, Conservative, Reform, and Reconstructionist movements.",
    history: "Rooted in ancient Israelite religion, shaped by Temple eras, rabbinic development after 70 CE, medieval philosophical and mystical schools, and modern movements responding to emancipation, migration, and statehood.",
    beliefsDetail: "Affirms one God, covenantal ethics, and study of Torah. Concepts of mitzvot, peoplehood, and tikkun olam (repairing the world) orient religious life.",
    practiceDetail: "Observances include Shabbat rest, dietary laws, prayer services, festivals like Passover, Yom Kippur, and Sukkot, and lifecycle rituals such as brit milah and bar/bat mitzvah.",
    modern: "Jewish life spans secular cultural renewal to religious revival, with vibrant scholarship, arts, and debates on identity, gender inclusion, and Israel–diaspora relations." 
  },
  {
    slug: "bahai",
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
    notes: "Advocates for equality, education, and international cooperation.",
    history: "Emerging from Bábí roots in 19th-century Persia, Bahá'í communities grew despite persecution, establishing elected spiritual assemblies and a World Centre in Haifa while promoting social development worldwide.",
    beliefsDetail: "Affirms progressive revelation through multiple prophets, oneness of humanity, harmony of science and religion, and principles of equality, consultation, and universal education.",
    practiceDetail: "Daily prayers, a 19-day fast, community gatherings, and elected local and national assemblies guide spiritual and administrative life without clergy.",
    modern: "Bahá'ís engage in grassroots education, gender equity efforts, and interfaith cooperation, with communities present in nearly every country." 
  },
  {
    slug: "jainism",
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
    notes: "Influential on Indian ethics; emphasizes compassion for all living beings.",
    history: "Linked to the teachings of the Tirthankaras, especially Mahavira, Jainism fostered monastic orders and merchant communities, preserving texts through councils and surviving alongside Hindu and Buddhist milieus.",
    beliefsDetail: "Teaches eternal souls (jiva), karma as matter binding souls, and liberation through right faith, knowledge, and conduct. Ahimsa and aparigraha (non-possessiveness) are paramount virtues.",
    practiceDetail: "Strict vegetarianism, ritual fasting, scriptural study, and temple worship of Tirthankaras are common. Monastics observe vows of non-harm and simplicity; laypeople adapt vows for daily life.",
    modern: "Diaspora Jains support temples and animal welfare causes, while environmental advocates draw on Jain ethics for sustainable living." 
  },
  {
    slug: "shinto",
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
    notes: "Often practiced in tandem with Buddhism; deeply entwined with Japanese cultural heritage.",
    history: "Shinto evolved from local kami veneration, systematized in imperial chronicles and shrine networks. It intertwined with Buddhism, later nationalized in the Meiji era, and recontextualized after World War II as community-focused practice.",
    beliefsDetail: "Centers on kami present in natural features, ancestors, and cultural heroes. Purity, gratitude, and harmony with land and community shape Shinto ethics.",
    practiceDetail: "Shrines host rituals led by priests, seasonal festivals, and life events. Purification with water, offerings, ema prayer boards, and dances (kagura) express devotion.",
    modern: "Urban shrines, environmental conservation efforts, and cultural festivals keep Shinto vibrant. Many visit shrines for New Year blessings and milestone ceremonies." 
  },
  {
    slug: "taoism",
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
    notes: "Influential on East Asian aesthetics, medicine, and governance ideals.",
    history: "Rooted in classical philosophical texts, Taoism developed organized religious schools, liturgy, and alchemical practices, interacting with Buddhism and Confucianism across dynasties.",
    beliefsDetail: "Emphasizes living in accordance with the Tao, valuing spontaneity (ziran), balance of yin-yang, and cultivation of virtue (de). Cosmology informs ethics of humility and non-coercion.",
    practiceDetail: "Practitioners engage meditation, breathing arts (qigong), talismanic rituals, and geomancy. Temples house deities like the Jade Emperor and Laozi, with priests conducting communal rites.",
    modern: "Taoist health practices influence global wellness culture; temples and associations maintain rituals, while scholars reassess environmental and social applications of Taoist thought." 
  },
  {
    slug: "confucianism",
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
    notes: "Shaped East Asian governance and education for centuries; continues as cultural ethos.",
    history: "Developed from Confucius' teachings, refined by Mencius and Zhu Xi, institutionalized through imperial examinations, and reinterpreted in New Confucianism responding to modernity.",
    beliefsDetail: "Highlights humaneness (ren), righteousness (yi), ritual propriety (li), and filial piety. Sees moral cultivation and social harmony as linked.",
    practiceDetail: "Practiced through family rituals, ancestral veneration, ethical education, and civic responsibility. Temples of Confucius host ceremonies honoring the sage and scholars.",
    modern: "Confucian values inform debates on governance and education in East Asia; academic revivals and cultural programs spread globally." 
  },
  {
    slug: "indigenous",
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
    notes: "Vast diversity—each community holds distinct cosmologies and ceremonial life.",
    history: "Indigenous religions predate organized world faiths, with histories tied to land stewardship, kinship, and resistance to colonization. Revitalization movements reclaim language, ceremony, and sovereignty.",
    beliefsDetail: "Common motifs include kinship with land, ancestors, and animal nations; sacred stories guide ethical reciprocity and balance. Knowledge is often guarded and contextual.",
    practiceDetail: "Practices range from seasonal dances and offerings to healing ceremonies led by knowledge-keepers. Protocols emphasize consent, community roles, and ecological respect.",
    modern: "Communities blend tradition with contemporary life, asserting rights to sacred sites, protecting ecosystems, and sharing culture on their own terms." 
  },
  {
    slug: "zoroastrianism",
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
    notes: "Influenced later Abrahamic thought through concepts like heaven, hell, and final judgment.",
    history: "Rose within ancient Persian empires, later challenged by Hellenistic and Islamic rule. Parsi migrations preserved traditions in India, with reforms in the 19th–20th centuries.",
    beliefsDetail: "Centers on Ahura Mazda as supreme, with ethical choice between asha and druj. Emphasizes good thoughts, words, and deeds, and an eventual renewal of the world (frashokereti).",
    practiceDetail: "Sacred fires symbolize purity; prayers from the Avesta, rites like navjote initiation, and festivals such as Nowruz and Gahambars mark communal life.",
    modern: "Communities steward heritage sites and debate conversion, endogamy, and gender inclusion while engaging interfaith outreach." 
  },
  {
    slug: "yoruba",
    name: "Yoruba & Ifá",
    origin: "1st millennium CE · West Africa",
    family: "Indigenous",
    believers: "Tens of millions (including diaspora forms)",
    overview: "West African tradition honoring Olódùmarè and orishas through divination, music, and community rites; influential in the Americas.",
    texts: "Ifá corpus (odu), oral praise poetry",
    practices: "Divination, drumming, dance, offerings, initiations",
    regions: "Nigeria, Benin, Togo; diaspora in the Americas",
    accent: "linear-gradient(135deg, #ffc778, #84fab0)",
    founded: "Ancient", 
    notes: "Inspired Afro-diasporic religions like Candomblé and Santería/Lukumí.",
    history: "Rooted in Yoruba kingdoms with sophisticated divination and ritual arts, Ifá traveled through trans-Atlantic enslavement, reshaping in diaspora while retaining core cosmology and ritual lineages.",
    beliefsDetail: "Recognizes a supreme creator and many orishas governing natural and social forces. Destiny (ori) and harmony with community guide ethical life.",
    practiceDetail: "Babalawo diviners interpret odu verses, while devotees honor orishas with drumming, dance, offerings, and festivals. Initiations deepen relationships with specific orishas.",
    modern: "Urban and diaspora communities maintain temples, music, and scholarship; digital archives preserve oral literature and ritual music." 
  },
  {
    slug: "vodou",
    name: "Haitian Vodou",
    origin: "18th century CE · Haiti",
    family: "Afro-diasporic",
    believers: "Millions",
    overview: "Syncretic Afro-Caribbean religion honoring lwa spirits, blending West African, Indigenous, and Catholic influences.",
    texts: "Oral liturgy, songs, prayers",
    practices: "Ceremonies with drumming, dance, spirit possession, healing",
    regions: "Haiti, Haitian diaspora",
    accent: "linear-gradient(135deg, #ff9bb3, #ffd3a5)",
    founded: "c. 1700s CE",
    notes: "Central to Haitian cultural identity and communal resilience.",
    history: "Developed among enslaved Africans in colonial Haiti, Vodou supported community solidarity and resistance, including roles in the Haitian Revolution. It adapted under suppression yet flourished in rural and urban contexts.",
    beliefsDetail: "Honors a distant creator (Bondye) and many lwa mediating daily life. Respect for ancestors and balance with the spirit world are paramount.",
    practiceDetail: "Hounfò temples host ceremonies with drums, song, dance, and veve symbols inviting lwa. Offerings, healings, and possession experiences connect practitioners with the spirit world.",
    modern: "Vodou remains a vibrant cultural force, expressed in art, music, and community rituals, with practitioners advocating for recognition and against stigma." 
  },
  {
    slug: "wicca",
    name: "Wicca / Neo-Paganism",
    origin: "20th century CE · Europe",
    family: "Modern Pagan",
    believers: "Hundreds of thousands",
    overview: "Modern revival drawing on pre-Christian European motifs, honoring Goddess and God archetypes and nature-centered ethics.",
    texts: "Book of Shadows (tradition-specific)",
    practices: "Seasonal sabbats, esbats, ritual circles, magic",
    regions: "Europe, North America, online communities",
    accent: "linear-gradient(135deg, #c2e9fb, #ff9bb3)",
    founded: "1930s–1950s CE",
    notes: "Decentralized with covens and solitary practitioners across many traditions.",
    history: "Popularized by Gerald Gardner and successors, Wicca fused ceremonial magic, folklore, and occultism. It spread through literature and festivals, diversifying into feminist, reconstructionist, and eclectic branches.",
    beliefsDetail: "Common themes include reverence for nature, divine duality or plurality, the Wheel of the Year, and ethical precepts like the Wiccan Rede (harm none).",
    practiceDetail: "Ritual circles align with lunar esbats and seasonal sabbats (equinoxes, solstices, cross-quarters). Practitioners employ altars, symbolism, and spellcraft within ethical frameworks.",
    modern: "Thrives through festivals, podcasts, and online learning. Environmental activism and inclusive covens broaden participation and representation." 
  },
  {
    slug: "rastafari",
    name: "Rastafari",
    origin: "20th century CE · Jamaica",
    family: "Afro-Caribbean",
    believers: "Hundreds of thousands",
    overview: "Spiritual and cultural movement venerating Haile Selassie I, emphasizing African identity, justice, and livity (righteous living).",
    texts: "Bible (Rastafari interpretations), teachings of elders",
    practices: "Reasoning sessions, Nyabinghi drumming, ital diet",
    regions: "Caribbean, North America, Africa, Europe",
    accent: "linear-gradient(135deg, #84fab0, #ffc778)",
    founded: "1930s CE",
    notes: "Influential in music and liberation theology conversations.",
    history: "Inspired by Garveyite thought and Haile Selassie's coronation, Rastafari grew through grassroots communities and reggae culture, critiquing colonialism and advocating repatriation to Africa.",
    beliefsDetail: "Holds Selassie in messianic regard, interprets biblical narratives through Black liberation lenses, and stresses oneness with Jah. Babylon symbolizes oppressive systems to resist.",
    practiceDetail: "Communal reasoning, drumming, and chant praise Jah; many follow ital natural diets and dreadlocks as spiritual vows. Holy days include groundations celebrating Selassie's life events.",
    modern: "Global reggae and diaspora networks carry Rastafari messages of justice and dignity, while elders and scholars debate theology, gender roles, and community organization." 
  },
  {
    slug: "spiritism",
    name: "Spiritism",
    origin: "19th century CE · France / Brazil",
    family: "New religious movement",
    believers: "Tens of millions",
    overview: "Philosophy and religion codified by Allan Kardec, focusing on moral progress, reincarnation, and communication with spirits.",
    texts: "The Spirits' Book, The Gospel According to Spiritism",
    practices: "Charity work, study groups, mediumship sessions",
    regions: "Brazil, Latin America, Europe",
    accent: "linear-gradient(135deg, #8fb5ff, #ffd1ff)",
    founded: "1857 CE",
    notes: "Significant social footprint in Brazil through education and healthcare initiatives.",
    history: "Kardec compiled teachings from mediumistic communications, framing Spiritism as rational and ethical. It flourished in Brazil, inspiring hospitals, schools, and cultural works.",
    beliefsDetail: "Teaches immortality of the soul, reincarnation for moral learning, and spirit influence on the material world. Moral improvement and charity accelerate progress.",
    practiceDetail: "Centers host study circles, healing passes, and mediumship conducted with ethical guidelines. Emphasis on humility and service distinguishes Spiritist practice.",
    modern: "Spiritist federations operate clinics and relief programs; online platforms disseminate teachings and coordinate charity drives." 
  },
  {
    slug: "tenrikyo",
    name: "Tenrikyo",
    origin: "19th century CE · Japan",
    family: "New religious movement",
    believers: "Millions",
    overview: "Japanese movement founded by Nakayama Miki (Oyasama) teaching joyous life through gratitude, charity, and healing service.",
    texts: "Ofudesaki, Mikagura-uta, Osashizu",
    practices: "Kagura dance, service prayers, hinokishin (voluntary service)",
    regions: "Japan, Brazil, other diasporas",
    accent: "linear-gradient(135deg, #ffd3a5, #6ae0c1)",
    founded: "1838 CE",
    notes: "Global network centers on the Jiba at Tenri City with education and disaster relief outreach.",
    history: "Originating from Nakayama Miki's revelatory experiences, Tenrikyo organized teachings around the Jiba sacred spot, expanding through educational institutions and relief missions.",
    beliefsDetail: "Portrays God the Parent as nurturing all humanity, calling people to live the Joyous Life through gratitude and mutual help. Suffering is seen as guidance toward spiritual growth.",
    practiceDetail: "Services feature mikagura-uta songs, dance, and musical instruments. Daily hinokishin encourages small acts of service; followers may train at seminaries in Tenri City.",
    modern: "Tenrikyo operates schools, museums, and relief teams, fostering intercultural outreach and volunteerism worldwide." 
  },
  {
    slug: "caodaism",
    name: "Caodaism",
    origin: "20th century CE · Vietnam",
    family: "New religious movement",
    believers: "Several million",
    overview: "Syncretic Vietnamese faith uniting elements of Buddhism, Taoism, Confucianism, Christianity, and spiritism under the Supreme Being (Cao Đài).",
    texts: "Divine messages, Pháp Chánh Truyền",
    practices: "Temple liturgy, seances, vegetarian ethics",
    regions: "Vietnam, diaspora communities",
    accent: "linear-gradient(135deg, #fda085, #84fab0)",
    founded: "1926 CE",
    notes: "Known for striking Holy See architecture in Tây Ninh and a structured clerical hierarchy.",
    history: "Founded through spiritist revelations under French colonial rule, Caodaism organized a unique hierarchy blending Eastern and Western motifs, engaging in politics and social services in 20th-century Vietnam.",
    beliefsDetail: "Teaches unity of world religions, moral cultivation, and service. Venerates founders and saints from multiple traditions, envisioning a Third Amnesty era of universal salvation.",
    practiceDetail: "Worship features colorful temples, daily rites with music and incense, vegetarian discipline, and continued use of seances for guidance in some branches.",
    modern: "Post-war communities rebuilt institutions, with diaspora temples fostering cultural preservation and interfaith dialogue." 
  },
  {
    slug: "shamanism",
    name: "Siberian Shamanism",
    origin: "Ancient · Siberia and Central Asia",
    family: "Indigenous",
    believers: "Regional communities",
    overview: "Animistic traditions where shamans mediate between human and spirit worlds for healing, guidance, and ecological balance.",
    texts: "Oral epics, songs, ritual knowledge",
    practices: "Trance journeying, drumming, healing rites",
    regions: "Siberia, Mongolia, Central Asia",
    accent: "linear-gradient(135deg, #6c7bff, #ffc778)",
    founded: "Ancient",
    notes: "Practices vary by people groups such as Sakha, Evenki, and Tuvan communities.",
    history: "Longstanding among nomadic and settled peoples, shamanic roles adapted under imperial, Soviet, and modern pressures, with revivals reconnecting language and land-based ceremonies.",
    beliefsDetail: "Worldviews include layered cosmoses, spirit guardians, and reciprocity with animals and landscapes. Shamans act as negotiators and healers for communal well-being.",
    practiceDetail: "Rituals employ drums, costumes, and trance journeys to seek healing, protection, or guidance. Offerings acknowledge spirits of place and ancestors.",
    modern: "Cultural revitalization supports festivals, apprenticeships, and collaborations with researchers, while communities safeguard sacred knowledge from commercialization." 
  }
];

const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cards');
const timelineList = document.getElementById('timeline');
const comparisonTable = document.querySelector('#comparisonTable tbody');
const filterPills = document.getElementById('filterPills');
const detailPage = document.getElementById('detailPage');
const detailContent = document.getElementById('detailContent');
const detailName = document.getElementById('detailName');
const detailOrigin = document.getElementById('detailOrigin');
const detailTag = document.getElementById('detailTag');
const detailHistory = document.getElementById('detailHistory');
const detailBeliefs = document.getElementById('detailBeliefs');
const detailPractices = document.getElementById('detailPractices');
const detailTexts = document.getElementById('detailTexts');
const detailRegions = document.getElementById('detailRegions');
const detailModern = document.getElementById('detailModern');
const closeDetail = document.getElementById('closeDetail');
const downloadGuide = document.getElementById('downloadGuide');

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
  card.dataset.slug = entry.slug;

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

  const learnMore = document.createElement('button');
  learnMore.className = 'ghost learn-more';
  learnMore.dataset.slug = entry.slug;
  learnMore.textContent = 'Open page';

  card.append(tag, title, meta, overview, badges, learnMore);
  return card;
}

function renderCards() {
  cardsContainer.innerHTML = '';
  filteredReligions().forEach(entry => cardsContainer.appendChild(createCard(entry)));
}

function renderTimeline() {
  timelineList.innerHTML = '';
  filteredReligions()
    .slice()
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

function findReligion(slug) {
  return religions.find(r => r.slug === slug);
}

function openDetail(entry) {
  if (!entry) return;
  detailName.textContent = entry.name;
  detailOrigin.textContent = `${entry.origin} · ${entry.believers}`;
  detailTag.innerHTML = `<span class="swatch" style="background:${entry.accent}"></span>${entry.family}`;
  detailHistory.textContent = entry.history;
  detailBeliefs.textContent = entry.beliefsDetail;
  detailPractices.textContent = entry.practiceDetail;
  detailTexts.textContent = entry.texts;
  detailRegions.textContent = entry.regions;
  detailModern.textContent = entry.modern;
  detailContent.hidden = false;
  detailPage.classList.add('active');
  detailPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#religion-${entry.slug}`);
}

function closeDetailView() {
  detailPage.classList.remove('active');
  detailContent.hidden = true;
  detailName.textContent = 'Select a tradition to open its page';
  detailOrigin.textContent = 'Click a card to load the full overview, history, beliefs, and modern presence.';
  detailTag.textContent = '—';
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

function handleCardClick(event) {
  const trigger = event.target.closest('.learn-more');
  if (!trigger) return;
  const entry = findReligion(trigger.dataset.slug);
  openDetail(entry);
}

function handleHashLoad() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#religion-')) {
    const slug = hash.replace('#religion-', '');
    const entry = findReligion(slug);
    if (entry) openDetail(entry);
  }
}

function buildGuideText() {
  const lines = [
    'ReligioWiki field guide',
    'Dive-deep summaries for every tradition listed on the site.',
    '— — —',
  ];

  religions.forEach(r => {
    lines.push(`${r.name} (${r.origin})`);
    lines.push(`Family: ${r.family} | Followers: ${r.believers}`);
    lines.push(`Overview: ${r.overview}`);
    lines.push(`History: ${r.history}`);
    lines.push(`Beliefs: ${r.beliefsDetail}`);
    lines.push(`Practices: ${r.practiceDetail}`);
    lines.push(`Texts: ${r.texts}`);
    lines.push(`Regions: ${r.regions}`);
    lines.push(`Modern landscape: ${r.modern}`);
    lines.push('');
  });

  return lines.join('\n');
}

function downloadFieldGuide() {
  const content = buildGuideText();
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'ReligioWiki-field-guide.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
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

  cardsContainer.addEventListener('click', handleCardClick);
  closeDetail.addEventListener('click', closeDetailView);
  downloadGuide.addEventListener('click', downloadFieldGuide);
  handleHashLoad();
}

init();
