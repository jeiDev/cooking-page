import { useEffect, useState } from "react";
import Banner3D from "~/components/app/banner/3D";
import { BannerI } from "~/interfaces/data/banner/banner.interface";
import bannerProvider from "~/providers/banner.provider";

const SectionBanner = () => {
    const [errorLoadDataBanner, setErrorLoadDataBanner] = useState<Boolean>(false);
    const [itemsBanner, setItemsBanner] = useState<Array<BannerI>>();
  
    const handleGetHomeBanner = async() => {
      const res = await bannerProvider.getHome();
      if(res.error || !res.data) return setErrorLoadDataBanner(true);
      return setItemsBanner(res.data);
    }
  
    useEffect(() => {
        if(itemsBanner != undefined) return;
        handleGetHomeBanner();
    }, []);

    return(
        <div>
            <Banner3D 
                items={itemsBanner}
                error={errorLoadDataBanner}
            />
        </div>
    )
}

export default SectionBanner;