import styles from './App.module.css';
import Card from './component/card';
const App = () =>{
  return(
    <>
    <div className={styles.card}>
      <Card url = {"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"}
            name ={"Anand Kumar Ojha"}
            designation = {"Aspiring Software Developer"}
      
      />
      <Card url = {"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"}
            name ={"Arun Kumar Ojha"}
            designation = {"Resturant Manager"}
      
      />
      <Card url = {"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"}
            name ={"Ruby Tiwari"}
            designation = {"Esclation Sr. Executive"}
      
      />

      </div>
    </>
  )
}
export default App;