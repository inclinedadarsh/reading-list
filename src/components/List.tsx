import Link from "next/link";
import React from "react";

type ListElement = {
    name: string;
    url: string;
    type: string;
};

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    list: ListElement[];
}

const List = ({ title, list }: ListProps) => {
    const listItems = list.map((item, index) => (
        <React.Fragment key={index}>
            <li className='flex gap-4'>
                <Link
                    href={item.url}
                    className='text-gray-700 hover:text-black hover:underline'
                >
                    {item.name}
                </Link>
            </li>
            {index + 1 != list.length && <span aria-hidden>&bull;</span>}
        </React.Fragment>
    ));
    return (
        <div className=''>
            <h2 className='bg-gray-100/70 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[8px] font-bold w-fit px-4 py-2 mb-4'>
                {title}
            </h2>
            {list.length == 0 ? (
                <p className='text-gray-700'>
                    Nothing here to see! But I promise I'll add stuff here soon.
                    Please check the reading list till then!
                </p>
            ) : (
                <ul className='flex flex-wrap gap-x-4 gap-y-2'>{listItems}</ul>
            )}
        </div>
    );
};

export default List;
