import React from 'react'
import styled from "styled-components"
import styles from './TopSection.module.css'
import InputDate from './InputDate'

const Wrapper = styled.div`
  height: 251px;
  background: papayawhip;
`;

const Heading = styled.h1`
   font-size: 32px;
   font-weight: bold
`

const Subheading = styled.h6`
   font-size: 16px;   
   font-weight: bold
`

const TopSection = () => {
    return (
      <Wrapper>
        <div className= {styles.centerBox}>
          <Heading style={{ textAlign: "center" }}>
            Goa Hotels and Places to Stay
          </Heading>
          <Subheading style={{ textAlign: "center" }}>
            Enter dates to find the best prices
          </Subheading>
          <InputDate/>
        </div>

      </Wrapper>
    );
}

export default TopSection;
