import './ActivityFeed.css'
import getFeedData from '../../api/endpoints'
import { useEffect, useState } from 'react'

interface FeedItem{
    username: string;
    img: string;
    caption: string;
}


export default function ActivityFeed(){
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

    useEffect(() => {
        async function fetchData(){
            const activityData = await getFeedData('ericFeed')
            console.log(activityData); 
        }
        fetchData();
    },[])

    return(
        <>
            <div className="feedContainer">
                <div className="feedPage">
                    <h1>Username</h1>
                    <div className="pictureBox"></div>                    
                    <p>Caption here</p>
                    <h1>Username</h1>
                    <div className="pictureBox"></div>                    
                    <p>Caption here</p>
                    <h1>Username</h1>
                    <div className="pictureBox"></div>                    
                    <p>Caption here</p>
                </div>
            </div>
        </>
    )
}