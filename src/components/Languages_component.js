import Vertical_card_component from "./Vertical_card_component";
const Languages_component = () => {
    let lang =  [{
        id: 1,
        title: "Vue.js",
        img: "images/vue.png"
    },
    {
        id: 2,
        title: "Laravel",
        img: "images/laravel.png"
    },
    {
        id: 3,
        title: "Mysql",
        img: "images/mysql.png"
    },
    {
        id: 4,
        title: "Html",
        img: "images/html.png"
    },
    {
        id: 5,
        title: "Js",
        img: "images/js.png"
    },
    {
        id: 6,
        title: "Bootstrap",
        img: "images/bootstrap.jpeg"
    },
    {
        id: 7,
        title: "PHP",
        img : "images/php.png"
    }
]
    return ( 
        <div className="my-4">
            <div className="row text-center mt-4 mb-3">
                <div className="col-12">
                    <span className="fs-2 fw-bold"><i class="fas fa-globe"></i> Languages Known...</span>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                {
                    lang.map((lan)=>{
                        return (<Vertical_card_component lan={lan} key={lan.id}></Vertical_card_component>)
                    })
                }
            </div>

        </div>
     );
}
 
export default Languages_component;