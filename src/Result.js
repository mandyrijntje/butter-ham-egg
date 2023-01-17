function Result(props) {
    return(
        <div className = {'result'}{...props}>
            <span className = 'resultText'> 
                { props.win ? 
                        'Kaas is de winnaar! Wil je nog een keer spelen?' 
                    : props.tie ? 
                        'Kaas en ei hebben allebei gelijk(spel). Wil je nog een keer spelen?' 
                    :   'Sorry, ei wint. Wil je nog een keer spelen?'}
            </span>
        </div>
    );
}

export default Result;

