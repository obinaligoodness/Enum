interface NavProps {
    item: string
    selectedItem: string;
    onClick: (item: string) => void;
    Icon: React.ComponentType<any>;
    iconProps?: Record<string, any>;
  }
  
  const NavItem: React.FC<NavProps> = ({ selectedItem, onClick, Icon, iconProps,item }) => {
    return (
      <div className="flex justify-center items-center w-48 h-10 cursor-pointer" onClick={() => onClick(item)}>
        <div className={`${selectedItem === item ? "flex flex-row gap-4  justify-center items-center w-40 h-8 bg-[#F6FCFF] rounded-lg text-[#008EEF]" : "flex flex-row gap-4"}`}>
          <Icon {...iconProps} /> 
          <p className="w-14">{item}</p>
        </div>
      </div>
    );
  }
  
  export default NavItem;
  