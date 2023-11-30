import { Home } from '@/pages/Home';
import { useFonts } from 'expo-font';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Inter400': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter500': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter700': require('./src/assets/fonts/Inter-Bold.ttf')
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    < >
      <Home />
    </>
  );
}


