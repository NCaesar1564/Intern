import { Metadata, ResolvingMetadata } from 'next';
import ArticlePage from './ArticlePage';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await fetch('/data.json');
  const data = await res.json();

  const table = searchParams.table as string || 'articles';
  const record = data[table]?.find((item: any) => item.id === params.id);

  return {
    title: `ZNew | ${record?.title || 'Unknown'}`,
    openGraph: {
      images: [
        {
          url: record?.image || '',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}


export default function Page({ params, searchParams }: Props) {
  console.log(
    'Home component đang chạy trên:',
    typeof window === 'undefined' ? 'Server' : 'Client'
  );

  return (
    <>
      <ArticlePage />
    </>
  );
}
