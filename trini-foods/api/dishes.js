// Vercel Serverless Function - GET /api/dishes
// Returns the list of featured Trinidad dishes

const dishes = [
  {
    id: 1,
    name: "Doubles",
    icon: "🫓",
    origin: "Indo-Trinidadian",
    description: "Two soft fried bara filled with curried chickpeas (channa), topped with tamarind, cucumber chutney, and pepper sauce. The undisputed king of Trini street food."
  },
  {
    id: 2,
    name: "Pelau",
    icon: "🍛",
    origin: "Creole · One-Pot",
    description: "Caramelized chicken simmered with rice, pigeon peas, coconut milk, and fresh herbs. A Sunday classic that tells the whole story of the islands in one pot."
  },
  {
    id: 3,
    name: "Bake & Shark",
    icon: "🐟",
    origin: "Maracas Bay",
    description: "Crispy fried shark (or kingfish) tucked inside golden fry bake, dressed with tamarind, mango chow, garlic sauce, and shadon beni. Beach food perfection."
  },
  {
    id: 4,
    name: "Roti & Curry",
    icon: "🌯",
    origin: "Indo-Trinidadian",
    description: "Soft buss-up-shut or dhalpuri roti served with curry goat, chicken, or duck. Slow-cooked, deeply spiced, and unmistakably Trini."
  },
  {
    id: 5,
    name: "Callaloo",
    icon: "🥬",
    origin: "Afro-Caribbean",
    description: "Dasheen leaves, okra, coconut milk, and crab simmered into a thick, silky soup. The Sunday lunch staple, often eaten with stewed chicken and rice."
  },
  {
    id: 6,
    name: "Macaroni Pie",
    icon: "🧀",
    origin: "Trini Comfort",
    description: "Baked macaroni with sharp cheddar, evaporated milk, and a kick of pepper. Crispy on top, creamy underneath — never call it mac and cheese."
  }
];

export default function handler(req, res) {
  // Allow CORS for development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.status(200).json(dishes);
}
