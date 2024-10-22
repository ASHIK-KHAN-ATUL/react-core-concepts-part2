export default function Friend(friend){
    console.log(friend)
    const {name , id , email} = friend.friend
    return(
        <div className="box2">
            <h3>Name : {name} </h3>
            <h4>Id : {id} </h4>
            <h4>Email : {email}  </h4>
        </div>
    )

}