import React from 'react'
import styled from 'styled-components';

const ProductSpecs = ({ specImg }) => {
  const SectionTitle = styled.div`
    font-family: adineue PRO KZ Bold;
    font-size: 30px;
    font-weight: lighter;
  `
  const Section = styled.div`
    width: 50%;
    height: auto;
  `

  return (
    <div>
      <Section>
        <SectionTitle>HIGHLIGHTS</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>HIGHLIGHTS</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>HIGHLIGHTS</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>HIGHLIGHTS</SectionTitle>
      </Section>
    </div>
  )
}
export default ProductSpecs