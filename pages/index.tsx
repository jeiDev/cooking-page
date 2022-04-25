import type { NextPage } from 'next';
import Layout from '~/components/layout';
import SectionBanner from '~/components/pages/home/sectionBanner';
import SectionCategory from '~/components/pages/home/sectionCategory';
import SectionRecipes from '~/components/pages/home/sectionRecipes';

const Home: NextPage = () => {
 
  return (
    <Layout title="Home">
        <SectionBanner />
        <SectionCategory />
        <SectionRecipes />
    </Layout>
  )
}

export default Home
