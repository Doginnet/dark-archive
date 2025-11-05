import styles from './MainHeader.module.css';

export const MainHeader = () => {
  return (
    <header className="container mx-auto px-4">
      <div className={styles.headerWrapper}>
        
        {/* Left Panel */}
        <ul className={styles.panel}>
          <li className={styles.headerItem}> <a href="#" className={styles.headerLink}> Music </a> </li>
          <li className={styles.headerItem}> <a href="#" className={styles.headerLink}> Archive </a> </li>
        </ul> 
        
        {/* Central Title */}
        <h1 className="font-display font-thin text-2xl text-accent neon-glow">
          Dark Archive
        </h1>
        
        {/* Right Panel */}
        <ul className={styles.panel}>
          <li className={styles.headerItem}> <a href="#" className={styles.headerLink}> About </a> </li>
          <li className={styles.headerItem}> <a href="#" className={styles.headerLink}> Contact </a> </li>
        </ul>

      </div>
    </header>
  );
};