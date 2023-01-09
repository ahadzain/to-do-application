const List = require('../models/list')

function toDoRoutes(fastify,options,done){

    //read event
    fastify.get('/',(req,res)=> {
        result = List.find().lean().select("eNo event").exec(function(err,result){
            res.send(result)
        })
    })

    //add event
    fastify.post('/event', (req,res)=> {
        const {eNo} = req.body
        const {event} = req.body
        
        var event1 = new List({eNo:eNo,event:event})
        event1.save(function (err,event){
            if(err) return console.log(err);
            console.log(event1.event + ' saved to user collection');
        })
        res.code(201).send(event1)
    })

    //update event
    fastify.put('/event/:eNo',(req,res)=> {
        const {eNo} = req.params
        const {event} = req.body

        const filter = {eNo:eNo}
        const update = {event:event}

        List.findOneAndUpdate(filter,update,{new:true}, function(err,event){
            if(err){
                console.log(err);
            }else{
                res.send(`event no ${eNo} updated successfully`)
            }
        })
    })

    //delete event
    fastify.delete('/event/:eNo', (req,res)=> {
        const {eNo} = req.params

        const filter = {eNo:eNo}

        List.findOneAndRemove(filter, function(err,event){
            if(err){
                console.log(err);
            }else{
                res.send(`event number ${eNo}  is removed successfully`)
            }
        })
    })

    done()
}

module.exports = toDoRoutes