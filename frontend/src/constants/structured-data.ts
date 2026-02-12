interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface Reservation {
  "@type": "Reservation";
  name: string;
}

interface ScheduleAction {
  "@type": "ReserveAction";
  target: EntryPoint;
  result: Reservation;
}

interface MenuItem {
  "@type": "MenuItem";
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
}

interface MenuSection {
  "@type": "MenuSection";
  name: string;
  hasMenuItem: MenuItem[];
}

interface RestaurantStructuredData {
  "@context": "https://schema.org";
  "@type": "Restaurant";
  name: string;
  description: string;
  url: string | undefined;
  address: PostalAddress;
  telephone: string;
  email: string;
  openingHours: string[];
  servesCuisine: string[];
  priceRange: string;
  aggregateRating: AggregateRating;
  geo: GeoCoordinates;
  sameAs: string[];
  potentialAction: ScheduleAction;
}

interface MenuStructuredData {
  "@context": "https://schema.org";
  "@type": "Menu";
  name: string;
  description: string;
  hasMenuSection: MenuSection[];
}

export const restaurantStructuredData: RestaurantStructuredData = {
  "@context": "https://schema.org",  //"@context" field tells search engines what vocabulary/language you're using to describe your data.
  "@type": "Restaurant",
  "name": "Gurung BBQ", 
  "description": "Experience authentic Nepali BBQ at Gurung BBQ. Savor traditional grilled meats, momos, and Himalayan flavors in a warm, welcoming atmosphere. Fresh ingredients, bold spices, and time-honored recipes.", 
  "url": process.env.NEXT_PUBLIC_BASE_URL,
  
  "address": {
    "@type": "PostalAddress",  // always use "PostalAddress" for business locations
    "streetAddress": "Ganeshman Chowk",
    "addressLocality": "Dharan",
    "addressRegion": "Koshi",
    "postalCode": "56700",
    "addressCountry": "NP"
  },
  
  "telephone": "+977-25-570068",
  "email": "gurunghotkitchen123@gmail.com",
  
  "openingHours": [
    "Mo-Su 9:00-22:00",
  ],
  
  "servesCuisine": ["Nepali", "Asian", "Barbecue"],
  "priceRange": "$$", // "$$" rating represents affordable-to-moderate pricing
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.8",
    "ratingCount": "299"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.81919", 
    "longitude": "87.27824"
  },
  
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100063725191266",
    "https://www.tiktok.com/discover/gurung-bbq-dharan-menu"
  ],
  
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL}/#contact`
    },
    "result": {
      "@type": "Reservation",
      "name": "Table Reservation"
    }
  }
};

