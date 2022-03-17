import styled from "styled-components";
import Content from "./Content";
import ThemeConstants from "../../constants/theme_constants";
import {useSelector} from "react-redux";
import Button from "../Button/Button";

const ContentFrame = styled.section`
  justify-content: center;
  padding: 14.5vh 20px;
  background-color: ${ThemeConstants.SECONDARY};
  background-image: url(https://eupclick.com/assets/images/services/code.jpg) ;
  background-size: cover;
  background-repeat: no-repeat;
`

const FirstContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  background-image: linear-gradient(to top right, ${ThemeConstants.SECONDARY} 92%, transparent 92.1%);
  border-radius: 20px 5px 20px 20px;
  max-width: 500px;
  
  &:hover {
    opacity: 0.95;
  }
`

const FirstContent = (props: any) => {
    const content: any = useSelector((state: any) => state.content)

    return (
        <ContentFrame>
            <FirstContentFrame className='gap-5 p-3'>
                <Content color={ThemeConstants.PRIMARY} title={content['FIRST_CONTENT_TITLE']}>
                    {content['FIRST_CONTENT']}
                </Content>
                <Button onClick={() => {
                    props.plans.current.scrollIntoView()
                    console.log(props.plans.current)
                }}>
                    {content['VIEW_PLANS']}
                </Button>
            </FirstContentFrame>
        </ContentFrame>
    )
}

export default FirstContent
