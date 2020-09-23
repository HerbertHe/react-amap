import React from 'react';
import { NavLink } from 'react-router-dom';
import { menus } from '../../router';
import styles from './index.module.less';

export default function SideMenu() {
  return (
    <div className={styles.side}>
      <div className={styles.logo}>
        <svg viewBox="0 0 1024 1024" width="42" height="42">
          <path d="M0 801.787737c0 107.787661 92.888119 223.570702 230.061131 222.200213h570.123392c124.274901 0 223.803427-107.368757 223.803427-223.99995V224.8119C1023.98795 108.072102 927.888232 0 795.545547 0H225.018766C93.151874 0 0 111.397477 0 224.8119v576.975837z" fill="#F1F1F1" />
          <path d="M620.097107 0H225.018766C93.151874 0 0 111.397477 0 224.8119v91.450399l620.097107 0.584397V0z" fill="#AFE881" />
          <path d="M697.206503 1023.98795h102.972848c124.274901 0 223.808599-107.368757 223.808599-223.99995V796.435072h-325.814348l-0.967099 227.552878z" fill="#A3CAFF" />
          <path d="M0 408.560849V315.471035h1023.98795v93.089814z" fill="#FFFFFF" />
          <path d="M620.097107 1023.998293V0h78.102354v1023.998293z" fill="#FFFFFF" />
          <path d="M0 796.435072v-124.119751h1023.98795v124.119751z" fill="#FFDF48" />
          <path d="M206.866253 1023.998293V0h155.149689v1023.998293z" fill="#FFCF68" />
          <path d="M134.463064 536.911015l73.411662 116.103684 3.201255-101.002447z" fill="#D6D7D4" />
          <path d="M207.874726 653.014699l132.125475 208.965945 23.086274 2.482395v-280.122764l-155.211749-34.148446z" fill="#E5BA5E" />
          <path d="M392.663177 796.435072h209.545171l-141.263792-62.059876z" fill="#E4C84A" />
          <path d="M362.776175 864.426838l253.281868 27.213255-0.630942-97.692587H363.086475z" fill="#D6D7D4" />
          <path d="M616.058043 891.640093l91.957221 9.877864L615.427101 793.952677z" fill="#E7E7E8" />
          <path d="M890.936748 186.179627L318.780895 664.216507l21.219306 197.764137 60.472177-157.616569z" fill="#0066BD" />
          <path d="M391.106509 702.884981l-51.106308 159.095663 120.944355-116.243319L419.814373 672.315321z" fill="#014E9D" />
          <path d="M134.463064 536.911015l184.317831 127.305492L890.936748 186.179627l-500.440495 513.690279 317.519011 201.648051L890.936748 186.179627z" fill="#0093FD" />
        </svg>
        <div>高德地图 React 组件</div>
      </div>
      <div className={styles.menus}>
        {menus.map(({ label, path, divider, ...otherItem }, idx) => {
          if(divider) {
            return <div key={idx} className={styles.divider}>{label}</div>;
          }
          if (path && /^http/.test(path)) {
            return <a key={idx} href={path} {...otherItem}>{label}</a>;
          }
          return (
            <NavLink key={idx} to={path || ''} exact>
              {label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}