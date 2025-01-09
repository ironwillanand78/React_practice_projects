import styles  from './card.module.css'

const Card = (props) =>{
    return <>
        <div className={styles.card}>
            <div className={styles.imgdiv}>
                <img src={props.url} />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.designation}</h3>
        </div>
    </>
}

export default Card;