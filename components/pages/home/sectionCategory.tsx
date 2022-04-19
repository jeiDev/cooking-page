import { useEffect, useState } from "react";
import Link from "next/link";
import CardCategory from "~/components/app/cards/category";
import ContainerBetween from "~/components/app/containers/between";
import { CategoryI } from "~/interfaces/data/category/category.interface";
import categoryProvider from "~/providers/category.provider";

const SectionCategory = () => {
    const [items, setItems] = useState<Array<CategoryI> | undefined>();
    const handleGetCategories = async () => {
        const res = await categoryProvider.getAll(6, 0);
        if(res.error) return console.log("error")
      
        setItems(res.data);
    }


    useEffect(() => {
        if (items != undefined) return;
        handleGetCategories();
    }, [])

    return (
        <section>
            <ContainerBetween
                title="Categories"
                subTitle={() => (
                    <Link href="#">
                        <a style={{fontSize: ".8em"}}>View All Categories</a>
                    </Link>
                )}
            >
                <div className='row'>
                        {items?.map((item, i) => {
                            return(
                                <CardCategory 
                                    key={`category-item-${i}`}
                                    srcImage={item.image}
                                    title={item.title}
                                    classCol={"col-2"}
                                    altImage={`image ${item.title}`}
                                />
                            )
                        })}
                </div>
            </ContainerBetween>
        </section>
    )
}

export default SectionCategory;