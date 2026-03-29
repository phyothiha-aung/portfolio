import Image from "next/image";
import Link from "next/link";
import { FaAndroid, FaApple } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

import MORE_AND_MORE_BASE from "@/assets/images/more-and-more-base.png";
import MORE_AND_MORE_1 from "@/assets/images/more-and-more-1.png";
import MORE_AND_MORE_2 from "@/assets/images/more-and-more-2.png";

import ZAPP_CASHIER_BASE from "@/assets/images/zapp-cashier-base.png";
import ZAPP_CASHIER_1 from "@/assets/images/zapp-cashier-1.png";
import ZAPP_CASHIER_2 from "@/assets/images/zapp-cashier-2.png";

import GOLD_PLUS_BASE from "@/assets/images/gold-plus-base.png";
import GOLD_PLUS_1 from "@/assets/images/gold-plus-1.png";
import GOLD_PLUS_2 from "@/assets/images/gold-plus-2.png";

import TOYOTA_BASE from "@/assets/images/toyota-base.png";
import TOYOTA_1 from "@/assets/images/toyota-1.png";
import TOYOTA_2 from "@/assets/images/toyota-2.png";

import DZAY_BASE from "@/assets/images/dzay-base.png";
import DZAY_1 from "@/assets/images/dzay-1.png";
import DZAY_2 from "@/assets/images/dzay-2.png";

const projects = [
  {
    title: "More and More Member 2.0",
    description:
      "More and More Member 2.0 is a customer loyalty platform where customers of More And More Jewellery Shop can earn points and redeem rewards.",
    features: [
      "Four Themes",
      "Multi Languages",
      "Push Notification",
      "Glass Morphism Design",
    ],

    baseImage: MORE_AND_MORE_BASE,
    firstImage: MORE_AND_MORE_1,
    secondImage: MORE_AND_MORE_2,

    links: [
      {
        name: "Android",
        href: "https://play.google.com/store/apps/details?id=com.moreandmore.member",
        icon: <FaAndroid size={22} />,
      },
      {
        name: "iOS",
        href: "https://apps.apple.com/my/app/more-and-more-member/id6443899996",
        icon: <FaApple size={22} />,
      },
    ],
  },
  {
    title: "Zapp Cashier",
    description:
      "Zapp Cashier is an app that allows you to process customers' payments seamlessly with the choice of different e-wallet payment methods or cash.",
    features: [
      "Multi Payment Methods",
      "Multi Languages",
      "Push Notification",
      "Bluetooth printer for receipt",
    ],

    baseImage: ZAPP_CASHIER_BASE,
    firstImage: ZAPP_CASHIER_1,
    secondImage: ZAPP_CASHIER_2,

    links: [
      {
        name: "Android",
        href: "https://play.google.com/store/apps/details?id=com.mminvest.zappcashier",
        icon: <FaAndroid size={22} />,
      },
    ],
  },
  {
    title: "Gold Plus (Gold+)",
    description:
      "Gold Plus is a trading platform for digital gold. You can buy, sell and collect gold in a secure and transparent environment.",
    features: [
      "Complex Business Logic",
      "Multi Languages",
      "Push Notification",
      "Real Time Data Fetching",
    ],

    baseImage: GOLD_PLUS_BASE,
    firstImage: GOLD_PLUS_1,
    secondImage: GOLD_PLUS_2,

    links: [
      {
        name: "Android",
        href: " https://play.google.com/store/apps/details?id=com.hmybullion.goldplus",
        icon: <FaAndroid size={22} />,
      },
      {
        name: "iOS",
        href: "https://apps.apple.com/mm/app/gold/id6476824435",
        icon: <FaApple size={22} />,
      },
    ],
  },
  {
    title: "Toyota Aye and Sons",
    description:
      "Toyota Aye and Sons is the first authorized Toyota dealership and service provider in Myanmar. It has a long-standing history as a cornerstone of the automotive industry in the country",
    features: [
      "Content Management System",
      "SEO Optimization",
      "Dynamic Website",
    ],

    baseImage: TOYOTA_BASE,
    firstImage: TOYOTA_1,
    secondImage: TOYOTA_2,

    links: [
      {
        name: "Website",
        href: "https://play.google.com/store/apps/details?id=com.moreandmore.member",
        icon: <GiWorld size={22} />,
      },
    ],
  },
  {
    title: "Digital Zay Mini App",
    description:
      "Digital Zay Mini App is an ecommerce app for all kinds of products. Digital Zay Mini App exists inside the KBZ Pay super app.",
    features: ["E-commerce", "Payment with KBZ pay", "Integrated Mini App"],

    baseImage: DZAY_BASE,
    firstImage: DZAY_1,
    secondImage: DZAY_2,

    links: [
      {
        name: "Android",
        href: "https://play.google.com/store/apps/details?id=com.kbzbank.kpaycustomer",
        icon: <FaAndroid size={22} />,
      },
      {
        name: "iOS",
        href: "https://apps.apple.com/mm/app/kbzpay-customer/id1398852297",
        icon: <FaApple size={22} />,
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="py-17 px-2">
      <div className="app-container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl text-left font-bold text-primary font-exo-2 uppercase">
          Projects
        </h2>
        <div className="mt-30 space-y-48">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center w-full gap-5`}
            >
              <div className="relative flex-1 flex justify-center items-end h-80">
                <Image
                  src={item.firstImage}
                  alt="more and more"
                  className="w-28 sm:w-34 md:w-40 object-contain rounded-md mt-auto absolute z-1 -translate-x-1/2 -rotate-15 -translate-y-5"
                />
                <Image
                  src={item.secondImage}
                  alt="more and more"
                  className="w-28 sm:w-34 md:w-40 object-contain rounded-md mt-auto absolute z-2 translate-x-1/2 rotate-15 -translate-y-5"
                />
                <Image
                  src={item.baseImage}
                  alt="more and more"
                  className="w-4/5 object-contain rounded-lg mt-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary mt-3">
                  {item.title}
                </h3>
                <div className="text-white mt-2">
                  <p>{item.description}</p>
                  <ul className="list-disc pl-7 mt-2 space-y-1">
                    {item.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 mt-4">
                    {item.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 flex items-center gap-3 bg-secondary text-white px-3 sm:px-5 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
