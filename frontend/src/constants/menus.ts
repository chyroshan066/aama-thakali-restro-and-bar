import { Menu, MenuType } from "@/types";

const PASTA_LIST: MenuType[] = [
  {
    title: "Choice of Penne or Spaghetti",
    cost: "695",
  },
  {
    title: "Cream Sauce with Olive Mushroom Pasta",
    cost: "795",
  },
  {
    title: "Carbonara Pasta",
    cost: "795",
  },
  {
    title: "Bolognese Pasta",
    cost: "995",
  },
];

const MERAKI_SEPCIAL_LIST: MenuType[] = [
  {
    title: "Chicken Burger",
    cost: "695",
  },
  {
    title: "Ham Burger",
    cost: "995",
  },
  {
    title: "Local Fish Fillet",
    cost: "1195",
  },
  {
    title: "Whole Rainbow Trout",
    cost: "1595",
  },
  {
    title: "Norwegian Salmon Steak",
    cost: "2595",
  },
];

const MOUSSAKA_LIST: MenuType[] = [
  {
    title: "Spinach Potatoes",
    cost: "695",
  },
  {
    title: "Vegetable",
    cost: "695",
  },
  {
    title: "Chicken",
    cost: "795",
  },
  {
    title: "Fish",
    cost: "895",
  },
  {
    title: "Lamb",
    cost: "995",
  },
  {
    title: "Turkish",
    cost: "995",
  },
];

const FLAVOUR_OF_INDIA_LIST: MenuType[] = [
  {
    title: "Dal Tadka",
    cost: "",
  },
  {
    title: "Dal Makhni",
    cost: "",
  },
  {
    title: "Palak Paneer",
    cost: "",
  },
  {
    title: "Mixed Veg Curry",
    cost: "",
  },
  {
    title: "Chicken Curry",
    cost: "",
  },
  {
    title: "Panner Butter Masala",
    cost: "",
  },
  {
    title: "Chicken Butter Masala",
    cost: "",
  },
];

const COFFEE_LIST: MenuType[] = [
  {
    title: "Espresso",
    cost: "150",
  },
  {
    title: "Double Espresso",
    cost: "200",
  },
  {
    title: "Americano",
    cost: "295",
  },
  {
    title: "Cappuccino",
    cost: "400",
  },
  {
    title: "Cafe Latte",
    cost: "400",
  },
  {
    title: "Flavoured Latte",
    cost: "495",
  },
  {
    title: "Iced Americano",
    cost: "350",
  },
  {
    title: "Iced Coffee with Milk",
    cost: "400",
  },
  {
    title: "Espresso Macchiato",
    cost: "300",
  },
  {
    title: "Flat White",
    cost: "400",
  },
  {
    title: "Blended Moccha",
    cost: "695",
  },
  {
    title: "Irish Coffee",
    cost: "800",
  },
];

const TEA_LIST: MenuType[] = [
  {
    title: "Fresh Lemon Tea",
    cost: "110",
  },
  {
    title: "Ginger Tea",
    cost: "110",
  },
  {
    title: "Green Tea",
    cost: "110",
  },
  {
    title: "Ginger Lemon Tea",
    cost: "130",
  },
  {
    title: "Black Tea",
    cost: "110",
  },
  {
    title: "Fresh Mint Tea",
    cost: "150",
  },
  {
    title: "Pot of Tea 1000ML",
    cost: "600",
  },
  {
    title: "Nepali Spiced Milk Tea",
    cost: "200",
  },
  {
    title: "Meraki Ginger Warmer",
    cost: "200",
  },
  {
    title: "Herbal Tea",
    cost: "110",
  },
  {
    title: "Flavour Ice Tea",
    cost: "300",
  },
];

