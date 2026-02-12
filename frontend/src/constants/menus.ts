import { Menu, MenuType } from "@/types";

const BBQ_SPECIAL_LIST: MenuType[] = [
    {
        title: "Pork BBQ",
        cost: "900/Kg",
    },
    {
        title: "Wings BBQ",
        cost: "850/Kg",
    },
    {
        title: "Chicken BBQ",
        cost: "900/Kg",
    },
    {
        title: "Mutton BBQ",
        cost: "2100/Kg",
    },
    {
        title: "Pork Dameko",
        cost: "950/Kg",
    },
    {
        title: "Pork Ribs",
        cost: "1000/Kg",
    },
];

const SANDHEKO_AND_CRISPY_LIST: MenuType[] = [
    {
        title: "Pork Sandheko",
        cost: "1000/Kg",
    },
    {
        title: "Chicken Sandheko",
        cost: "1000/Kg",
    },
    {
        title: "Chicken Basket",
        cost: "1000/Kg",
    },
    {
        title: "Spicy Chicken Kuramura",
        cost: "1200/Kg",
    },
    {
        title: "Wings Roast",
        cost: "1000/Kg",
    },
    {
        title: "Crispy Wings",
        cost: "1000/Kg",
    },
    {
        title: "Chicken Roast",
        cost: "1000/Kg",
    },
    {
        title: "Mutton Poleko Sandheko",
        cost: "2200/Kg",
    },
];

const SALAD_ITEM_LIST: MenuType[] = [
    {
        title: "Green Salad",
        cost: "250",
    },
    {
        title: "Fruit Salad",
        cost: "450",
    },
    {
        title: "Cucumber Salad",
        cost: "250",
    },
];

const SANDHEKO_ITEM_LIST: MenuType[] = [
    {
        title: "Chatpate",
        cost: "225",
    },
    {
        title: "Special Chatpatey",
        cost: "325",
    },
    {
        title: "Waiwai Sandheko",
        cost: "250",
    },
    {
        title: "Aalu Sandheko",
        cost: "250",
    },
    {
        title: "Bhatmas Sandheko",
        cost: "200",
    },
    {
        title: "Bhatmas Chiura",
        cost: "225",
    },
    {
        title: "Peanut Masala",
        cost: "300",
    },
    {
        title: "Papad Masala",
        cost: "350",
    },
];

const PAKOUDA_ITEM_LIST: MenuType[] = [
    {
        title: "Mix Veg Pakouda",
        cost: "300",
    },
    {
        title: "Paneer Pakouda",
        cost: "400",
    },
    {
        title: "Cheese Pakouda",
        cost: "450",
    },
    {
        title: "Onion Pakouda",
        cost: "250",
    },
];

const PIZZA_AND_BURGER_LIST: MenuType[] = [
    {
        title: "Cheese Tomatao Pizza",
        cost: "475",
    },
    {
        title: "Mushroom Pizza",
        cost: "500",
    },
    {
        title: "Mix Veg Pizza",
        cost: "500",
    },
    {
        title: "Chicken Pizza",
        cost: "550",
    },
    {
        title: "Chicken Sausage Pizza",
        cost: "550",
    },
    {
        title: "Mix Non Veg Pizza",
        cost: "750",
    },
    {
        title: "Chicken Burger",
        cost: "350",
    },
    {
        title: "Veg Burger",
        cost: "250",
    },
];

const CHOWMEIN_ITEM_LIST: MenuType[] = [
    {
        title: "Mix Veg Chowmein",
        cost: "175",
    },
    {
        title: "Egg Chowmein",
        cost: "225",
    },
    {
        title: "Chicken Chowmein",
        cost: "250",
    },
    {
        title: "Pork Chowmein",
        cost: "200",
    },
    {
        title: "Mix Non Veg Chowmein",
        cost: "325",
    },
];

const MOMO_ITEM_LIST: MenuType[] = [
    {
        title: "Steam Chicken Momo",
        cost: "225",
    },
    {
        title: "Steam Pork Momo",
        cost: "200",
    },
    {
        title: "Fried Chicken Momo",
        cost: "300",
    },
    {
        title: "Fried Pork Momo",
        cost: "250",
    },
    {
        title: "Chilli Chicken Momo",
        cost: "350",
    },
    {
        title: "Chilli Pork Momo",
        cost: "300",
    },
];

const FRY_ITEM_LIST: MenuType[] = [
    {
        title: "Sukuti Fry",
        cost: "400",
    },
    {
        title: "Sausage Fry",
        cost: "400",
    },
    {
        title: "French Fry",
        cost: "300",
    },
    {
        title: "Mushroom Fry Potato",
        cost: "400",
    },
    {
        title: "Mustange Aalu",
        cost: "250",
    },
    {
        title: "Aalu Jeera",
        cost: "250",
    },
    {
        title: "Cashew Nut Fry",
        cost: "450",
    },
    {
        title: "Peanut Dry",
        cost: "250",
    },
];

