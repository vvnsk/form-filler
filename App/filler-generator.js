class FillerGenerator {
    fillerScript = "";

    generate() {
        let link = `javascript:(function(){`;
        let navLinks = `var nav=document.querySelectorAll("aside .nav-link");`;
        let variables = `var iteration=0;var currentPage=0;`;
        let startFilter = `var fill=function(){`;
        let checkboxFilter = `document.querySelectorAll('[type="checkbox"]').forEach(function(input){if(input&&!input.checked&&!input.readOnly&&!input.disabled){input.click()}});`;
        let radioFilter = `document.querySelectorAll('[type="radio"]').forEach(function(radio){if(radio&&Math.random()*10<5&&!radio.checked&&!radio.readOnly&&!radio.disabled){radio.click()}});`;
        let dateFilter = `document.querySelectorAll('date-picker input').forEach(function(date){if(date&&!date.readOnly&&!date.disabled){date.value=(Math.floor(Math.random()*10)+1)+"/"+(Math.floor(Math.random()*20)+1)+"/"+"2018"}});`;
        let timeFiller = `document.querySelectorAll('time-picker input').forEach(function(time){if(time&&!time.readOnly&&!time.disabled){time.value=(Math.floor(Math.random()*10)+1)+":"+(Math.floor(Math.random()*60)+1)+"PM"}});`;
        let textFiller = `document.querySelectorAll('text-input input').forEach(function(text){if(text&&!text.readOnly&&!text.disabled){text.value="Loreum Ipsum"}});`;
        let textAreaFiller = `document.querySelectorAll('textarea').forEach(function(tarea){if(tarea&&Math.random()*10<5&&!tarea.readOnly&&!tarea.readOnly){tarea.value=tarea.value+"Loreum Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}});`;
        let checkNav = `if(nav.length==0){`;
        let noNav = `iteration++;if(iteration<5){setTimeout(function(){fill()},100)}else{iteration=0}}`;
        let checkNavElse = `else{`;
        let withNav = `iteration++;if(currentPage<=nav.length){if(iteration<5){setTimeout(function(){fill()},100)}else{iteration=0;currentPage++;if(currentPage<nav.length){fillPageV0()}}}else{currentPage=0}}};`;
        let fillPage = `var fillPageV0=function(){if(nav.length>0){nav[currentPage].click();setTimeout(function(){fill()},800)}else{fill()}};`;
        let execFillPage = `fillPageV0()})()`;
        return `${link}${navLinks}${variables}${startFilter}${checkboxFilter}${radioFilter}${dateFilter}${timeFiller}${textFiller}${textAreaFiller}${checkNav}${noNav}${checkNavElse}${withNav}${fillPage}${execFillPage}`;
    }

    constructor() {
        this.fillerScript = this.generate();
    }
}


