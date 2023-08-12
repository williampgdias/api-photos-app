const Orientation = () => {
  return (
    <div>
      <ul className='flex'>
        <li>
          <a className='border py-3 px-5 mr-2 rounded-md border-black cursor-pointer hover:border-white hover:bg-black hover:text-white inline-block'>
            Landscape
          </a>
        </li>
        <li>
          <a className='border py-3 px-5 rounded-md border-black cursor-pointer hover:border-white hover:bg-black hover:text-white inline-block'>
            Portrait
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Orientation;
