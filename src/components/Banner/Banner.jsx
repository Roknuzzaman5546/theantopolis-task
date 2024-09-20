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
        <div className="relative bg-[#880808] text-white h-screen flex justify-between items-center px-12">
            {/* Text Section */}
            <div className="">
                <h1 className={`${sanchezFont.className} text-4xl font-bold mb-1`}>BREAKFAST</h1>
                <p className={`${interFont.className}`}>
                    Breakfast, often referred to as the ‘most important meal of the day’, provides
                    essential nutrients to kick start our day. It includes a variety of foods, like
                    fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.
                    Eating a healthy breakfast can improve concentration and performance, boost physical
                    endurance, and lower cholesterol levels.
                </p>
            </div>

        </div>
    );
};

export default Banner;
