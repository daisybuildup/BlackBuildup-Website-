// src/app/component/Leadership.jsx
import { getTeams } from '../../../lib/api';
import LeadershipClient from '../components/LeadershipClient'; // we'll create this next


export default async function Leadership() {
  const teams = await getTeams(); //  Fetch data on the server
  return <LeadershipClient teams={teams} />; // Pass to client component
}
