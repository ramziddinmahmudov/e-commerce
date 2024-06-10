import p1_img from "./iphone15pro.png";
import p2_img from "./iphone14.png";
import p3_img from "./iphone13.png";
import p4_img from "./iphone12.png";
import p5_img from "./iphone10.png";
import p6_img from "./iphone11.png";
import p7_img from "./iphone9.png";
import p8_img from "./iphone8.png";
import p9_img from "./iphone7.png";
import p10_img from "./iphone6.png";
import p11_img from "./iphone5.png";
import p12_img from "./iphoneprO.png";

import p13_img from "./s6.png";
import p14_img from "./s9.png";
import p15_img from "./s15.png";
import p16_img from "./s16.png";
import p17_img from "./s18.png";
import p18_img from "./s19.png";
import p19_img from "./s20.png";
import p20_img from "./s21.png";
import p21_img from "./s22.png";
import p22_img from "./s23.png";
import p23_img from "./s24.png";
import p24_img from "./s199.png";

import p25_img from "./nokia1.png";
import p26_img from "./nokia2.png";
import p27_img from "./nokia3.png";
import p28_img from "./nokia4.png";
import p29_img from "./nokia5.png";
import p30_img from "./nokia6.png";
import p31_img from "./nokia7.png";
import p32_img from "./nokia8.png";
import p33_img from "./nokia9.png";
import p34_img from "./nokia10.png";
import p35_img from "./nokia11.png";
import p36_img from "./nokia12.png";

let all_product = [
  {
    id: 1,
    name: "Iphone 15 pro",
    category: "iphone",
    image: p1_img,
    new_price: 999,
    old_price: 1040,
  },
  {
    id: 2,
    name: "Iphone 14 pro max",
    category: "iphone",
    image: p2_img,
    new_price: 699,
    old_price: 740,
  },
  {
    id: 3,
    name: "Iphone 13",
    category: "iphone",
    image: p3_img,
    new_price: 599,
    old_price: 640,
  },
  {
    id: 4,
    name: "iphone 11",
    category: "iphone",
    image: p4_img,
    new_price: 247,
    old_price: 300,
  },
  {
    id: 5,
    name: "Iphone XS",
    category: "iphone",
    image: p5_img,
    new_price: 200,
    old_price: 240,
  },
  {
    id: 6,
    name: "Iphone 11",
    category: "iphone",
    image: p6_img,
    new_price: 102,
    old_price: 125,
  },
  {
    id: 7,
    name: "iphone X",
    category: "iphone",
    image: p7_img,
    new_price: 250,
    old_price: 290,
  },
  {
    id: 8,
    name: "Iphone 7",
    category: "iphone",
    image: p8_img,
    new_price: 79,
    old_price: 124,
  },
  {
    id: 9,
    name: "Iphone 8",
    category: "iphone",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Iphone 6",
    category: "iphone",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Iphone SE",
    category: "iphone",
    image: p11_img,
    new_price: 429,
    old_price: 479,
  },
  {
    id: 12,
    name: "Iphone 14",
    category: "iphone",
    image: p12_img,
    new_price: 589,
    old_price: 629,
  },

  {
    id: 13,
    name: "Samsung s7",
    category: "samsung",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Samsung s9 Tab",
    category: "samsung",
    image: p14_img,
    new_price: 179,
    old_price: 200,
  },
  {
    id: 15,
    name: "Samsung s23",
    category: "samsung",
    image: p15_img,
    new_price: 447,
    old_price: 500,
  },
  {
    id: 16,
    name: "Samsung s23",
    category: "samsung",
    image: p16_img,
    new_price: 447,
    old_price: 500,
  },
  {
    id: 17,
    name: "Samsung s24 Ultra",
    category: "samsung",
    image: p17_img,
    new_price: 978,
    old_price: 1000,
  },
  {
    id: 18,
    name: "Samsung s23",
    category: "samsung",
    image: p18_img,
    new_price: 448,
    old_price: 500,
  },
  {
    id: 19,
    name: "Samsung s20",
    category: "samsung",
    image: p19_img,
    new_price: 399,
    old_price: 430,
  },
  {
    id: 20,
    name: "Samsung s23 ultra",
    category: "samsung",
    image: p20_img,
    new_price: 450,
    old_price: 500,
  },
  {
    id: 21,
    name: "Samsung s21 ultra",
    category: "samsung",
    image: p21_img,
    new_price: 420,
    old_price: 450,
  },
  {
    id: 22,
    name: "Samsung s23 ultra",
    category:"samsung",
    image: p22_img,
    new_price: 450,
    old_price: 500,
  },
  {
    id: 23,
    name: "Samsung s24 ultra",
    category: "samsung",
    image: p23_img,
    new_price: 960,
    old_price: 1000,
  },
  {
    id: 24,
    name: "Samsung a55",
    category: "samsung",
    image: p24_img,
    new_price: 347,
    old_price: 380,
  },

  {
    id: 25,
    name: "Nokia",
    category: "nokia",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Nokia",
    category: "nokia",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Nokia",
    category: "nokia",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Nokia",
    category: "nokia",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Nokia",
    category: "nokia",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Nokia",
    category: "nokia",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Nokia",
    category: "nokia",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Nokia",
    category: "nokia",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Nokia",
    category: "nokia",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Nokia",
    category: "nokia",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Nokia",
    category: "nokia",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Nokia",
    category: "nokia",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
