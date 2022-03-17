import {useDispatch, useSelector} from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import {dropdownItemObject, iconButtonObject} from "../../utils";
import TextButton from "../Button/TextButton/TextButton";
import {
    BuildOutlined,
    InfoOutlined, LanguageOutlined,
    MessageOutlined,
    ShoppingBasketOutlined
} from "@material-ui/icons";
import {languageENAction, languageFAAction, languageITAction} from "../../actions/language_actions";

const Navbar = () => {
    const content: any = useSelector((state: any) => state.content)
    const dispatch = useDispatch()

    return (
        <header className='d-flex bg-secondary color-primary shadow'>
            <nav className='w-100 m-3'>
                <section className='container-justified m-auto pt-2 pb-2'>
                    <article className='d-flex justify-content-between w-100'>
                        <Dropdown items={
                            [
                                dropdownItemObject(content['LANG_FA'], () => dispatch(languageFAAction())),
                                dropdownItemObject(content['LANG_EN'], () => dispatch(languageENAction())),
                                dropdownItemObject(content['LANG_IT'], () => dispatch(languageITAction())),
                            ]
                        }>
                            {<LanguageOutlined/>}
                            {<p className='desktop'>{content['LANGUAGE']}</p>}
                        </Dropdown>
                        {
                            [
                                iconButtonObject(<InfoOutlined/>, content['ABOUT'], '#about'),
                                iconButtonObject(<MessageOutlined/>, content['CONNECT'], '#connect'),
                                iconButtonObject(<BuildOutlined/>, content['PROJECTS'], '#projects'),
                                iconButtonObject(<ShoppingBasketOutlined/>, content['PLANS'], '#plans'),
                            ].map(
                                (each, index) =>
                                    <TextButton key={index} href={each.href}>
                                        {each.icon}
                                        <p className='desktop'>{each.text}</p>
                                    </TextButton>
                            )
                        }
                    </article>
                </section>
            </nav>
        </header>
    )
}

export default Navbar
