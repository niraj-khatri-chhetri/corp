import Hero from '../components/hero';
import scaleImage from '@/public/scale.jpg';

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImage}
      imgAlt="scaleFactory"
      title="Scale your app to infinity"
    />
  );
}
