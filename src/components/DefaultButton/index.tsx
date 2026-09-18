import styles from './styles.module.css'

import type React from 'react';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color? : 'purple' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color='purple', ...props }: DefaultButtonProps) {
  return(
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}> 
        {icon}
      </button>  
    </>
  )
}