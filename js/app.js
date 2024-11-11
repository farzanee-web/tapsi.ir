"use strict"
// store elements in variables 
let $ = document
let serviceNavbar = $.querySelector("#nav-tab")
let servicesInfo = $.querySelector("#nav-tabContent")
let hamburgerBtn = $.querySelector(".hamburger")
let closeBtn = $.querySelector(".active")
let navLinkItem = $.querySelector(".nav-links")
// variable flag
let infoIndex = null
let isShowLink = null

// array for icons
let iconArray = [
    { id: 1, title: "تپسی کلاسیک", img: "images/cc-classic.png" },
    { id: 2, title: "موتوپیک", img: "images/cc-motopeyk.png" },
    { id: 3, title: "اتوپیک", img: "images/cc-autopeyk.png" },
    { id: 4, title: "تپسی پلاس", img: "images/cc-plus.png" },
    { id: 5, title: "تپسی تلفنی", img: "images/cc-tel.png" },
    { id: 6, title: "تپسی لاین", img: "images/cc-line.png" },
]


//  ring for add icons to DOM
iconArray.forEach(icon => {

    iconGenerator(icon)
})



function iconGenerator(iconObj) {
    serviceNavbar.insertAdjacentHTML("afterbegin", `
        <a   id="nav-classic-tab" class="nav-item  nav-link" onclick="clickChangeInfo(${iconObj.id})">
        <img    src="${iconObj.img}" alt="${iconObj.id}">
        <p>${iconObj.title}</p>
        </a>
        `)
}

// array info services of tapsi

let infoTapsiArray = [
    { id: 1, title: "تپسی کلاسیک", info: "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.", img: "images/illus-classic.webp" },
    { id: 2, title: "موتوپیک", info: "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید. ", img: "images/illus-motopeyk.webp" },
    { id: 3, title: "اتوپیک", info: "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.  ", img: "images/illus-autopeyk.webp" },
    { id: 4, title: "تپسی پلاس", info: "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.", img: "images/illus-plus.webp" },
    { id: 5, title: "تپسی تلفنی", info: "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.", img: "images/illus-tel.webp" },
    { id: 6, title: "تپسی لاین", info: "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. ", img: "images/illus-hamkhat.webp" },
]

// fix time for change info kind of tapsi in DOM
setInterval(() => {
    let randomInfo = Math.floor(Math.random() * 8) // random index
    let mainInfoObj = infoTapsiArray[randomInfo]

    infoGenerator(mainInfoObj)

}, 5000);

// set event for windows
window.addEventListener("load", () => {
    let randomInfo = Math.floor(Math.random() * 8) // random index
    let mainInfoObj = infoTapsiArray[randomInfo]

    infoGenerator(mainInfoObj)
})


// function for add info kind of tapsi in DOM
function infoGenerator(infoObj) {
    servicesInfo.innerHTML = ""

    servicesInfo.insertAdjacentHTML("afterbegin", `
    <div id="nav-classic" class="tab-pane  " style="display: flex;flex-direction: row-reverse;">
    <div class="service-image" >
        <picture>
            <img class="img-responsive no-padding main-image" src="${infoObj.img}" alt="tapsi-classic">
        </picture>
    </div>
    <div class="content-container">
        <h3 class="title">
             ${infoObj.title}
        </h3>
        <p class="description">
            ${infoObj.info}
        </p>
    </div>
</div>
    `)
}



function clickChangeInfo(iconID) {

    let mainIconInfo = infoTapsiArray.find(info => {
        if (info.id === iconID) {
            return info
        }
    })

    // let mainIcon = iconArray.find(icon => {
    //     if (icon.id === iconID) {
    //         return icon.title
    //     }
    // })



    infoGenerator(mainIconInfo)

}


// ===========================   for navbar ==============
// btn to show navbar
hamburgerBtn.addEventListener("click", () => {
    navLinkItem.style.display = "flex"
    isShowLink = true
})

// btn to hide navbar
closeBtn.addEventListener("click", () => {
    navLinkItem.style.display = "none"
    isShowLink = false
})

if (isShowLink) {
    navLinkItem.style.display = "flex"
} else {
    navLinkItem.style.display = "none"
}












































