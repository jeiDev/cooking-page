import { useState } from "react";
import { BannerPropsI } from "~/interfaces/components/app/banner/banner.interface";
import BounceLoad from "../../load/bounce";
import ItemBanner3D from "./item";

const Banner3D = ({items}: BannerPropsI) => {
    const [itemAtive, setItemActive] = useState(1); 

    return (
        <div>
            <BounceLoad 
                size={17}
                cantPoints={3}
                pointColor={"#c7c3c3"}
            />
        </div>
    )
}

export default Banner3D;            