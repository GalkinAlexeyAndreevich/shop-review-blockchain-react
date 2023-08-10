import NavigationItem from "./NavigationItem";
import styles from "./AsideBar.module.css";
function AsideBar(arr) {
  console.log(arr.arr[0]);
  return (
    <div>
      {arr.arr.map((item, index) => (
          <NavigationItem style={styles.item} key={index} nameItem={item}/>
      ))}
    </div>
  );
}

export default AsideBar;
