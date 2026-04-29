// Vercel Serverless Function - GET /api/culture
// Returns cultural influences and historical timeline for Trinidad & Tobago cuisine

const cultureData = {
  influences: [
    {
      id: 1,
      name: "Indigenous Amerindian",
      flag: "🌿",
      era: "Pre-1498 · The First Cooks",
      color: "#2D5016",
      description: "The Kalinago and Taino peoples gave Trinidad its first foodways — cassava, corn, sweet potato, fish smoked over green wood. Pepperpot stew traces straight back to them.",
      dishes: ["Cassava Bread", "Pepperpot", "Smoked Fish", "Corn Pone"]
    },
    {
      id: 2,
      name: "Spanish",
      flag: "🇪🇸",
      era: "1498–1797 · Colonial Era",
      color: "#CE1126",
      description: "Spain ruled for nearly 300 years and brought rice, citrus, garlic, olive oil, and the love of one-pot cooking that became pelau.",
      dishes: ["Pastelles", "Arepa", "Sancoche", "Pelau roots"]
    },
    {
      id: 3,
      name: "West African",
      flag: "🌾",
      era: "1700s–1834 · Diaspora",
      color: "#E8B547",
      description: "Enslaved Africans carried with them okra, dasheen leaves (callaloo), pigeon peas, and a genius for stretching ingredients into nourishing meals. Callaloo, coo-coo, and the soul of Sunday lunch are theirs.",
      dishes: ["Callaloo", "Coo-coo", "Souse", "Stew Chicken"]
    },
    {
      id: 4,
      name: "French Creole",
      flag: "🥖",
      era: "1783 onward · Cedula of Population",
      color: "#FF6B5B",
      description: "French planters and free people of color from the Caribbean brought patisserie, herbs, and the creole sensibility — layered seasonings, slow stews, and sweet bread traditions.",
      dishes: ["Pain au Beurre", "Accra", "Stew Beef", "Crab & Dumpling"]
    },
    {
      id: 5,
      name: "Indo-Trinidadian",
      flag: "🇮🇳",
      era: "1845–1917 · Indentureship",
      color: "#B8860B",
      description: "Indentured laborers from India — primarily Bhojpuri-speaking — transformed the Trini plate forever. Roti, curry, doubles, channa, sahina, kachori. No Trinidadian eats without their legacy.",
      dishes: ["Doubles", "Roti", "Curry Goat", "Pholourie", "Sahina"]
    },
    {
      id: 6,
      name: "Chinese",
      flag: "🐉",
      era: "1853 onward · The Hakka Wave",
      color: "#000000",
      description: "Chinese laborers and later merchants opened shops, restaurants, and bakeries that defined Trini-Chinese fusion. Chow mein with pepper sauce. Pork fried rice on a Saturday.",
      dishes: ["Chow Mein", "Pork Fried Rice", "Char Siu", "Wonton"]
    },
    {
      id: 7,
      name: "Lebanese / Syrian",
      flag: "🫒",
      era: "Late 1800s · Trade & Settlement",
      color: "#8B4513",
      description: "Syrian-Lebanese immigrants brought hummus, kibbeh, baklava, and the tradition of mezze. Today their flavors are woven into upscale and everyday Trini dining alike.",
      dishes: ["Kibbeh", "Hummus", "Baklava", "Stuffed Grape Leaves"]
    }
  ],

  timeline: [
    {
      year: "Pre-1498",
      title: "The Original Kitchens",
      description: "Indigenous Kalinago and Taino communities cultivate cassava, corn, peppers, and beans. Cassava bread and pepperpot — still eaten today — are perfected over centuries."
    },
    {
      year: "1498",
      title: "Columbus Arrives",
      description: "Spanish colonization begins. Citrus trees, rice, and sugarcane are introduced. The Caribbean food map starts to redraw itself."
    },
    {
      year: "1700s",
      title: "African Foodways Take Root",
      description: "Enslaved West Africans bring okra, callaloo, plantain, and pigeon peas. They create dishes from the scraps and seasonings they're given — and those dishes become the heart of Trini cooking."
    },
    {
      year: "1797",
      title: "British Takeover",
      description: "Britain seizes Trinidad from Spain. Tea, baked goods, and the formal Sunday meal structure enter the cuisine."
    },
    {
      year: "1845",
      title: "The Fatel Razack Arrives",
      description: "The first ship of Indian indentured laborers lands in Trinidad. Over the next 72 years, 147,000+ Indians arrive — bringing curry, roti, dhal, and the future of Trini food."
    },
    {
      year: "1853",
      title: "Chinese Migration Begins",
      description: "Chinese indentured workers and Hakka merchants arrive. Pepper sauce, soy, ginger, and stir-frying join the Trini kitchen."
    },
    {
      year: "1936",
      title: "Doubles is Born",
      description: "Mamoo Deen of Princes Town invents what becomes the national breakfast — two bara wrapped around curried channa. A customer's request for 'double' gives the dish its name."
    },
    {
      year: "1962",
      title: "Independence",
      description: "Trinidad & Tobago becomes an independent nation. The cuisine — already a fusion of seven cultures — becomes a source of national pride and identity."
    },
    {
      year: "Today",
      title: "A Living, Cooking Heritage",
      description: "Trini food is cooked in London, Toronto, New York, Lagos, and Mumbai. Every Trini abroad is a chef-ambassador. The story keeps simmering."
    }
  ]
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.status(200).json(cultureData);
}
