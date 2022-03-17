import ThemeConstants from "../../constants/theme_constants";
import Paragraph from "./Paragraph";

const Content = (props: any) => {
    const color = props.color || ThemeConstants.PRIMARY

    return (
        <div className='p-3' ref={props.refer}>
            <article className='d-flex flex-column gap-2 overflow-hidden' {...props}>
                <div className='text-center'
                     style={{borderBottom: props.noBorder === undefined ? `3px solid ${color}` : `none`, color}}>
                    <h3 style={{color: color}}>
                        {props.title || ''}
                    </h3>
                </div>
                <Paragraph className='pt-2 text-center' style={{color}}>
                    {props.children}
                </Paragraph>
            </article>
        </div>
    )
}

export default Content
