import styled from "styled-components";
import ThemeConstants from "../../constants/theme_constants";


const Button = styled.button`
  background-color: ${ThemeConstants.PRIMARY};
  color: ${ThemeConstants.SECONDARY};
  border: 1.5px solid ${ThemeConstants.PRIMARY};
  border-radius: 100px;
  padding: 15px 30px;
  font-weight: bold;
  overflow: hidden;

  &:hover {
    background-color: ${ThemeConstants.SECONDARY};
    color: ${ThemeConstants.PRIMARY}
  }

  &:active {
    background-color: ${ThemeConstants.SECONDARY};
  }
`

export default Button
