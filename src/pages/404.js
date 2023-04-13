import { useRouter } from 'next/router';
const Notfound = () => {
  const router = useRouter();

  return (
    <main className='flex h-screen justify-center items-center flex-col'>
      <h1 className='text-lg font-bold tracking-widest'>Not Found!</h1>
      <div className='my-4 text-center'>
        <button
          className='  capitalize text-center border px-7 py-1 mb-2 bg-blue-700 text-white shadow-md rounded-md '
          onClick={() => router.back(-1)}
        >
          back
        </button>
        <button
          className='  capitalize text-center border px-7 py-1 mt-2 bg-blue-700 text-white shadow-md rounded-md'
          onClick={() => router.push('/')}
        >
          home
        </button>
      </div>
    </main>
  );
};

export default Notfound;
