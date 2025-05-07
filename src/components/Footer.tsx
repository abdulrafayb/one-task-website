import InstaIcon from "../../public/assets/icons/insta.svg";
import XSocial from "../../public/assets/icons/x-social.svg";
import TikTokkIcon from "../../public/assets/icons/tiktok.svg";
import YoutubeIcon from "../../public/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 border-t border-white/20 py-5">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="text-center">
            @ 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex gap-2.5 justify-center">
            <li>
              <XSocial />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <TikTokkIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
