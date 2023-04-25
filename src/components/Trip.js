import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assests/9.jpg"
import Trip2 from "../assests/23.jpg"
import Trip3 from "../assests/21.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Travel far, travel wide, and travel often!</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading= "Trip in Haridwar"
                text="Haridwar is a city located in the Indian state of Uttarakhand. It's a popular pilgrimage site for Hindus and is known for its holy river Ganges, which is believed to have the power to cleanse sins. A trip to Haridwar is a spiritual journey that offers a glimpse into the rich culture and traditions of India. Visitors can take part in the evening Ganga Aarti, which is a beautiful ceremony that involves the lighting of lamps and the chanting of prayers. Haridwar is also home to many ashrams and yoga centers, making it a great destination for those seeking inner peace and tranquility."
                />
                <TripData
                image={Trip2}
                heading= "Trip in Truind"
                text="Truind is a beautiful village located in the Kangra district of Himachal Pradesh, India. It's a popular destination for nature lovers, with its stunning views of the surrounding mountains and valleys. A trip to Truind is a unique experience, with many opportunities to explore the local culture and traditions. Visitors can go trekking in the nearby mountains, visit the many temples and shrines in the village, or simply relax and enjoy the peaceful surroundings. Truind is also a great destination for adventure sports enthusiasts, with activities like paragliding, rock climbing, and rappelling available."
                />
                <TripData
                image={Trip3}
                heading= "Trip in Hyderabad"
                text="Hyderabad is a city located in the southern part of India, in the state of Telangana. It's a vibrant and bustling city that combines the old and the new, with a rich history and a modern outlook. Hyderabad is known for its iconic landmarks such as the Charminar and the Golconda Fort, which are must-visit attractions. Visitors can also indulge in some delicious Hyderabadi cuisine, which is a blend of Mughal and Telugu flavors. Hyderabad is also a great destination for shopping, with its many bazaars and markets offering a wide range of products."
                />
            </div>
        </div>
    )
}
export default Trip;