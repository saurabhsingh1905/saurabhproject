import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full 
    gap-y-10 border-t border-black-400 bg-black-100 px-20 py-10
     max-md:flex-col">
      <p>copyright @ 2023 | All rights reserved </p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terms & conditions</Link>
        <Link href="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
