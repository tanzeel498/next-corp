import Hero from '@/components/Hero';
import performanceImg from 'public/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero
      title="We Serve high Performance Applications"
      imgAlt="welding"
      imgData={performanceImg}
    />
  );
}