const FISH_ITEM_LIST: MenuType[] = [
    {
        title: "Fish Fry",
        cost: "400",
    },
    {
        title: "Fish Finger",
        cost: "500",
    },
    {
        title: "Grilled Fish",
        cost: "450",
    },
    {
        title: "Fish Steam",
        cost: "450",
    },
];

const SPRING_ROLL_LIST: MenuType[] = [
    {
        title: "Chicken Spring Roll",
        cost: "300",
    },
    {
        title: "Veg Spring Roll",
        cost: "250",
    },
];

const SOUP_ITEM_LIST: MenuType[] = [
    {
        title: "Veg Soup",
        cost: "300",
    },
    {
        title: "Mushroom Soup",
        cost: "325",
    },
    {
        title: "Chicken Soup",
        cost: "350",
    },
];

const CHILLI_ITEM_LIST: MenuType[] = [
    {
        title: "Chips Chilli",
        cost: "350",
    },
    {
        title: "Paneer Chilli",
        cost: "450",
    },
    {
        title: "Mushroom Chilli",
        cost: "450",
    },
    {
        title: "Sausage Chilli",
        cost: "500",
    },
    {
        title: "Chicken Chilli Boneless",
        cost: "500",
    },
    {
        title: "Chicken Chilli With Bone",
        cost: "400",
    },
    {
        title: "Hot Wings",
        cost: "500",
    },
];

const SOFT_DRINKS_LIST: MenuType[] = [
    {
        title: "Frooti",
        cost: "50",
    },
    {
        title: "Badam Drinks",
        cost: "150",
    },
    {
        title: "Xtreme",
        cost: "200",
    },
    {
        title: "Redbull Yellow",
        cost: "180",
    },
    {
        title: "Zero Coke(500)",
        cost: "150",
    },
    {
        title: "Coke / Fanta / Sprite (250ml)",
        cost: "80",
    },
    {
        title: "Coke / Fanta / Sprite (1000ml)",
        cost: "180",
    },
    {
        title: "Coke / Fanta / Sprite (2000ml)",
        cost: "325",
    },
    {
        title: "Coke / Fanta / Sprite (2250ml)",
        cost: "375",
    },
    {
        title: "Real Juice (1000ml)",
        cost: "400",
    },
    {
        title: "Water",
        cost: "50",
    },
];

const REFRESHING_DRINKS_LIST: MenuType[] = [
    {
        title: "Chocolate Lassi",
        cost: "250",
    },
    {
        title: "Strawberry Lassi",
        cost: "225",
    },
    {
        title: "Elaichi Lassi",
        cost: "150",
    },
    {
        title: "Sweet Lassi",
        cost: "150",
    },
    {
        title: "Plain Lassi",
        cost: "120",
    },
    {
        title: "Chocolate Milkshake",
        cost: "225",
    },
    {
        title: "Strawberry Milkshake",
        cost: "200",
    },
    {
        title: "Masala Coke",
        cost: "100",
    },
    {
        title: "Lemon Sprite",
        cost: "100",
    },
    {
        title: "Lemon Soda",
        cost: "150",
    },
    {
        title: "Cold Lemon",
        cost: "100",
    },
];

const HOT_DRINKS_LIST: MenuType[] = [
    {
        title: "Milk Coffee",
        cost: "150",
    },
    {
        title: "Black Coffee",
        cost: "100",
    },
    {
        title: "Hot Lemon with Honey",
        cost: "100",
    },
];

export const MENU_LIST: Menu[] = [
    {
        menu_name: "BBQ Special",
        menu_list: BBQ_SPECIAL_LIST,
    },
    {
        menu_name: "Sandheko & Crispy",
        menu_list: SANDHEKO_AND_CRISPY_LIST,
    },
    {
        menu_name: "Salad Item",
        menu_list: SALAD_ITEM_LIST,
    },
    {
        menu_name: "Sandheko Item",
        menu_list: SANDHEKO_ITEM_LIST,
    },
    {
        menu_name: "Pakouda Item",
        menu_list: PAKOUDA_ITEM_LIST,
    },
    {
        menu_name: "Pizza & Burger",
        menu_list: PIZZA_AND_BURGER_LIST,
    },
    {
        menu_name: "Chowmein Item",
        menu_list: CHOWMEIN_ITEM_LIST,
    },
    {
        menu_name: "Momo Item",
        menu_list: MOMO_ITEM_LIST,
    },
    {
        menu_name: "Fry Item",
        menu_list: FRY_ITEM_LIST,
    },
    {
        menu_name: "Fish Item",
        menu_list: FISH_ITEM_LIST,
    },
    {
        menu_name: "Spring Roll",
        menu_list: SPRING_ROLL_LIST,
    },
    {
        menu_name: "Soup Item",
        menu_list: SOUP_ITEM_LIST,
    },
    {
        menu_name: "Chilli Item",
        menu_list: CHILLI_ITEM_LIST,
    },
    {
        menu_name: "Soft Drinks",
        menu_list: SOFT_DRINKS_LIST,
    },
    {
        menu_name: "Refreshing Drinks",
        menu_list: REFRESHING_DRINKS_LIST,
    },
    {
        menu_name: "Hot Drinks",
        menu_list: HOT_DRINKS_LIST,
    },
];