import ArticleLeft from '../components/ArticleTextLeft';
const ArticleInCategory = ({cname, start, end}: any) => {

    return (
        <div className='flex flex-row justify-center h-fit w-full mt-5'>
            <div className='w-full flex gap-x-6'>
                <ArticleLeft cname={cname} start={start} end={end}/>
            </div>
        </div>
    )
}

export default ArticleInCategory