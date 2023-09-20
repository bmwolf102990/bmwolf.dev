import React from "react";
interface HeadingProps {
    className?: string;
    level: number;
    content: string;
    sx?: object;
}

export const Heading: React.FC<HeadingProps> = ({ level, content, sx }) => {
    
    return (
        <>
            {level === 1 && 
                <h1 style={{fontSize: '4rem', ...sx}}>{content}</h1>
            }
            {level === 2 && 
                <h2 style={{fontSize: '3.5rem', ...sx}}>{content}</h2>
            }
            {level === 3 && 
                <h3 style={{fontSize: '3rem', ...sx}}>{content}</h3>
            }
            {level === 4 && 
                <h4 style={{fontSize: '2.5rem', ...sx}}>{content}</h4>
            }
            {level === 5 && 
                <h5 style={{fontSize: '2rem', ...sx}}>{content}</h5>
            }
            {level === 6 && 
                <h6 style={{fontSize: '1.5rem', ...sx}}>{content}</h6>
            }
        </>
    )
};

export default Heading;
