import { useEffect, useState } from "react"

export default function LeftNavbar() {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
     
        const categoriesData = async ()=>{
            try{
                const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
                const data = await res.json();
                setCategories(data.data.news_category)
            }
            catch(error){
                console.error("Data can not fetch", error);
                
            }
    };
    
    categoriesData()
    },[])
    
    
  return (
    <div>
        <h2 className="font-semibold mb-3">All Caterogy</h2>
        <div className="flex flex-col gap-2">
            {
                categories.map((category)=> (
                <button 
                    className="btn"
                    key={category.category_id}>
                        {category.category_name}
                </button>
                ))
            }
        </div>
    </div>
  )
}
