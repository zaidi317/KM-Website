import { LAST_UPDATED_LABEL } from '../config/siteConfig';
import type { GuideArticle, GuidesHubContent } from '../i18n/types';
import type { GuideRoute } from '../utils/routing';

export const guidesHubPageEn: GuidesHubContent = {
  eyebrow: 'Resource Library · English & اردو',
  headline: 'Plain-language guides for Pakistani businesses, teachers, and online sellers.',
  subheadline:
    'No marketing jargon, no fake promises, and no recycled templates. Read answer-first guides on Google Maps, websites, SEO, agency selection, budgets, Daraz vs COD stores, and social content.',
  lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
  primaryCta: 'Get Your Free Growth Plan',
  secondaryCta: 'Call 0321-2995766',
  filterHeading: 'Filter Guides by Topic',
  categories: {
    all: 'All 8 Guides',
    'google-seo': 'Google Maps & SEO',
    'websites-stores': 'Websites & Online Stores',
    'social-strategy': 'Social Media, Budgets & Agencies',
  },
  readGuideLabel: 'Read Full Guide',
  articleLabels: {
    homeBreadcrumb: 'Home',
    guidesBreadcrumb: 'Guides',
    backToHubLabel: 'Browse All 8 Guides',
    relatedHeading: 'Keep Reading',
  },
  ctaBand: {
    heading: 'Want advice tailored to your shop, academy, or brand?',
    description:
      'No payment is needed for your first chat. Call or WhatsApp 0321-2995766 or send your brief for a direct recommendation.',
    primaryCta: 'Get a Free Quote',
    secondaryCta: 'Message on WhatsApp',
  },
};

