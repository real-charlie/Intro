import {useSelector} from "react-redux";
import Content from "../Content/Content";
import ProjectGallery from "./ProjectGallery";
import {projectItemObject} from "../../utils";
import TagConstants, {ReadyToUseTags} from "../../constants/tag_constants";

// @ts-ignore
import intro from '../../assets/images/intro.png'
// @ts-ignore
import gh1 from '../../assets/images/gh1.png'
// @ts-ignore
import gh2 from '../../assets/images/gh2.png'
// @ts-ignore
import concrete from '../../assets/images/concrete.png'
// @ts-ignore
import sys from '../../assets/images/syssort.png'
// @ts-ignore
import enc from '../../assets/images/encryptor.png'
// @ts-ignore
import plan from '../../assets/images/planc.png'
// @ts-ignore
import none from '../../assets/images/none.jpg'
import {useRef} from "react";


const Projects = () => {
    const content: any = useSelector((state: any) => state.content)
    const _ref = useRef(null)

    // @ts-ignore
    return (
        <section style={{direction: 'ltr'}} id='projects'>
            <Content title={content['PROJECTS_TITLE']} refer={_ref}>
                <ProjectGallery tg={_ref} items={[
                    projectItemObject('Intro', 'https://github.com/real-charlie/Intro',
                        ReadyToUseTags.OPENSOURCE_WEB_PAGE, intro),
                    projectItemObject('GitHub Page', 'https://github.com/real-charlie/GH1',
                        ReadyToUseTags.OPENSOURCE_WEB_PAGE, gh1),
                    projectItemObject('GitHub Page 2', 'https://github.com/real-void/gh-page',
                        ReadyToUseTags.OPENSOURCE_WEB_PAGE, gh2),
                    projectItemObject('Concrete', 'https://github.com/real-charlie/Concrete',
                        ReadyToUseTags.DISCORD_BOT_PYTHON, concrete),
                    projectItemObject('SysSort', 'https://github.com/real-charlie/SysSort',
                        ReadyToUseTags.JAVA_PROGRAM, sys),
                    projectItemObject('Encryptor', 'https://github.com/real-charlie/Encryptor',
                        [TagConstants.C_LANG,
                            TagConstants.LINUX, TagConstants.OPEN_SOURCE], enc),
                    projectItemObject('PlanC', 'https://github.com/real-charlie/PlanC',
                        [TagConstants.KOTLIN,
                            TagConstants.FULLY_SUPPORT, TagConstants.OPEN_SOURCE], plan),
                    projectItemObject('Security Spectrum', 'https://github.com/real-charlie/SecuritySpectrum',
                        [TagConstants.TS,
                        TagConstants.DISCORD, TagConstants.SOON, TagConstants.OPEN_SOURCE], none),

                ]}/>
            </Content>
        </section>
    )
}

export default Projects
