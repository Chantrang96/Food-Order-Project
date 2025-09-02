import Menu_1 from "./Menu_1.jpg";
import Menu_2 from "./Menu_2.jpg";
import Menu_3 from "./Menu_3.jpg";
import Menu_4 from "./Menu_4.jpg";
import Menu_5 from "./Menu_5.jpg";
import Menu_6 from "./Menu_6.jpg";
import Food_1_Pho_bo from "./Food_1_Pho_bo.jpg";
import Food_2_Pho_ga from "./Food_2_Pho_ga.jpg";
import Food_3_Pho_bo_xao from "./Food_3_Pho_bo_xao.jpg";
import Food_4_Pho_ga_tron from "./Food_4_Pho_ga_tron.jpg";
import Food_5_BunNgan from "./Food_5_BunNgan.jpg";
import Food_6_BunBo from "./Food_6_BunBo.jpg";
import Food_7_BunCha from "./Food_7_BunCha.jpg";
import Food_8_BunTron from "./Food_8_BunTron.jpg";
import Food_9_MyGaTan from "./Food_9_MyGaTan.jpg";
import Food_10_MyXaoBo from "./Food_10_MyXaoBo.jpg";
import Food_11_MyXaoHaiSan from "./Food_11_MyXaoHaiSan.jpg";
import Food_12_MienGa from "./Food_12_MienGa.jpg";
import Food_13_MienNgan from "./Food_13_MienNgan.jpg";
import Food_14_MienNganTron from "./Food_14_MienNganTron.jpg";
import Food_15_MienGaTron from "./Food_15_MienGaTron.jpg";
import Food_16_KhoaiTayChien from "./Food_16_KhoaiTayChien.jpg";
import Food_17_KhoaiLangChien from "./Food_17_KhoaiLangChien.jpg";
import Food_18_NemChuaRan from "./Food_18_NemChuaRan.jpg";
import Food_19_NgoChien from "./Food_19_NgoChien.jpg";
import Food_20_NemRan from "./Food_20_NemRan.jpg";
import Food_21_RauCuQuaLuoc from "./Food_21_RauCuQuaLuoc.jpg";
import Food_22_Salad from "./Food_22_Salad.jpg";
import Food_23_RauMuongXao from "./Food_23_RauMuongXao.jpg";

