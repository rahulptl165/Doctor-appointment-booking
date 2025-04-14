import doctorModel from './../models/doctorModel.js';

const changeAvailability = async (req, res) => {
    
    try {
        
        const {docId} = req.body;
        console.log("docdata starting");
        
        const docData = await doctorModel.findById(docId);
        console.log("docdata complete");
        await doctorModel.findByIdAndUpdate(docId, {available: !docData.available});
        res.json({success:true, message: 'Availablity changed'});
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
    
}

const doctorsList = async (req, res) => {
    
    try {
        
        const doctors = await doctorModel.find({}).select(['-email', '-password']);
        res.json({success:true, doctors});
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
    
}

export {changeAvailability, doctorsList}