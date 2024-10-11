import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiMailSendLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/fatimakhurram",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/fatima-khurram-105192299/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Youtube",
    link: "",
    Icon: RiYoutubeLine,
  },
  {
    name: "Email",
    link: "khuramfatima201@gmail.com",
    Icon: RiMailSendLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
