import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import Banner3D from '~/components/app/banner/3D';
import Layout from '~/components/layout';
import { BannerI } from '~/interfaces/data/banner/banner.interface';
import bannerProvider from '~/providers/banner.provider';

const Home: NextPage = () => {
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
  }, [])

  return (
    <Layout title="Home">
      <div>
        <Banner3D 
          items={itemsBanner}
          error={errorLoadDataBanner}
        />
      </div>
    </Layout>
  )
}

export default Home
