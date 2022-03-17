import Paragraph from "./Paragraph";

const IntroContent = (props: any) => {
    return (
        <div className='d-flex justify-content-between gap-3'>
            <Paragraph className='normal-paragraph'>
                {props.children}
            </Paragraph>
            <Paragraph className='normal-paragraph'>
                {props.textEnd}
            </Paragraph>
        </div>
    )
}

export default IntroContent
