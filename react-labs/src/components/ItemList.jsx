import { Component } from "react";
import s from "./ItemList.module.css";

class ItemList extends Component {
    render() {
    const items = this.props.items || [  "Apple",
  "Banana",
  "Cherry",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Blueberry",
  "Peach",
  "Watermelon",
  "Lemon",
  "Pear",
  "Kiwi",
  "Orange",
  "Plum"];

        return (
        <ul className={s.list}>
            {items.map((item, index) => (
            <li className={s.item} key={index}>{item}</li>
            ))}
        </ul>
        );
    }
}

export default ItemList;