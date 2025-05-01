import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bottom-0 mt-10 w-full bg-customgreys-secondarybg py-8 text-center text-sm">
      <p>&copy;2025 Kishor. All Rights Reserved.</p>
      <div className="mt-2">
        {['About', 'Privacy Policy', 'Licensing', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/${item}.toLowerCase().replace(" ", "-")`}
            className="mx-2 text-primary-500"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
