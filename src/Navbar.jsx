const Navbar = ({ onClick, topic }) => {
  return (
    <div className='px-[100px] border-black'>
      <ul>
        <li
          className='text-center px-8 mb-3 text-2xl py-3 cursor-pointer border rounded-md border-gray-900 hover:border-white hover:bg-black hover:text-white'
          onClick={onClick}
        >
          {topic}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
