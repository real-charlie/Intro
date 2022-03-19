import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";
import {Close} from "@material-ui/icons";
import Paragraph from "../Content/Paragraph";
import {useState} from "react";

const DialogContainer = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
  padding: 10px;
  width: 100vw;
  display: flex;
  height: 100vh;
`

const DialogItem = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 30px;
  border-radius: 30px;
  margin: auto;
  gap: 10px;
  background-color: ${ThemeConstants.SECONDARY};
`

const DialogButton = styled.button`
  color: ${ThemeConstants.SECONDARY};
  background-color: ${ThemeConstants.PRIMARY};
  border: 2px solid ${ThemeConstants.PRIMARY};
  border-radius: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${ThemeConstants.PRIMARY};
    background-color: ${ThemeConstants.SECONDARY};
  }
`

const Dialog = (props: any) => {
    const [showDialog, setShowDialog] = useState(true)
    return (
        showDialog ?
        <DialogContainer {...props}>
            <DialogItem>
                <DialogButton onClick={() => setShowDialog(false)}>
                    <Close className='m-auto'/>
                </DialogButton>
                <Paragraph className='normal-paragraph' style={{maxWidth: '200px'}}>
                    {props.children}
                </Paragraph>
            </DialogItem>
        </DialogContainer> : <></>
    )
}

export default Dialog
