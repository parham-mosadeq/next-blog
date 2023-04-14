import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
const BackBtn = () => {
  const router = useRouter();
  return (
    <button
      className=' flex  items-center mx-1 my-4 text-lg font-light'
      onClick={() => router.back()}
    >
      <FaArrowLeft className='mx-1 text-sm  text-blue-700' />
      Back
    </button>
  );
};

export default BackBtn;
