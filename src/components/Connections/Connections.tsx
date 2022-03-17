import Content from "../Content/Content";
import {useSelector} from "react-redux";
import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";
import DiscordIcon from "@material-ui-extra/icons/DiscordIcon";
import {Telegram, WhatsApp} from "@material-ui/icons";
import GithubIcon from "@material-ui-extra/icons/GithubIcon";

const ConnectionBox = styled.a`
  display: flex;
  gap: 5px;
  text-decoration: none;
  padding: 35px 40px;
  cursor: pointer;
  border-radius: 20px;
  color: ${ThemeConstants.PRIMARY};
  background-color: ${ThemeConstants.SECONDARY};
`

const Connections = () => {
    const content: any = useSelector((state: any) => state.content)

    return (
        <section id='connect'>
            <Content title={content['CONNECT']}>
                <div className='d-flex flex-wrap gap-3 justify-content-center m-auto' style={{maxWidth: 400}}>
                    <ConnectionBox href='https://discord.gg/kZ5xkkBV8f'>
                        <DiscordIcon/>Discord
                    </ConnectionBox>
                    <ConnectionBox href='https://t.me/emmillian'>
                        <Telegram/>Telegram
                    </ConnectionBox>
                    <ConnectionBox href='https://github.com/real-charlie/'>
                        <GithubIcon/>Github
                    </ConnectionBox>
                    <ConnectionBox href='https://wa.me/+989372119950/'>
                        <WhatsApp/>WhatsApp
                    </ConnectionBox>
                </div>
            </Content>
        </section>
    )
}

export default Connections
