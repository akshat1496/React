import PropTypes from "prop-types";

function List(props) {
    // const fruits =[{ id : 1,name :"apple", calorie:"65"},
    // { id : 2,name:"banana", calorie:"78"},
    // { id : 3,name:"guava" ,calorie:"54"},
    // { id : 4,name:"orange", calorie:"23"},
    // { id : 5,name:"orange", calorie:"32"},
    // { id : 6,name:"pineapple", calorie:"34"}];

    // // fruits.sort((a,b)=>a.name.localeCompare(b.name)); // Alphabetic Sort
    // // fruits.sort((a,b)=>b.name.localeCompare(a.name)); // Rverse Alphabetic Sort
    // // fruits.sort((a,b)=>a.calorie-b.calorie); // Calories sort in ascending order
    // // fruits.sort((a,b)=>b.calorie-a.calorie); // Reverse Calories sort 

    // const lowCalFruits = fruits.filter(fruit => fruit.calorie <=  50) ;// Filtering out the fruits with calories less than or equal to 50

    // const highCalFruits = fruits.filter(fruit => fruit.calorie >  50) ;// Filtering out the fruits with calories less than or equal to 50

    // // const listItems  = fruits.map(fruit => <li key ={fruit.id}> 
    // //                                             {fruit.name} : &nbsp;
    // //                                             <b>{fruit.calorie}</b></li>);
    // const listItems  = lowCalFruits.map(lowCalFruit=> <li key ={lowCalFruit.id}> 
    //                                             {lowCalFruit.name} : &nbsp;
    //                                             <b>{lowCalFruit.calorie}</b></li>);
    // const listItems2  = highCalFruits.map(highCalFruit=> <li key ={highCalFruit.id}> 
    //                                             {highCalFruit.name} : &nbsp;
    //                                             <b>{highCalFruit.calorie}</b></li>);

    const itemlist = props.items;
    const category = props.category;
    
    const listItems  = itemlist.map(item => <li key ={item.id}> 
                                                {item.name} : &nbsp;
                                                <b>{item.calorie}</b></li>);
    return(
            <> 
                <h2 className="list-categoryName">{category}</h2>
                        <ol className="list-name" > {listItems} </ol> 
                        
            </>
           )
}
export  default List

List.propTypes = {
     items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name :PropTypes.string,
                                                calorie: PropTypes.number})),
     category:PropTypes.string.isRequired
};

List.defaultProps = {
    category: "Category",
    items:[],
}