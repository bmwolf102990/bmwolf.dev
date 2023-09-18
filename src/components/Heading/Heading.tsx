import React from "react";
import { Poppins } from "next/font/google";

interface HeadingProps {
    level: number;
    content: string;
    sx?: object;
}

const poppins = Poppins({
    weight: ['100', '500', '900'],
    subsets: ['latin']
});

export const Heading: React.FC<HeadingProps> = ({ level, content, sx }) => {
    
    return (
        <>
            {level === 1 && 
                <h1 className={poppins.className} style={{fontSize: '4rem', ...sx}}>{content}</h1>
            }
            {level === 2 && 
                <h2 className={poppins.className} style={{fontSize: '3.5rem', ...sx}}>{content}</h2>
            }
            {level === 3 && 
                <h3 className={poppins.className} style={{fontSize: '3rem', ...sx}}>{content}</h3>
            }
            {level === 4 && 
                <h4 className={poppins.className} style={{fontSize: '2.5rem', ...sx}}>{content}</h4>
            }
            {level === 5 && 
                <h5 className={poppins.className} style={{fontSize: '2rem', ...sx}}>{content}</h5>
            }
            {level === 6 && 
                <h6 className={poppins.className} style={{fontSize: '1.5rem', ...sx}}>{content}</h6>
            }
        </>
    )
};

export default Heading;
