import Image from "next/image";
import MORE_AND_MORE_BASE from "@/assets/images/more-and-more-base.png";
import MORE_AND_MORE_1 from "@/assets/images/more-and-more-1.png";
import MORE_AND_MORE_2 from "@/assets/images/more-and-more-2.png";
import Link from "next/link";
import { FaAndroid, FaApple } from "react-icons/fa";

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
];

const Projects = () => {
  return (
    <section id="Experience" className="py-17 px-2">
      <div className="app-container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl text-left font-bold text-primary font-exo-2 uppercase">
          Projects
        </h2>
        <div className="mt-26 space-y-48">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center w-full gap-5`}
            >
              <div className="relative flex-1 flex justify-center items-end h-80">
                <Image
                  src={item.firstImage}
                  alt="more and more"
                  className="w-40 object-contain rounded-md mt-auto absolute z-1 -translate-x-1/2 -rotate-15 -translate-y-5"
                />
                <Image
                  src={item.secondImage}
                  alt="more and more"
                  className="w-40 object-contain rounded-md mt-auto absolute z-2 translate-x-1/2 rotate-15 -translate-y-5"
                />
                <Image
                  src={item.baseImage}
                  alt="more and more"
                  className="w-4/5 object-contain rounded-lg mt-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary">
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
