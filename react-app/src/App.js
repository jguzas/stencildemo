import logo from './logo.svg';
import './App.css';

function App() {
  const source = JSON.stringify([
    {src: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=700', alt: 'winter'},
    {src: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=700', alt: 'winter2'},
    {src: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=700', alt: 'winter3'},
  ]);

  return (
    <>
      <my-carousel time="5000" source={source}></my-carousel>
    </>
  );
}

export default App;
