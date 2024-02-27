import Image from "next/image";

interface LogoProps {
  url: string;
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ url, width, height }) =>  {
    return (
      
      <Image 
        src={url.toString()} 
        alt=""
        width={width}
        height={height}
        
      />
    )
}

export default Logo;
