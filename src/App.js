import MainHero from "./section/heroSection/hero";
import PhoneModel from "./section/phoneModelSection/phone";
import Quote from "./section/quoteSection/quote";
import { GlobalStyle } from "./styles/globalStyles";


function App() {
  return (
    <>
    <GlobalStyle/>
    <Quote/>
    <PhoneModel/>
    <MainHero/>

    </>
  );
}

export default App;
