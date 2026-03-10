function filter_list(l) { // ვქმნით ფუნქციას სახელად filter_list და არგუმენტად გადავცემთ l
let int=[]                // ვქმნით ცვლადს და მას ვუტოლებთ ცარიელ სიას []
for(let i=0; i<l.length; i++){  // გადავუვლით მასივს for loop ის საშუალებით
    if(typeof l[i]==='number'){ // typeof ფუნქციის საშუალებით ვარკვევთ if ში არის თუარა number
    int.push(l[i])              // push method ის საშუალებით ვამატებთ მასივის ბოლოში l[i]
    }    
}
return int                    // ვაბრუნებთ int ვცლადს
}