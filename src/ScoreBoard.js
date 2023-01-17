function Box(props) {
    return(
        <div className = {'scoreboard row'}{...props}>
            <div className='col col-6'>
                <p className='userScoreText'>
                {'■ '} {props.userscore} 
                </p>
            </div>
            <div className='col col-6'>
                <p className='computerScoreText'>
                {'⬮ '} {props.computerscore} 
                </p>
            </div>
        </div>
    );
}

export default Box;

