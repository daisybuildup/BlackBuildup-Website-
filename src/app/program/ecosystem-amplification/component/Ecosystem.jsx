
import { getEcosystem } from '../../../../../lib/api';
import EcosystemClient from '../component/EcosystemClient';
export const revalidate = 60; 

export default async function Ecosystem() {
  const ecosystem = await getEcosystem(); //  Fetch data on the server
  return <EcosystemClient ecosystem={ecosystem} />; // Pass to client component
}
