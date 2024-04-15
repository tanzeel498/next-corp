import Hero from '@/components/Hero';
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <Hero
      title="Professional Cloud Hosting"
      imgAlt="car factory"
      imgData={homeImg}
    />
  );
}
