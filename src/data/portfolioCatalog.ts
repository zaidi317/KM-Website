export type PortfolioCategory = 'all' | 'education' | 'local-services';

export interface PakistaniNicheSite {
  id: string;
  domain: string;
  url: string;
  category: Exclude<PortfolioCategory, 'all'>;
  city: string;
  accentColor: string;
  en: {
    name: string;
    niche: string;
    summary: string;
    highlights: string[];
  };
  ur: {
    name: string;
    niche: string;
    summary: string;
    highlights: string[];
  };
}

export const PAKISTANI_NICHE_CATALOG: PakistaniNicheSite[] = [
  {
    id: 'tuition-pk',
    domain: 'tuition.pk',
    url: 'https://tuition.pk',
    category: 'education',
    city: 'Lahore · Karachi',
    accentColor: '#164237',
    en: {
      name: 'Tuition.pk',
      niche: 'Home & Online Teachers',
      summary:
        'A practical Pakistani tuition directory connecting parents with vetted school subject teachers for Matric, FSc, and O/A Levels.',
      highlights: ['Subject & city search', 'Teacher profile pages', 'Direct enquiry form'],
    },
    ur: {
      name: 'Tuition.pk',
      niche: 'ہوم اور آن لائن اساتذہ',
      summary:
        'والدین کو میٹرک، ایف ایس سی اور او/اے لیول کے مستند مضامین کے اساتذہ سے جوڑنے والا سادہ اور کارآمد پاکستانی پلیٹ فارم۔',
      highlights: ['شہر اور مضمون کے لحاظ سے تلاش', 'اساتذہ کے تعارفی صفحات', 'براہِ راست رابطہ فارم'],
    },
  },
  {
    id: 'itutor-pk',
    domain: 'itutor.pk',
    url: 'https://itutor.pk',
    category: 'education',
    city: 'Islamabad · Lahore',
    accentColor: '#8A5E1B',
    en: {
      name: 'iTutor.pk',
      niche: 'Private School Tutors',
      summary:
        'Straightforward tutoring portal focused on helping school students find qualified home and online subject teachers without clutter.',
      highlights: ['Grade-level filtering', 'Clear parent request flow', 'Mobile-friendly layout'],
    },
    ur: {
      name: 'iTutor.pk',
      niche: 'پرائیویٹ اسکول ٹیوٹرز',
      summary:
        'اسکول کے طلبہ اور والدین کے لیے گھر پر یا آن لائن پڑھانے والے قابل اساتذہ تلاش کرنے کی صاف ستھری ویب سائٹ۔',
      highlights: ['کلاس کے مطابق فلٹر', 'والدین کے لیے آسان درخواست فارم', 'موبائل فرینڈلی ڈیزائن'],
    },
  },
  {
    id: 'theclass-pk',
    domain: 'theclass.pk',
    url: 'https://theclass.pk',
    category: 'education',
    city: 'Pakistan-wide',
    accentColor: '#1E3A5F',
    en: {
      name: 'The Class',
      niche: 'Small-Group & Homeschooling',
      summary:
        'Focused online schooling and small-batch tuition site tailored for Pakistani families seeking structured weekly teacher guidance.',
      highlights: ['Clear curriculum overview', 'Weekly batch timetable', 'Parent consultation CTA'],
    },
    ur: {
      name: 'The Class',
      niche: 'آن لائن اسکول اور ہوم اسکولنگ',
      summary:
        'پاکستانی خاندانوں کے لیے منظم ہوم اسکولنگ اور مختصر گروپ ٹیوشن کی وضاحت پیش کرنے والی تعلیمی ویب سائٹ۔',
      highlights: ['نصاب کی سادہ وضاحت', 'ہفتہ وار کلاس شیڈول', 'والدین کے لیے مشاورت بٹن'],
    },
  },
  {
    id: 'learners-academy',
    domain: 'learnersacademy.com.pk',
    url: 'https://learnersacademy.com.pk',
    category: 'education',
    city: 'Karachi',
    accentColor: '#2B4C3F',
    en: {
      name: 'Learners Academy',
      niche: 'IGCSE & O/A-Level Coaching',
      summary:
        'Independent coaching institute website presenting subject tracks, teacher credentials, and fast WhatsApp admission enquiries.',
      highlights: ['Subject-wise syllabus notes', 'Teacher introduction cards', 'Quick admission enquiry'],
    },
    ur: {
      name: 'لرنرز اکیڈمی',
      niche: 'IGCSE اور O/A لیول کوچنگ',
      summary:
        'مضامین کی تفصیل، اساتذہ کا تعارف اور داخلے کے فوری رابطے پر مبنی ایک متوازن کوچنگ اکیڈمی کی ویب سائٹ۔',
      highlights: ['مضامین کے مطابق تفصیل', 'اساتذہ کا تعارف', 'فوری داخلہ انکوائری'],
    },
  },
  {
    id: 'the-academy-school',
    domain: 'theacademy.edu.pk',
    url: 'https://theacademy.edu.pk',
    category: 'education',
    city: 'Karachi',
    accentColor: '#3B4252',
    en: {
      name: 'The Academy School',
      niche: 'Neighborhood K–12 School',
      summary:
        'Community-focused K–12 school website built to give parents campus locations, admission dates, and academic calendar clarity.',
      highlights: ['Campus directory', 'Admission procedure guide', 'Parent notices section'],
    },
    ur: {
      name: 'دی اکیڈمی اسکول',
      niche: 'مقامی K-12 اسکول',
      summary:
        'والدین کو کیمپس کی معلومات، داخلے کے مراحل اور تعلیمی کیلنڈر واضح طور پر دکھانے والی مقامی اسکول کی ویب سائٹ۔',
      highlights: ['کیمپس کی تفصیلات', 'داخلے کا آسان طریقہ کار', 'والدین کے لیے اعلانات'],
    },
  },
  {
    id: 'edupark-pk',
    domain: 'edupark.pk',
    url: 'https://edupark.pk',
    category: 'education',
    city: 'Lahore',
    accentColor: '#6B4423',
    en: {
      name: 'EduPark.pk',
      niche: 'Entry Test & Academic Prep',
      summary:
        'Local Pakistani prep portal helping students organize MDCAT, ECAT, and school subject preparation with clear course outlines.',
      highlights: ['Exam track pages', 'Structured study resources', 'Student registration form'],
    },
    ur: {
      name: 'EduPark.pk',
      niche: 'انٹری ٹیسٹ اور تعلیمی تیاری',
      summary:
        'طلبہ کو MDCAT، ECAT اور اسکول مضامین کی تیاری کے لیے واضح کورس خاکے فراہم کرنے والی پاکستانی تعلیمی ویب سائٹ۔',
      highlights: ['امتحانی کورسز کے صفحات', 'منظم تعلیمی مواد', 'طلبہ کی رجسٹریشن'],
    },
  },
  {
    id: 'sabaq-squad',
    domain: 'sabaqsquad.com',
    url: 'https://sabaqsquad.com',
    category: 'education',
    city: 'Rawalpindi · Islamabad',
    accentColor: '#164237',
    en: {
      name: 'Sabaq Squad',
      niche: 'Teacher-Led Exam Coaching',
      summary:
        'Modest student-support website offering topic summaries, teacher-guided practice notes, and straightforward registration.',
      highlights: ['Subject playlists', 'Simple navigation', 'Fast mobile reading'],
    },
    ur: {
      name: 'سبق اسکواڈ',
      niche: 'اساتذہ کی رہنمائی میں امتحان کی تیاری',
      summary:
        'موضوعاتی خلاصے، اساتذہ کے نوٹس اور سادہ رجسٹریشن کے ساتھ طلبہ کی مدد کے لیے تیار کردہ تعلیمی ویب سائٹ۔',
      highlights: ['مضامین کی درجہ بندی', 'آسان نیویگیشن', 'موبائل پر تیز مطالعہ'],
    },
  },
  {
    id: 'london-dental-karachi',
    domain: 'londondentalclinic.com.pk',
    url: 'https://londondentalclinic.com.pk',
    category: 'local-services',
    city: 'Karachi',
    accentColor: '#1E4D40',
    en: {
      name: 'London Dental Clinic',
      niche: 'Neighborhood Dental Practice',
      summary:
        'Clean local clinic site presenting treatment pages, practitioner qualifications, clinic timings, and direct phone booking.',
      highlights: ['Clear treatment menu', 'Doctor profile & hours', 'Click-to-call appointment'],
    },
    ur: {
      name: 'لندن ڈینٹل کلینک',
      niche: 'مقامی ڈینٹل کلینک',
      summary:
        'علاج کی تفصیلات، ڈاکٹر کا تعارف، کلینک کے اوقات اور فون پر اپائنٹمنٹ کی سہولت پیش کرنے والی سادہ کلینک ویب سائٹ۔',
      highlights: ['علاج کی واضح فہرست', 'ڈاکٹر اور اوقاتِ کار', 'براہِ راست کال بٹن'],
    },
  },
  {
    id: 'smile-pro-clinic',
    domain: 'smileproclinic.com',
    url: 'https://smileproclinic.com',
    category: 'local-services',
    city: 'Lahore',
    accentColor: '#2E4C5E',
    en: {
      name: 'Smile Pro Clinic',
      niche: 'Family Dental & Hygiene',
      summary:
        'Focused dental care website explaining routine checkups, braces, and root canal care in clear everyday language for local families.',
      highlights: ['Plain-language service pages', 'Before-visit FAQs', 'Local map & phone contact'],
    },
    ur: {
      name: 'اسمائل پرو کلینک',
      niche: 'فیملی ڈینٹل کیئر',
      summary:
        'خاندانوں کے لیے دانتوں کے معائنے اور علاج کو عام فہم انداز میں بیان کرنے والی مقامی ڈینٹل ویب سائٹ۔',
      highlights: ['سادہ زبان میں خدمات', 'مریضوں کے عام سوالات', 'لوکیشن اور فون رابطہ'],
    },
  },
  {
    id: 'tayyib-bakery',
    domain: 'tayyib.pk',
    url: 'https://tayyib.pk',
    category: 'local-services',
    city: 'Lahore',
    accentColor: '#7A4B2A',
    en: {
      name: 'Tayyib Store & Bakery',
      niche: 'Neighborhood Artisanal Bakery',
      summary:
        'Down-to-earth Lahore bakery storefront displaying daily bread, pastries, local delivery zones, and direct order options.',
      highlights: ['Clean product catalog', 'City delivery info', 'WhatsApp & COD ordering'],
    },
    ur: {
      name: 'طیب اسٹور اینڈ بیکری',
      niche: 'مقامی بیکری اور اسٹور',
      summary:
        'روزمرہ بیکری مصنوعات، لاہور میں ڈیلیوری کی معلومات اور سادہ آرڈر سسٹم دکھانے والی مقامی کاروباری ویب سائٹ۔',
      highlights: ['مصنوعات کی صاف فہرست', 'شہر میں ڈیلیوری کی تفصیل', 'کیش آن ڈیلیوری اور واٹس ایپ'],
    },
  },
  {
    id: 'mahmood-pharmacy',
    domain: 'mahmoodpharmacy.com.pk',
    url: 'https://mahmoodpharmacy.com.pk',
    category: 'local-services',
    city: 'Lahore',
    accentColor: '#164237',
    en: {
      name: 'Mahmood Pharmacy',
      niche: 'Family Retail Pharmacy',
      summary:
        'Trustworthy neighborhood pharmacy site structured around branch locations, prescription enquiries, and everyday healthcare essentials.',
      highlights: ['Branch locator details', 'Prescription order help', 'Verified store trust cues'],
    },
    ur: {
      name: 'محمود فارمیسی',
      niche: 'فیملی ریٹیل فارمیسی',
      summary:
        'برانچز کے پتے، نسخے کے مطابق دوائی کی معلومات اور روزمرہ صحت کی اشیاء پیش کرنے والی قابلِ اعتماد مقامی فارمیسی ویب سائٹ۔',
      highlights: ['برانچ کی تفصیلات', 'نسخے کی معلومات میں رہنمائی', 'سادہ اور قابلِ اعتماد ترتیب'],
    },
  },
  {
    id: 'ferozsons-books',
    domain: 'ferozsons.com.pk',
    url: 'https://ferozsons.com.pk',
    category: 'local-services',
    city: 'Lahore · Karachi',
    accentColor: '#5B3A29',
    en: {
      name: 'Ferozsons',
      niche: 'Academic & School Bookshop',
      summary:
        'Classic Pakistani bookshop portal organized by school textbooks, Urdu literature, and stationery categories for quick browsing.',
      highlights: ['Curriculum book categories', 'Searchable catalog', 'Nationwide order dispatch'],
    },
    ur: {
      name: 'فیروزسنز بک شاپ',
      niche: 'اسکول اور تعلیمی کتب خانہ',
      summary:
        'اسکول کی درسی کتب، اردو ادب اور اسٹیشنری کی آسان درجہ بندی کے ساتھ پاکستانی کتب خانے کی ویب سائٹ۔',
      highlights: ['نصاب کے مطابق کتب کی اقسام', 'آسان سرچ سسٹم', 'ملک بھر میں ترسیل'],
    },
  },
];

export function filterAndPickRandomSites(
  catalog: PakistaniNicheSite[],
  category: PortfolioCategory,
  count: number = 6,
  previousIds: string[] = [],
  rng: () => number = Math.random
): PakistaniNicheSite[] {
  const pool =
    category === 'all' ? catalog : catalog.filter((item) => item.category === category);

  if (pool.length <= count) {
    // Shuffle even when pool <= count so clicking "Randomize" changes card order
    const copy = [...pool];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Prefer items not shown in the previous batch when possible
  const fresh = pool.filter((item) => !previousIds.includes(item.id));
  const stale = pool.filter((item) => previousIds.includes(item.id));

  const shuffle = (arr: PakistaniNicheSite[]) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  return [...shuffle(fresh), ...shuffle(stale)].slice(0, count);
}
