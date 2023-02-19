import Menu from '@/components/menu/Menu';
import Project from '@/components/projectView/sheCabProject';
import { LivepeerConfig, ThemeConfig, createReactClient, studioProvider } from '@livepeer/react';

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY!,
  }),
});

const newProj = () => {
  return (
    <LivepeerConfig client={livepeerClient}>
      <Menu />
      <Project />
    </LivepeerConfig>
  );
};

export default newProj;
