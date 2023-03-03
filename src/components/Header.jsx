import { SiTodoist } from 'react-icons/si';
const Header = () => {
  return (
    <header className="header bg-gray-900 p-10 container mx-auto border-b border-dashed border-teal-900 rounded-tl-lg rounded-tr-lg">
      <h2 className="uppercase font-semibold text-teal-500 tracking-wider flex gap-2 items-center">
        <span>
          <SiTodoist />
        </span>
        <span>Do!it</span>
      </h2>
    </header>
  );
};

export default Header;
