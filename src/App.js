import styles from "./style";
import {  Footer, Navbar,  Hero, Pistachio, NewYear, Wrap, Terms} from "./components";



const App = () => {
  return (
    <>
    <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Hero /> 
      <NewYear />
      <Pistachio />
      <Wrap />
      <Terms />
      <Footer />
      </div>
      
    </div>
   
  </div>
  </>
  )
}
export default App