export const menuStructuredData: MenuStructuredData = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Restaurant Menu",
  "description": "Our complete menu featuring authentic Nepali dishes and specialties",
  
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "BBQ Special",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Pork BBQ", 
          "description": "Tender marinated pork grilled to perfection with traditional Nepali spices",
          "price": "900",
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Wings BBQ", 
          "description": "Juicy chicken wings barbecued with aromatic herbs and spices",
          "price": "850",
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken BBQ", 
          "description": "Succulent chicken pieces grilled with traditional Nepali masala",
          "price": "900",
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mutton BBQ", 
          "description": "Premium mutton marinated overnight and grilled with mountain herbs",
          "price": "2100",
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Pork Dameko", 
          "description": "Traditional Nepali-style pork cooked with local spices and herbs",
          "price": "950",
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Pork Ribs", 
          "description": "Fall-off-the-bone pork ribs glazed with homemade BBQ sauce",
          "price": "1000",
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Sandheko & Crispy",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Pork Sandheko", 
          "description": "Spicy pork mixed with onions, chilies and traditional Nepali spices",
          "price": "1000", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Sandheko", 
          "description": "Tender chicken tossed with fresh herbs, onions and mountain spices",
          "price": "1000", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Basket", 
          "description": "Crispy fried chicken pieces served in a traditional basket",
          "price": "1000", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Spicy Chicken Kuramura", 
          "description": "Crunchy chicken dish mixed with puffed rice and spicy seasonings",
          "price": "1200", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Wings Roast", 
          "description": "Roasted chicken wings with aromatic spices and herbs",
          "price": "1000", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Crispy Wings", 
          "description": "Golden fried chicken wings with crispy coating and spices",
          "price": "1000", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Roast", 
          "description": "Traditional roasted chicken with Nepali herbs and spices",
          "price": "1000", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mutton Poleko Sandheko", 
          "description": "Grilled mutton mixed with onions, chilies and special mountain spices",
          "price": "2200", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Salad Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Green Salad", 
          "description": "Fresh mixed greens with cucumber, tomato and lemon dressing",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Fruit Salad", 
          "description": "Seasonal fresh fruits with honey and lime juice",
          "price": "450", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Cucumber Salad", 
          "description": "Crispy cucumber slices with mint and traditional dressing",
          "price": "250", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Sandheko Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Chatpate", 
          "description": "Classic Nepali street snack with puffed rice, vegetables and tangy spices",
          "price": "225", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Special Chatpate", 
          "description": "Premium chatpate with extra ingredients and special sauce",
          "price": "325", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Waiwai Sandheko", 
          "description": "Instant noodles mixed with vegetables, spices and traditional seasonings",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Aalu Sandheko", 
          "description": "Spiced potato salad with onions, chilies and mountain herbs",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Bhatmas Sandheko", 
          "description": "Traditional black soybeans mixed with spices and fresh herbs",
          "price": "200", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Bhatmas Chiura", 
          "description": "Beaten rice with spiced soybeans, a traditional Nepali combination",
          "price": "225", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Peanut Masala", 
          "description": "Roasted peanuts with aromatic spices and herbs",
          "price": "300", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Papad Masala", 
          "description": "Crispy papad topped with spiced vegetables and chutneys",
          "price": "350", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Pakouda Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Mix Veg Pakouda", 
          "description": "Assorted vegetables dipped in spiced gram flour batter and deep fried",
          "price": "300", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Paneer Pakouda", 
          "description": "Fresh cottage cheese fritters with aromatic spices",
          "price": "400", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Cheese Pakouda", 
          "description": "Melted cheese fritters with herbs and spices",
          "price": "450", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Onion Pakouda", 
          "description": "Crispy onion rings in spiced gram flour batter",
          "price": "250", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Pizza & Burger",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Cheese Tomato Pizza", 
          "description": "Classic pizza with fresh tomatoes and melted cheese",
          "price": "475", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mushroom Pizza", 
          "description": "Fresh mushrooms with cheese on crispy pizza base",
          "price": "500", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mix Veg Pizza", 
          "description": "Assorted fresh vegetables with cheese and herbs",
          "price": "500", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Pizza", 
          "description": "Tender chicken pieces with cheese and pizza sauce",
          "price": "550", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Sausage Pizza", 
          "description": "Spicy chicken sausage with cheese and vegetables",
          "price": "550", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mix Non Veg Pizza", 
          "description": "Combination of chicken, sausage and other meat toppings",
          "price": "750", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Burger", 
          "description": "Juicy chicken patty with fresh vegetables and sauce",
          "price": "350", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Veg Burger", 
          "description": "Vegetarian patty with fresh salad and special sauce",
          "price": "250", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Chowmein Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Mix Veg Chowmein", 
          "description": "Stir-fried noodles with fresh mixed vegetables and soy sauce",
          "price": "175", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Egg Chowmein", 
          "description": "Noodles stir-fried with scrambled eggs and vegetables",
          "price": "225", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Chowmein", 
          "description": "Tender chicken pieces with noodles and fresh vegetables",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Pork Chowmein", 
          "description": "Succulent pork with stir-fried noodles and spices",
          "price": "200", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mix Non Veg Chowmein", 
          "description": "Combination of chicken and pork with noodles and vegetables",
          "price": "325", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Momo Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Steam Chicken Momo", 
          "description": "Traditional Nepali dumplings filled with spiced chicken, served steamed",
          "price": "225", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Steam Pork Momo", 
          "description": "Classic pork dumplings steamed to perfection with traditional spices",
          "price": "200", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Fried Chicken Momo", 
          "description": "Steamed chicken momo deep-fried until golden and crispy",
          "price": "300", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Fried Pork Momo", 
          "description": "Crispy fried pork dumplings with golden exterior",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chilli Chicken Momo", 
          "description": "Fried chicken momo tossed in spicy chilli sauce",
          "price": "350", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chilli Pork Momo", 
          "description": "Crispy pork momo with spicy chilli and bell peppers",
          "price": "300", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Fry Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Sukuti Fry", 
          "description": "Traditional dried yak or buffalo meat stir-fried with onions, chilies, and aromatic Nepali spices. A beloved mountain delicacy with intense smoky flavors.",
          "price": "400", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Sausage Fry", 
          "description": "Spiced local sausages pan-fried to perfection with onions, bell peppers, and traditional seasonings. Crispy outside, juicy inside.",
          "price": "400", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "French Fry", 
          "description": "Golden crispy potato fries seasoned with chatpate spices and served with tangy tomato chutney.",
          "price": "300", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mushroom Fry Potato", 
          "description": "Fresh mushrooms and tender potatoes stir-fried with garlic, ginger, and local herbs. A hearty vegetarian favorite.",
          "price": "400", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mustange Aalu", 
          "description": "Authentic Mustang-style potatoes cooked with dried chilies, timur (Sichuan pepper), and local spices from the high Himalayas.",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Aalu Jeera", 
          "description": "Home-style cumin potatoes sautéed with jeera, turmeric, and fresh coriander. Simple yet flavorful comfort food.",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Cashew Nut Fry", 
          "description": "Premium cashews roasted with butter, garlic, and aromatic spices. A crunchy, protein-rich snack perfect with drinks.",
          "price": "450", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Peanut Dry", 
          "description": "Roasted peanuts tossed with rock salt, red chili powder, and fresh lime. A classic Nepali bar snack.",
          "price": "250", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Fish Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Fish Fry", 
          "description": "Fresh river fish marinated in yogurt and spices, then deep-fried until golden. Served with mint chutney and lemon wedges.",
          "price": "400", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Fish Finger", 
          "description": "Tender fish fillets coated in spiced breadcrumbs and fried to crispy perfection. Great for sharing or as an appetizer.",
          "price": "500", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Grilled Fish", 
          "description": "Whole fish marinated in mustard oil, garlic, and traditional spices, then grilled over charcoal for that authentic smoky flavor.",
          "price": "450", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Fish Steam", 
          "description": "Delicate fish steamed with ginger, garlic, and green chilies, preserving the natural flavors. A healthy and light option.",
          "price": "450", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Spring Roll",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Chicken Spring Roll", 
          "description": "Crispy rolls filled with seasoned chicken, vegetables, and herbs. Served hot with sweet and sour dipping sauce.",
          "price": "300", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Veg Spring Roll", 
          "description": "Golden fried rolls packed with fresh vegetables, cabbage, and carrots. A perfect vegetarian starter with tangy sauce.",
          "price": "250", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Soup Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Veg Soup", 
          "description": "Hearty vegetable soup with seasonal vegetables, lentils, and aromatic spices. Comforting and nutritious.",
          "price": "300", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mushroom Soup", 
          "description": "Creamy mushroom soup with fresh herbs and black pepper. Rich, earthy flavors in every spoonful.",
          "price": "325", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Soup", 
          "description": "Traditional chicken broth with tender meat pieces, ginger, and warming spices. Perfect for cold mountain evenings.",
          "price": "350", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Chilli Item",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Chips Chilli", 
          "description": "Crispy potato chips wok-tossed with bell peppers, onions, and spicy chili sauce. Indo-Nepali fusion at its best.",
          "price": "350", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Paneer Chilli", 
          "description": "Soft cottage cheese cubes stir-fried with colorful peppers in a tangy, spicy sauce. A vegetarian crowd-pleaser.",
          "price": "450", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Mushroom Chilli", 
          "description": "Fresh mushrooms in a vibrant chili sauce with bell peppers and onions. Smoky, spicy, and absolutely delicious.",
          "price": "450", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Sausage Chilli", 
          "description": "Spiced sausages cooked with peppers and onions in a fiery chili sauce. Bold flavors for spice lovers.",
          "price": "500", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Chilli Boneless", 
          "description": "Tender boneless chicken pieces in a glossy, spicy sauce with bell peppers. Restaurant-style Indo-Chinese favorite.",
          "price": "500", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chicken Chilli With Bone", 
          "description": "Succulent chicken pieces with bone cooked in traditional chili sauce. More authentic flavors, great value.",
          "price": "400", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Hot Wings", 
          "description": "Spicy chicken wings marinated in fiery spices and grilled to perfection. Finger-licking good with cooling lassi.",
          "price": "500", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Soft Drinks",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Frooti", 
          "description": "Popular mango drink - sweet, refreshing, and packed with tropical mango flavor.",
          "price": "50", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Badam Drinks", 
          "description": "Rich almond milk drink with cardamom and rose essence. Creamy, nutritious, and naturally sweet.",
          "price": "150", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Xtreme", 
          "description": "Energy drink to boost your spirits. Perfect after trekking or long mountain journeys.",
          "price": "200", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Redbull Yellow", 
          "description": "Tropical flavored energy drink for that extra kick of energy and alertness.",
          "price": "180", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Zero Coke(500)", 
          "description": "Sugar-free cola with the same great taste, perfect for health-conscious diners.",
          "price": "150", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Coke / Fanta / Sprite (250ml)", 
          "description": "Classic carbonated beverages in individual serving sizes.",
          "price": "80", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Coke / Fanta / Sprite (1000ml)", 
          "description": "Large bottles perfect for sharing with family and friends.",
          "price": "180", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Coke / Fanta / Sprite (2000ml)", 
          "description": "Family-size bottles ideal for group dining and celebrations.",
          "price": "325", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Coke / Fanta / Sprite (2250ml)", 
          "description": "Extra-large bottles for parties and large gatherings.",
          "price": "375", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Real Juice (1000ml)", 
          "description": "100% natural fruit juice without artificial colors or preservatives. Healthy and delicious.",
          "price": "400", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Water", 
          "description": "Pure, filtered drinking water. Stay hydrated in the hilly climate.",
          "price": "50", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Refreshing Drinks",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Chocolate Lassi", 
          "description": "Creamy yogurt-based drink blended with rich chocolate. Indulgent and cooling.",
          "price": "250", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Strawberry Lassi", 
          "description": "Traditional yogurt drink with fresh strawberry puree. Sweet, tangy, and refreshing.",
          "price": "225", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Elaichi Lassi", 
          "description": "Classic cardamom lassi with aromatic spices. Traditional and cooling.",
          "price": "150", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Sweet Lassi", 
          "description": "Traditional sweetened yogurt drink. Simple, pure, and refreshing.",
          "price": "150", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Plain Lassi", 
          "description": "Unsweetened yogurt drink, perfect for cooling down after spicy meals.",
          "price": "120", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Chocolate Milkshake", 
          "description": "Rich, creamy milkshake made with premium chocolate. A treat for chocolate lovers.",
          "price": "225", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Strawberry Milkshake", 
          "description": "Fresh strawberry milkshake with real fruit pieces. Creamy and naturally sweet.",
          "price": "200", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Masala Coke", 
          "description": "Local favorite - cola mixed with chatpate masala, lemon, and rock salt. Uniquely Nepali!",
          "price": "100", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Lemon Sprite", 
          "description": "Sprite enhanced with fresh lemon juice and mint. Extra refreshing and zesty.",
          "price": "100", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Lemon Soda", 
          "description": "Fizzy lemon drink with rock salt and spices. Traditional thirst-quencher.",
          "price": "150", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Cold Lemon", 
          "description": "Fresh lemonade with mint and rock salt. Natural, cooling, and vitamin-rich.",
          "price": "100", 
          "priceCurrency": "NPR"
        },
      ]
    },
    {
      "@type": "MenuSection", 
      "name": "Hot Drinks",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Milk Coffee", 
          "description": "Aromatic coffee blended with fresh milk. Perfect start for your morning.",
          "price": "150", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Black Coffee", 
          "description": "Strong, pure coffee for serious coffee lovers. Bold and energizing.",
          "price": "100", 
          "priceCurrency": "NPR"
        },
        {
          "@type": "MenuItem",
          "name": "Hot Lemon with Honey", 
          "description": "Soothing hot drink with fresh lemon and natural honey. Perfect for cold weather and sore throats.",
          "price": "100", 
          "priceCurrency": "NPR"
        },
      ]
    },
  ]
};