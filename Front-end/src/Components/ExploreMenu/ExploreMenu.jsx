import React from 'react'
import './ExploreMenu.css'
import menu_1 from '../../assets/menu_1.png'
import menu_2 from '../../assets/menu_2.png'
import menu_3 from '../../assets/menu_3.png'
import menu_4 from '../../assets/menu_4.png'
import menu_5 from '../../assets/menu_5.png'
import menu_6 from '../../assets/menu_6.png'
import menu_7 from '../../assets/menu_7.png'
import menu_8 from '../../assets/menu_8.png'


const ExploreMenu = ({category,Setcategory}) => {

     const menu_list = [
        {
            menu_name: "Salad",
            menu_image: menu_1
        },
        {
            menu_name: "Rolls",
            menu_image: menu_2
        },
        {
            menu_name: "Deserts",
            menu_image: menu_3
        },
        {
            menu_name: "Sandwich",
            menu_image: menu_4
        },
        {
            menu_name: "Cake",
            menu_image: menu_5
        },
        {
            menu_name: "Pure Veg",
            menu_image: menu_6
        },
        {
            menu_name: "Pasta",
            menu_image: menu_7
        },
        {
            menu_name: "Noodles",
            menu_image: menu_8
        }]

  return (
    <div className='explore-Menu' id='explore-Menu' >
        <h1>Explore the menu</h1>
        <p className='explore-Menu-text'>
            Here are some food menu captions in paragraph form:  
            "Indulge in a delightful culinary journey with our carefully curated menu, featuring sizzling appetizers, mouthwatering main courses, and decadent desserts. Start your meal with crispy golden fries, flavorful soups, or fresh garden salads. Savor the richness of our chef’s special pastas, juicy grilled meats, and aromatic rice dishes, each prepared with the finest ingredients. Don’t forget to treat yourself to our signature desserts, from creamy cheesecakes to warm chocolate brownies, paired perfectly with a hot cup of coffee or a refreshing drink. Whether you crave comfort food or a gourmet experience, we have something to satisfy every palate!" 
            Would you like a more specific tone or theme? 😊</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>Setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-Menu-list-item'>
                    <img className={category===item.menu_name?"active":" "} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
