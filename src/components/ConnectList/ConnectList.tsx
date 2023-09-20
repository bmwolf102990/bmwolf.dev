"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import connectListData from '@/data/connectListData';
import Link from "next/link";

interface ConnectListProps {
    item: string;
    icon: string;
    blurb: string;
    link: string;
}

export const ConnectList: React.FC = () => {
    const [list, setList] = useState<ConnectListProps[]>([]);


    useEffect(() => {
        setList(connectListData);
    }, [list])

    const listItems = list.map((item, i) => {
        return (
            <Link
                key={i}
                href={item.link}
                target='_blank'
                className='flex pt-2 pb-2 pl-2 mb-4 rounded text-black hover:bg-neutral-300 hover:opacity-70'
            >
                <Image
                    className='rounded' 
                    src={item.icon}
                    alt=''
                    width={40}
                    height={40}
                    
                    />
                <div>
                    <span className='self-center ml-2'>{item.item}</span>
                    <p className='self-center ml-2 font-thin'>{item.blurb}</p>
                </div>
            </Link>
        );
    });

    return(
        <>
            <div className=''>
                {listItems}
            </div>
        </>
    );
};

export default ConnectList;