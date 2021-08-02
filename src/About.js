import React from 'react'
import './About.css';
import image1 from './containers/img1.png'
import image2 from './containers/img2.png'
import image3 from './containers/img3.png'
 import InvestPlaces from "./InvestPlaces";
import "./investor.css"
import  FooterContainer  from "./containers/footer";



const About=() =>{
    return(
        <div className="about">
            <div className="about_title">
                <h1>About UPSIDA</h1>
            </div>
            <div className="about_body">
                <p>
                We are a public sector undertaking of the Corporation of Uttar Pradesh spearheading the development of industrial infrastructure in State since the last 56 years Pioneer in development of industrial areas, we have delivered iconic industrial Areas. Townships & Industrial Parks on more than 42000 acres of land, which houses more than 26,000 units providing direct employment to lacs of people.
</p><br />

<p>Providing contemporary infrastructure facilities and services to our entrepreneurs as our objective, we strive to build on our strength as a pillar of the pulsating industrial ecosystem of Uttar Pradesh that contributes toward the economic, development of the State in particular & the Country in general. To cater to the modern demands of High-tech quality infrastructure, the Corporation has ventured into many new areas by developing High-tech integrated industrial townships like Trans Ganga and Saraswati High-tech cities and also sector specific industrial areas like Plastic City, Agro Parks, Apparel Park, Leather Park , among others.
</p><br />
<p>With an excellent in house pool of multi disciplinary managerial experts, engineers and architects, compel mented by our in depth experience, today we have transformed ourselves into an organization that provides integrated infrastructure facilities including industrial, residential, commercial, institutional and support facilities reciprocating to the customized business requirements of our clientele. Our facilities are strategically located across the state of Uttar Pradesh at prime locations and near to existing clusters, raw material, hubs, highways etc and are equipped with road network, electrification network, parks and green belts and providing need based space for common facilities like banks, post office, dispensary, police outpost, shops business development centers, fields-hostels, CETP/STP, shopping malls, expo-centers, school, colleges and universities etc.
</p><br />

<p>Due to the specialized infrastructure and amenities provided by UPSIDC , thousands of small, medium and large industrial units have been setup in our various industrial Areas including Amul ,Alien Cooper, Asian Paints, Arihant industries, Avon Cycle Ambuja Agro Bhushan Steel, Bharat Electronics Ltd, Birla Cement, Bisleri, Coco-Cola, ConAgra Central Electronics Ltd, Dabur, Dalmia , Escorts, Gyan Diary, Nerolac, Hawkins, Hindustran Petroleum, Indo-Gulf Fertilizers, JP Industries, Piaggio, Nirma, Pepsi, Parle, Raunaq, Raymonds, Rathi Steels, Red Chief, Nerolac, TELCO ,TATA Fertilizer. Dey's Medical, Precision Tools & Casting etc. to name a few.
</p><br />

<p>With Uttar Pradesh rapidly rising to become one of the top business destinations in India, we welcome entrepreneurs desiring to set up or expand their industrial ventures to explore the opportunities being offered by UPSIDC Ltd, all across the State. We assure you the best-in-class integrated infrastructure and escort services completely time bound to meet your requirements.
                </p>
            </div>
            <div className="about_footer">
                <h2>Our Recent works</h2>
                <InvestPlaces info="Plot Allotation" backImage={image1}/>
                <InvestPlaces info="Renovation Chakeri Industrial Area" backImage={image2}/>
                <InvestPlaces info="#UPSIDAOxygenGrid" backImage={image3}/>
            </div>

            <FooterContainer 
                title={["Top Catagories",'Services','About','Important Links']}
                link1={['Industrial Info','GIS','E-Services','Office Orders','Resource Centre','Available Plot']}
                link2= {['Online Services','Track Application','News Letter','Investment Guide','Warehousing and Logistics']}
                link3= {['UPSIDA','Policies']}
                link4= {['Infrastructure & Industrial Devlopment Department','Goverment of Uttar Pradesh','Tenders Uttar Pradesh']}/>
        </div>
    );
}

export default About;