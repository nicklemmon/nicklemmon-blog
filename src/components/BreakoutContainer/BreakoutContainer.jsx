import React from 'react'

import Container from '@components/Container/Container'

import './BreakoutContainer.css'

export default function BreakoutContainer(
  {
    children,
  },
) {
  return (
    <div className="BreakoutContainer">
      <Container size="lg">{children}</Container>
    </div>
  );
}
