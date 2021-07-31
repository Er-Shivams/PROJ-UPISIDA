import React from 'react'
import About from '../components/about';
import image from '../containers/img1.png'
import image1 from '../containers/img2.png'
import image2 from '../containers/img3.png'

 
export function AboutContainer() {
    return(
        <div>
            
        <About>
            <About.Wrapper>
                <h1 style={{paddingLeft:"500px",fontFamily:"inter",marginBottom:"5%"}} >About UPSIDA</h1>
                <p style={{paddingLeft:"250px"}}>
                    We are a public sector undertaking of the Corporation of Uttar Pradesh spearheading the development of industrial <br />infrastructure in State since the last 56 years Pioneer in development of industrial areas, we have delivered iconic <br /> industrial Areas. Townships & Industrial Parks on more than 42000 acres of land, which houses more than 26,000 <br /> units providing direct employment to lacs of people.<br /> <p></p>  


                    Providing contemporary infrastructure facilities and services to our entrepreneurs as our objective, we strive to build <br /> on our strength as a pillar of the pulsating industrial ecosystem of Uttar Pradesh that contributes towards the <br /> economic, development of the State in particular & the Country in general. To cater to the modern demands of <br /> High-tech quality infrastructure, the Corporation has ventured into many new areas by developing High-tech <br />integrated industrial townships like Trans Ganga and Saraswati High-tech cities and also sector specific industrial <br /> areas like Plastic City, Agro Parks, Apparel Park, Leather Park , among others.<br /><p></p>

 



                    With an excellent in house pool of multi disciplinary managerial experts, engineers and architects, compel mented<br />  by our in depth experience, today we have transformed ourselves into an organization that provides integrated<br /> infrastructure facilities including industrial, residential, commercial, institutional and support facilities reciprocating<br /> to the customized business requirements of our clientele. Our facilities are strategically located across the state of<br /> Uttar Pradesh at prime locations and near to existing clusters, raw material, hubs, highways etc and are equipped<br /> with road network, electrification network, parks and green belts and providing need based space for common<br /> facilities like banks, post office, dispensary, police outpost, shops business development centers, fields-hostels,<br /> CETP/STP, shopping malls, expo-centers, school, colleges and universities etc.<br />
                    <p></p>

                    Due to the specialized infrastructure and amenities provided by UPSIDC , thousands of small, medium and large <br />industrial units have been setup in our various industrial Areas including Amul ,Alien Cooper, Asian Paints, Arihant<br /> industries, Avon Cycle Ambuja Agro Bhushan Steel, Bharat Electronics Ltd, Birla Cement, Bisleri, Coco-Cola,<br /> ConAgra Central Electronics Ltd, Dabur, Dalmia , Escorts, Gyan Diary, Nerolac, Hawkins, Hindustran Petroleum, <br />Indo-Gulf Fertilizers, JP Industries, Piaggio, Nirma, Pepsi, Parle, Raunaq, Raymonds, Rathi Steels, Red Chief, Nerolac,<br /> TELCO ,TATA Fertilizer. Dey's Medical, Precision Tools & Casting etc. to name a few.<br />
                    <p></p>

                    With Uttar Pradesh rapidly rising to become one of the top business destinations in India, we welcome <br /> entrepreneurs desiring to set up or expand their industrial ventures to explore the opportunities being offered by<br /> UPSIDC Ltd, all across the State. We assure you the best-in-class integrated infrastructure and escort services completely<br /> time bound to meet your requirements.<br />

                      <p>

                      </p>
                </p>
                
                
                
            </About.Wrapper>
            
        </About>
        <div style={{backgroundColor:"#E5E5E5", width:"100%", height:"20rem",}}>
                <h2 style={{paddingLeft:"780px", paddingTop:"20px"}}>Our Recent Works</h2>
                <div style={{paddingLeft:"140px",paddingTop:"20px",display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <img  style={{width:'340px',paddingRight:"40px"}} src={image}  /><img style={{width:'340px',paddingRight:"40px"}} src={image1} />
                    <img style={{width:'340px',paddingRight:"40px"}} src={image2} /></div>
                </div>
        </div>
    )
}