export const category_list = [
  {
    category_name: "Phở",
    category_image: Menu_1,
  },
  {
    category_name: "Bún",
    category_image: Menu_2,
  },
  {
    category_name: "Mỳ",
    category_image: Menu_3,
  },
  {
    category_name: "Miến",
    category_image: Menu_4,
  },
  {
    category_name: "Đồ chiên",
    category_image: Menu_5,
  },
  {
    category_name: "Món rau",
    category_image: Menu_6,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Phở bò",
    image: Food_1_Pho_bo,
    price: "45.000 VND",
    description: "Phở bò truyền thống với nước dùng đậm đà.",
    category: "Phở",
  },
  {
    _id: "2",
    name: "Phở gà",
    image: Food_2_Pho_ga,
    price: "40.000 VND",
    description: "Phở gà thơm ngon, thanh mát, béo ngậy.",
    category: "Phở",
  },
  {
    _id: "3",
    name: "Phở bò xào",
    image: Food_3_Pho_bo_xao,
    price: "50.000 VND",
    description: "Phở bò xào rau củ, hương vị đặc trưng.",
    category: "Phở",
  },
  {
    _id: "4",
    name: "Phở gà trộn",
    image: Food_4_Pho_ga_tron,
    price: "45.000 VND",
    description: "Phở gà trộn đậm vị, dễ ăn, giải nhiệt.",
    category: "Phở",
  },

  {
    _id: "5",
    name: "Bún ngan",
    image: Food_5_BunNgan,
    price: "50.000 VND",
    description: "Bún ngan thơm ngon với nước dùng đặc trưng.",
    category: "Bún",
  },
  {
    _id: "6",
    name: "Bún bò",
    image: Food_6_BunBo,
    price: "55.000 VND",
    description: "Bún bò Huế cay nồng, hương vị miền Trung.",
    category: "Bún",
  },
  {
    _id: "7",
    name: "Bún chả",
    image: Food_7_BunCha,
    price: "45.000 VND",
    description: "Bún chả Hà Nội truyền thống với nước chấm đậm đà.",
    category: "Bún",
  },
  {
    _id: "8",
    name: "Bún trộn",
    image: Food_8_BunTron,
    price: "40.000 VND",
    description: "Bún trộn rau củ, thanh mát, giải nhiệt mùa hè.",
    category: "Bún",
  },

  {
    _id: "9",
    name: "Mỳ gà tần",
    image: Food_9_MyGaTan,
    price: "60.000 VND",
    description: "Mỳ gà tần bổ dưỡng, thơm ngon, đặc sản.",
    category: "Mỳ",
  },
  {
    _id: "10",
    name: "Mỳ xào bò",
    image: Food_10_MyXaoBo,
    price: "50.000 VND",
    description: "Mỳ xào bò đậm đà, đầy năng lượng.",
    category: "Mỳ",
  },
  {
    _id: "11",
    name: "Mỳ xào hải sản",
    image: Food_11_MyXaoHaiSan,
    price: "55.000 VND",
    description: "Mỳ xào hải sản với tôm, mực tươi ngon.",
    category: "Mỳ",
  },

  {
    _id: "12",
    name: "Miến gà",
    image: Food_12_MienGa,
    price: "45.000 VND",
    description: "Miến gà truyền thống, nhẹ nhàng dễ ăn.",
    category: "Miến",
  },
  {
    _id: "13",
    name: "Miến ngan",
    image: Food_13_MienNgan,
    price: "50.000 VND",
    description: "Miến ngan nước dùng đậm vị, thịt ngan béo chắc.",
    category: "Miến",
  },
  {
    _id: "14",
    name: "Miến ngan trộn",
    image: Food_14_MienNganTron,
    price: "50.000 VND",
    description: "Miến ngan trộn với rau củ hấp dẫn.",
    category: "Miến",
  },
  {
    _id: "15",
    name: "Miến gà trộn",
    image: Food_15_MienGaTron,
    price: "45.000 VND",
    description: "Miến gà trộn, hương vị thanh nhẹ.",
    category: "Miến",
  },

  {
    _id: "16",
    name: "Khoai tây chiên",
    image: Food_16_KhoaiTayChien,
    price: "30.000 VND",
    description: "Khoai tây chiên giòn rụm, ăn vặt tuyệt vời.",
    category: "Đồ chiên",
  },
  {
    _id: "17",
    name: "Khoai lang chiên",
    image: Food_17_KhoaiLangChien,
    price: "30.000 VND",
    description: "Khoai lang chiên ngọt, giòn và bùi.",
    category: "Đồ chiên",
  },
  {
    _id: "18",
    name: "Nem chua rán",
    image: Food_18_NemChuaRan,
    price: "40.000 VND",
    description: "Nem chua rán vàng giòn, ăn chơi hấp dẫn.",
    category: "Đồ chiên",
  },
  {
    _id: "19",
    name: "Ngô chiên",
    image: Food_19_NgoChien,
    price: "30.000 VND",
    description: "Ngô chiên bơ béo ngậy thơm lừng.",
    category: "Đồ chiên",
  },
  {
    _id: "20",
    name: "Nem rán",
    image: Food_20_NemRan,
    price: "40.000 VND",
    description: "Nem rán truyền thống giòn rụm.",
    category: "Đồ chiên",
  },

  {
    _id: "21",
    name: "Rau củ quả luộc",
    image: Food_21_RauCuQuaLuoc,
    price: "35.000 VND",
    description: "Rau củ quả luộc thanh đạm, giải nhiệt mùa hè.",
    category: "Món rau",
  },
  {
    _id: "22",
    name: "Salad",
    image: Food_22_Salad,
    price: "35.000 VND",
    description: "Salad rau củ, ăn kèm sốt chua ngọt.",
    category: "Món rau",
  },
  {
    _id: "23",
    name: "Rau muống xào",
    image: Food_23_RauMuongXao,
    price: "35.000 VND",
    description: "Rau muống xào tỏi thơm ngon.",
    category: "Món rau",
  },
];
