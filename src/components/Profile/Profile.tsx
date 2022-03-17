import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";
import ProgressBar from "./ProgressBar";
import {useSelector} from "react-redux";
import IntroContent from "../Content/IntroContent";
import Paragraph from "../Content/Paragraph";
// @ts-ignore
import avatar from "../../assets/images/avatar.jpg"

const ProfileContainer = styled.article`
  display: flex;
  gap: 10px;
  border-radius: 20px;
  padding: 30px;
  background-color: ${ThemeConstants.SECONDARY};
  margin: auto;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const ProfilePicture = styled.img`
  border-radius: 100px;
  width: 90px;
  margin: auto;
  border: 5px solid ${ThemeConstants.PRIMARY};
  height: 90px;

  background-image: linear-gradient(${ThemeConstants.PRIMARY}, ${ThemeConstants.SECONDARY});
`

const Profile = () => {
    const content: any = useSelector((state: any) => state.content)
    const year = new Date().getFullYear()
    const experience = year - 2019
    const fullExperience = year - 2017

    return (
        <ProfileContainer>
            <div className='d-flex flex-column gap-2'>
                <ProfilePicture src={avatar}/>
                <div>
                    <Paragraph className='normal-paragraph text-center'>
                        {content['NAME']}
                    </Paragraph>
                    <Paragraph className='normal-paragraph text-center'>
                        The Charlie
                    </Paragraph>
                </div>
            </div>
            <div className='d-flex flex-column gap-2'>
                <IntroContent textEnd={`${fullExperience} ${content['YEARS']}`}>
                    {content['F_EXPERIENCE']}
                </IntroContent>
                <IntroContent textEnd={`${experience} ${content['YEARS']}`}>
                    {content['EXPERIENCE']}
                </IntroContent>
                <IntroContent textEnd={`2 ${content['YEARS']}`}>
                    {content['W_EXPERIENCE']}
                </IntroContent>
                <div className='d-flex flex-column'>
                    <Paragraph className='normal-paragraph'>
                        {content['CUSTOMER_RATING']}
                    </Paragraph>
                    <ProgressBar percent={85} value={5}>
                        UI
                    </ProgressBar>
                    <ProgressBar percent={95} value={5}>
                        UX
                    </ProgressBar>
                    <ProgressBar percent={75} value={5}>
                        {content['SPEED']}
                    </ProgressBar>
                </div>
            </div>
        </ProfileContainer>
    )
}

export default Profile
