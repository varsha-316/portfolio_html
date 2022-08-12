
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /**page loader */
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout( () => {
        document.querySelector(".page-loader").style.display = "none";
    },600);
});



//header toogle navbar
const navtoggler =  document.querySelector(".nav-toggler");
navtoggler.addEventListener("click", () => {
    hidesection();
    togglenavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hidesection(){
    document.querySelector("section.active").classList.toggle("fade-out");
    
}

function togglenavbar(){
    document.querySelector(".header").classList.toggle("active");
    
}


//active section
document.addEventListener("click" , (e) => {

    if(e.target.classList.contains("link-item") && e.target.hash != ""){
        //active overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("sctive");
        navtoggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            togglenavbar();
        }
        else{
            hidesection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navtoggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("sctive");
        },500);
    }
});










// about tabs 

const tabsContainer =  document.querySelector(".about-tabs"),
aboutsection = document.querySelector(".about-section");

tabsContainer.addEventListener("click" , (e) => 
{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutsection.querySelector(".tab-content.active").classList.remove("active");
        aboutsection.querySelector(target).classList.add("active");
    }
});


//portfolio item details popup

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn"))
    {
        portfoliopopup();
        // document.querySelector("portfolio-popup").scrollTo(0,0);
        portfolioitemdetails(e.target.parentElement);
    }
})

function portfoliopopup()
{
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click" , portfoliopopup);

//hide popup when clicking outside of it
document.addEventListener("click" ,(e) => {
    
    if(e.target.classList.contains("pp-inner")){
        portfoliopopup();
    }

})



function portfolioitemdetails(portfolioitem)
{
    document.querySelector(".pp-thumbnail img").src = 
    portfolioitem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioitem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioitem.querySelector(".portfolio-item-details").innerHTML;
}



