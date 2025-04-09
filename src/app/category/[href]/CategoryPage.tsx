"use client"
import Header from '../containers/Header';
import TitileLeft from '../components/TitileLeft'
import TitileCenter from '../components/TitileCenter'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import SubCategory from '../components/SubCategory';
import ArticleInHead from '../containers/ArticleInHead';
import ArticleInCategory from '../containers/ArticleInCategory';
import Footer from '@/app/Components/Footer';
import ArticleInList from '../containers/ArticleInList';
import SpecialNews from '../containers/SpecialNews';
import Vote from '../containers/Vote';
interface Categories {
  id: string;
  name: string;
  href: string;
}
interface SubCategory {
  id: string;
  name: string;
  href: string;
  category: string;
}
const CategoryPage = () => {
  const params = useParams();
  const href = params.href as string;
  const [categories, setCategories] = useState<Categories | null>(null);
  const [subcategories, setSubcategories] = useState<Categories | null>(null);

  useEffect(() => {
    if (!href || typeof href !== "string") return;
    fetch(`/data.json`)
      .then(res => res.json())
      .then((data) => {
        const CategoryAccess = data.categories.find((a: Categories) => a.href === href);
        const SubcategoryAccess = data.categories.find((a: SubCategory) => a.href === href);

        setCategories(CategoryAccess || null);

        setSubcategories(SubcategoryAccess || null)
      })
      .catch(error => console.error(error))
  }, [href]);



  if (!categories)
    return (
      <h1 className='flex justify-center h-screen w-full items-center flex-col gap-y-3'>
        <div className='border-8 border-black border-b-gray-400 w-[100px] h-[100px] rounded-[50%] animate-spin '></div>
        <div className='flex flex-row items-end h-fit gap-2'>
          <p className='font-bold text-3xl animate-'>Đang tải danh mục ...</p>
        </div>
      </h1>
    )

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-[64px] w-full'>
        <Header />
      </div>
      <div className='w-3/4'>
        <div className='w-full h-fit'>
          <TitileCenter nameTitle={categories.name} />
          <SubCategory name={categories.name} />
        </div>


        <div className='mt-3'>
          <ArticleInHead cname={categories.name} />
        </div>
        <div>
          <ArticleInCategory cname={categories.name} start={0} end={4} />
        </div>
        <TitileLeft nameTitle='TIN MỚI' />
        <div className='flex justify-center gap-3 mt-3'>
          <span className='w-3/4 not-lg:w-full'>
            <ArticleInList cname={categories.name} />
          </span>
          <span className={`w-1/4 not-lg:hidden`} >
            <span className='flex flex-col gap-y-4 h-fit '>
              <span>
                <Vote />
              </span>
              <span className={``}>
                <SpecialNews />
              </span>
            </span>
          </span>
        </div>
      </div>

    </div>
  )
}

export default CategoryPage