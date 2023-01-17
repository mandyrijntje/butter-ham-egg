const xStyle = {
    color: 'orange'
}

const oStyle = {
    color: 'white'
}

function Box(props) {
    return(
        <div className = {'box'}{...props}>
            <span className='symbol' style={props.x ? xStyle : oStyle}>
                { props.x ? '■' : props.o ? '⬮' : null}
            </span>
        </div>
    );
}

export default Box;

