const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <footer className=' text-center w-full bg-gray-400 text-blue-900'>
      <p className=' m-0 p-0'>
        parham mosadeqzadeh |{' '}
        <span className='text-blue-700'>front-end developer</span>{' '}
      </p>
      <p className='block text-black p-0 m-0'>&copy;{getCurrentYear} </p>
    </footer>
  );
};

export default Footer;
