import Battery from "./section/batterySection/battery";
import Color from "./section/colorSection/color";
import Design from "./section/designSection/design";
import Display from "./section/displaySection/display";
import MainHero from "./section/heroSection/hero";
import PhoneModel from "./section/phoneModelSection/phone";
import Processor from "./section/processorSection/processor";
import Quote from "./section/quoteSection/quote";
import { GlobalStyle } from "./styles/globalStyles";


function App() {
  return (
    <>
    <GlobalStyle/>
    <Quote/>
    <PhoneModel/>
    <MainHero/>
    <Design/>
    <Display/>
    <Processor/>
    <Battery/>
    <Color/>

    </>
  );
}

export default App;
