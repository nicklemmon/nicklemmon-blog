import React from 'react'
import classNames from 'classnames'

import './Main.css'

export default function Main(
  {
    className,
    children,
  },
) {
  return (
    <main className={classNames('Main', className)}>
      {children}
    </main>
  );
}
