import React from "react";
import Card from "./Card";
import './ProfileCard.css';

function ProfileCard(props) {

    const profiles = [
        {
            title: "이름1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_Pt5s7tmVshBKsV4p7uSxpE-TitJgpAb8YxVZeiuVg&s=10"
        },
        {
            title: "이름2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKXDXF3-_z0-UhTTXX_ie62UVfdwApoLpicAmCsJtNg&s=10"
        },
        {
            title: "이름3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzd1_mFkhYLj6aoZoQDgwrY0KmKETG6ZSE7ufw5zOSog&s=10"
        },
        {
            title: "이름4",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xtPlBP9LNVbRQogHqACFExC5H5l_Mbzxvm2_SD6_Ag&s=10"
        },
        {
            title: "이름5",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pgUj6Z8XZVpI3tcTKibVlxkbYUgc5mnRzGmyvuJc5g&s=10"
        }

    ]

    return (
        <div className="ProfileCard-container">
            {profiles.map(profile => (
                <Card title={profile.title} image={profile.image}>
                    <p>안녕하세요</p>
                    <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
                </Card>
            ))}
            <Card title={"이름1"} backgroundColor={props.backgroundColor} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_Pt5s7tmVshBKsV4p7uSxpE-TitJgpAb8YxVZeiuVg&s=10"}>
                <p>안녕하세요</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>

            <Card title={"이름2"} backgroundColor={props.backgroundColor} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKXDXF3-_z0-UhTTXX_ie62UVfdwApoLpicAmCsJtNg&s=10"}>
                <p>안녕하세요</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>

            <Card title={"이름3"} backgroundColor={props.backgroundColor} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzd1_mFkhYLj6aoZoQDgwrY0KmKETG6ZSE7ufw5zOSog&s=10"}>
                <p>안녕하세요</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>

            <Card title={"이름4"} backgroundColor={props.backgroundColor} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xtPlBP9LNVbRQogHqACFExC5H5l_Mbzxvm2_SD6_Ag&s=10"}>
                <p>안녕하세요</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>

            <Card title={"이름5"} backgroundColor={props.backgroundColor} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pgUj6Z8XZVpI3tcTKibVlxkbYUgc5mnRzGmyvuJc5g&s=10"}>
                <p>안녕하세요</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>
        </div>
    )
}

export default ProfileCard;