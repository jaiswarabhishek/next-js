import { dataPopArray } from "@/data";

export default function  handler({query:{id}},res){
   
    const filtered = dataPopArray.filter((user)=>user.id===id)
    
    if(filtered.length>0)
    res.status(200).json(filtered[0]);
    else
    res.status(404).json({message: `user having id ${id} not exist`})
}