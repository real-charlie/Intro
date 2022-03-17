import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";
import IntroContent from "../Content/IntroContent";
import Paragraph from "../Content/Paragraph";

const ProgressBarContainer = styled.div`
  background-color: ${ThemeConstants.SECONDARY};
  border: 2px solid ${ThemeConstants.PRIMARY};
  border-radius: 30px;
  height: 15px;
  width: 150px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  gap: 2px;
`

const ProgressBarParagraph = (props: any) => {
    return (
        <Paragraph style={{fontSize: '10px', lineHeight: '1', padding: '0px 2px 0px 3px'}}>
            {props.children}
        </Paragraph>
    )
}

const ProgressBar = (props: any) => {
    return (
        <div className='flex'>
            <IntroContent textEnd={props.textEnd}>
                {props.children}
            </IntroContent>
            <ProgressBarContainer {...props}>
                <div className='d-flex w-100'>
                    <ProgressBarParagraph>
                        {(props.value * props.percent / 100).toFixed(1)}
                    </ProgressBarParagraph>
                    <div className='h-100'
                         style={{backgroundColor: ThemeConstants.PRIMARY, width: `${props.percent - 10}%`}}/>
                </div>
                <ProgressBarParagraph>
                    {props.value}
                </ProgressBarParagraph>

            </ProgressBarContainer>


        </div>
    )
}

export default ProgressBar
