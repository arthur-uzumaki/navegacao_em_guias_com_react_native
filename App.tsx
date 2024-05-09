import '@/styles/global.css'
import { StatusBar } from 'expo-status-bar';
import { Movies } from '@/app/Movies';
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Movies/>
    </>
  );
}


