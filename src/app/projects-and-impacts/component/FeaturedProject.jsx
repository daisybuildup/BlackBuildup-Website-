import { getFeaturedProject } from '../../../../lib/api';
import FeaturedProjectClient from '../component/FeaturedProjectClient';
export const revalidate = 60; 

export default async function FeaturedProject() {
  const featuredproject = await getFeaturedProject(); //  Fetch data on the server
  return <FeaturedProjectClient featuredproject={featuredproject} />; // Pass to client component
}
