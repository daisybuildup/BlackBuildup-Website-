import { getProject } from '../../../../lib/api';
import ProjectClient from '../component/ProjectClient';
export const revalidate = 60; 

export default async function Project() {
  const projects = await getProject(); //  Fetch data on the server
  return <ProjectClient projects={projects} />; // Pass to client component
}
