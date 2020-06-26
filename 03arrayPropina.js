let restaurants = [124,48,268];

function propina(total){
    if (total < 50){
        console.warn("Propina del 10%: "+(total*1.10));
    }else if (total >200){
        console.warn("Propina del 20%: "+(total*1.20));
    }else{
        console.warn("Propina del 15%: "+(total*1.15));
    }
}
propina(restaurants[0]);
propina(restaurants[1]);
propina(restaurants[2]);