import { useEffect, useState } from "react"
import { copy, linkIcon, loader, tick } from "../assets"
const Demo = () => {
  const [article, setArticle] =useState( {
    url:'',
    summary: '',
  })
  
  const handleSubmit = async (e) =>{
  alert('submitted')
  }
  
  return (

    <section className="mt-16 w-full max-w-xl">

      <div className="flex flex-col w-full gap-2">
        {/* Search */}
        <form 
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}>

          <img src={linkIcon}
          alt="link_Icon" 
          className="absolute left-2 my-2 my-3 w-5"/>

          <input
          type="url"
          placeholder="Enter a url" 
          value={article.url}
          onChange={(e) => setArticle({... article, url:e.target.value})}
          required
          className="url_input peer"/>

          <button
          type="submit"
          className="submit_btn peer-focused:border-gray-700 peer-focused:text-gray-700"
      >  </button>
        </form>
        {/* Browser History*/}
      </div>
    </section>  )
}

export default Demo