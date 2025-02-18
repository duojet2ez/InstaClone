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

        //function gets fedData from endpoint and uses that data to set the state calling setFeedItems
        async function setStateWithDataFromEndpoint(){
            const activityData = await getFeedData('ericFeed')
            setFeedItems(activityData); 
        }
        setStateWithDataFromEndpoint(); 
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