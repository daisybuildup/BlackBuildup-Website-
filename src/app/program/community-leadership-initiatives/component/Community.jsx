
import { getCommunity } from '../../../../../lib/api';
import CommunityClient from '../component/CommunityClient';
export const revalidate = 60; 

export default async function Community() {
  const community = await getCommunity(); //  Fetch data on the server
  return <CommunityClient community={community} />; // Pass to client component
}
