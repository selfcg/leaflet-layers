import styles from './TheHeader.module.scss';

const TheHeader = () => {
  return (
    <div className={styles['header']}>
      <span id='title'>Leaflet Layer Control</span>
    </div>
  );
};
export default TheHeader;
