function Box(props) {
    return(
        <div className={'box'}{...props}>
            { props.x ? 'x' : props.o ? 'o' : null}
        </div>
    );
}

export default Box;