export const guideArticlesEn: Record<GuideRoute, GuideArticle> = {
  'guide-google-maps': {
    route: 'guide-google-maps',
    number: '01',
    topic: 'google-seo',
    categoryLabel: 'Google Maps & Local SEO',
    title: 'How to Get Your Shop on Google Maps in Pakistan',
    excerpt:
      'Step-by-step instructions to claim, verify, optimize, and maintain a Google Business Profile for any Pakistani shop, clinic, tuition academy, or service office.',
    readTimeLabel: '6 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'To put your shop on Google Maps in Pakistan, claim your free Google Business Profile using a permanent storefront address, verify ownership via postcard or video, select an exact primary category, upload real storefront photos, match your phone number across directories, and collect steady Urdu or English customer reviews.',
    sections: [
      {
        heading: 'Why Google Maps Drives Everyday Local Calls in Pakistan',
        paragraphs: [
          'When a parent in Gulshan-e-Iqbal looks for a science academy, or a car owner in Rawalpindi searches for an AC workshop nearby, their first habit is opening Google Search or Google Maps. Unlike social feeds where posts vanish within hours, Google Maps catches buyers right when they are ready to call or visit.',
          'Many Pakistani shops rely only on a signboard outside their market. That limits you to people walking past your street. A well-structured Google Business Profile puts your opening hours, phone number, WhatsApp link, storefront photos, and road pin in front of buyers across nearby sectors and towns.',
          'Think about how often neighbors share a Google Maps location pin instead of typing long directions over chat. Once your pin sits accurately on the right plaza or corner road, delivery riders, first-time patients, students, and suppliers reach your gate smoothly without calling three times for landmarks.',
        ],
      },
      {
        heading: 'Step 1: Prepare Accurate Business Information Before Submitting',
        paragraphs: [
          'Google rejects or suspends listings when details look inconsistent or stuffed with extra city names. Before you open Google Business Profile, prepare clean facts that match your real signboard and visiting card. Keep your business name faithful to what is painted outside your shop rather than forcing keywords into the title.',
          'Pick one primary category that closely describes what you do, such as Dental Clinic, Clothing Store, Computer Training School, or Auto Repair Shop. You can add two or three secondary categories afterward, while keeping the primary category focused on your core revenue source.',
          'Use an email account belonging permanently to the business owner rather than a temporary staff Gmail. If an agency or employee sets up the listing under a personal email and later moves on, recovering ownership can turn into weeks of verification trouble.',
        ],
        bullets: [
          'Exact legal or signboard name without extra city suffixes.',
          'Clear street number, plaza name, floor, sector or town, and postal code.',
          'Dedicated Pakistani mobile or PTCL number you actually answer during open hours.',
          'Real opening and closing schedule including Friday break times or Sunday status.',
        ],
      },
      {
        heading: 'Step 2: Complete Google Verification Without Common Delays',
        paragraphs: [
          'Across Pakistan, Google commonly asks new profiles to complete video verification rather than relying only on postal mail. During video verification, record one continuous clip starting from the street or neighboring shop sign, walking up to your permanent signboard, and unlocking your counter or office door.',
          'Show printed business materials, stock, classrooms, or equipment inside the same continuous recording. Never film from home if you claim a commercial plaza shop, and avoid editing or cutting the clip. Once submitted, review normally finishes within several business days.',
          'Before pressing record, check your mobile signal strength and wipe the camera lens. Walk slowly so every signboard letter, street milestone, and shop interior stays sharp enough for an automated system or human reviewer to read comfortably in one pass.',
        ],
      },
      {
        heading: 'Step 3: Optimize Photos, Services, and Direct Messaging',
        paragraphs: [
          'An empty profile pin with zero pictures makes Pakistani buyers hesitate before calling. Upload crisp daytime photos of your outside banner, interior counter, classrooms or clinic equipment, and key product shelves. Avoid stock photos downloaded from search engines because customers want proof of your real workplace.',
          'Fill out the services or products tab in plain language so shoppers know what you offer before dialing. Mention if you serve surrounding neighborhoods, whether parking is available, and whether customers can book slots by phone or WhatsApp.',
          'Add clear answers inside the Question and Answer panel on your own profile. Common local questions include whether home delivery covers nearby sectors, whether female doctors are available, or whether fee installments are offered for quarterly academy batches.',
        ],
        bullets: [
          'Upload fresh storefront and product photos once a month.',
          'List ten to fifteen specific services or product groups in simple words.',
          'Add your website URL or booking page link so people can verify details quickly.',
        ],
      },
      {
        heading: 'Step 4: Build Steady Reviews and Connect a Simple Website',
        paragraphs: [
          'Reviews build immediate confidence for Pakistani families choosing a clinic, school, or repair shop. Share your short review link on WhatsApp after finishing a job or parent meeting, and ask happy buyers to mention what service they received and which neighborhood they visited from.',
          'Never buy bulk reviews from strangers or ask staff members to post dozens of ratings from the same Wi-Fi network. Google filters out suspicious bursts easily. Pair your profile with a fast mobile website hosted under your own domain so Google sees clear confirmation of your address, phone number, and service pages.',
          'Reply politely to every written review—including mixed or critical feedback—within forty-eight hours. Calm, respectful replies show prospective local buyers that a real accountable owner stands behind the shop counter.',
        ],
      },
      {
        heading: 'Common Pakistani Listing Mistakes That Cause Suspensions',
        paragraphs: [
          'Many local profiles get suspended right after small edits because owners change their business name, primary category, and street address all in the same afternoon. Another frequent mistake is listing a residential home pin while selecting storefront hours without outdoor signage, or creating duplicate pins for two phone numbers at one shop.',
          'If you operate as a service business visiting homes across a city—such as an electrician, AC technician, or private home tutor—hide your residential street address in settings and define clear service areas instead. Following straightforward rules keeps your pin active year-round without sudden downtime.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'Use your real signboard name and choose one accurate primary category.',
      'Film continuous video verification showing the street outside, your banner, and interior.',
      'Post real shop photos and keep opening hours accurate during Fridays and holidays.',
      'Ask real customers for honest written feedback instead of buying fake bulk ratings.',
      'Connect your Google Maps listing to your own website for stronger local visibility.',
    ],
    nextStepCta: {
      eyebrow: 'Need Hands-On Google Maps Setup?',
      heading: 'Get Your Google Business Profile Properly Configured',
      description:
        'Khan Marketings helps Pakistani shops, clinics, and academies fix suspended listings, structure local service pages, and connect Google Maps directly to phone calls and WhatsApp enquiries.',
      serviceOption: 'local-seo',
      primaryButtonLabel: 'Request Local SEO Help',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'seo',
      relatedLabel: 'See SEO & Google Maps Services',
    },
  },

  'guide-teachers-website': {
    route: 'guide-teachers-website',
    number: '02',
    topic: 'websites-stores',
    categoryLabel: 'Websites & Education',
    title: 'Do Teachers and Academies Need a Website?',
    excerpt:
      'How Pakistani tutors, tuition centers, and private schools win parent trust, attract students beyond one neighborhood, and organize admissions cleanly.',
    readTimeLabel: '6 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'Yes, teachers, home tutors, and coaching academies in Pakistan benefit directly from having a clear website. A clean website lets parents verify qualifications, subject schedules, campus locations, and fee enquiries in one permanent link instead of scrolling endlessly through scattered Facebook posts or WhatsApp screenshots.',
    sections: [
      {
        heading: 'Why Reliance on Street Banners and Word of Mouth Is Shrinking',
        paragraphs: [
          'Dedicated teachers across Lahore, Karachi, Islamabad, and smaller cities often built steady classes through word of mouth for years. Yet parent behavior has shifted sharply. Before paying admission fees or sending children to an academy, families look up the teacher or institute name on Google and ask for a clear link inside family WhatsApp groups.',
          'When parents search your academy name and find zero website, or only an inactive social profile from two years ago, doubt creeps in. Serious teachers who run structured O-Level, Matric, MDCAT, ECAT, IELTS, or Quran classes online need one reliable place that explains their teaching record calmly.',
          'Moreover, street pole banners around Gulberg, North Nazimabad, or Saddar disappear quickly whenever municipal cleanups happen or rain damages flex prints. A domain and website work twenty-four hours daily throughout admission season without recurring printing costs.',
        ],
      },
      {
        heading: 'What Parents Actually Look For Before Booking a Demo Class',
        paragraphs: [
          'Parents and adult learners rarely care about flashy animations or complicated student portals on day one. They want answers to five basic questions within sixty seconds on their mobile screen. If your page answers these cleanly, phone calls and admissions enquiries happen with far less back-and-forth explaining.',
          'Structuring this information clearly also separates serious academic institutions from informal setups. When mothers and fathers see transparent syllabus outlines and exact class timings, they approach the phone call ready to confirm a trial session.',
        ],
        bullets: [
          'Exact subjects, boards, or grades taught (such as Cambridge O-Level Physics or FSc Biology).',
          'Teacher background, academic credentials, and clear teaching method.',
          'Timings, city campus address or online Zoom class format, and batch start dates.',
          'Simple admission enquiry form or direct WhatsApp button with pre-filled subject details.',
          'Downloadable prospectus PDF or past student subject schedule where applicable.',
        ],
      },
      {
        heading: 'Reaching Students Outside Your Own Neighborhood',
        paragraphs: [
          'A home tutor in Johar Town or Clifton used to stay limited to students living within twenty minutes of their house. With a clean website paired with YouTube sample lessons and focused local SEO, qualified teachers attract online tuition students across Pakistan and Pakistani families living in Saudi Arabia, the UAE, and the UK.',
          'Publishing detailed subject pages helps Google understand what you teach. A dedicated page for Online O-Level Mathematics Tuition in Pakistan performs far better in search results than a general social bio that mentions five subjects in one sentence.',
          'Short embedded sample lectures on your subject pages let hesitant parents hear your voice, observe your whiteboard explanation style, and confirm English or Urdu fluency before ever dialing your WhatsApp number.',
        ],
      },
      {
        heading: 'When a Social Page Alone Is Enough vs When You Need a Site',
        paragraphs: [
          'If you teach three evening students purely from close family referrals and do not want to grow classes, a simple WhatsApp number works fine. You do not need to force software onto an operation that intentionally stays tiny.',
          'However, the moment you rent a coaching hall, teach multiple batches, run Facebook ads before admission months, or offer online tuition across cities, sending parents to an organized website saves hours of repetitive voice notes every evening.',
          'Even if you keep your classes small on purpose, a neat one-page or multi-section website lets current students download past paper schedules and holiday notices cleanly instead of messaging you individually at midnight before exams.',
        ],
      },
      {
        heading: 'Keeping the First Website Simple, Fast, and Owned by You',
        paragraphs: [
          'A practical academy website does not require an expensive custom learning system at launch. Start with a crisp four-page or six-page website: Home, Courses and Batches, About the Principal or Teacher, Results or Sample Lessons, and Admissions Contact. Always register the domain name under your own email address so your digital home remains yours permanently.',
          'Make sure every section reads comfortably on affordable Android smartphones over slower neighborhood connections. Clear black-on-cream contrast, concise Urdu or English descriptions, and instant WhatsApp admission links convert anxious exam-season visitors into confirmed trial classes.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'A permanent website link lets parents verify credentials and schedules before calling.',
      'Dedicated pages per exam or grade help teachers attract online students nationwide.',
      'Clear demo-class booking buttons cut repetitive WhatsApp explanations in half.',
      'Start lean with essential course and admission pages rather than overbuilding software.',
      'Combine sample YouTube lectures with written course breakdowns to turn visitors into students.',
    ],
    nextStepCta: {
      eyebrow: 'Built for Pakistani Educators',
      heading: 'Launch a Credible School, Academy, or Tutor Website',
      description:
        'Khan Marketings builds clear, mobile-ready education websites in English and Urdu with structured admission forms, Google Maps visibility, and YouTube lesson organization.',
      serviceOption: 'website',
      primaryButtonLabel: 'Plan Your Academy Site',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'for-teachers',
      relatedLabel: 'Explore For Teachers & Schools',
    },
  },

  'guide-facebook-vs-website': {
    route: 'guide-facebook-vs-website',
    number: '03',
    topic: 'websites-stores',
    categoryLabel: 'Websites & Digital Ownership',
    title: 'Facebook Page vs Website: What Pakistani Businesses Should Own',
    excerpt:
      'Understand why relying solely on Facebook or Instagram is rented ground, and how combining social feeds with your own domain protects long-term customer growth.',
    readTimeLabel: '6 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'Pakistani businesses should use Facebook and Instagram to spark daily discovery, while owning a real website as their permanent headquarters. Social pages are rented land where reach drops or accounts get disabled without warning, whereas a domain and website give you Google Search traffic, full buyer control, and higher customer trust.',
    sections: [
      {
        heading: 'Why Many Pakistani Businesses Start on Facebook Alone',
        paragraphs: [
          'Opening a Facebook page or Instagram handle costs nothing and takes ten minutes. You upload product photos, add a WhatsApp button, boost a post for a few days, and messages start coming in. For testing whether buyers actually like your product, starting on social platforms makes total sense.',
          'The trouble starts when a shop grows bigger and treats that social page as its complete business infrastructure. Years of product photos, customer conversations, and brand recognition sit inside an account controlled entirely by automated moderation rules.',
          'Another hidden downside is how quickly customers forget who sold to them. When a buyer scrolls through thirty sponsored clothing reels in one evening and replies via Messenger, half the time they remember the platform rather than building loyalty toward your shop name.',
        ],
      },
      {
        heading: 'The Risk of Rented Land: Reach Drops and Account Lockouts',
        paragraphs: [
          'Every business owner who posts regularly on Facebook eventually watches organic reach shrink. Pages with tens of thousands of followers regularly reach only a tiny fraction of them unless the owner pays repeatedly for ads.',
          'Worse, pages occasionally get flagged or restricted by automated systems over harmless keywords, copyright audio, or billing glitches. When support tickets sit unanswered for weeks, a shop with zero website loses its only storefront overnight.',
          'Think about your customer data as well. On social networks, you cannot export full buyer phone lists or freely reach past followers whenever an algorithm update shifts toward paid reels. Your own website and inquiry database prevent one external policy change from freezing sales.',
        ],
        bullets: [
          'Social algorithms change frequently without notice.',
          'Competitors’ sponsored ads appear directly inside your followers’ feeds.',
          'Google rarely ranks individual Instagram reels or Facebook posts for service searches.',
          'Shoppers struggle to browse twenty products cleanly inside an endless photo timeline.',
        ],
      },
      {
        heading: 'What Your Own Website Does That a Social Page Cannot',
        paragraphs: [
          'A website under your own domain acts like owning your commercial showroom instead of renting a kiosk inside a noisy bazaar. Buyers browse clear categories, read straight answers to pricing or delivery questions, and check policies without getting distracted by notifications.',
          'Just as important, Google Search indexes clean websites. When someone searches for a uniform supplier in Sialkot, a dental clinic in Bahria Town, or handmade khussa shoes online, Google looks for structured web pages rather than random social status updates.',
          'On your website, every button, heading, Urdu translation, and WhatsApp prompt follows your business workflow. Nobody interrupts your visitor with funny videos or competing offers right before checkout.',
        ],
      },
      {
        heading: 'Trust Signals for Pakistani Cash-on-Delivery and Service Buyers',
        paragraphs: [
          'Online shoppers in Pakistan deal with frequent scams from fly-by-night social pages that vanish after shipping poor quality parcels. Having an organized website with clear return terms, physical address details, matching phone numbers, and real product descriptions separates established brands from anonymous pages.',
          'B2B importers, schools, clinics, and corporate buyers almost always inspect a company website before sending formal purchase requests or inviting vendors to bid.',
          'Even for local WhatsApp buyers, sending one clean link—such as yourbusiness.pk/catalog or yourbusiness.pk/services—looks dramatically sharper than forwarding fifteen scattered gallery images that clog a customer phone memory.',
        ],
      },
      {
        heading: 'The Smart Combination: Social Discovery + Website Conversion',
        paragraphs: [
          'You never have to choose one channel against the other. Run short videos and Reels on Facebook, Instagram, and TikTok to stay visible every week, then send interested shoppers to clean landing pages or WhatsApp-linked product pages on your website. Over time, both paid ads and organic Google traffic feed one permanent asset in your own name.',
          'Install basic tracking pixels cleanly on your website so you learn which ads bring serious enquiries rather than random likes. That closed loop turns social spending into predictable, owned brand equity across Pakistan.',
          'Remember also that a fast mobile site takes only a small fraction of a typical monthly ad budget to set up once, yet stays working quietly every month afterward—answering midnight parent and buyer questions while your team sleeps.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'Social media accounts are rented space subject to reach limits and sudden restrictions.',
      'A domain and website stay permanently under your legal ownership.',
      'Google Search sends free high-intent buyers to structured service and product pages.',
      'Clear return rules, real addresses, and clean website links overcome COD buyer doubt.',
      'Use social feeds to catch attention, and your website to close confident sales.',
    ],
    nextStepCta: {
      eyebrow: 'Own Your Digital Launchpad',
      heading: 'Move Beyond Rented Social Pages With a Clean Website',
      description:
        'Khan Marketings designs fast English and Urdu websites owned 100% by your business, built to connect smoothly with your existing Facebook, Instagram, and WhatsApp.',
      serviceOption: 'website',
      primaryButtonLabel: 'Start Your Website Scope',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'website-development',
      relatedLabel: 'Explore Website Development',
    },
  },

  'guide-marketing-budget': {
    route: 'guide-marketing-budget',
    number: '04',
    topic: 'social-strategy',
    categoryLabel: 'Growth Planning & Budgets',
    title: 'How Much Should a Small Business Spend on Online Marketing?',
    excerpt:
      'An honest budgeting framework for Pakistani shops, academies, and brands—separating foundational assets, ongoing execution, and direct ad spend without inflated hype.',
    readTimeLabel: '6 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'A small Pakistani business should split marketing spending into three parts: one-time setup of permanent assets like a website and Google Business Profile, manageable monthly creative or SEO upkeep, and direct ad budget paid straight to Meta or Google. Start lean, prove local enquiries first, and scale only when margins hold steady.',
    sections: [
      {
        heading: 'Why Flat Monthly Package Charts Rarely Fit Real Businesses',
        paragraphs: [
          'Many agencies publish rigid gold, silver, and platinum tables full of vague promises like thirty posts per month. A neighborhood dental clinic in Multan, a home tuition academy in Karachi, and a nationwide unstitched fabric brand have totally different customer margins and growth priorities.',
          'Before setting any monthly budget, ask one grounded question: what does one new customer, admitted student, or delivered order bring back in net profit after product, staff, and delivery costs? Your marketing allocation should always fit safely inside real unit economics.',
          'A business selling low-margin grocery items needs repeat neighborhood frequency, whereas an interior contractor or O-Level academy only needs a handful of serious enquiries each month to cover annual goals comfortably. Copy-paste retainers ignore those numbers.',
        ],
      },
      {
        heading: 'Layer 1: Foundational Digital Assets You Pay For Once',
        paragraphs: [
          'Your first priority should go toward assets you keep permanently instead of renting month after month. That includes domain registration in your name, hosting, a clear mobile-ready website with written English or Urdu pages, Google Business Profile verification, and basic tracking pixels.',
          'Spending money on paid ads before fixing these basics leaks cash. Sending paid ad clicks to a broken page or confusing bio wastes every rupee clicked.',
          'Think of foundational work as building your physical shop fixtures: paint, shelving, signboard, and lighting get done once cleanly, and then every visitor arriving afterward has a far higher chance of buying.',
        ],
        bullets: [
          'Custom domain and SSL certificate registered under the owner email.',
          'Clear website pages showing products, services, locations, and WhatsApp call actions.',
          'Google Search Console and GA4 event tracking configured properly.',
        ],
      },
      {
        heading: 'Layer 2: Direct Ad Spend Paid Straight to Meta, TikTok, or Google',
        paragraphs: [
          'Paid advertising is optional at day one and works cleanly only when your offer already converts organically. Whenever you run Facebook, Instagram, TikTok, or Google Search ads, keep your ad billing card attached inside your own Meta Business Manager or Google Ads account.',
          'Never bundle agency management fees and ad spend into one murky cash lump where you cannot see how much reached Meta vs how much went to management. Full financial clarity protects small owners immediately.',
          'Also remember Pakistani bank card foreign-transaction taxes and withholding fees when running Meta or Google billing. Accounting for those platform deductions upfront avoids unpleasant month-end billing surprises when testing citywide campaigns.',
        ],
      },
      {
        heading: 'Layer 3: Monthly Execution When You Need Ongoing Momentum',
        paragraphs: [
          'Ongoing monthly budgets make sense once the foundation exists and someone needs to write SEO pages, create weekly Reels or graphics, answer ad signals, test new creative hooks, and improve product listings. Businesses without time to run content every week either hire in-house help or retain an accountable team for specific weekly deliverables.',
          'Rather than buying broad vague management, agree on concrete monthly outputs: for instance, two new neighborhood landing pages, four short scripted reels, weekly ad review notes, and monthly Search Console + call reporting.',
        ],
      },
      {
        heading: 'A Safe Phased Order for Tight Starting Budgets',
        paragraphs: [
          'If funds are tight during your opening months, never sign long retainers across five platforms simultaneously. Follow a strict stage-by-stage order: first make sure local searchers find you cleanly on Google Maps and WhatsApp; second build your core website; third launch small test ad sets targeting exact cities or offers you can fulfill reliably.',
          'Measure response quality over two to four weeks before increasing ad spend. Do enquiries ask real buying questions, or only chase discounts? When phone calls turn into profitable paid orders, reinvest a healthy slice of net profit into the next growth stage calmly.',
          'By keeping every cost layer transparent from day one, even a modest neighborhood shop grows steadily without gambling rent money on untested digital trends or rigid multi-month contracts.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'Separate one-time website asset costs, agency fees, and direct platform ad spend.',
      'Never run paid ads before your website, offer, and WhatsApp reply speed are ready.',
      'Always pay Meta and Google directly from your own ad account so spend stays visible.',
      'Account for Pakistani card billing taxes and delivery costs before scaling ads.',
      'Grow budgets gradually based on real enquiries and net profit, not vanity clicks.',
    ],
    nextStepCta: {
      eyebrow: 'Honest Scope Planning',
      heading: 'Get a Stage-by-Stage Scope Matched to Your Real Budget',
      description:
        'Khan Marketings recommends only what fits your current stage—whether that starts with Google Maps and a focused landing page or a full multi-channel store setup.',
      serviceOption: 'multiple',
      primaryButtonLabel: 'Ask for Free Scope Quote',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'for-small-business',
      relatedLabel: 'See Small Business Growth Tracks',
    },
  },

  'guide-what-is-seo': {
    route: 'guide-what-is-seo',
    number: '05',
    topic: 'google-seo',
    categoryLabel: 'Google Maps & SEO',
    title: 'What Is SEO? A Plain Guide for Business Owners',
    excerpt:
      'Skip confusing technical acronyms and understand how Search Engine Optimization actually helps Pakistani shops, doctors, and service companies get found on Google.',
    readTimeLabel: '7 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'SEO (Search Engine Optimization) is the process of improving your website structure, written answers, speed, and Google Business Profile so Google clearly understands what you sell and shows your business when local buyers search without you paying for every click.',
    sections: [
      {
        heading: 'SEO Explained Without Technical Jargon',
        paragraphs: [
          'Think of Google as an enormous digital librarian serving hundreds of thousands of searches across Pakistan every hour. When someone types “children dentist in DHA Lahore” or “custom school uniforms supplier Karachi,” Google looks through countless pages to present businesses that give clear, trustworthy, fast answers.',
          'Search Engine Optimization simply means organizing your website so Google reads it effortlessly and feels confident recommending your pages to buyers.',
          'Unlike mystery tricks or hidden code tweaks, good modern SEO mirrors common-sense customer service: clear headings, honest service descriptions, fast loading pages on ordinary phones, and verifiable business contact details.',
        ],
      },
      {
        heading: 'The Three Practical Parts of Real SEO',
        paragraphs: [
          'Every honest SEO program covers three connected areas. Skipping any single area slows down results, regardless of how many links someone buys.',
          'Notice how website engineering, plain copywriting, and real-world reputation depend on one another. Clean code without useful answers gives Google nothing to index, while great articles hidden inside a broken slow website frustrate mobile visitors into hitting back immediately.',
        ],
        bullets: [
          'Technical health: Fast mobile load speed on local 4G networks, HTTPS security, clean URLs, XML sitemaps, and clear heading hierarchy so Google crawls every page smoothly.',
          'Useful written content: Dedicated pages explaining each service, city area served, real process steps, and plain answers to buyer questions in English or Urdu.',
          'Local trust signals: Complete Google Business Profile details, consistent name-address-phone citations, genuine customer reviews, and clean mentions on reputable Pakistani directories.',
          'Before publishing any service page, write down the exact five questions Pakistani customers ask you most often on WhatsApp about that service, and turn each question into its own plain subheading on the page.',
        ],
      },
      {
        heading: 'Why Paid Ads Stop Overnight While SEO Compounds',
        paragraphs: [
          'Paid search and Meta ads are like turning on a water tap: the moment you pause your daily card spend, new clicks stop completely. Ads are terrific for immediate launches, admission seasons, and clearance offers.',
          'SEO builds slower during the opening three to six months, yet once informative pages establish traction, people searching every week keep finding your phone number and website organically without an escalating cost per click.',
          'In addition, strong organic pages lower future ad waste because your landing experience becomes faster, clearer, and more reassuring to every visitor clicking a paid campaign.',
        ],
      },
      {
        heading: 'What No Honest Agency Should Promise About Google Rankings',
        paragraphs: [
          'No agency controls Google’s ranking algorithm, and any serious marketer will tell you plainly that they cannot guarantee an exact slot or instant timeline. Honest agencies work transparently on measurable steps: fixing crawl errors, launching dedicated service pages, improving speed, optimizing Google Business Profiles, and tracking real organic impressions, calls, and WhatsApp clicks inside Search Console and GA4.',
          'Competition also varies sharply by industry. Ranking locally for a physiotherapy clinic in Faisalabad moves far faster than competing nationally for crowded mobile-phone or real-estate terms. Realistic timelines factor in your starting domain age, content depth, and neighborhood density.',
          'Ask any agency you hire to show monthly Search Console impressions and real call or form conversions rather than cherry-picking obscure keyword screenshots nobody in Pakistan actually types.',
        ],
      },
      {
        heading: 'Quick Checks Any Business Owner Can Verify Today',
        paragraphs: [
          'Open Google on your phone and search your own business name plus your city. Look at whether your page title clearly says what you offer, whether your pages open cleanly on mobile without sideways scrolling, and whether every major service has its own separate page rather than stuffing everything into one homepage paragraph.',
          'Also check whether your phone number and WhatsApp link remain tappable inside the header and footer of every service page. Search traffic only pays off when confused visitors do not have to hunt for a way to contact your desk.',
          'Finally, ask a friend who has never seen your website before to spend thirty seconds looking at your landing page on cellular data and tell you what you sell, which city you cover, and how to book. Any hesitation points directly to clarity improvements that help both visitors and search engines.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'SEO makes your website and Google Maps listing clear enough for Google to recommend.',
      'Strong SEO blends fast mobile pages, specific service copy, and verified local trust.',
      'Unlike paid ads, helpful organic pages keep bringing steady enquiries over time.',
      'Separate service and city pages outperform one crowded homepage summary.',
      'Avoid anyone promising overnight rankings or fixed locked positions on Google.',
    ],
    nextStepCta: {
      eyebrow: 'Search Visibility Built Cleanly',
      heading: 'Audit Your Website Structure and Local Google Visibility',
      description:
        'Khan Marketings handles technical SEO, Search Console indexing, Urdu and English content structure, and Google Maps optimization with transparent monthly reporting.',
      serviceOption: 'seo',
      primaryButtonLabel: 'Request Free SEO Review',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'seo',
      relatedLabel: 'Explore SEO & Local Maps Services',
    },
  },

  'guide-choose-agency': {
    route: 'guide-choose-agency',
    number: '06',
    topic: 'social-strategy',
    categoryLabel: 'Agency Buying Checklist',
    title: 'How to Choose a Digital Marketing Agency in Pakistan',
    excerpt:
      'An honest seven-point checklist to help Pakistani founders spot fake metrics, protect asset ownership, and pick an accountable agency before paying a single rupee.',
    readTimeLabel: '6 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'Choose a digital marketing agency in Pakistan by checking clear fundamentals: verify your domain and ad accounts stay in your own name, demand plain pricing separate from ad spend, reject unrealistic ranking promises, inspect live work speed on mobile, check whether they ask about your profit margins, and verify clear written deliverables.',
    sections: [
      {
        heading: 'Why Many Pakistani Owners Feel Burned After Hiring an Agency',
        paragraphs: [
          'Speak with ten shopkeepers, clinic directors, or startup founders in Lahore or Karachi and half of them carry a bad memory about digital agencies. Common complaints sound identical: an agency took an advance, vanished for weeks, posted generic stock templates, or refused to hand over domain logins when the client left.',
          'You avoid most of those headaches simply by asking sharp practical questions during the very first conversation.',
          'Notice how legitimate professionals welcome verification questions because transparency protects both sides from confusion later on. Evasive answers during a sales call usually predict poor accountability after payment clears.',
        ],
      },
      {
        heading: 'Check 1: Who Owns the Domain, Website Files, and Ad Accounts?',
        paragraphs: [
          'Your domain name, hosting account, Meta Business Manager, and Google Ads billing belong legally and technically to your business—never inside an agency employee’s personal email. Before starting any project, confirm in writing that all accounts get registered under your own company email and phone number with administrator access shared cleanly.',
          'Request full code backups or CMS admin logins upon website completion. If an agency insists on keeping you locked out of your own domain registrar or site dashboard, walk away calmly before writing a deposit cheque.',
        ],
      },
      {
        heading: 'Check 2: Red Flags That Signal Hype Over Substance',
        paragraphs: [
          'Serious marketers explain trade-offs clearly because every market, city, and product behaves differently. Step back cautiously whenever a pitch leans on aggressive hype or unrealistic promises.',
          'Be equally careful of vanity screenshots showing cheap post likes or huge impression counts from broad regions where your couriers or offices do not even operate. Reach without local buying intent burns cash silently.',
        ],
        bullets: [
          'Promises of instant search rankings or fixed daily sales figures without reviewing your product.',
          'Refusal to separate agency service fees from actual Meta or Google ad spend receipts.',
          'Heavy obsession with post likes and video views without connecting to calls, leads, or margin.',
          'Long annual lock-in contracts before completing an initial one-month or build milestone.',
          'Always ask to speak directly with the person writing your pages or adjusting your ad settings rather than dealing solely with a salesperson who disappears after collecting the advance cheque.',
        ],
      },
      {
        heading: 'Check 3: Test Their Communication and Mobile Execution',
        paragraphs: [
          'Watch how the agency communicates before you pay. Do they ask questions about your buyers, competitors, average order value, delivery network, and capacity to answer enquiries? Or do they rush immediately to push a fixed package price without learning how your business actually makes money?',
          'Open their own website and sample links on an ordinary mobile phone over cellular data. If their own pages load slowly, look cramped on small screens, or contain copied English templates, your site will likely look the same.',
          'Pay close attention to writing quality too. Can they write plain persuasive English and accurate Urdu RTL copy tailored to Pakistani buyers, or do they paste stiff machine translations that sound unnatural to local shoppers?',
          'Also check whether their portfolio examples show real Pakistani businesses with clear contact workflows rather than vague global graphics copied from template marketplaces.',
        ],
      },
      {
        heading: 'Check 4: Prefer Connected Teams Over Disconnected Vendors',
        paragraphs: [
          'Hiring one freelancer for a website, another for social graphics, and a third for ads often creates endless finger-pointing whenever enquiries stall. Ask who writes the actual words on your landing pages, who checks analytics events, and how website edits align with paid ad campaigns.',
          'Before signing, ask for a simple milestone plan covering week one through launch, including what access they need from you and what you receive at completion. Clear expectations create calm working relationships and steady digital progress.',
          'Taking forty-eight hours to review two agencies carefully beats rushing into a cheap offer that leaves you rebuilding your website from scratch six months later.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'Confirm 100% ownership of domains, hosting, website code, and ad accounts in writing.',
      'Step away from agencies offering unrealistic instant ranking promises or hiding ad receipts.',
      'Check if they examine your real business margins before pitching a plan.',
      'Verify live mobile speed and clear English or Urdu writing quality on their own pages.',
      'Look for transparent deliverables and clear reporting tied to enquiries, not vanity likes.',
    ],
    nextStepCta: {
      eyebrow: 'Zero Hype · Full Ownership',
      heading: 'Have a Direct, Honest Conversation Before Deciding',
      description:
        'Khan Marketings keeps every domain, file, and ad account in your name, explains clear deliverables upfront, and offers free initial discussions with zero pressure.',
      serviceOption: 'training-consulting',
      primaryButtonLabel: 'Talk With Our Team',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'about',
      relatedLabel: 'Read Our Honesty Commitments',
    },
  },

  'guide-daraz-vs-store': {
    route: 'guide-daraz-vs-store',
    number: '07',
    topic: 'websites-stores',
    categoryLabel: 'E-Commerce & COD',
    title: 'Selling on Daraz vs Your Own Online Store',
    excerpt:
      'Compare commissions, return handling, Cash on Delivery, customer data ownership, and long-term brand margins for Pakistani retail and D2C sellers.',
    readTimeLabel: '7 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'Daraz gives Pakistani sellers ready marketplace traffic right away, while charging commissions, forcing steep price competition, and hiding direct repeat-customer data. Running your own Shopify or WooCommerce Cash-on-Delivery store requires generating your own traffic via ads and Google, yet leaves full profit margin, branding, and repeat buyers under your control.',
    sections: [
      {
        heading: 'How Daraz Works Well for New Pakistani Sellers',
        paragraphs: [
          'Daraz sits on massive existing buyer intent inside Pakistan. Shoppers visit specifically ready to compare prices and buy everyday electronics, kitchen gadgets, stationery, or accessories. When you launch a new utility item without an existing brand audience, Daraz brings eyeballs immediately without building a site from zero.',
          'Daraz also manages standardized courier integration and Cash-on-Delivery settlements, which removes early technical hurdles for first-time merchants testing product demand.',
          'For wholesale traders testing five household items or checking seasonal demand across smaller towns, listing cleanly on a marketplace gives rapid feedback on pricing sensitivity and packaging strength before spending heavily on custom ad campaigns.',
        ],
      },
      {
        heading: 'Where Marketplace Selling Squeezes Your Brand Margin',
        paragraphs: [
          'Marketplace convenience carries clear trade-offs as order volume grows. Platform commissions, payment handling fees, campaign participation discounts, and shipping deductions squeeze net margins quickly—especially when several sellers upload the exact same wholesale item and fight purely on price.',
          'Even bigger for long-term stability: Daraz owns the customer relationship. Shoppers remember buying from Daraz rather than remembering your store name, and you cannot directly message past buyers via WhatsApp or email lists to launch a new collection.',
          'Settlement cycles and strict warehouse drop-off windows can also tie up working capital for smaller family brands that rely on steady weekly cash turnover to restock fabrics, packaging, or raw materials.',
        ],
        bullets: [
          'Commission deductions and discount pressure shrink per-parcel profit.',
          'Buyers compare ten lookalike listings side by side, rewarding the lowest price.',
          'Account policy changes or catalog suppression can freeze steady revenue suddenly.',
        ],
      },
      {
        heading: 'What Changes With Your Own Shopify or WooCommerce COD Store',
        paragraphs: [
          'When you own your online store connected to Pakistani couriers such as TCS, Leopards, Trax, or PostEx, shoppers enter your branded storefront directly. There are zero competing seller listings sitting beside your product photos.',
          'You control clean bundle offers, Cash-on-Delivery confirmation flows on WhatsApp to reduce fake returns, JazzCash or Easypaisa checkout options, and repeat broadcast updates to customers who already trust your parcel quality.',
          'Your store also builds searchable brand authority. People typing your brand name, unstitched suit collection, or skincare kit into Google land straight inside your checkout pages rather than browsing competing marketplace ads.',
          'When shoppers land directly on your own store, they also explore your wider product line smoothly without seeing a banner urging them to try a competitor shop on the very next scroll. That higher order basket value helps cover Courier and Meta ad charges comfortably.',
        ],
      },
      {
        heading: 'Managing Fake COD Orders and Return Ratios Honestly',
        paragraphs: [
          'Every Pakistani e-commerce store faces Cash-on-Delivery returns (RTO) if orders ship blindly. Successful independent stores tighten confirmation before dispatch: clear product sizing tables, authentic close-up fabric or hardware photos, automatic WhatsApp confirmation buttons, and smart city-level order checks cut wasted shipping charges dramatically.',
          'Keep your checkout form clean—asking only necessary delivery name, mobile number, street landmarks, and city—while sending an instant friendly WhatsApp confirmation message before handing parcels to the rider.',
          'Review city-by-city return rates monthly so you spot problematic courier routes early and switch repeat non-verified buyers smoothly toward bank transfer or mobile wallet prepayment before dispatch.',
        ],
      },
      {
        heading: 'Using Both Together Without Hurting Your Brand',
        paragraphs: [
          'Many smart Pakistani brands sell standard impulse items on Daraz for marketplace volume while dedicating their own Shopify or WooCommerce store to full collections, seasonal launches, and bundle deals. Over time, building your own store turns one-off marketplace shoppers into loyal direct buyers.',
          'Keep consistent SKUs, crisp unboxing instructions inside every parcel, and clear customer support numbers printed neatly on packing slips so first-time buyers know where your official home lives and feel confident reordering directly on WhatsApp or web checkout.',
          'Track net profit per channel every thirty days—subtracting Daraz fees, ad spend, packaging, and courier return losses—so you invest growth capital calmly into whichever storefront genuinely leaves healthier cash in your bank account rather than chasing vanity order screenshots.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'Use Daraz for fast marketplace discovery on competitive everyday items.',
      'Build your own Shopify or WooCommerce store to keep margins, branding, and buyer lists.',
      'Confirm Cash-on-Delivery orders cleanly via WhatsApp before courier dispatch.',
      'Watch settlement timing and commission fees carefully as order volume climbs.',
      'Combining marketplace sales with your own storefront prevents single-platform dependency.',
    ],
    nextStepCta: {
      eyebrow: 'Pakistani COD E-Commerce Setup',
      heading: 'Launch a Clean Online Store With Courier and WhatsApp Sync',
      description:
        'Khan Marketings sets up Shopify and WooCommerce stores tailored for Pakistan—complete with COD workflows, courier labels, Urdu/English product copy, and Meta pixel tracking.',
      serviceOption: 'ecommerce',
      primaryButtonLabel: 'Plan Your Online Store',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'services',
      relatedLabel: 'See E-Commerce Services',
    },
  },

  'guide-social-content-plan': {
    route: 'guide-social-content-plan',
    number: '08',
    topic: 'social-strategy',
    categoryLabel: 'Social Media & Content',
    title: 'A Simple Social Media Content Plan for a Local Business',
    excerpt:
      'A practical weekly posting structure using four repeatable content types that Pakistani shops, clinics, and teachers can film on a phone without burning out.',
    readTimeLabel: '6 min read',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    answerFirstTitle: 'Quick Answer',
    answerFirstSummary:
      'A realistic social media plan for a local Pakistani business needs just three to four posts a week rotated across four pillars: real customer questions answered, behind-the-scenes work proof, clear product or service showcases, and neighborhood call-to-action posts linking straight to WhatsApp or Google Maps.',
    sections: [
      {
        heading: 'Why Daily Random Posters Burn Out Without Winning Buyers',
        paragraphs: [
          'Most shop owners start posting with intense energy for ten days, upload generic graphic quotes or festival wishes, notice minimal replies, and quit completely for three months. Posting every single day without purpose wastes hours and teaches customers very little about why they should buy from you.',
          'Consistency beats volume. Three grounded posts per week filmed directly at your counter, kitchen, clinic, or classroom outperform thirty generic Canva templates downloaded from the internet.',
          'When local families scroll Facebook or Instagram late at night, they pause on real faces, honest product demonstrations, and recognizable Pakistani workplaces—not polished stock posters that look like every other inactive page.',
        ],
      },
      {
        heading: 'Four Simple Content Pillars You Can Repeat Every Week',
        paragraphs: [
          'Stop inventing brand-new creative ideas from scratch every Monday morning. Rotate your weekly schedule smoothly across these four straightforward categories.',
          'Having fixed categories removes writer block completely. You already answer customer doubts all day long on phone calls and WhatsApp; turning those exact answers into sixty-second clips builds a library that sells for months.',
        ],
        bullets: [
          'Pillar 1 — Answer one real customer question: Record a 30-second phone video answering something buyers ask daily on WhatsApp, like fabric washing care, delivery times, or admission rules.',
          'Pillar 2 — Show real work happening: Film fresh stock arriving, parcels getting packed cleanly, equipment sanitization, or a whiteboard class moment so people trust you are active.',
          'Pillar 3 — Spotlight one clear offer: Show a single product, service package, or batch schedule with plain pricing guidance or clear next steps rather than cramming ten items into one image.',
          'Pillar 4 — Location and contact reminder: Remind nearby buyers clearly which neighborhood or market you sit in, your open timings, and your WhatsApp number.',
        ],
      },
      {
        heading: 'Filming Clean Videos With an Ordinary Smartphone',
        paragraphs: [
          'Expensive DSLR cameras are rarely needed for local Instagram Reels, Facebook Reels, or TikTok clips. Stand facing natural daylight or a shop LED light, wipe the phone lens clean, keep your phone steady, and speak clearly in simple Urdu or English.',
          'Add clear Urdu or English text captions on screen during the opening three seconds so viewers scrolling silently in buses, offices, or homes immediately understand the topic.',
          'Record four short clips back-to-back on one quiet morning—such as Sunday before opening hours or Friday morning—so the entire week gets prepared in forty minutes without disrupting daily customer service.',
          'Remember also to speak naturally in the language your buyers actually text you in—whether Urdu, Roman Urdu, or simple clear English—so neighbors feel like they are hearing from a real helpful shopkeeper rather than reading a cold textbook notice.',
        ],
      },
      {
        heading: 'Turning Views Into WhatsApp Messages and Calls',
        paragraphs: [
          'Views never pay shop rent unless interested viewers know what to do next. End every caption and short video with one calm action: message “PRICE” or your neighborhood name on WhatsApp, tap the website link in your bio, or search your exact name on Google Maps.',
          'Reply fast and warmly when messages land. Even a strong video loses sales if prospects wait sixteen hours for a cold one-word price reply without helpful sizing, timing, or delivery explanation.',
        ],
      },
      {
        heading: 'A Sample 3-Post Weekly Schedule Any Owner Can Keep',
        paragraphs: [
          'Monday: Short FAQ video answering one common buyer doubt. Wednesday: Behind-the-scenes photo carousel or reel showing real orders, patients, or classes. Friday or Saturday: Clear offer spotlight with exact store location, open hours, and WhatsApp link. Four honest weeks give you sixteen helpful assets that build real local familiarity.',
          'Once a month, check which single post sparked the most real WhatsApp chats or profile visits—not just likes—and film two more variations on that exact buyer topic next month.',
          'Save those winning explanations inside your website FAQs and WhatsApp Quick Replies as well. Over one season, your everyday shop answers turn into a durable local growth engine.',
        ],
      },
    ],
    keyTakeawaysTitle: 'Key Takeaways',
    keyTakeaways: [
      'Three practical posts weekly beat thirty empty holiday quotes or copied templates.',
      'Rotate across buyer FAQs, real behind-the-scenes proof, clear offers, and directions.',
      'Natural daylight and clear on-screen captions matter far more than expensive cameras.',
      'Batch-film short weekly clips in one quiet hour so daily counter work stays smooth.',
      'Always end posts with one simple WhatsApp, website, or Google Maps next step.',
    ],
    nextStepCta: {
      eyebrow: 'Consistent Local Content',
      heading: 'Turn Weekly Content Into Organized WhatsApp Enquiries',
      description:
        'Khan Marketings plans bilingual Urdu and English content calendars, Reel hooks, WhatsApp catalogs, and targeted Meta campaigns built cleanly around real business offers.',
      serviceOption: 'social',
      primaryButtonLabel: 'Plan Your Social Content',
      whatsappLabel: 'WhatsApp 0321-2995766',
      relatedRoute: 'social-media-marketing',
      relatedLabel: 'See Social Media Services',
    },
  },
};