const NON_COFFEE_LIST: MenuType[] = [
  {
    title: "Refreshing Lemonade",
    cost: "200",
  },
  {
    title: "Fresh Mint Lemonade",
    cost: "295",
  },
  {
    title: "Plain Lassi",
    cost: "300",
  },
  {
    title: "Seasonal Fresh Fruit Lassi",
    cost: "400",
  },
  {
    title: "Plain Milkshake",
    cost: "250",
  },
  {
    title: "Seasonal Fresh Fruit Milkshake",
    cost: "400",
  },
  {
    title: "Ice-Cream Milkshake",
    cost: "500",
  },
  {
    title: "Seasonal Fresh Fruit Juice",
    cost: "400",
  },
  {
    title: "Seasonal Fresh Fruit Smoothie",
    cost: "550",
  },
  {
    title: "Hot Chocolate",
    cost: "400",
  },
];

const SOFT_DRINKS_LIST: MenuType[] = [
  {
    title: "Mineral Water",
    cost: "100",
  },
  {
    title: "Soda Water",
    cost: "110",
  },
  {
    title: "Coke, Fanta and Sprite",
    cost: "110",
  },
  {
    title: "Fresh Lemon Soda",
    cost: "195",
  },
];

const MERAKIS_BREAKFAST_LIST: MenuType[] = [
  {
    title: "Meraki Special Breakfast",
    cost: "895",
  },
  {
    title: "Turkish Breakfast",
    cost: "995",
  },
  {
    title: "Simple Breakfast",
    cost: "595",
  },
  {
    title: "Belegtes Brotchen (Sandwitch)",
    cost: "495",
  },
  {
    title: "Chinese Omelette",
    cost: "395",
  },
  {
    title: "Masala Omelette",
    cost: "395",
  },
  {
    title: "Plain Omelette",
    cost: "295",
  },
  {
    title: "Banana Porridge",
    cost: "395",
  },
  {
    title: "Muesli with Fresh Fruit Yogurt",
    cost: "695",
  },
];

const DESSERTS_LIST: MenuType[] = [
  {
    title: "Chocolate Brownie",
    cost: "400",
  },
  {
    title: "Cheese Cake",
    cost: "450",
  },
  {
    title: "Carrot Cake",
    cost: "400",
  },
];

const CLASSIC_COCKTAILS_LIST: MenuType[] = [
  {
    title: "Negroni",
    cost: "1000",
  },
  {
    title: "Mojito",
    cost: "950",
  },
  {
    title: "Old Fashioned",
    cost: "950",
  },
  {
    title: "Whiskey Sour",
    cost: "950",
  },
  {
    title: "Pinacolada",
    cost: "1000",
  },
  {
    title: "Margarita",
    cost: "950",
  },
  {
    title: "Sex on the Beach",
    cost: "950",
  },
  {
    title: "Long Island Ice Tea",
    cost: "950",
  },
  {
    title: "Espresso Martini",
    cost: "950",
  },
  {
    title: "Cosmopolitan",
    cost: "950",
  },
  {
    title: "Gin and Tonic",
    cost: "950",
  },
  {
    title: "Sangria",
    cost: "950",
  },
];

const MOCKTAILS_LIST: MenuType[] = [
  {
    title: "virgin Mojito",
    cost: "495",
  },
  {
    title: "Virgin Colada",
    cost: "495",
  },
  {
    title: "Blue Lagon",
    cost: "495",
  },
  {
    title: "Fruit Punch",
    cost: "495",
  },
  {
    title: "Fresh Mint - Lemonade",
    cost: "295",
  },
  {
    title: "Refreshing Lemonade",
    cost: "200",
  },
];

const BOTTLE_BEERS_LIST: MenuType[] = [
  {
    title: "Gorkha Strong",
    cost: "695",
  },
  {
    title: "Nepal Ice",
    cost: "695",
  },
  {
    title: "Tuborg",
    cost: "795",
  },
  {
    title: "Carlseberg",
    cost: "900",
  },
  {
    title: "Heineken Beer 330ML",
    cost: "690",
  },
  {
    title: "Corona",
    cost: "690",
  },
  {
    title: "Somersby Apple Cider",
    cost: "450",
  },
];

