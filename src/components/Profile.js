const Profile = (props) => {
    
    const { name, image } = props.player
    return ( 
        <div className="row">
                    <div className="col">
                        <div>
                            <img src={image} alt={name} className="profile-image"/>
                        </div>
                            {/* {profile.name} */}
                    </div>
                </div>
     );
}
export default Profile;