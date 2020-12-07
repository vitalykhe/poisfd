const  PlayersProfile = (props) => {
    const {image, name} = props   
    return (
        <div className="row">
                    <div className="col">
                        <p className="playerProfileImage">
                            <img src={image} alt={name}/>
                        </p>
                        <p className="playerProfileName">
                            {name}
                        </p>
                    </div>
        </div>
      );
}
 
export default PlayersProfile;