const DRAUGHT_BEER_SHERPA_LIST: MenuType[] = [
  {
    title: "Khumbukolsch",
    cost: "750",
  },
  {
    title: "Himalayan Red",
    cost: "750",
  },
  {
    title: "IPA",
    cost: "750",
  },
];

const IMPORTED_SPIRITS_LIST: MenuType[] = [
  {
    title: "Hapusa Himalayan Gin - 30ML",
    cost: "550",
  },
  {
    title: "Hapusa Himalayan Gin - 60ML",
    cost: "1050",
  },
  {
    title: "Greater than Gin - 30ML",
    cost: "400",
  },
  {
    title: "Greater than Gin - 60ML",
    cost: "750",
  },
  {
    title: "Blue Label - 30ML",
    cost: "2300",
  },
  {
    title: "Blue Label - 60ML",
    cost: "4500",
  },
  {
    title: "Double Black Label - 30ML",
    cost: "630",
  },
  {
    title: "Double Black Label - 60ML",
    cost: "1200",
  },
  {
    title: "Black Label - 30ML",
    cost: "450",
  },
  {
    title: "Black Label - 60ML",
    cost: "800",
  },
  {
    title: "Makers Mark - 30ML",
    cost: "500",
  },
  {
    title: "Makers Mark - 60ML",
    cost: "950",
  },
  {
    title: "Jim Beam - 30ML",
    cost: "490",
  },
  {
    title: "Jim Beam - 60ML",
    cost: "900",
  },
  {
    title: "Absolut Vodka - 30ML",
    cost: "475",
  },
  {
    title: "Absolut Vodka - 60ML",
    cost: "900",
  },
  {
    title: "Martini Extra Dry - 30ML",
    cost: "450",
  },
  {
    title: "Martini Extra Dry - 60ML",
    cost: "850",
  },
  {
    title: "Malibu - 30ML",
    cost: "430",
  },
  {
    title: "Malibu - 60ML",
    cost: "800",
  },
  {
    title: "Beefeater - 30ML",
    cost: "400",
  },
  {
    title: "Beefeater - 60ML",
    cost: "750",
  },
  {
    title: "Chivas Reagal - 30ML",
    cost: "540",
  },
  {
    title: "Chivas Reagal - 60ML",
    cost: "1050",
  },
  {
    title: "Jack Daniels - 30ML",
    cost: "500",
  },
  {
    title: "Jack Daniels - 60ML",
    cost: "950",
  },
  {
    title: "Jameson - 30ML",
    cost: "450",
  },
  {
    title: "Jameson - 60ML",
    cost: "850",
  },
  {
    title: "Auchentoshan - 30ML",
    cost: "590",
  },
  {
    title: "Auchentoshan - 60ML",
    cost: "1050",
  },
];

const WINES_LIST: MenuType[] = [
  {
    title: "Sula Zinfandel",
    cost: "850/Glass",
  },
  {
    title: "Sula Zinfandel",
    cost: "3000/Bottle",
  },
  {
    title: "Sula Shiraz Cabernet",
    cost: "850/Glass",
  },
  {
    title: "Sula Shiraz Cabernet",
    cost: "3000/Bottle",
  },
  {
    title: "Sula Chenin Blanc",
    cost: "850/Glass",
  },
  {
    title: "Sula Chenin Blanc",
    cost: "3000/Bottle",
  },
  {
    title: "Sula Sauvignon Blanc",
    cost: "850/Glass",
  },
  {
    title: "Sula Sauvignon Blanc",
    cost: "3000/Bottle",
  },
  {
    title: "Sula Late Harvest",
    cost: "850/Glass",
  },
  {
    title: "Sula Late Harvest",
    cost: "3000/Bottle",
  },
  {
    title: "Bottega Cabernet Sau",
    cost: "3800/Bottle",
  },
  {
    title: "Bottega Mascato",
    cost: "3000/Bottle",
  },
];

const SPARKLING_BY_BOTTLE_LIST: MenuType[] = [
  {
    title: "Sula Sparkling Seco",
    cost: "4000",
  },
];

