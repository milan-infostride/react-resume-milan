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
        img: "images/vue.png"
    },
    {
        id: 3,
        title: "Mysql",
        img: "images/vue.png"
    }
]
    return ( 
        <div>
            <div className="row text-center mt-4 mb-3">
                Languages Known...
            </div>
            <div className="card-group">
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