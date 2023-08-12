const Pagination = ({ handlePagination }) => {
  return (
    <div>
      <ul className='flex'>
        <li className='border py-3 px-5 border-r-0 border-black rounded-l-md'>
          <p>Pages</p>
        </li>
        <li
          className='border border-r-0 border-black'
          onClick={handlePagination}
        >
          <a className='cursor-pointer py-3 px-5 inline-block hover:border-white hover:bg-black hover:text-white'>
            1
          </a>
        </li>
        <li
          className='border border-r-0 border-black'
          onClick={handlePagination}
        >
          <a className='cursor-pointer py-3 px-5 inline-block hover:border-white hover:bg-black hover:text-white'>
            2
          </a>
        </li>
        <li
          className='border border-black rounded-r-md'
          onClick={handlePagination}
        >
          <a className='cursor-pointer py-3 px-5 inline-block hover:border-white hover:bg-black hover:text-white'>
            3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
