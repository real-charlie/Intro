import React, {useEffect, useRef} from 'react';
import './_app.sass'
import '../customized-bootstrap.scss';
import {useDispatch, useSelector} from "react-redux";
import {languageENAction, languageFAAction, languageITAction} from "../actions/language_actions";
import Navbar from "./Navbar/Navbar";
import FirstContent from "./Content/FirstContent";
import Projects from "./Projects/Projects";
import Plans from "./Plans/Plans";
import Connections from "./Connections/Connections";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Dialog from "./Dialog/Dialog";

const App = () => {
    const dispatch = useDispatch()

    useEffect(
        () => {
            const pathname = window.location.pathname
            if (pathname.startsWith('/fa'))
                dispatch(languageFAAction())
            else if (pathname.startsWith('/it'))
                dispatch(languageITAction())
            else
            dispatch(languageENAction())
        },
        []
    )
    const content: any = useSelector((state: any) => state.content)

    const plansRef = useRef(null)


    return (
        <>
            <Dialog style={{direction: content['LANG_NAME'] === 'فارسی' ? 'rtl' : 'ltr'}}>
                {content['HAPPY_NEW_YEAR']}
            </Dialog>
            <Navbar/>
            <main className='d-flex flex-column gap-3'>
                <FirstContent plans={plansRef}/>

                <div className="d-flex flex-column gap-3 container-justified"
                     style={{direction: content['LANG_NAME'] === 'فارسی' ? 'rtl' : 'ltr'}}>
                    <Profile/>
                    <Projects/>
                    <Plans refer={plansRef}/>
                    <Connections/>
                    <Content title={content['ABOUT']} id='about'>
                        {content['ABOUT_FULL']}
                    </Content>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default App;
