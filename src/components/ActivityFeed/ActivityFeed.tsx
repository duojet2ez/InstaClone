import './ActivityFeed.css'
import { getFeedData } from '../../api/endpoints';
import { useEffect, useState } from 'react'

interface FeedItem{
    username: string;
    img: string;
    caption: string;
    id:number;
}

function ActivityFeedItem(props:FeedItem){
    return(
        <>

                <h1>{props.username}</h1>
                <div className="pictureBox"></div>                    
                <p>Caption here</p>

        </>
    )
}

export default function ActivityFeed(){
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

    useEffect(() => {
        async function fetchData(){
            const activityData = await getFeedData('ericFeed')
             return activityData; 
        }
        async function getPromiseData(){
            const returnedPromise= await fetchData();
            setFeedItems(returnedPromise); 
        }
        getPromiseData(); 
    },[])
    return(
        <>
            <div className="feedContainer">
                <div className="feedPage">
                {
                    feedItems.map((item) => {
                        return <ActivityFeedItem 
                                    username={item.username} 
                                    img={item.img}
                                    caption={item.caption}
                                    id={item.id}
                                        />
                    })
                }
            {/* <div className="feedPage">
                    <h1>{feedItems.length > 0 && feedItems[0].username}</h1>
                    <div className="pictureBox"></div>                    
                    <p>Caption here</p>
                    <h1>Username</h1>
                    <div className="pictureBox"></div>                    
                    <p>Caption here</p>
                    <h1>Username</h1>
                    <div className="pictureBox"></div>                    
                    <p>Caption here</p>
                </div> */}
                </div>
            </div>
        </>
    )
}

// return <h1 key={item.id}>{item.username}</h1>

//use the map function to map to a react component