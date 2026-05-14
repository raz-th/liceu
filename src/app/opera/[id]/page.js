import ClientPoezie from './ClientPoezie';
import Negasit from './Negasit';

export async function generateStaticParams() {
    return [
        { id: 'luceafarul' },
        { id: 'ce-ti-doresc-eu-tie-dulce-romanie' },
        { id: 'sara-pe-deal' },
        { id: 'floare-albastra' },
        { id: 'ce-te-legeni' }
    ];
}


async function getPoezie(id) {
    console.log('Fetching id:', id); // ce id vine?
    const res = await fetch(
        `http://liceu-omega.vercel.app/api/opere/${id}`,
        { cache: 'no-store' }
    );
    console.log('Status:', res.status); // 404 sau 200?
    
    if (!res.ok) return null;
    return res.json();
}
const Page = async ({ params }) => {
    const { id } = await params;

    const poezie = await getPoezie(id);

    if (!poezie) {
        return <Negasit/>;
    }

    return (
        <ClientPoezie poezie={poezie.data} />
    );
}

export default Page;