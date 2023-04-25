import Manali1 from "../assests/13.jpg"
import Manali2 from "../assests/14.jpg"
import Agra1 from "../assests/16.jpg"
import Agra2 from "../assests/1.jpg"
import Rajasthan1 from "../assests/17.jpg"
import Rajasthan2 from "../assests/18.jpg"
import Delhi1 from "../assests/19.jpg"
import Delhi2 from "../assests/20.jpg"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData"
const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Travelling is not just a journey, it's way of life.</p>
            
           <DestinationData
           className="first-des"
           heading = "Manali"
           text = "Situated in the Kullu Valley of Himachal Pradesh, Manali draws tourists with its natural beauty and tranquillity. The hill station is frequented by travellers from across the country, especially during the summer season when cities reel under the scorching heat. Snow-capped mountains, dense forests, riverine valleys and sparkling streams add to the beauty of the hill station and make it one of the most popular holiday destinations in India. Another charming thing about Manali is that it showcases a beautiful blend of rich cultural heritage and modernisation. Besides spending time in serenity and soaking in the beauty of the surroundings, you can engage in thrilling adventure activities here for a memorable vacation."
           img1= {Manali1}
           img2= {Manali2}
           />
           <DestinationData
            className="first-des-reverse"
           heading = "Agra"
           text = "Say Agra and the first thing that comes to mind is the magnificent Taj Mahal, one of the Seven Wonders of the World. This beautiful city with its rich historical background is situated in Uttar Pradesh, on the banks of River Yamuna. It is counted among the top tourist places in India for architecture lovers and history buffs, thanks to many amazing Mughal architectural masterpieces that adorn the cityscape. No matter how many times you visit Agra, the charm of the Taj Mahal and other monuments will never fail to impress. The city is a treat for shopaholics and foodies as well."
           img1= {Agra1}
           img2= {Agra2}
           />
           <DestinationData
            className="first-des"
           heading = "Rajasthan"
           text = "The land of kings, Rajasthan is a vibrant state that attracts history buffs, architecture lovers, wildlife enthusiasts and foodies alike. It lies in the north-western part of India and boasts an impressive amalgamation of natural beauty and manmade structures. From beautiful lakes, vast deserts and rich wildlife to magnificent palaces, forts and temples, the city has so many things for a wonderful vacation. What’s more, a road trip here takes you through several small and beautiful villages showcasing rich Rajasthani culture and traditions. Rajasthan is one of those best tourist places in India that you can visit again and again."
           img1= {Rajasthan1}
           img2= {Rajasthan2}
           />
           <DestinationData
            className="first-des-reverse"
           heading = "New Delhi"
           text = "New Delhi, the national capital of India, is one of the most cliched yet popular tourist destinations in the country. The state has so much to offer that visiting it once or twice is not enough. Delhi is dotted with iconic Mughal monuments, temples, heritage sites, performing arts venues, colourful bazaars, shopping malls, planetariums, museums, and restaurants, so there is something for everyone here. Chandni Chowk, the oldest and busiest market in the country, is in Delhi. The city also houses many places of political importance, like Rashtrapati Bhawan, Parliament of India, and India Gate.Best Places to Visit in Delhi: Red Fort, Humayun's Tomb, Qutub Minar, Lotus Temple, Akshardham Temple, Purana Qila, Jantar Mantar, Gurudwara Bangla Sahib Ji, Nehru Park, Janpath Market."
           img1= {Delhi1}
           img2= {Delhi2}
           />
          
           
        </div>
    );
};
export default Destination;