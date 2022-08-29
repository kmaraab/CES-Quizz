document.querySelector(".formSubmitHomePage").addEventListener("submit", function(e){
    e.preventDefault();
    document.location.href = "../html/questionsPage.html";
});

let checkCG = document.getElementById("conditionsGenerales");

checkCG.addEventListener("change", function(e){
    e.stopPropagation();

    if(!document.querySelector(".cgContent")){
        let contentCG = document.createElement("p");
            contentCG.classList.add("cgContent")
            contentCG.style.textAlign = "center";
            contentCG.style.marginTop = "-15%";
            contentCG.style.padding = "5%";
            contentCG.innerHTML = "<h3>Conditions générales</h3> Intellectum est enim mihi quidem in multis, et maxime in me ipso, sed paulo ante in omnibus, cum M. Marcellum senatui reique publicae concessisti, commemoratis praesertim offensionibus, te auctoritatem huius ordinis dignitatemque rei publicae tuis vel doloribus vel suspicionibus anteferre. Ille quidem fructum omnis ante actae vitae hodierno die maximum cepit, cum summo consensu senatus, tum iudicio tuo gravissimo et maximo. Ex quo profecto intellegis quanta in dato beneficio sit laus, cum in accepto sit tanta gloria.";
        document.querySelector(".formSubmitHomePage").appendChild(contentCG);
    }
    else{
        document.querySelector(".formSubmitHomePage").removeChild(document.querySelector(".cgContent"));
    }
})

