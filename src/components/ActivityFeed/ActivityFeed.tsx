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
                <div className="pictureBox">
                    <img src={props.img} alt="kewl" />
                </div>                    
                <p>{props.caption}</p>

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
                </div>
            </div>
        </>
    )
}