import { getEntrepreneurship } from '../../../../../lib/api';
import EntrepreneurshipClient from '../component/EntrepreneurshipClient';



export default async function Entrepreneurship() {
  const entrepreneurship = await getEntrepreneurship();
  return <EntrepreneurshipClient entrepreneurship={entrepreneurship} />;
}
