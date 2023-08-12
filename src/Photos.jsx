import PropTypes from 'prop-types';

const Photos = ({ photos }) => {
  return (
    <div className='grid grid-cols-3 mt-10'>
      {photos &&
        photos.map(item => (
          <div
            className='flex flex-col m-1 items-center justify-center'
            key={item.id}
          >
            <img src={item.src.large} alt={item.alt} />
          </div>
        ))}
    </div>
  );
};

Photos.protoTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.shape({
        large: PropTypes.string.isRequired,
      }).isRequired,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default Photos;
