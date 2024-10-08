import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import InputForm from '../components/InputForm'
import Modal from '../components/modal'


export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Food Recipes !</h1>
                    <h5>It is a long established fact that a reader will be 
                        distracted by the readable content of a 
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                        more-or-less normal distribution of letters, as opposed 
                        to using 'Content here, content here', making it look like readable English.
                        </h5>
                        <button onClick={addRecipe}>Share your recipe</button>
                </div>
                <div className='right'>
                    <img src={foodRecipe} width="250px" height="350px"></img>
                </div>
            </section>
            <div className='bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#baf4dc" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,101.3C240,85,300,107,360,122.7C420,139,480,149,540,138.7C600,128,660,96,720,96C780,96,840,128,900,154.7C960,181,1020,203,1080,224C1140,245,1200,267,1260,240C1320,213,1380,139,1410,101.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
            <div className='recipe'>
                <RecipeItems />
            </div>
        </>
    )
}