function Box(props) {
    return(
        <div className = {'scoreboard'}{...props}>
            <p className='userScoreText'>
            {'KAAS: '} {props.userscore} 
            </p>
            <p className='computerScoreText'>
            {'EI: '} {props.computerscore} 
            </p>
        </div>
    );
}

export default Box;

