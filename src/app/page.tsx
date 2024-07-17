import ViewContainer from "@/components/ViewContainer";
import Link from "next/link";

export default function Home() {
    return (
        <ViewContainer className=''>
            <header className='py-10 border-[#e5e5e5] border-b'>
                <p className='text-2xl font-bold transition duration-300 ease-in-out -skew-x-[16deg] translate-x-[3px] hover:skew-x-0 hover:translate-x-0 w-fit'>
                    ia.
                </p>
                <h1 className='mt-14 text-4xl font-bold'>My reading list</h1>
                <p className='mt-6 text-gray-700'>
                    I have made this website because I started reading blogs
                    recently, and I wanted to keep a track of all the blogs.
                    Making a website would put it out there, so why not?
                    Inspired{" "}
                    <span className='blur-sm hover:blur-none transition ease-in-out'>
                        (heavily copied)
                    </span>{" "}
                    from{" "}
                    <Link
                        href='https://x.com/AstleDsa'
                        className='underline hover:no-underline transition ease-in-out'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        astle dsa
                    </Link>
                    's{" "}
                    <Link
                        href='https://readinglibrary.vercel.app/'
                        className='underline hover:no-underline transition ease-in-out'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        reading library
                    </Link>
                    .
                </p>
                <div className='my-6 flex gap-6 items-center'>
                    <Link
                        href='https://x.com/inclinedadarsh'
                        className='px-4 py-2 rounded-full bg-black text-white shadow-lg hover:scale-105 transition ease-in-out'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Connect with me
                    </Link>
                    <p className='font-medium text-gray-500 flex gap-2 items-center'>
                        <span className='w-2 h-2 rounded-full bg-black animate-shadowPulse'></span>
                        Open to collaborate
                        {/* Add a tooltip later saying how you are open to collaborate */}
                    </p>
                </div>
            </header>
        </ViewContainer>
    );
}
