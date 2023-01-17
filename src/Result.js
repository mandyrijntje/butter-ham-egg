function Result(props) {
    return(
        <div className = {'result'}{...props}>
            <span className = 'resultText'> 
                { props.win ? 'YOU WON' : props.tie ? 'DRAW' : 'YOU LOST'}
            </span>
        </div>
    );
}

export default Result;

