function Box(props) {
    return(
        <div className={'box'}{...props}>
            <span className='symbol'>
                { props.x ? 'X' : props.o ? 'O' : null}
            </span>
        </div>
    );
}

export default Box;

