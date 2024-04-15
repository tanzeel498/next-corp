import Hero from '@/components/Hero';
import reliabilityImg from 'public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <Hero
      title="Super high Reliability Hosting"
      imgAlt="welding"
      imgData={reliabilityImg}
    />
  );
}
