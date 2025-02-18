import './CreatePost.css'

function CreatePost() {
  return (
    <>
        <div className="postContainer">
            <div className="postPage">
                <div className="postBox">
                  <h1>Username</h1>
                  <div className="postPhoto">
                    <button className="innerText">Click here or drop image to upload</button>
                  </div>
                  <button className="postButton">Post</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePost