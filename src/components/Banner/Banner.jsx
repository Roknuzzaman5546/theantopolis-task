import Image from 'next/image';
import { Sanchez, Inter } from 'next/font/google';

const sanchezFont = Sanchez({
    weight: '400',
    subsets: ['latin'],
});
const interFont = Inter({
    weight: ['200', '400', '500', '700', '800'],
    subsets: ['latin'],
});

const Banner = () => {
    return (
        <div className=" relative bg-[#880808] text-white flex flex-col justify-center items-center h-screen px-12">
            <Image
                src="/assets/banner/Ellipse-1.png"
                className=' absolute top-0 -left-0'
                alt="Breakfast 1"
                width={400}
                height={400}
            />
            {/* Text Section */}
            <div className=" static -top-44 left-0">
                <h1 className={`${sanchezFont.className} text-4xl font-bold mb-1`}>BREAKFAST</h1>
                <p className={`${interFont.className}`}>
                    Breakfast, often referred to as the ‘most important meal of the day’, provides
                    essential nutrients to kick start our day. It includes a variety of foods, like
                    fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.
                    Eating a healthy breakfast can improve concentration and performance, boost physical
                    endurance, and lower cholesterol levels.
                </p>
            </div>  
            {/* banner small images */}
            <div className="  -top-44 left-0 flex items-center justify-center">
                <Image
                    src="/assets/banner/food-1.png"
                    alt="Breakfast 1"
                    width={200}
                    height={200}
                    className=' h-[182.51px] w-[182.51px] rounded-full'
                />
                <Image
                    src="/assets/banner/food-2.png"
                    alt="Breakfast 2"
                    width={200}
                    height={200}
                    className=' h-[182.51px] w-[182.51px] rounded-full'
                />
                <Image
                    src="/assets/banner/food-3.png"
                    alt="Breakfast 3"
                    width={200}
                    height={200}
                    className=' h-[182.51px] w-[182.51px] rounded-full'
                />
                <Image
                    src="/assets/banner/food-4.png"
                    alt="Breakfast 3"
                    width={200}
                    height={200}
                    className=' h-[182.51px] w-[182.51px] rounded-full'
                />
            </div>
            <Image
                src="/assets/banner/Ellipse-2.png"
                className=' bottom-0 right-0'
                alt="Breakfast 1"
                width={200}
                height={200}
            />
        </div>
    );
};

export default Banner;
