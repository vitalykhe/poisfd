const PlayersTurnMessage = (props) => {
    const turn = props.turn
    return ( 
        <div className="row">
            <div className="col">
                <p>{turn}</p>
            </div>
        </div>
     );
}
 
export default PlayersTurnMessage