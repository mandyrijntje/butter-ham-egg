function Result(props) {
    return(
        <div className = {'result'}{...props}>
            <span className = 'resultText'> 
                { props.win ? 'YOU WON' : 'YOU LOST'}
            </span>
        </div>
    );
}

export default Result;

