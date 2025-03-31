"use client"
import Header from '../containers/Header';
import TitileLeft from '../components/TitileLeft'
import TitileCenter from '../components/TitileCenter'
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react'
import SubCategory from '../components/SubCategory';
import ArticleInHead from '../containers/ArticleInHead';
import ArticleInCategory from '../containers/ArticleInCategory';
import Footer from '@/app/Components/Footer';
import ArticleInList from '../containers/ArticleInList';
import SpecialNews from '../containers/SpecialNews';
import Vote from '../containers/Vote';
import Header2 from '../containers/Header2';
interface Categories {
  id: number;
  name: string;
  href: string;
}

const CategoryPage = () => {
  const params = useParams();
  const href = params.href as string;
  const [categories, setCategories] = useState<Categories | null>(null);
  const [Scrolled, setScrolled] = useState(false);


  useEffect(() => {
    if (!href || typeof href !== "string") return;
    fetch('/data.json')
      .then(res => res.json())
      .then((data) => {
        const CategoryAccess = data.categories.find((a: Categories) => a.href === href);
        setCategories(CategoryAccess || null)
      })
      .catch(error => console.error(error))
  }, [href]);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 256) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', HandleScroll)
    return () => window.removeEventListener('scroll', HandleScroll);
  }, []);

  if (!categories) return <h1 className='h-lvh flex justify-center items-center w-full font-bold'>Không có danh mục này</h1>

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
          <span className='w-3/4'>
            <ArticleInList cname={categories.name} />
          </span>
          <span className={`w-1/4`} >
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
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default CategoryPage