const LOCAL_SPIRITS_LIST: MenuType[] = [
  {
    title: "Old Durbar - 30ML",
    cost: "300",
  },
  {
    title: "Old Durbar - 60ML",
    cost: "550",
  },
  {
    title: "O.D.B Chimney - 30ML",
    cost: "375",
  },
  {
    title: "O.D.B Chimney - 60ML",
    cost: "700",
  },
  {
    title: "8848 Vodka - 30ML",
    cost: "275",
  },
  {
    title: "8848 Vodka - 60ML",
    cost: "500",
  },
  {
    title: "Nude Vodka - 30ML",
    cost: "410",
  },
  {
    title: "Nude Vodka - 60ML",
    cost: "800",
  },
  {
    title: "Sky Vodka - 30ML",
    cost: "390",
  },
  {
    title: "Sky Vodka - 60ML",
    cost: "720",
  },
  {
    title: "Khukuri Rum - 30ML",
    cost: "275",
  },
  {
    title: "Khukuri Rum - 60ML",
    cost: "500",
  },
  {
    title: "Snowman Gin - 30ML",
    cost: "400",
  },
  {
    title: "Snowman Gin - 60ML",
    cost: "750",
  },
];

const WINTER_SPECIALS_LIST: MenuType[] = [
  {
    title: "Hot Rum Punch",
    cost: "995",
  },
  {
    title: "Mulled Wine",
    cost: "1100",
  },
];

const SALAD_LIST: MenuType[] = [
  {
    title: "Falafel Salad",
    cost: "695",
  },
  {
    title: "Greek Salad with Feta Cheese",
    cost: "695",
  },
  {
    title: "Mixed Salad with Grilled Chicken",
    cost: "795",
  },
  {
    title: "Healthy Avocado Salad",
    cost: "795",
  },
  {
    title: "Caesar Salad",
    cost: "795",
  },
];

const SOUP_LIST: MenuType[] = [
  {
    title: "Spinach Soup",
    cost: "295",
  },
  {
    title: "Yogurt (Yayla) Soup",
    cost: "295",
  },
  {
    title: "Chicken and Mushroom Soup",
    cost: "495",
  },
  {
    title: "Seasonal Mix Vegetable Soup",
    cost: "395",
  },
];

const PIZZA_LIST: MenuType[] = [
  {
    title: "Margarita Pizza",
    cost: "850",
  },
];

const CHOICE_OF_TOPPINGS_LIST: MenuType[] = [
  {
    title: "Onion",
    cost: "100",
  },
  {
    title: "Green Pepper",
    cost: "150",
  },
  {
    title: "Mushroom",
    cost: "150",
  },
  {
    title: "Bacon",
    cost: "200",
  },
  {
    title: "Ham",
    cost: "200",
  },
  {
    title: "Lamb Mince",
    cost: "300",
  },
  {
    title: "Garlic",
    cost: "100",
  },
  {
    title: "Olive",
    cost: "200",
  },
  {
    title: "Extra Cheese",
    cost: "150",
  },
  {
    title: "Salami",
    cost: "200",
  },
  {
    title: "Chicken",
    cost: "200",
  },
];

const STARTERS_LIST: MenuType[] = [
  {
    title: "French Fries",
    cost: "325",
  },
  {
    title: "Crunchy Cheese Potatoes",
    cost: "495",
  },
  {
    title: "Lamachun (Turkish Pizza)",
    cost: "495/795",
  },
  {
    title: "Borek",
    cost: "495/795",
  },
  {
    title: "Chicken Wings",
    cost: "595",
  },
  {
    title: "Chicken Chilli",
    cost: "595",
  },
  {
    title: "Chips Chilli",
    cost: "395",
  },
];

