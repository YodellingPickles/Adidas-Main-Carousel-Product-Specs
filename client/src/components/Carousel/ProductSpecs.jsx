import React from 'react'
import styled from 'styled-components';
import Recommendations from './Recommendations.jsx'

const ProductSpecs = ({ specImg, productRecs }) => {
  const CarouselCSS = styled.div`
    position: relative;
    width: 44%;
    height: auto;
    left: 28%;
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
    // background-color: grey;
  const SectionTitle = styled.div`
    font-family: adineue PRO KZ Bold;
    font-size: 30px;
    width: 100%;
  `;

  const SectionTitleNoText = styled(SectionTitle)`
    margin-bottom: 46px
  `

  const SectionSubTitle = styled.div`
    font-family: adineue PRO KZ Bold;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const SectionDescription = styled.div`
    font-family: AdihausDIN;
    font-size: 16px;
  `;

  const Section = styled.div`
    width: 47%;
    height: 27vh;
    position: relative;
  `;

  const FullWidthSection = styled.div`
    width: 100%;
    height: auto;
    margin-top: 120px;
    display: flex;
    flex-wrap: wrap;
  `
  const SpecItems = styled.div`
    margin-top: 20px;
    font-family: AdihausDIN;
    width: 50%;
    font-size: 14px;
    &:before {
      content: "• ";
    }
  `

  return (
    <CarouselCSS>
      <Section>
        <SectionTitle>HIGHLIGHTS</SectionTitle>
        <SectionSubTitle>HUGS THE FOOT</SectionSubTitle>
        <SectionDescription>The snug, stretchy fit offers a comfortable, supportive feel.</SectionDescription>
      </Section>
      <Section>
        <SectionTitleNoText></SectionTitleNoText>
        <SectionSubTitle>ENDLESS ENERGY</SectionSubTitle>
        <SectionDescription>Boost is our most responsive cushioning ever, delivering incredible energy return: The more energy you give, the more you get.</SectionDescription>
      </Section>
      <Section>
        <SectionTitle>NMD_R1 SHOES</SectionTitle>
        <SectionSubTitle>LIGHTWEIGHT SHOES WITH ENHANCED CUSHIONING.</SectionSubTitle>
        <SectionDescription>There's a lot to do in one day. Think about it. This second. What's on your agenda? Exactly. So if you're going to do all that, you might as well be comfortable, which just happens to be what these adidas NMD_R1 Shoes are designed for. Riding on some of the best of adidas technologies, they support your every move.</SectionDescription>
      </Section>
      <Section>
        <img class={'onlyimg'} src={specImg}></img>
      </Section>
      <FullWidthSection>
        <SectionTitle>SPECIFICATIONS</SectionTitle>
        <SpecItems>Snug fit</SpecItems>
        <SpecItems>Rubber outsole</SpecItems>
        <SpecItems>Lace closure</SpecItems>
        <SpecItems>Boost midsole</SpecItems>
        <SpecItems>Knit upper</SpecItems>
        <SpecItems>Imported</SpecItems>
        <SpecItems>Soft and lightweight</SpecItems>
        <SpecItems>Product color: Grey Four / Grey Four / Core Black</SpecItems>
        <SpecItems>Iconic street shoes</SpecItems>
        <SpecItems>Product code: FV1733</SpecItems>
      </FullWidthSection>
      <FullWidthSection>
        <SectionTitle>COMPLETE THE LOOK</SectionTitle>
        <Recommendations productRecs={productRecs}/>
      </FullWidthSection>
    </CarouselCSS>
  )
}
export default ProductSpecs

