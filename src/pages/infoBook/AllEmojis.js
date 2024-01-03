import styles from "./AllEmoijs.module.css";

export const Star = ({ isActive, onClick }) => {
  return (
    <div className={styles.starButton}>
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill={isActive ? "orange" : "#ccc"}
          width={15}
          height={15}
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </button>
    </div>
  );
};
 export const Heart = ({ isActive, onClick }) => {
  return (
    <div className={styles.heartButton}>
      <button onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill={isActive ? "red" : "#ccc"}
      width={15}
      height={15}
      >
      <path d="M20.808 11.079C19.829 16.132 12 20.5 12 20.5s-7.829-4.368-8.808-9.421C2.227 6.1 5.066 3.5 8 3.5a4.444 4.444 0 0 1 4 2 4.444 4.444 0 0 1 4-2c2.934 0 5.773 2.6 4.808 7.579z"/>
      </svg>
      </button>
    </div>
  );
};

