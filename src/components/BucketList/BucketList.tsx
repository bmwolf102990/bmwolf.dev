"use client"

import React, { useState, useEffect } from "react";
import bucketListData from "@/data/bucketListData";

interface BucketListProps {
    item: string;
    checked: boolean;
}

export const BucketList: React.FC = () => {
    const [list, setList] = useState<BucketListProps[]>([]);


    useEffect(() => {
        setList(bucketListData);
    }, [list])

    const listItems = list.map((item, i) => {
        return (
            <label key={i} className='flex pt-5 pb-5' htmlFor={item.item}>
                <input disabled checked={item.checked} className='self-center rounded-full bg-green-100 border-green-500 text-green-500 focus:ring-green-200 w-5 h-5' type='checkbox' />
                <span className='self-center ml-2'>{item.item}</span>
            </label>
        );
    });

    return(
        <>
            <div className=' grid grid-cols-5'>
                {listItems}
            </div>
        </>
    );
};

export default BucketList;
