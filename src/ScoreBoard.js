function Box(props) {
    return(
        <div className = {'scoreboard'}{...props}>
            <p className='userScoreText'>
            {'user score: '} {props.userscore} 
            </p>
            <p className='computerScoreText'>
            {'computer score: '} {props.computerscore} 
            </p>
        </div>
    );
}

export default Box;

