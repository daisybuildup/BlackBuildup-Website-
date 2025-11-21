
import { getEvents } from '../../../../lib/api';
import EventsClient from '../component/EventsClient';
export const revalidate = 60; 

export default async function Events() {
  const events = await getEvents(); //  Fetch data on the server
  return <EventsClient events={events} />; // Pass to client component
}