const TASTE_OF_TURKISH_CUISINE_LIST: MenuType[] = [
  {
    title: "Imam Bayaldi",
    cost: "595",
  },
  {
    title: "Karisik Kizatma",
    cost: "595",
  },
  {
    title: "Falafel Durum",
    cost: "595",
  },
  {
    title: "Kap Salon",
    cost: "1295",
  },
  {
    title: "Doner Kebab",
    cost: "695/895",
  },
  {
    title: "Doner Durum",
    cost: "695/895",
  },
  {
    title: "Falafel Complete",
    cost: "795",
  },
  {
    title: "Karniyarik",
    cost: "895",
  },
  {
    title: "Tavuk Budu",
    cost: "995",
  },
  {
    title: "Tavuk Sis",
    cost: "995",
  },
  {
    title: "Soslu Tavuk Gosu",
    cost: "995",
  },
  {
    title: "Wiener Schnitzel",
    cost: "1095",
  },
  {
    title: "Kofteli Patlizan",
    cost: "1195",
  },
  {
    title: "Kuzu Sis",
    cost: "1200",
  },
  {
    title: "Adana Kebab",
    cost: "1295",
  },
  {
    title: "Kuzu Bifteki (Lamb Fillet)",
    cost: "2395",
  },
  {
    title: "Sac Tava",
    cost: "1395",
  },
  {
    title: "Bifteki",
    cost: "1495",
  },
  {
    title: "Pork Chops",
    cost: "1750",
  },
  {
    title: "Karisik Izgara",
    cost: "2250",
  },
  {
    title: "Kuzu Pirzola (Lamb Chops)",
    cost: "2995",
  },
];

export const MENU_LIST: Menu[] = [
  {
    menu_name: "Taste of Turkish Cuisine",
    menu_list: TASTE_OF_TURKISH_CUISINE_LIST,
  },
  {
    menu_name: "Meraki Special",
    menu_list: MERAKI_SEPCIAL_LIST,
  },
  {
    menu_name: "Meraki's Breakfast",
    menu_list: MERAKIS_BREAKFAST_LIST,
  },
  {
    menu_name: "Coffee",
    menu_list: COFFEE_LIST,
  },
  {
    menu_name: "Tea",
    menu_list: TEA_LIST,
  },
  {
    menu_name: "Non Coffee",
    menu_list: NON_COFFEE_LIST,
  },
  {
    menu_name: "Salad",
    menu_list: SALAD_LIST,
  },
  {
    menu_name: "Starters",
    menu_list: STARTERS_LIST,
  },
  {
    menu_name: "Pasta",
    menu_list: PASTA_LIST,
  },
  {
    menu_name: "Moussaka",
    menu_list: MOUSSAKA_LIST,
  },
  {
    menu_name: "Flavour of India",
    menu_list: FLAVOUR_OF_INDIA_LIST,
  },
  {
    menu_name: "Soup",
    menu_list: SOUP_LIST,
  },
  {
    menu_name: "Pizza",
    menu_list: PIZZA_LIST,
  },
  {
    menu_name: "Choice of Toppings",
    menu_list: CHOICE_OF_TOPPINGS_LIST,
  },
  {
    menu_name: "Desserts",
    menu_list: DESSERTS_LIST,
  },
  {
    menu_name: "Soft Drinks",
    menu_list: SOFT_DRINKS_LIST,
  },
  {
    menu_name: "Classic Cocktails",
    menu_list: CLASSIC_COCKTAILS_LIST,
  },
  {
    menu_name: "Mocktails",
    menu_list: MOCKTAILS_LIST,
  },
  {
    menu_name: "Bottle Beers",
    menu_list: BOTTLE_BEERS_LIST,
  },
  {
    menu_name: "Draught Beer (Sherpa)",
    menu_list: DRAUGHT_BEER_SHERPA_LIST,
  },
  {
    menu_name: "Imported Spirits",
    menu_list: IMPORTED_SPIRITS_LIST,
  },
  {
    menu_name: "Wines",
    menu_list: WINES_LIST,
  },
  {
    menu_name: "Sparkling By Bottle",
    menu_list: SPARKLING_BY_BOTTLE_LIST,
  },
  {
    menu_name: "Local Spirits",
    menu_list: LOCAL_SPIRITS_LIST,
  },
  {
    menu_name: "Winter Specials",
    menu_list: WINTER_SPECIALS_LIST,
  },
];
