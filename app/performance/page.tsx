import Hero from '../components/hero';
import performanceImage from '@/public/performance.jpg';

export default function PerfomancePage() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="weilding"
      title="Super high reliability hosting"
    />
  );
}
