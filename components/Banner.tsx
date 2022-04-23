import Image from 'next/image'

export const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={
          'https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg'
        }
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go?</p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  )
}
